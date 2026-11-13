// Build-time project stats from GitHub and crates.io. Every lookup is cached
// per build and resolves to `undefined` on failure, so a flaky API never
// breaks the build; rows just fall back to their static label.

const cache = new Map<string, Promise<number | undefined>>();

const fetchNumber = (url: string, pick: (json: any) => unknown, headers: HeadersInit = {}) => {
  if (!cache.has(url)) {
    cache.set(
      url,
      fetch(url, { headers: { "User-Agent": "ishak.io-build", ...headers } })
        .then((res) => (res.ok ? res.json() : undefined))
        .then((json) => {
          const value = json && pick(json);
          return typeof value === "number" ? value : undefined;
        })
        .catch(() => undefined)
    );
  }
  return cache.get(url)!;
};

const githubHeaders: HeadersInit = import.meta.env.GITHUB_TOKEN
  ? { Authorization: `Bearer ${import.meta.env.GITHUB_TOKEN}` }
  : {};

/** Stars for an `owner/name` repo. */
export const githubStars = (repo: string) =>
  fetchNumber(`https://api.github.com/repos/${repo}`, (json) => json.stargazers_count, githubHeaders);

/** All-time downloads for a crate. */
export const crateDownloads = (name: string) =>
  fetchNumber(`https://crates.io/api/v1/crates/${name}`, (json) => json.crate?.downloads);

/** 264 → "264", 6286 → "6.3K", 98696 → "99K". */
export const compactNumber = (value: number) =>
  new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(value);
