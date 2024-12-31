'use client'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';



// import Snow from "./components/snow";
// import { useState, useEffect } from "react";

export default function Home() {
  // const [isMobile, setIsMobile] = useState(true);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth > 768); // 768px is Tailwind's md breakpoint
  //   };
    
  //   handleResize();
  //   window.addEventListener('resize', handleResize);
    
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  return (
    <main>
      {/* {isMobile && <Snow />} */}
      <section className="h-screen flex flex-col justify-center text-center">
        <h1 className="text-6xl font-thin md:text-8xl ">Jacob Ong</h1>
        <p className="text-xs font-extralight mt-2 md:text-lg bg-gradient-to-r from-[#fdfcfb] to-[#e2d1c3] bg-clip-text text-transparent">
          Computer Science Student @ USLT 
        </p>
        {/* Icon list */}
        <div className="flex flex-row justify-center mt-2 md:mt-8 gap-4">
        <a 
            href="https://github.com/kraedal" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xl md:text-4xl hover:text-gray-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a 
            href="https://linkedin.com/in/jacob-ong" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xl md:text-4xl hover:text-gray-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a 
            href="mailto:sorianojacobong@gmail.com"
            className="text-xl md:text-4xl hover:text-gray-400 transition-colors"
          >
            <MdEmail />
          </a>
        </div>
      </section>
    </main>
  );
}