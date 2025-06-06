import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Grid } from "@/components/Grid";
import { Hero } from "@/components/Hero";
import { RecentProjects } from "@/components/RecentProjects";
import { TimeLineSec } from "@/components/TimeLineSec";

export default function Home() {
  return (
    <main className="bg-black-100 relative mx-auto flex flex-col items-center justify-center overflow-hidden px-5 sm:px-10">
      <div className="w-full max-w-7xl">
        <Hero />
        <Grid />
        <RecentProjects />
        <TimeLineSec />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
