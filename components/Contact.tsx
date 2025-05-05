import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="text-white py-20 bg-black text-center">
      <h2 className="text-3xl font-bold mb-6">📬 Get In Touch</h2>
      <p className="text-indigo-300 mb-4">Reach out via email or LinkedIn to discuss opportunities, collaborations, or just to say hi!</p>
      <div className="flex flex-col sm:flex-row justify-center gap-6 text-indigo-300">
        <a href="mailto:hello@adityachaudhari.com" className="hover:text-indigo-500 flex items-center justify-center">
          <FaEnvelope size={30} />
        </a>
        <a href="https://linkedin.com/in/adityachaudhari" target="_blank" className="hover:text-indigo-500 flex items-center justify-center">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/aditya-chaudhari" target="_blank" className="hover:text-indigo-500 flex items-center justify-center">
          <FaGithub size={30} />
        </a>
      </div>
    </section>
  );
}