import Link from "next/link";

export default function Footer() {
    return (
        <footer className="absolute bg-white/5 w-full p-16 ">

            <h1 className="text-white text-2xl py-5 px-8">
                Thanks for stopping by!
            </h1>

            <div className="divide-x-0 md:divide-x-2 divide-white divide-opacity-30 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="h-10  w-full px-8 py-2">
                    <h1 className="text-lg text-gray-500 mb-2 uppercase tracking-widest">Contact me  <span className="ml-2">📧</span></h1>
                    <Link href="mailto:sorianojacobong@gmail.com">sorianojacobong@gmail.com</Link>
                </div>
                {/* Connect Div */}
                <div className="h-10  w-full px-8 py-2">
                <h1 className="text-lg text-gray-500 mb-2 uppercase tracking-widest">Let&apos;s Connect<span className="ml-2">🤝</span></h1>
                <div className="flex flex-row gap-2">
                <Link
                    href="https://linkedin.com/in/jacob-ong" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-400"
                >
                    Linkedin |
                </Link>
                <Link
                    href="/docs/resume_jacob_ong.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-400"
                    download={true}
                >
                     Resume 
                </Link>
                </div>
                </div>
                {/* Last Section */}
                <div className="h-10  w-full px-8 py-2">
                    <h1 className="text-lg text-gray-500 mb-2 uppercase tracking-widest">Made by me <span className="ml-2"></span>🍵</h1>
                    <p className=" text-white">NextJS + TailwindCSS + Motion</p>
                </div>
            </div>
            <p className="mt-24 text-center font-thin">ⓒ 2025 Jacob Ong</p>
        </footer>
    );
}