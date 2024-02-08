import About from "@/ui/main/index/about/About";
import Happenings from "@/ui/main/index/happenings/Happenings";
import Hero from "@/ui/main/index/hero/Hero";
import Image from "next/image"

export default function Home() {
  return (
   <div className="w-full h-auto">

    <div className="w-full mt-[6rem] h-auto">
      <Hero/>
    </div>
    <div className="w-full h-auto">
      <About/>
    </div>
    <div className="w-full  h-auto">
      <Happenings />
    </div>
    <div className="w-full h-screen">

    </div>

   </div>
  );
}
