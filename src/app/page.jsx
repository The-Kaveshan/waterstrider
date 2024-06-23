import Image from "next/image";
import { Hero } from "@/components/Hero";
import { Header } from "@/components/Header";
import { Team } from "@/components/Team";
import { Services } from "@/components/Services";
import { ContactUs } from "@/components/ContactUs";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Team />
      <ContactUs />
      <Footer />
    </>
  );
}
