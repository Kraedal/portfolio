'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Snow from './components/snow';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.6
    }
  }
};

const item = {
  hidden: { y: 400, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export default function Home() {

  return (
    <main>
      <Snow />
      <motion.section 
        className="h-screen flex flex-col justify-center text-center"
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ 
          type: "spring",
          damping: 20,
          stiffness: 100,
          duration: 0.8,
          ease: "easeOut"
        }}
      >
      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5, ease: "linear" }}
        className="text-7xl font-thin md:text-8xl hover:sepia-[.25]"
      >
        Jacob Ong
      </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
          className="text-sm font-extralight -mt-1 md:text-lg"
        >
          Computer Science Student @ USLT 
        </motion.p>
        {/* Icon list */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-row justify-center mt-4 md:mt-8 gap-4"
        >
          <motion.a 
            variants={item}
            href="https://github.com/kraedal" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl md:text-4xl hover:text-gray-400 hover:mx-4 hover:scale-150 transition-all duration-500"
          >
            <FaGithub className='hover:scale-150 duration-500' />
          </motion.a>
          <motion.a 
            variants={item}
            href="https://linkedin.com/in/jacob-ong" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl md:text-4xl hover:text-gray-400 hover:mx-4 hover:scale-150 transition-all duration-500"
          >
            <FaLinkedin className='hover:scale-150 duration-500' />
          </motion.a>
          <motion.a 
            variants={item}
            href="mailto:sorianojacobong@gmail.com"
            className="text-2xl md:text-4xl hover:text-gray-400 hover:mx-4  transition-all duration-500"
          >
            <MdEmail className='hover:scale-150 duration-500' />
          </motion.a>
        </motion.div>
      </motion.section>
      <section className='h-screen flex flex-col justify-center text-center'>
        <h1>HELLO</h1>
      </section>
    </main>
  );
}
// bg-gradient-to-r from-[#fdfcfb] to-[#e2d1c3] bg-clip-text text-transparent --> color gradient