import Link from "next/link";

export default function Footer() {
    return (
        <footer className="absolute bg-black border-white border-t-2 border-opacity-35 text-white w-full  p-8 lg:p-16 z-[9999]">

            <h1 className=" text-2xl py-5 px-8">
                Thanks for stopping by!
            </h1>

            <div className="divide-x-0 lg:divide-x-2 divide-white divide-opacity-30 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="h-4  w-full px-8 py-2">
                    <h1 className="text-lg text-gray-500 mb-2 uppercase tracking-wide lg:tracking-widest">Contact me  <span className="ml-2">📧</span></h1>
                    <Link href="mailto:sorianojacobong@gmail.com">sorianojacobong@gmail.com</Link>
                </div>
                {/* Connect Div */}
                <div className="h-4  w-full px-8 py-2">
                <h1 className="text-lg  text-gray-500 mb-2 uppercase tracking-wide lg:tracking-widest">Let&apos;s Connect<span className="ml-2">🤝</span></h1>
                <div className="flex flex-row gap-1 flex-wrap">
                <Link
                    href="https://linkedin.com/in/jacob-ong" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className=" hover:text-gray-400"
                >
                    Linkedin |
                </Link>
                <Link
                    href="/docs/resume_jacob_ong.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className=" hover:text-gray-400"
                    download={true}
                >
                     Resume |
                </Link>
                <Link
                    href="https://github.com/Kraedal" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className=" hover:text-gray-400"
                >
                    Github 
                </Link>
                </div>
                </div>
                {/* Last Section */}
                <div className="h-4  w-full px-8 py-2">
                    <h1 className="text-lg text-gray-500 mb-2 uppercase tracking-wide lg:tracking-widest">Made using <span className="ml-2"></span>🍵</h1>
                    <p className=" ">NextJS + TailwindCSS + Motion</p>
                </div>
            </div>
            <p className="mt-24 text-center font-thin text-gray-400">ⓒ 2025 Jacob Ong | Kraedal</p>
        </footer>
    );
}