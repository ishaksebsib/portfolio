import * as ReactRotatingText from "react-rotating-text";
import { Link } from "react-scroll";

export default function HomePage({}) {
  return (
    <div className="bg-bgcolor dark:bg-black">
      <section
        id="home"
        className=" mobile flex flex-col h-screen gap-8 justify-center items-start font-roboto mx-24  md:mx-32 lg:mx-48 "
      >
        <h1 className="mobileh1 text-mediumer font-inter text-sm font-semibold md:text-lg  ">
          {" "}
          Hi, my name is{" "}
        </h1>
        <h1 className="mobiletitle smallerh1 text-warmer text-4xl font-bolder md:text-5xl lg:text-6xl">
          {" "}
          Ishak Sebsib.
        </h1>
        <h1 className="mobiletitle typewriter text-lighter font-inter font-bold text-3xl md:text-5xl lg:text-6xl">
          I am{" "}
          <ReactRotatingText
            items={[
              "ui/ux designer",
              "frontend developer",
              "backend developer",
              "Programmer",
            ]}
          />
        </h1>

        <p className=" smallerpw text-warmlight max-w-md my-3 font-roboto ">
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at Upstatement.
        </p>

        <Link activeClass="active" to="work" spy={true} smooth={true}>
          <button className="border p-4 border-mediumer rounded-md text-mediumer font-bold explore-button hover:text-warmer hover:border-warmer">
            Explore My Work
          </button>
        </Link>
      </section>
    </div>
  );
}
