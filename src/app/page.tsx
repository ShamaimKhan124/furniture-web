import Image from "next/image";
import Contact from '../components/contact'
import Navbar from '../components/Navbar'
import Hero from "@/components/Hero";
import Subhero from "@/components/hero2";
import Products from "@/components/Products";
import Footer from "@/components/Footer";
import Slide from "@/components/Slide";

export default function Home() {
  return (
    <div>
      
    <Navbar />
    <Hero/>
    <Subhero/>
    <Products/>
      
      
      <Slide />
      <Contact/>
      <Footer/>
      
    </div>
  )
}