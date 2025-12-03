import Concept from "./components/Concept";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Join from "./components/Join";
import Navbar from "./components/Navbar";
import ProjectSummary from "./components/ProjectSummary";
import Rarity from "./components/Rarity";
import ScrollTrace from "./components/ScrollTrace";
import Teaser from "./components/Teaser";
import WBS from "./components/WBS";

export default function Home() {
  return (
    <>
      <div className="gradient-bg" />
      <div className="grid-pattern" />
      
      {/* Side tracing line */}
      <ScrollTrace />
      
      {/* Navigation */}
      <Navbar />
      
      <main className="relative min-h-screen">
        <Hero />
        
        <Teaser />
        
        <div className="section-divider max-w-2xl mx-auto" />
        
        <ProjectSummary />
        
        <Concept />
        
        <div className="section-divider max-w-2xl mx-auto" />
        
        <Features />
        
        <Rarity />
        
        <div className="section-divider max-w-2xl mx-auto" />
        
        <WBS />
        
        <Join />
        
        <Footer />
      </main>
    </>
  );
}
