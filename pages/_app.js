import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);
  return (
    <>
      <Head>
        <title>Loading</title>
      </Head>
      {loading ? (
        <Loading />
      ) : (
        <ThemeProvider enableSystem={true} attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      )}
    </>
  );
}

export default MyApp;
