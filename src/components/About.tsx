import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-8 flex flex-col font-mono text-sm md:text-base">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white flex items-center gap-4">
          <span className="text-[#8ab4f8]">~/</span>About
          <div className="flex-1 h-px bg-gradient-to-r from-[#333] to-transparent ml-4"></div>
      </h2>
      
      <div className="flex flex-col bg-[#0a0a0a] rounded-xl border border-[#333] shadow-lg overflow-hidden max-w-5xl mx-auto w-full group">
        {/* Mac Title Bar */}
        <div className="flex items-center bg-[#1a1a1a] border-b border-[#333] px-4 py-3 shrink-0">
            <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="w-full text-center text-[#777] text-[10px] font-sans tracking-widest pl-[-40px]">
                bash: cat profile.txt
            </div>
        </div>

        <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start tracking-wide">
          {/* Real Image */}
          <div className="shrink-0 flex flex-col items-center">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-xl border border-[#333] p-2 bg-[#111] overflow-hidden shadow-2xl relative group-hover:border-[#4af626] transition-colors duration-500">
              <img 
                src="/sreedev.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover rounded-lg filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center pb-4 sm:hidden">
                 <span className="text-[#4af626] font-bold">@sreedev</span>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-[#bfbfbf] flex-1 leading-relaxed text-base md:text-lg">
            <div className="text-[#4af626] font-bold text-xl md:text-2xl mb-6 tracking-tight">&gt; _{" { WHOAMI }"}</div>
            <p>
              I am a second-year <span className="text-white font-bold">B.Tech Computer Science and AI student</span> at Providence College of Engineering with a passion for building functional, intelligent, and aesthetically pleasing digital solutions.
            </p>
            <p>
              My expertise spans across Python, Web Development, and Mobile App Development, where I focus on creating seamless user experiences—from weather forecast platforms to mobile applications.
            </p>
            <p>
              Beyond the code, I am the Founder of{" "}
              <Link
                href="https://topviewframes.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8ab4f8] font-bold hover:text-[#4af626] hover:underline transition-colors cursor-pointer"
              >
                @topviewframes
              </Link>
              , a venture where I merge my technical background with my eye for visual storytelling. I&apos;m constantly looking for ways to integrate AI-driven concepts into real-world applications and thrive at the intersection of logic and creativity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
