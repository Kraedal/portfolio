'use client'

import { Home, Code, Feather, Phone } from "lucide-react";
import { SiKofi } from "react-icons/si";
import Link from "next/link";
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);
    return (
        <div className="flex items-center justify-end">
            <nav className={`flex max-w-fit fixed top-6 inset-x-0 mx-auto border border-white/[0.2] rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[3000] px-5 py-5 items-center justify-center space-x-4 gap-4 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-32'}`}>
                <div>
                    <ul className="flex flex-row gap-8 my-auto">
                        <Link href="/" className="cursor-pointer transition-all duration-0 hover:bg-gradient-to-r from-[#fdfcfb] to-[#e2d1c3] hover:bg-clip-text hover:text-transparent">
                            <Home className="md:hidden" size={20} />
                            <span className="hidden md:inline">Home</span>
                        </Link>
                        <Link href="/about" className="cursor-pointer transition-all duration-0 hover:bg-gradient-to-r from-[#fdfcfb] to-[#e2d1c3] hover:bg-clip-text hover:text-transparent">
                            <Feather className="md:hidden" size={20} />
                            <span className="hidden md:inline">About</span>
                        </Link>
                        <Link href="/projects" className="cursor-pointer transition-all duration-0 hover:bg-gradient-to-r from-[#fdfcfb] to-[#e2d1c3] hover:bg-clip-text hover:text-transparent">
                            <Code className="md:hidden" size={20} />
                            <span className="hidden md:inline">Projects</span>
                        </Link>
                        <Link href="/contact" className="cursor-pointer transition-all duration-0 hover:bg-gradient-to-r from-[#fdfcfb] to-[#e2d1c3] hover:bg-clip-text hover:text-transparent">
                            <Phone className="md:hidden" size={20} />
                            <span className="hidden md:inline">Contact</span>
                        </Link>
                    </ul>
                </div>
            </nav>
            <div className={`group fixed top-10 right-6 cursor-pointer z-[3000] flex items-center transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-32'}`}>
        <a 
            href="https://ko-fi.com/kraedal" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xl md:text-4xl hover:text-gray-400 transition-colors animate-pulse duration-100"
          >
        <SiKofi size={28} />
        </a>
        <span className="absolute hidden group-hover:block -bottom-8 right-0 bg-[#e2d1c3]/10 backdrop-blur-sm text-sm px-2 py-1 rounded-md whitespace-nowrap">
            Buy me a Coffee ☕
        </span>
        </div>
        </div>

    );
}
