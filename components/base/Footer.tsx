import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-12 bg-slate-100">
      <div className=" bg-bgcolor dark:bg-black flex items-center justify-center">
        <div className="flex justify-center items-center my-4 font-inter text-sm text-warmer hover:text-mediumer">
          <Link href={"#"} className="font-rob text-lightdarkfont">
            Designed & Built by 
            <span
							className="font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
						> Ishak Sebsib</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
