import React from 'react';

// Define the structure for a project
interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: string; // FontAwesome class
  iconColor: string; // Tailwind color class for the icon wrapper
  iconTextColor: string; // Tailwind text color for the icon itself
  link?: string; // Optional link
  isLarge?: boolean; // For span-2 logic
}

// Project Data with "Challenge -> Solution -> Impact" descriptions
const projects: Project[] = [
  {
    title: "Hybrid Cloud Transformation",
    description: `The Challenge: Legacy infrastructure lacked DR capabilities.
                  The Solution: Architected a high-availability Nutanix HCI cluster consolidating Windows DCs and SQL.
                  The Impact: Reduced hardware footprint by 40% and eliminated hypervisor licensing costs, ensuring 99.9% uptime and NCA compliance.`,
    tags: ["Nutanix AHV", "Windows Server", "SQL Cluster"],
    icon: "fas fa-server",
    iconColor: "bg-blue-500/20",
    iconTextColor: "text-blue-400",
    isLarge: true,
    // No link provided, so arrow will be hidden
  },
  {
    title: "Security Automation Framework",
    description: "Addressed slow incident response times by building a self-healing workflow with n8n. Automatically aggregates Microsoft Defender vulnerabilities, reducing triage time by 60% and ensuring 24/7 threat monitoring.",
    tags: ["n8n", "Docker"],
    icon: "fas fa-robot",
    iconColor: "bg-yellow-500/20",
    iconTextColor: "text-yellow-400",
    // REMOVED LINK HERE as requested, so arrow will not show
  },
  {
    title: "Enterprise Device Management",
    description: "Standardized 800+ endpoints using Microsoft Intune. Enforced strict compliance policies and automated patch management, securing the hybrid workforce against unpatched vulnerabilities.",
    tags: ["Intune", "Autopilot"],
    icon: "fab fa-windows",
    iconColor: "bg-blue-600/20",
    iconTextColor: "text-blue-400",
  },
  {
    title: "Zero-Trust Security Architecture",
    description: "Overhauled security posture to meet NDMO standards. Implemented CrowdStrike EDR and Palo Alto Policy-Based Forwarding, plus strict Nginx reverse proxies for internal apps.",
    tags: ["Palo Alto", "CrowdStrike", "Nginx"],
    icon: "fas fa-shield-virus",
    iconColor: "bg-red-500/20",
    iconTextColor: "text-red-400",
    isLarge: true,
  },
  {
    title: "Business Continuity (DRP)",
    description: "Eliminated data loss risk by deploying Veeam Backup & Replication with immutable storage. Achieved an RPO of < 4 hours for 800+ users, ensuring resilience against ransomware.",
    tags: ["Veeam", "Immutable Storage", "Disaster Recovery"],
    icon: "fas fa-hdd",
    iconColor: "bg-green-600/20",
    iconTextColor: "text-green-400",
  },
  {
    title: "Enterprise Observability",
    description: "Moved from reactive to proactive monitoring using Zabbix and OpenSearch. Provides granular visibility into 100+ hosts, allowing the team to resolve issues before they impact business operations.",
    tags: ["Zabbix", "OpenSearch"],
    icon: "fas fa-eye",
    iconColor: "bg-orange-600/20",
    iconTextColor: "text-orange-400",
  },
  {
    title: "DevSecOps Platform",
    description: "Modernized internal tooling by establishing a secure container platform for Nextcloud and local AI (OLLAMA). Streamlined deployment pipelines using Docker Compose and Portainer.",
    tags: ["Docker", "Portainer"],
    icon: "fab fa-docker",
    iconColor: "bg-cyan-600/20",
    iconTextColor: "text-cyan-400",
  },
  {
    title: "AI-Enhanced Service Desk",
    description: "Reduced ticket resolution time by deploying Zammad with AI sentiment analysis. The system automates routing for 200+ monthly tickets, improving SLA adherence.",
    tags: ["Zammad", "AI"],
    icon: "fas fa-headset",
    iconColor: "bg-purple-600/20",
    iconTextColor: "text-purple-400",
  },
];

export default function ProjectGrid() {
  return (
    <>
      {/* Section Header */}
      <div id="projects" className="col-span-1 md:col-span-3 mt-12 mb-4 flex items-center gap-4">
        <h2 className="text-2xl font-bold text-white">Strategic Initiatives</h2>
        <div className="h-px flex-grow bg-slate-700"></div>
      </div>

      {/* Projects Grid */}
      {projects.map((project, index) => (
        <div
          key={index}
          className={`bento-card group hover:bg-slate-800 transition duration-300 ${
            project.isLarge ? 'col-span-1 md:col-span-2' : ''
          }`}
        >
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-baseline gap-4">
              <div className={`p-2 rounded-lg ${project.iconColor} ${project.iconTextColor} flex items-center justify-center`}>
                <i className={`${project.icon} fa-lg`}></i>
              </div>

              <h3 className="text-xl font-bold text-white mb-0 group-hover:text-accent transition">
                {project.title}
              </h3>
            </div>
            
            {/* Conditionally render the arrow icon ONLY if a link exists */}
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-600 group-hover:text-white transition"
                aria-label={`View ${project.title}`}
              >
                <i className="fas fa-arrow-up-right-from-square"></i>
              </a>
            )}
          </div>
          
          <p className="text-textMuted text-sm mb-6 flex-grow leading-relaxed whitespace-pre-line">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag, i) => (
              <span 
                key={i} 
                className="px-2 py-1 text-[10px] font-medium bg-slate-900 rounded border border-white/10 text-slate-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}