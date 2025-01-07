'use client'

import { Container } from "../components/container";
import { motion } from "framer-motion";
import { FadeIn } from "../components/fade";

export default function Page() {
    return (
        <main>

            <Container className="flex items-center justify-center h-screen">
                <FadeIn>
                <motion.h1
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="font-thin text-lg uppercase"
                >
                    🚧 Under Construction 🚧 
                </motion.h1>
                </FadeIn>
                
            </Container>
        </main>
    );
};