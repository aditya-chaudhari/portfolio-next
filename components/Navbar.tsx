export default function Navbar() {
    return (
      <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md text-white z-50 shadow-md">
        <ul className="flex justify-center gap-6 py-4 text-sm md:text-base">
          {["Skills", "Timeline", "Projects", "Reading", "Contact"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-indigo-300">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
  