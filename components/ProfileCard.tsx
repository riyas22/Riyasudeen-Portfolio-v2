import Image from 'next/image';

export default function ProfileCard() {
  return (
    <div className="bento-card flex flex-col items-center justify-center text-center relative group row-span-2 p-0 overflow-hidden bg-slate-900 min-h-[300px] md:min-h-full">
      {/* Ensure profile.jpg is in public folder */}
      <Image 
        src="/profile.jpg" 
        alt="Riyasudeen Farook" 
        fill
        className="object-cover opacity-60 group-hover:opacity-80 transition duration-500 scale-105 group-hover:scale-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
      
      <div className="relative z-10 mt-auto mb-8 w-full px-6">
        <h2 className="text-2xl font-bold text-white mb-1">Riyasudeen Farook</h2>
        <p className="text-accent font-medium mb-4">IT Operations Manager</p>
        <div className="flex flex-col gap-2">
          <div className="bg-white/10 backdrop-blur-md border border-white/10 p-2 rounded-lg text-xs text-white font-medium flex items-center justify-center gap-2">
            <i className="fas fa-shield-halved text-green-400"></i> Cyber Security First
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/10 p-2 rounded-lg text-xs text-white font-medium flex items-center justify-center gap-2">
            <i className="fas fa-cloud text-blue-400"></i> Hybrid Cloud Expert
          </div>
        </div>
      </div>
    </div>
  );
}