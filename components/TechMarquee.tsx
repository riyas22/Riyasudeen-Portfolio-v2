export default function TechMarquee() {
  return (
    // Reduced padding to py-6 for a slimmer look
    <div className="bento-card col-span-1 md:col-span-3 py-6 flex items-center overflow-hidden border-y border-white/5 bg-slate-900/50">
      <div className="marquee-container w-full">
        <div className="marquee-content flex gap-16 items-center text-slate-300 font-semibold text-lg">
          {/* === First Set of Skills === */}
          <span className="flex items-center gap-3">
            <i className="fab fa-windows text-blue-500 text-xl"></i> Microsoft 365
          </span>
          <span className="flex items-center gap-3">
            <i className="fas fa-server text-green-500 text-xl"></i> Nutanix HCI
          </span>
          <span className="flex items-center gap-3">
            <i className="fab fa-docker text-blue-400 text-xl"></i> Docker
          </span>
          <span className="flex items-center gap-3">
            <i className="fas fa-bolt text-yellow-500 text-xl"></i> n8n Automation
          </span>
          <span className="flex items-center gap-3">
            <i className="fas fa-shield-virus text-red-500 text-xl"></i> CrowdStrike
          </span>
          <span className="flex items-center gap-3">
            <i className="fas fa-fire text-orange-500 text-xl"></i> Palo Alto
          </span>
          <span className="flex items-center gap-3">
            <i className="fab fa-python text-yellow-300 text-xl"></i> Python
          </span>
          <span className="flex items-center gap-3">
            <i className="fas fa-database text-purple-400 text-xl"></i> SQL
          </span>

          {/* === Duplicate Set (Required for Infinite Loop) === */}
          <span className="flex items-center gap-3">
            <i className="fab fa-windows text-blue-500 text-xl"></i> Microsoft 365
          </span>
          <span className="flex items-center gap-3">
            <i className="fas fa-server text-green-500 text-xl"></i> Nutanix HCI
          </span>
          <span className="flex items-center gap-3">
            <i className="fab fa-docker text-blue-400 text-xl"></i> Docker
          </span>
          <span className="flex items-center gap-3">
            <i className="fas fa-bolt text-yellow-500 text-xl"></i> n8n Automation
          </span>
          <span className="flex items-center gap-3">
            <i className="fas fa-shield-virus text-red-500 text-xl"></i> CrowdStrike
          </span>
          <span className="flex items-center gap-3">
            <i className="fas fa-fire text-orange-500 text-xl"></i> Palo Alto
          </span>
          <span className="flex items-center gap-3">
            <i className="fab fa-python text-yellow-300 text-xl"></i> Python
          </span>
          <span className="flex items-center gap-3">
            <i className="fas fa-database text-purple-400 text-xl"></i> SQL
          </span>
        </div>
      </div>
    </div>
  );
}