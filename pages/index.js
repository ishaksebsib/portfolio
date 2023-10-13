import { useEffect, useState } from "react";
import Head from "next/head";
import Loading from "../components/Loading";
import NavBar from "../components/NavBar";
import SocailMedias from "../components/SocailMedias";
// import UpAndDownArrow from "../components/UpAndDownArrow";
import HomePage from "../components/pages/home/HomePage";
import WorkPage from "../components/pages/home/WorkPage";
import AboutMe from "../components/pages/home/AboutMe";
import GetInTouch from "../components/pages/home/GetInTouch";
import Footer from "../components/Footer";
import Skills from "../components/pages/home/Skills";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useState;

  useEffect(() => {
    // Simulate a delay to showcase the loading screen
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout); // Cleanup the timeout on unmount
  }, []);

  return (
    <>
      {loading && <Loading />}

      {!loading && (
        <div className="fitscreen">
          <div className=" bg-bgcolor w-full ">
            <NavBar />
            <SocailMedias />
            <HomePage />
            <WorkPage />
            <Skills />
            <AboutMe />
            <GetInTouch />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}
