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

// Project Data
const projects: Project[] = [
  {
    title: "Hybrid Cloud Transformation",
    description: "Architected and deployed a high-availability Nutanix HCI cluster. Consolidated Windows Domain Controllers, SQL clusters, and critical business apps onto a unified platform, reducing hardware footprint by 40% while ensuring HA/DR readiness.",
    tags: ["Nutanix AHV", "Windows Server", "SQL Cluster"],
    icon: "fas fa-server",
    iconColor: "bg-blue-500/20",
    iconTextColor: "text-blue-400",
    isLarge: true,
    // No link provided in original content, so arrow will be hidden
  },
  {
    title: "Security Automation Framework",
    description: "Developed a self-healing security workflow using n8n. Automatically aggregates vulnerability data from Microsoft Defender and generates real-time reports, reducing incident triage time by 60%.",
    tags: ["n8n", "Docker"],
    icon: "fas fa-robot",
    iconColor: "bg-yellow-500/20",
    iconTextColor: "text-yellow-400",
    // REMOVED LINK HERE so arrow will not show
  },
  {
    title: "Enterprise Device Management",
    description: "Led the migration to Microsoft Intune for 800+ endpoints. Enforced compliance policies, automated patch management, and secured remote access for a hybrid workforce.",
    tags: ["Intune", "Autopilot"],
    icon: "fab fa-windows",
    iconColor: "bg-blue-600/20",
    iconTextColor: "text-blue-400",
  },
  {
    title: "Zero-Trust Security Architecture",
    description: "Overhauled the organizational security posture by implementing CrowdStrike EDR and Palo Alto Networks firewalls (Policy-Based Forwarding). Configured Nginx reverse proxies with strict SSL/TLS policies to protect internal applications.",
    tags: ["Palo Alto", "CrowdStrike", "Nginx"],
    icon: "fas fa-shield-virus",
    iconColor: "bg-red-500/20",
    iconTextColor: "text-red-400",
    isLarge: true,
  },
  {
    title: "Business Continuity (DRP)",
    description: "Deployed Veeam Backup & Replication for 800+ users and virtual infrastructure. Implemented immutable backups to protect against ransomware, achieving an RPO of < 4 hours.",
    tags: ["Veeam", "Immutable Storage"],
    icon: "fas fa-hdd",
    iconColor: "bg-green-600/20",
    iconTextColor: "text-green-400",
  },
  {
    title: "Enterprise Observability",
    description: "Built a centralized logging and monitoring stack using Zabbix and OpenSearch. Provides granular visibility into 100+ hosts, enabling proactive issue resolution before user impact.",
    tags: ["Zabbix", "OpenSearch"],
    icon: "fas fa-eye",
    iconColor: "bg-orange-600/20",
    iconTextColor: "text-orange-400",
  },
  {
    title: "DevSecOps Platform",
    description: "Established a containerized service platform for Nextcloud, OLLAMA (local AI), and internal apps. Streamlined deployment pipelines using Docker Compose and Portainer.",
    tags: ["Docker", "Portainer"],
    icon: "fab fa-docker",
    iconColor: "bg-cyan-600/20",
    iconTextColor: "text-cyan-400",
  },
  {
    title: "AI-Enhanced Service Desk",
    description: "Deployed Zammad ticketing system integrated with local AI models for sentiment analysis and automated routing. Handles 200+ tickets/month with improved resolution SLAs.",
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
            <div className={`p-2 rounded-lg ${project.iconColor} ${project.iconTextColor}`}>
              <i className={`${project.icon} fa-lg`}></i>
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
          
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition">
            {project.title}
          </h3>
          
          <p className="text-textMuted text-sm mb-6 flex-grow leading-relaxed">
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