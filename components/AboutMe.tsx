export default function AboutMe() {
  return (
    <div className="bento-card col-span-1 md:col-span-3 flex flex-col justify-center bg-slate-900/50 border border-white/5 backdrop-blur-md p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-accent/10 rounded-lg">
          <i className="fas fa-user-tie text-accent text-xl"></i>
        </div>
        <h2 className="text-2xl font-bold text-white">About Me & Leadership Philosophy</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Strategic Vision</h3>
          <p className="text-textMuted text-sm leading-relaxed mb-4">
            My management philosophy is built on <strong>Operational Excellence through Automation</strong>. I believe that by automating routine tasks, we empower teams to focus on strategic initiatives that drive business value.
          </p>
          <p className="text-textMuted text-sm leading-relaxed">
            Currently based in <strong>Riyadh</strong>, I am deeply committed to aligning enterprise IT strategies with <strong>Saudi Vision 2030</strong>, ensuring robust, compliant, and scalable infrastructure for the Kingdom's growing digital economy.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Leadership Journey</h3>
          <p className="text-textMuted text-sm leading-relaxed mb-4">
            With extensive experience managing <strong>SAR 10M+ IT budgets and leading cross-functional teams</strong>, I bridge the gap between complex engineering challenges and executive business goals.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
             <span className="px-3 py-1 text-xs font-medium bg-slate-800 rounded-full border border-white/10 text-slate-300">
               <i className="fas fa-users mr-2 text-accent"></i> IT Strategy & Governance
             </span>
             <span className="px-3 py-1 text-xs font-medium bg-slate-800 rounded-full border border-white/10 text-slate-300">
               <i className="fas fa-handshake mr-2 text-accent"></i> Vendor Management
             </span>
             <span className="px-3 py-1 text-xs font-medium bg-slate-800 rounded-full border border-white/10 text-slate-300">
               <i className="fas fa-chart-line mr-2 text-accent"></i> Budgeting & ROI
             </span>
             <span className="px-3 py-1 text-xs font-medium bg-slate-800 rounded-full border border-white/10 text-slate-300">
               <i className="fas fa-users mr-2 text-accent"></i> Team Building
             </span>
          </div>
        </div>
      </div>
    </div>
  );
}