import NavBar from "@/components/base/NavBar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <NavBar />
      {/* Navbar */}
      <main className="w-full h-[1000vh]">
        {/*Main Gradient Background */}
        <section className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          {/*Background pink gradient circle*/}
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>

          {/* Hero Section */}
          <Hero />
        </section>
      </main>
    </>
  );
}
