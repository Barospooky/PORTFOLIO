import { Github, Linkedin, ArrowRight, Code, Sparkles, Database } from "lucide-react";

const XIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    aria-hidden="true"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const ReactLogo = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="2.5" fill="#61DAFB"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/>
  </svg>
);

const NodeLogo = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="#8CC84B">
    <path d="M12 1.85L2 7.31v9.38L12 22.15l10-5.46V7.31L12 1.85zm0 2.3l7.5 4.1-7.5 4.1-7.5-4.1L12 4.15zM4 9.07l7 3.82v7.64l-7-3.82V9.07zm9 11.46v-7.64l7-3.82v7.64l-7 3.82z"/>
  </svg>
);

const TypeScriptLogo = () => (
  <svg width="28" height="28" viewBox="0 0 24 24">
    <rect width="24" height="24" rx="3" fill="#3178C6"/>
    <text x="3" y="18" fontSize="13" fontWeight="bold" fill="white" fontFamily="monospace">TS</text>
  </svg>
);

import { Button } from "@/components/ui/button";
import profilePicture from "@/assets/profile-picture-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden pt-20">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,255,0.05),transparent_50%)]"></div>
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 float blur-xl"></div>
      <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-neon/20 float-delayed blur-xl"></div>
      <div className="absolute bottom-40 left-1/4 w-16 h-16 rounded-full bg-accent/30 float blur-xl"></div>
      
      {/* Geometric Shapes */}
      <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-neon rotate-45 float opacity-60"></div>
      <div className="absolute bottom-1/3 right-10 w-6 h-6 border-2 border-primary rotate-12 float-delayed opacity-40"></div>
      <div className="absolute top-1/2 left-10 w-3 h-3 bg-accent rounded-full float opacity-50"></div>

      <div className="container mx-auto px-6 min-h-screen flex items-center pt-48 lg:pt-0 pb-20 lg:pb-0 relative z-10">
        <div className="grid md:grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full mt-32 lg:mt-0">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8 lg:space-y-10 text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-neon mx-auto lg:mx-0">
              <div className="w-2 h-2 bg-neon rounded-full animate-pulse"></div>
              Available for new opportunities
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight tracking-tight">
                <span className="block">Hi,</span>
                <span className="block">I'm <span className="gradient-text animate-pulse">Barani</span></span>
              </h1>
              
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground">
                  Full Stack Developer
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-neon rounded-full mx-auto lg:mx-0"></div>
              </div>

              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed mx-auto lg:mx-0">
                Building modern, scalable, and interactive web applications with 
                <span className="text-primary font-semibold"> cutting-edge technologies</span>.
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
              <Button size="lg" className="group hover-lift purple-glow text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto w-full sm:w-auto">
                <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Hire Me
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="hover-lift border-neon/50 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto transition-all duration-300 hover:bg-neon hover:text-background hover:border-neon w-full sm:w-auto group"
              >
                <a 
                  href="/Barani_C_Resume.pdf" 
                  download="Barani_C_Resume.pdf"
                  className="flex items-center justify-center w-full h-full"
                >
                  <Code className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  <span>Download CV</span>
                </a>
              </Button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex items-center gap-6 pt-4">
              <span className="text-sm text-muted-foreground font-medium">Connect with me</span>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Barospooky"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 glass rounded-xl hover:neon-glow transition-smooth hover-lift"
                >
                  <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://linkedin.com/in/barani-chandrasekar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 glass rounded-xl hover:purple-glow transition-smooth hover-lift"
                >
                  <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://x.com/Barospooky"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 glass rounded-xl hover:neon-glow transition-smooth hover-lift"
                  title="X (Twitter)"
                >
                  <XIcon className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Profile Section */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Profile Container */}
              <div className="relative">
                <div className="profile-glow">
                  <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl bg-black/90 p-4 border-4 border-white/10 shadow-2xl">
                    <img
                      src={profilePicture}
                      alt="Barani Chandrasekar - Full Stack Developer"
                      className="w-full h-full rounded-2xl object-cover"
                    />
                  </div>
                </div>

                {/* React - Top Right */}
                <div className="absolute -top-6 -right-6 glass-card p-4 float group">
                  <div className="flex items-center gap-2">
                    <ReactLogo />
                    <span className="text-[#61DAFB] font-mono font-bold text-lg">React</span>
                  </div>
                </div>
                
                {/* Node.js - Bottom Left */}
                <div className="absolute -bottom-6 -left-6 glass-card p-4 float-delayed">
                  <div className="flex items-center gap-2">
                    <NodeLogo />
                    <span className="text-[#8CC84B] font-mono font-bold text-lg">Node.js</span>
                  </div>
                </div>
                
                {/* TypeScript - Middle Left */}
                <div className="absolute top-1/4 -left-12 glass-card p-3 float">
                  <div className="flex items-center gap-2">
                    <TypeScriptLogo />
                    <span className="text-[#3178C6] font-mono font-bold">TypeScript</span>
                  </div>
                </div>
                
                {/* Databases - Middle Right */}
                <div className="absolute bottom-1/4 -right-4 glass-card p-3 float-delayed">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex gap-2">
                      <Database className="h-6 w-6 text-neon" />
                    </div>
                    <span className="text-neon font-mono font-bold text-[10px]">Databases</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -inset-10 bg-gradient-to-r from-primary/20 via-transparent to-neon/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;