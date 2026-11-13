// Joins class names, skipping anything that isn't a non-empty string.
// Accepts `unknown` because Preact's className can also be a signal.
export const cn = (...classes: unknown[]) =>
  classes.filter((value): value is string => typeof value === "string" && value.length > 0).join(" ");
