'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
// import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import { MdEmail } from 'react-icons/md';
import { useRef } from 'react';
import { Container } from '../container';
import { ChevronDown } from 'lucide-react';




export default function Hero() {
    const videoContainerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: videoContainerRef,
      offset: ["start start", "end end"],
    });
    const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

 return (
<div className="bg-background text-white">
      <motion.div
        style={{ opacity }}
        ref={videoContainerRef}
        className="absolute -top-[--header-height] left-0 h-[178vh] w-full"
      >

        <video
        src={'/images/mari.webm'}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        className={'absolute top-0 left-0 w-full h-full object-cover'}
        />
      </motion.div>
      <Container className=" relative z-10 h-[--hero-height] pb-7">
        <motion.div
          className="flex h-full flex-col items-start justify-end"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          whileInView="visible"
          exit="hidden"
          animate="hidden"
          viewport={{ amount: 0.98 }}
        >
          <div className='flex flex-col items-left justify-center'>
          <h1 className="mb-10 text-7xl font-bold md:text-8xl">
            Jacob Ong
          </h1>
          <p className="text-xl font-medium md:text-3xl mb-32">
            UX Designer | Developer
          </p>

          </div>
          <div className='flex flex-row gap-2'>
          <p className="font-thin">Learn more about me </p>
          <ChevronDown size={24} className="animate-bounce mt-1" />
          </div>

        </motion.div>
      </Container>
    </div>
  );
};