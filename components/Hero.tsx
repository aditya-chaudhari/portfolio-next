"use client"; // This marks the file for client-side only

import { motion } from "framer-motion";
import dynamic from "next/dynamic"; // Import dynamic for client-side loading
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; // Import icons

const Lottie = dynamic(() => import("lottie-react"), { ssr: false }); 

import rocketAnim from "../public/lotties/rocket.json";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white text-center px-6 bg-black bg-[url('/stars-bg.svg')] bg-cover bg-center bg-fixed relative overflow-hidden">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: [20, 0, 20], opacity: 1 }}
        transition={{ duration: 3, repeat: Infinity }}
        className="z-10 w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] drop-shadow-lg"
      >
        <Lottie
          animationData={rocketAnim}
          loop
          className="w-full h-full"
          style={{ filter: "drop-shadow(0 0 10px rgba(129, 140, 248, 0.6))" }} // Indigo glow
        />
      </motion.div>

      <motion.h1
        className="text-4xl md:text-6xl font-extrabold leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Aditya Chaudhari
      </motion.h1>

      <motion.p
        className="mt-4 text-xl md:text-2xl text-indigo-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        Senior Software Engineer 🚀 | Explorer of the Digital Galaxy
      </motion.p>

      <motion.p
        className="mt-2 max-w-2xl text-indigo-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        Passionate software engineer with a proven track record in driving business success through innovative tech solutions. Led major brand unification saving over $25M, improved build times by 75%, and optimized infrastructure for scalability and cost-efficiency.
        <br />
        <span className="text-indigo-400">
          Worked with brands like Bluehost, HostGator, Network Solutions, Register.com, Domain.com, and BigRock.
        </span>
      </motion.p>

      <motion.div
        className="mt-6 flex gap-6 text-indigo-300 text-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <a href="https://linkedin.com/in/adityachaudhari" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com/aditya-chaudhari" target="_blank">
          <FaGithub />
        </a>
        <a href="mailto:hello@adityachaudhari.com">
          <FaEnvelope />
        </a>
      </motion.div>

      <a
        href="/resume.pdf"
        target="_blank"
        className="mt-6 px-6 py-3 text-indigo-300 border border-indigo-400 rounded-full hover:bg-indigo-700 hover:text-white transition"
      >
        📄 View Resume
      </a>

      <div className="absolute bottom-6 animate-bounce text-indigo-400">
        ↓
      </div>
    </section>
  );
}
