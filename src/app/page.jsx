import Image from "next/image";
import { Hero } from "@/components/Hero";
import { Header } from "@/components/Header";
import { PrimaryFeatures } from "@/components/PrimaryFeatures";
import { TheTeam } from "@/components/TheTeam";
import { ContactUs } from "@/components/ContactUs";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <PrimaryFeatures />
      <TheTeam />
      <ContactUs />
      <Footer />
    </>
  );
}
