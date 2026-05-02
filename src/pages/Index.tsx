import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-white/10 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              © 2024 Barani Chandrasekar. Built with React, TypeScript & Tailwind CSS.
            </p>
            <p className="text-sm text-muted-foreground">
              Designed & Developed with ❤️ for creating amazing digital experiences.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;