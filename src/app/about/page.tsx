'use client';

import Image from "next/image";
import { Suspense } from "react";
import AboutSkeleton from "./skeleton";
import { motion } from "framer-motion";



export default function Page() {
    
    return (
        <Suspense fallback={<AboutSkeleton />}>
        <main>
        <div className="mt-32 mx-8 mb-32 grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#0a0a0a]/50  shadow-white/10 shadow-sm rounded-xl ">
            <motion.section 
            className="col-span-1 min-h-96 bg-muted lg:ml-28 my-8"
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            exit={{ x: -1000 }}
            transition={{ 
                duration: .67,
                ease: "easeIn",
                delay:.3,
            }}>
                <Image
                    src="/images/catro.png"
                    alt="Jacob Ong"
                    width={300}
                    height={300}
                    className="rounded-full hover:sepia-[.25] justify-self-center lg:justify-self-star animate-pulse"
                />
                <h1 className="text-lg text-gray-500 mx-5 my-4 uppercase font-medium">A Little About me</h1>
                <h1 className="text-3xl text-left font-black text-gray-200 mx-5 mb-8">Hi, I&apos;m Jacob!</h1>

                <p className="mx-5 text-gray-400">
                    I am taking my bachelor&apos;s at the University of Saint Louis Tuguegarao, majoring in Computer Science.
                    My late teacher inspired me to pursue this path of my own volition, and curiosity has led me to places I thought were impossible to reach. 
                    Here I am, learning and growing, and I am excited to see where this journey will take me. I have taken an interest in creating and designing websites
                    using tools like React, Next.js, and Tailwind CSS. I also use Figma and Sketch to design my projects.
                </p>

                <p className="mx-5 mt-8 text-gray-400">
                    Outside academic activities, I write poems and essays for our school publication. I also play guitar and piano sometimes, and I love to play gacha games like Fate/Grand Order and Girls Frontline 2: Exilium. I also enjoy anime and manga, and I love to read in my free time.
                </p>

                <h1 className="text-lg text-gray-500 mx-5 my-5 uppercase font-medium">Experience</h1>
                <p className="text-md text-left font-bold text-gray-200 mx-5 mb-2">Web Developer <span className="font-thin text-xs">&#64;</span> Freelancee</p>
                <p className="mx-5 text-sm mb-4 text-gray-400">Aug, 2024 - Present</p>
                <p className="text-md text-left font-bold text-gray-200 mx-5 mb-2">Web Design and Developer Intern <span className="font-thin text-xs">&#64;</span> ScaleUp Solutions</p>
                <p className="mx-5 text-sm mb-4 text-gray-400">Jun, 2024 - Jul, 2024</p>
                <p className="text-md text-left font-bold text-gray-200 mx-5 mb-2">Chief Technology Officer <span className="font-thin text-xs">&#64;</span> Pantreat</p>
                <p className="mx-5 text-sm text-gray-400">Sep, 2023 - Present</p>
            </motion.section>
            <motion.section 
            className="col-span-1 min-h-96 bg-muted lg:ml-28 my-8"
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            exit={{ x: 1000 }}
            transition={{ 
                duration: .67,
                ease: "easeIn",
                delay: .3,
                
            }}>
             <h1 className="text-lg text-gray-500 mx-5 my-4 uppercase font-medium">Achievements</h1>
                <p className="text-md text-left font-bold text-gray-200 mx-5 mb-2">National Participant <span className="font-thin text-xs">&#64;</span> HACK4GOV Finals</p>
                <p className="mx-5 text-sm mb-4 text-gray-400">October 3, 2024</p>
                <p className="text-md text-left font-bold text-gray-200 mx-5 mb-2">Regional Champion <span className="font-thin text-xs">&#64;</span> HACK4GOV</p>
                <p className="mx-5 text-sm mb-4 text-gray-400">August 29, 2024</p>
                <p className="text-md text-left font-bold text-gray-200 mx-5 mb-2">Startup Champion <span className="font-thin text-xs">&#64;</span> iDeaTech Challenge 2023</p>
                <p className="mx-5 text-sm text-gray-400">September 20, 2023</p>
            </motion.section>
        </div>
        <footer className="flex justify-center items-center h-32 bg-white/5">
            <p className="text-sm text-gray-400">  </p>
        &copy; {new Date().getFullYear()} Jacob Ong. All rights reserved.
        </footer>
        </main>
        </Suspense>
    );
}