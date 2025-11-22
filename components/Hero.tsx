export default function Hero() {
  return (
    <div className="bento-card col-span-2 row-span-2 justify-center bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-white/5 rounded-3xl p-8 backdrop-blur-xl">
      <div className="mb-6">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold border border-blue-500/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Based in Riyadh, KSA 🇸🇦
        </span>
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
        Strategic IT Leadership for <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-blue-400 to-purple-500">Vision 2030</span>
      </h1>
      <p className="text-lg text-[#94a3b8] mb-8 max-w-xl leading-relaxed">
        Bridging the gap between technical engineering and business strategy. I lead high-performing teams to build resilient Nutanix infrastructure, automate workflows, and secure enterprise assets.
      </p>
      <div className="flex flex-wrap gap-4 mt-auto">
        {/* UPDATED BUTTON: Points to /cv.pdf */}
        <a 
          href="/cv.pdf" 
          download="Riyasudeen_Farook_CV.pdf"
          className="group bg-[#38bdf8] text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-sky-300 transition flex items-center gap-2 shadow-lg shadow-sky-500/20"
        >
          <i className="fas fa-file-arrow-down group-hover:animate-bounce"></i> Download CV
        </a>
        <a href="#projects" className="bg-slate-700/50 text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-700 transition border border-white/10 flex items-center gap-2">
          View Case Studies <i className="fas fa-arrow-down text-xs"></i>
        </a>
      </div>
    </div>
  );
}