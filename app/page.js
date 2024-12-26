import Image from "next/image";
import Navbar from "./_sections/Navbar";
import Hero from "./_sections/Hero";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
    </main>
  );
}
