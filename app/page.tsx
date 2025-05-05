"use client";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import CareerTimeline from "@/components/CareerTimeline";
import Projects from "@/components/Projects";
import Interests from "@/components/Interests";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Aditya Chaudhari | Portfolio</title>
        <meta
          name="description"
          content="Senior Software Engineer portfolio showcasing projects, skills, and career timeline."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-black min-h-screen relative">
        <Navbar />
        <Hero />
        <Skills />
        <CareerTimeline />
        <Projects />
        <Interests />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
