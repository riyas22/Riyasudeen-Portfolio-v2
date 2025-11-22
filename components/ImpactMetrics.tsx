export default function ImpactMetrics() {
  return (
    <>
      <div className="bento-card bg-gradient-to-br from-green-500/10 to-slate-800 border-green-500/20 group relative">
        <div className="absolute top-4 right-4 text-green-500/20 group-hover:text-green-500/40 transition text-5xl">
          <i className="fas fa-chart-line"></i>
        </div>
        <h3 className="text-4xl font-bold text-white mb-1 group-hover:scale-110 transition-transform origin-left duration-300">99.9%</h3>
        <p className="text-sm text-green-400 font-bold uppercase tracking-wider mb-2">Uptime Record</p>
        <p className="text-xs text-textMuted">Maintained across Nutanix HCI clusters for 18+ consecutive months.</p>
      </div>
      <div className="bento-card bg-gradient-to-br from-blue-500/10 to-slate-800 border-blue-500/20 group relative">
        <div className="absolute top-4 right-4 text-blue-500/20 group-hover:text-blue-500/40 transition text-5xl">
          <i className="fas fa-hourglass-half"></i>
        </div>
        <h3 className="text-4xl font-bold text-white mb-1 group-hover:scale-110 transition-transform origin-left duration-300">15 Hrs+</h3>
        <p className="text-sm text-blue-400 font-bold uppercase tracking-wider mb-2">Saved Weekly</p>
        <p className="text-xs text-textMuted">Eliminated manual reporting tasks via n8n & Docker automation workflows.</p>
      </div>
      <div className="bento-card bg-gradient-to-br from-purple-500/10 to-slate-800 border-purple-500/20 group relative">
        <div className="absolute top-4 right-4 text-purple-500/20 group-hover:text-purple-500/40 transition text-5xl">
          <i className="fas fa-lock"></i>
        </div>
        <h3 className="text-4xl font-bold text-white mb-1 group-hover:scale-110 transition-transform origin-left duration-300">100%</h3>
        <p className="text-sm text-purple-400 font-bold uppercase tracking-wider mb-2">Compliance</p>
        <p className="text-xs text-textMuted">Full alignment with Saudi NCA/NDMO cybersecurity regulations.</p>
      </div>
    </>
  );
}
