import Link from "next/link";

export default function Footer({}) {
  return (
    <div className=" flex justify-center items-center my-4 font-inter text-sm text-warmer hover:text-mediumer">
      <Link href={""}>Designed & Built by Ishak Sebsib</Link>
    </div>
  );
}
