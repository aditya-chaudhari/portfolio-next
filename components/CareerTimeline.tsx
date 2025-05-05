"use client";
import { motion } from "framer-motion";
import astronautAnim from "../public/lotties/astronaut.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false }); 

export default function CareerTimeline() {
    const timeline = [
      { year: "2018", role: "Android Intern at Lembark Solutions" },
      { year: "2020", role: "Software Developer Intern at Endurance International Group" },
      { year: "2021", role: "Full Stack Engineer at Newfold Digital" },
      { year: "2022", role: "Software Development Engineer II at Newfold Digital" },
      { year: "2023", role: "Senior Software Engineer at Newfold Digital" },
    ];
  
    return (
      <motion.div
        id="timeline"
        className="relative mt-16 z-10 bg-gradient-to-r from-indigo-800/30 to-indigo-900/10 border border-white/10 text-white rounded-2xl shadow-xl backdrop-blur-md p-8 pb-20 space-y-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Lottie Animation */}
        <div className="flex justify-center mb-5">
          <Lottie animationData={astronautAnim} loop={true} style={{ width: "250px", height: "250px" }} />
        </div>
  
        <h2 className="text-3xl font-bold text-indigo-100 tracking-wide text-center">
          Career Timeline
        </h2>
  
        <div className="relative mt-10">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 bg-indigo-500/30 h-full z-0" />
  
          <div className="space-y-16">
            {timeline.map((event, index) => {
              const isLeft = index % 2 === 0;
              const icon = event.role.includes("Intern") ? "🛰️" : "🛠️";
  
              return (
                <motion.div
                  key={index}
                  className="relative flex items-center justify-between w-full"
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Left side text */}
                  <div className={`w-1/2 px-4 ${isLeft ? "text-right" : "text-left"}`}>
                    {isLeft && (
                      <>
                        <span className="text-xl font-semibold text-indigo-100">{event.year}</span>
                        <p className="text-lg font-medium text-white mt-1 flex justify-end gap-2">
                          <span className="text-2xl">{icon}</span> {event.role}
                        </p>
                      </>
                    )}
                  </div>
  
                  {/* Dot */}
                  <div className="relative z-10">
                    <div className="w-5 h-5 rounded-full bg-yellow-400 border-4 border-white shadow-md" />
                  </div>
  
                  {/* Right side text */}
                  <div className={`w-1/2 px-4 ${!isLeft ? "text-left" : "text-right"}`}>
                    {!isLeft && (
                      <>
                        <span className="text-xl font-semibold text-indigo-100">{event.year}</span>
                        <p className="text-lg font-medium text-white mt-1 flex gap-2">
                          {event.role} <span className="text-2xl">{icon}</span>
                        </p>
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    );
  }