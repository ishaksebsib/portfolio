import Link from "next/link";
import * as Icon from "react-feather";
export default function WorkPage({}) {
  return (
    <div
      id="work"
      className="bg-bgcolor font-inter mt-8 my-10 grid gap-4 md:grid-cols-2 md:gap-6  items-center "
    >
      <div className=" mx-16 my-6 md:col-span-2 ">
        <h1 className="text-2xl smallerwork text-mediumer md:text-4xl  md:ml-4">
          RECENT WORKS
        </h1>
        <p className="text-4xl my-3 smallerwork text-slate-500 font-light md:max-w-4xl md:ml-4 md:text-5xl md:text-left md:font-thin">
          Here are some of my projects i did lately. Feel free to check them
          out.
        </p>
      </div>
      <div className=" smallerwidth w-[80%] mx-16 rounded-lg transition hover:-translate-y-2 md:mx-0 md:w-auto md:ml-20">
        <Link href={""} className="project1 relative">
          <img src="/projects/1.jpg" className=" rounded-md" />
          <h1 className=" carder hidden justify-center items-center absolute top-0 bottom-0 bg-[#00000080] text-white w-[100%] text-center">
            Netfilix Clone by me
          </h1>
        </Link>
      </div>
      <div className="smallerwidth w-[80%] mx-16 rounded-lg transition hover:-translate-y-2 md:mx-0 md:w-auto md:mr-20">
        <Link href={""} className="project1 relative">
          <img src="/projects/2.jpg" className=" rounded-md" />
          <h1 className=" carder hidden justify-center items-center absolute top-0 bottom-0 bg-[#00000080] text-white w-[100%] text-center">
            Netfilix Clone by me
          </h1>
        </Link>
      </div>
      <div className=" smallerwidth w-[80%] mx-16 rounded-lg transition hover:-translate-y-2 md:mx-0 md:w-auto md:ml-20">
        <Link href={""} className="project1 relative">
          <img src="/projects/2.jpg" className=" rounded-md" />
          <h1 className=" carder hidden justify-center items-center absolute top-0 bottom-0 bg-[#00000080] text-white w-[100%] text-center">
            Netfilix Clone by me
          </h1>
        </Link>
      </div>
      <div className=" smallerwidth w-[80%] mx-16 rounded-lg transition hover:-translate-y-2 md:mx-0 md:w-auto md:mr-20">
        <Link href={""} className="project1 relative">
          <img src="/projects/1.jpg" className=" rounded-md" />
          <h1 className=" carder hidden justify-center items-center absolute top-0 bottom-0 bg-[#00000080] text-white w-[100%] text-center">
            Netfilix Clone by me
          </h1>
        </Link>
      </div>
      <div className=" smallerwidth w-[80%] mx-16 rounded-lg transition hover:-translate-y-2 md:mx-0 md:w-auto md:ml-20">
        <Link href={""} className="project1 relative">
          <img src="/projects/1.jpg" className=" rounded-md" />
          <h1 className=" carder hidden justify-center items-center absolute top-0 bottom-0 bg-[#00000080] text-white w-[100%] text-center">
            Netfilix Clone by me
          </h1>
        </Link>
      </div>
      <div className=" smallerwidth w-[80%] mx-16 rounded-lg transition hover:-translate-y-2 md:mx-0 md:w-auto md:mr-20">
        <Link href={""} className="project1 relative">
          <img src="/projects/2.jpg" className=" rounded-md" />
          <h1 className=" carder hidden justify-center items-center absolute top-0 bottom-0 bg-[#00000080] text-white w-[100%] text-center">
            Netfilix Clone by me
          </h1>
        </Link>
      </div>

      {/* main end  */}
    </div>
  );
}
