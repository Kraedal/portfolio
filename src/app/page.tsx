
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Home() {

  return (
    <main>
      <section className="h-screen flex flex-col justify-center text-center">
        <h1 className="text-7xl font-thin md:text-8xl hover:sepia-[.25]">Jacob Ong</h1>
        <p className="text-sm font-extralight -mt-1 md:text-lg">
          Computer Science Student @ USLT 
        </p>
        {/* Icon list */}
        <div className="flex flex-row justify-center mt-4 md:mt-8 gap-4">
        <a 
            href="https://github.com/kraedal" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl md:text-4xl hover:text-gray-400 hover:mx-4 transition-all duration-500"
          >
            <FaGithub />
          </a>
          <a 
            href="https://linkedin.com/in/jacob-ong" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl md:text-4xl hover:text-gray-400 hover:mx-4 transition-all duration-500"
          >
            <FaLinkedin />
          </a>
          <a 
            href="mailto:sorianojacobong@gmail.com"
            className="text-2xl md:text-4xl hover:text-gray-400 hover:mx-4 transition-all duration-500"
          >
            <MdEmail />
          </a>
        </div>
      </section>
    </main>
  );
}
// bg-gradient-to-r from-[#fdfcfb] to-[#e2d1c3] bg-clip-text text-transparent --> color gradient