import * as Icon from "react-feather";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import avatarlogo from "../../../public/profile/myavatarcircle.png";

export default function AboutMe({}) {
  const oppeningEmail = () => toast("Opening Email 😊");
  return (
    <div className="bg-bgcolor dark:bg-black w-[100%] h-screen">
      <div
        id="aboutme"
        className="flex flex-col h-screen justify-center items-center font-inter border-slate-300 md:flex-row md:gap-10  lg:gap-28 "
      >
        <Image
          src={avatarlogo}
          alt="ishak sebsib avatar"
          className="my-10 w-60 lg:w-80 "
        />

        <div className="max-w-sm md:max-w-[26em]  md:border-4 md:rounded-lg md:transition md:hover:-translate-y-6 lg:max-w[40em] lg:w-[35em] ">
          <div className=" flex  justify-center items-center mx-10 my-4 font-semibold text-xl text-mediumer">
            <div className=" w-[20%] bg-mediumer h-[0.1em]" />
            <h1 className=" mx-4 font-bold">About Me</h1>
            <div className=" w-[20%] bg-mediumer h-[0.1em]" />
          </div>
          <p className="mobile my-6 mx-4 text-justify">
            Hello! My name is Ishak and I enjoy creating things that live on the
            internet. My interest in web development started back in 2018
            Fast-forward to today My Dream comes true and i work on many
            projects with my clients and My greatest strength is my ability to
            collaborate with clients and understand their needs. I take pride in
            my ability to turn complex concepts into simple and intuitive
            solutions, and I'm committed to delivering projects that exceed
            expectations. So if you're looking for a talented and dedicated
            Full-Stack Developer and UI/UX Designer, look no further. Let's work
            together to bring your vision to life. say hello{" "}
            <a
              href="mailto:ishaksebsib@gmail.com"
              className="hover:cursor-pointer"
              onClick={oppeningEmail}
            >
              @Email
            </a>
            <a href="https://t.me/darkmodeman" className="hover:cursor-pointer">
              {" "}
              @Telegram
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
