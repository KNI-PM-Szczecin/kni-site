import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Join from "@/components/Join";
import FAQ from "@/components/FAQ";
import SignupCTA from "@/components/SignupCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Team />
        <Join />
        <FAQ />
        <SignupCTA />
      </main>
      <Footer />
    </>
  );
}
