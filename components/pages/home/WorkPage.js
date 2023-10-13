import Link from "next/link";
import * as Icon from "react-feather";
import Image from "next/image";

// local images
import project1 from "../../../public/projects/1.jpg";
import project2 from "../../../public/projects/2.png";
import project3 from "../../../public/projects/3.jpg";
import project4 from "../../../public/projects/4.png";
import project5 from "../../../public/projects/5.png";
import project6 from "../../../public/projects/6.png";

export default function WorkPage({}) {
  return (
    <div className="bg-bgcolor dark:bg-black">
      <div className="flex justify-center items-center md:mx-24 lg:mx-32">
        <div
          id="work"
          className="font-inter mt-8 mb-10 grid gap-4 md:grid-cols-2 md:gap-6  items-center "
        >
          <div className="mpj mx-16 my-6 md:col-span-2 md:mx-0">
            <h1 className="mobilepjttitle text-2xl smallerwork text-mediumer md:text-4xl ">
              RECENT WORKS
            </h1>
            <p className="mobilepjttitle text-4xl my-3 smallerwork text-slate-500 font-light md:max-w-4xl md:text-5xl md:text-left md:font-thin">
              Here are some of my projects i did lately. Feel free to check them
              out.
            </p>
          </div>
          <div className="mobile w-[80%] mx-16  rounded-lg transition hover:-translate-y-2 md:mx-0 md:w-auto ">
            <Link
              href={"https://shop-isotop.vercel.app/"}
              className="project1 relative"
            >
              <Image
                src={project1}
                alt="sopping app project image "
                className=" rounded-md"
              />
              <h1 className=" carder hidden justify-center items-center absolute top-0 bottom-0 bg-[#000000a2] text-white w-[100%] text-center text-sm">
                clothe shopping app, built with Next.js, Firebase, Tailwind CSS,
                and more. with features like authentication,cart,wishlist and a
                beautifully designed interface optimized for any device
              </h1>
            </Link>
          </div>
          <div className="mobile w-[80%] mx-16 rounded-lg transition hover:-translate-y-2 md:mx-0 md:w-auto ">
            <Link
              href={"https://islamic-library.vercel.app/"}
              className="project1 relative"
            >
              <Image
                src={project2}
                alt="audio lib app project image "
                className=" rounded-md"
              />

              <h1 className=" carder hidden justify-center items-center absolute top-0 bottom-0 bg-[#000000a2] text-white w-[100%] text-center">
                audio library, packed with high-quality islamic sound clips
                Experience fast performance and a user-friendly interface. Start
                Click to explore.
              </h1>
            </Link>
          </div>
          <div className="mobile w-[80%] mx-16 rounded-lg transition hover:-translate-y-2 md:mx-0 md:w-auto ">
            <Link
              href={"https://dev-t0.vercel.app/"}
              className="project1 relative"
            >
              <Image
                src={project3}
                alt="devto clone project image "
                className=" rounded-md"
              />

              <h1 className=" carder hidden justify-center items-center absolute top-0 bottom-0 bg-[#000000a2] text-white w-[100%] text-center">
                social platform for developers, designed to connect and empower
                the tech community. With features inspired by dev.to Click to
                explore
              </h1>
            </Link>
          </div>
          <div className="mobile w-[80%] mx-16 rounded-lg transition hover:-translate-y-2 md:mx-0 md:w-auto ">
            <Link
              href={"https://live-cryptocurrency-data.vercel.app/"}
              className="project1 relative"
            >
              <Image
                src={project4}
                alt="crpto app project image "
                className=" rounded-md"
              />
              <h1 className=" carder hidden justify-center items-center absolute top-0 bottom-0 bg-[#000000a2] text-white w-[100%] text-center text-sm">
                web app for cryptocurrency traders and investors. With real-time
                market data from the Binance API, this website offers a complete
                picture of the cryptocurrency markets, all in one place Click to
                explore
              </h1>
            </Link>
          </div>
          <div className="mobile w-[80%] mx-16 rounded-lg transition hover:-translate-y-2 md:mx-0 md:w-auto ">
            <Link
              href={
                "https://www.figma.com/file/suXMiAXoOYUjbLeZL404UZ/Bete?node-id=0%3A1&t=GoUyloAN8A5EcviZ-1"
              }
              className="project1 relative"
            >
              <Image
                src={project5}
                alt="Ui/ux project image "
                className=" rounded-md"
              />

              <h1 className=" carder hidden justify-center items-center absolute top-0 bottom-0 bg-[#000000a2] text-white w-[100%] text-center">
                Rental website UI/UX Design using Figma Click to explore
              </h1>
            </Link>
          </div>
          <div className="mobile w-[80%] mx-16 rounded-lg transition hover:-translate-y-2 md:mx-0 md:w-auto ">
            <Link
              href={
                "https://www.figma.com/file/K8pzrxpVDo2ijz8jigUCqA/fitness-app-ui?node-id=2%3A154&t=GoUyloAN8A5EcviZ-1"
              }
              className="project1 relative"
            >
              <Image
                src={project6}
                alt="ui/ux project image "
                className=" rounded-md"
              />

              <h1 className=" carder hidden justify-center items-center absolute top-0 bottom-0 bg-[#000000a2] text-white w-[100%] text-center">
                Fitness Mobile app UI/UX Design using Figma Click to explore
              </h1>
            </Link>
          </div>

          {/* main end  */}
        </div>
      </div>
    </div>
  );
}
