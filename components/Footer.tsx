export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10 bg-slate-900/50"> {/* Reduced mt-20 to mt-10 */}
      <div className="max-w-7xl mx-auto px-6 py-8"> {/* Reduced py-12 to py-8 */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-8 mb-8"> {/* Reduced gap-16 to gap-8 and mb-12 to mb-8 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <i className="fas fa-code text-[#38bdf8] text-xl"></i>
              <h3 className="text-xl font-bold text-white">Riyasudeen Farook</h3>
            </div>
            <p className="text-[#94a3b8] text-sm leading-relaxed max-w-lg">
              IT Operations Manager specializing in Infrastructure, Cloud, Systems and Security. Based in Riyadh, Saudi Arabia.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-[#94a3b8] text-sm">
                <li><a href="mailto:uriyas22@gmail.com" className="hover:text-[#38bdf8] transition">uriyas22@gmail.com</a></li>
                <li><a href="tel:+966535075778" className="hover:text-[#38bdf8] transition">+966 53 507 5778</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Location</h4>
              <ul className="space-y-2 text-[#94a3b8] text-sm">
                <li>12211, Riyadh</li>
                <li>Saudi Arabia</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-6 flex justify-center items-center text-xs text-slate-500"> {/* Centered content */}
          <p>&copy; 2025 Riyasudeen Farook. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}