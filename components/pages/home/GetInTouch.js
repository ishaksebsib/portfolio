import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

export default function GetInTouch({}) {
  const oppeningEmail = () => toast("Opening Email 😊");

  return (
    <div
      id="getintouch"
      className="bg-bgcolor dark:bg-black h-screen  flex flex-col gap-8 items-center justify-center font-inter md:gap-12 lg:gap-14"
    >
      <h1 className=" font-bolder text-4xl text-mediumer md:text-5xl lg:text-6xl">
        Get In Touch
      </h1>
      <p className="mobile max-w-sm text-center md:max-w-lg md:text-lg lg:text-xl">
        Although I’m currently looking for new opportunities, my inbox is always
        open. Whether you have a Project or just want to say hi, I'm ready get
        back to you!
      </p>
      <Link
        href={"mailto:ishaksebsib@gmail.com"}
        onClick={oppeningEmail}
        className="border-2 py-3 px-10  border-mediumer rounded-lg hover:bg-mediumer hover:border-white hover:text-white"
      >
        Say Hello
      </Link>
    </div>
  );
}
