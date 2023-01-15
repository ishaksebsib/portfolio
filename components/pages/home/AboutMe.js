import * as Icon from "react-feather";

export default function AboutMe({}) {
  return (
    <div
      id="aboutme"
      className="flex flex-col h-screen justify-center items-center bg-bgcolor font-inter md:flex-row md:gap-10  lg:gap-28 "
    >
      <img
        src="/profile/myavatarcircle.png"
        alt="profile photo"
        className="my-10 w-60 lg:w-80 "
      />

      <div className="max-w-sm md:max-w-[26em] md:border-4 md:rounded-lg md:transition md:hover:-translate-y-6 lg:max-w[40em] lg:w-[35em] ">
        <div className=" flex  justify-center items-center mx-10 my-4 font-semibold text-xl text-mediumer">
          <div className=" w-[20%] bg-mediumer h-[0.1em]" />
          <h1 className=" mx-4 font-bold">About Me</h1>
          <div className=" w-[20%] bg-mediumer h-[0.1em]" />
        </div>
        <p className="my-6 mx-4 text-justify">
          Hello! My name is Brittany and I enjoy creating things that live on
          the internet. My interest in web development started back in 2012 when
          I decided to try editing custom Tumblr themes — turns out hacking
          together a custom reblog button taught me a lot about HTML & CSS!
          Fast-forward to today, and I’ve had the privilege of working at an
          advertising agency, a start-up, a huge corporation, and a student-led
          design studio. My main focus these days is building accessible,
          inclusive products and digital experiences at Upstatement for a
          variety of clients.
        </p>
      </div>
    </div>
  );
}
