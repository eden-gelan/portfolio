import Cursor from "@/components/Cusrsor";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Project from "@/components/Projects";
import MobileApp from "@/components/mobileApp";

export default function page() {
  return (
    <div className=" ">
      <Header />
      {/* <Cursor /> */}
      <Hero />
      <Project/>
      <MobileApp/>
    </div>
  )
}
