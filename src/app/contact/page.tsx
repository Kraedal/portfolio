'use client'
import { motion } from "framer-motion";

export default function Page() {
    return (
        <main>
            <motion.section 
                className="h-screen flex flex-col justify-center text-center"
                initial={{ y: -1000 }}
                animate={{ y: 0 }}
                transition={{ 
                    duration: 0.8,
                    ease: "easeOut"
                }}
            >
                <motion.h1
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-4xl font-medium"
                >
                    🚧 Under Construction 🚧 
                </motion.h1>
            </motion.section>
        </main>
    );
};