import { Home, Code, Flag, Phone } from "lucide-react";
import { SiKofi } from "react-icons/si";
export default function Navbar() {
    return (
        <div className="flex items-center justify-end">
        <nav className="flex max-w-fit fixed top-6 inset-x-0 mx-auto border border-white/[0.2] rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[3000] px-5 py-5 items-center justify-center space-x-4 gap-4">
            <div>
                <ul className="flex flex-row gap-8 my-auto">
                    <li className="cursor-pointer transition-all duration-300 hover:bg-gradient-to-r from-[#fdfcfb] to-[#e2d1c3] hover:bg-clip-text hover:text-transparent">
                        <Home className="md:hidden" size={20} />
                        <span className="hidden md:inline">Home</span>
                    </li>
                    <li className="cursor-pointer transition-all duration-300 hover:bg-gradient-to-r from-[#fdfcfb] to-[#e2d1c3] hover:bg-clip-text hover:text-transparent">
                        <Code className="md:hidden" size={20} />
                        <span className="hidden md:inline">Projects</span>
                    </li>
                    <li className="cursor-pointer transition-all duration-300 hover:bg-gradient-to-r from-[#fdfcfb] to-[#e2d1c3] hover:bg-clip-text hover:text-transparent">
                        <Flag className="md:hidden" size={20} />
                        <span className="hidden md:inline">Work</span>
                    </li>
                    <li className="cursor-pointer transition-all duration-300 hover:bg-gradient-to-r from-[#fdfcfb] to-[#e2d1c3] hover:bg-clip-text hover:text-transparent">
                        <Phone className="md:hidden" size={20} />
                        <span className="hidden md:inline">Contact</span>
                    </li>
                </ul>
                
            </div>
           
        </nav>
        <div className="group fixed top-10 right-6 cursor-pointer z-[3000] flex items-center">
        <a 
            href="https://ko-fi.com/ceino" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xl md:text-4xl hover:text-gray-400 transition-colors"
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
