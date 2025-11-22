import Hero from "./Hero";
import ProfileCard from "./ProfileCard";
import TechMarquee from "./TechMarquee";
import ImpactMetrics from "./ImpactMetrics";
import ProjectGrid from "./ProjectGrid";
import AboutMe from "./AboutMe";

export default function BentoGrid() {
  return (
    <div className="bento-grid">
      <Hero />
      <ProfileCard />
      <TechMarquee />
      <ImpactMetrics />
      <ProjectGrid />
      <AboutMe />
    </div>
  );
}