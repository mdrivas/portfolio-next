import dynamic from "next/dynamic";
import { navItems } from "@/data";

// Import all components with dynamic imports and no SSR
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), {
  ssr: false,
});
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), {
  ssr: false,
});
const FloatingNav = dynamic(() => import("@/components/ui/FloatingNavbar"), {
  ssr: false,
});
const Resume = dynamic(() => import("@/components/Approach"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-black-100 overflow-hidden">
      <div className="relative max-w-7xl mx-auto sm:px-10 px-5 pt-16">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Resume />
        <Footer />
      </div>
    </main>
  );
}
