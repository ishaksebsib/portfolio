import Link from "next/link";

export default function Footer({}) {
  return (
    <div className=" bg-bgcolor dark:bg-black flex items-center justify-center">
      <div className="flex justify-center items-center my-4 font-inter text-sm text-warmer hover:text-mediumer">
        <Link href={""}>Designed & Built by Ishak Sebsib</Link>
      </div>
    </div>
  );
}
