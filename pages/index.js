import NavBar from "../components/NavBar";
import SocailMedias from "../components/SocailMedias";
import UpAndDownArrow from "../components/UpAndDownArrow";
import HomePage from "../components/pages/home/HomePage";
import WorkPage from "../components/pages/home/WorkPage";
import AboutMe from "../components/pages/home/AboutMe";
import GetInTouch from "../components/pages/home/GetInTouch";
import Footer from "../components/Footer";
import Skills from "../components/pages/home/Skills";

export default function Home() {
  return (
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
  );
}
