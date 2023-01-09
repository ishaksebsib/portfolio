import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import * as ReactRotatingText from "react-rotating-text";

export default function Home() {
  return (
    <div className=" bg-bgcolor w-full ">
      {/* 
                NAV BAR
       */}

      <nav className="flex justify-between items-center mx-10 py-5">
        <div>
          <Image src={"./n1.svg"} width={50} height={50} alt="logo" />
        </div>

        {/* SIDE BAR MENU  */}

        <div className=" text-warmer items-center hidden md:flex md:gap-10 font-roboto text-base ">
          <Link
            href={"/"}
            className=" hover:border-b-2 border-warmer hover:text-lighter"
          >
            About
          </Link>
          <Link
            href={"/"}
            className="hover:border-b-2 border-warmer hover:text-lighter"
          >
            Experience
          </Link>
          <Link
            href={"/"}
            className="hover:border-b-2 border-warmer hover:text-lighter"
          >
            Work
          </Link>
          <Link
            href={"/"}
            className="hover:border-b-2 border-warmer hover:text-lighter"
          >
            Contact
          </Link>
        </div>
      </nav>

      {/*
             CONTENT  SECTION 
         
      */}
      <section className="flex flex-col gap-8 justify-center items-start font-roboto mx-24 my-16 md:mx-32 md:my-28 lg:mx-64">
        <h1 className=" text-mediumer font-inter text-sm font-semibold md:text-lg  ">
          {" "}
          Hi, my name is{" "}
        </h1>
        <h1 className="text-warmer text-4xl font-bolder md:text-5xl lg:text-6xl">
          {" "}
          Ishak Sebsib.
        </h1>
        <h1 className="blinking-cursor text-lighter font-inter font-bold text-3xl md:text-5xl lg:text-6xl">
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

        <p className="text-warmlight max-w-md my-3 font-roboto ">
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at Upstatement.
        </p>

        <button className="border p-4 border-mediumer rounded-md text-mediumer font-bold explore-button hover:text-warmer hover:border-warmer">
          Explore My Work
        </button>
      </section>

      {/* SOCIAL SHARING BAR  */}

      <div className=" hidden md:flex md:flex-col md:items-center md:gap-4 md:fixed md:left-0  md:px-10 md:top-2/3">
        <Link href={"/"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-send stroke-warmlight transition-transform hover:stroke-mediumer hover:-translate-y-1"
          >
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </Link>

        <Link href={"/"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-github stroke-warmlight transition-transform hover:stroke-mediumer hover:-translate-y-1"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </Link>

        <Link href={"/"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-instagram stroke-warmlight transition-transform hover:stroke-mediumer hover:-translate-y-1"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </Link>

        <Link href={"/"} className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-mail stroke-warmlight transition-transform hover:stroke-mediumer hover:-translate-y-1 "
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </Link>

        <div className=" w-0.5 h-28 bg-warmlight"></div>

        {/* END ... SOCIAL SHARING BAR  */}

        {/* ARROW UP AND DOWN  */}

        <div className="fixed right-14 flex flex-col gap-36">
          <Link href={"/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-arrow-up  stroke-warmlight transition-transform hover:stroke-mediumer hover:-translate-y-1"
            >
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </Link>

          <Link href={"/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-arrow-down stroke-warmlight transition-transform hover:stroke-mediumer hover:translate-y-1"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </Link>
        </div>

        {/*  END ...ARROW UP AND DOWN  */}
      </div>

      {/* end of main */}
    </div>
  );
}
