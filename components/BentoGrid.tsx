import Hero from "./Hero";
import ProfileCard from "./ProfileCard";
import TechMarquee from "./TechMarquee";
import ImpactMetrics from "./ImpactMetrics";
import ProjectGrid from "./ProjectGrid";
// Removed Footer import to prevent duplication

export default function BentoGrid() {
  return (
    <div className="bento-grid">
      <Hero />
      <ProfileCard />
      <TechMarquee />
      <ImpactMetrics />
      <ProjectGrid />
    </div>
  );
}