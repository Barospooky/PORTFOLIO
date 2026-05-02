import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Zomato Clone",
      description: "React-based food ordering application with user authentication, shopping cart functionality, and checkout process. Fully responsive design with modern UI/UX.",
      tech: ["React", "JavaScript", "CSS", "Authentication"],
      github: "https://github.com/Barospooky/zomato-clone",
      demo: "https://zomato-clone-demo.netlify.app",
      featured: true
    },
    {
      title: "Enterprise Asset Management System",
      description: "Full-stack application built with Node.js and PostgreSQL using Sequelize ORM for comprehensive asset lifecycle management in enterprise environments.",
      tech: ["Node.js", "PostgreSQL", "Express.js", "Sequelize"],
      github: "https://github.com/Barospooky/asset-management",
      demo: null,
      featured: true
    },
    {
      title: "ECG Simulator",
      description: "Real-time ECG visualization tool built with React, featuring interactive controls and dynamic waveform rendering for medical simulation purposes.",
      tech: ["React", "Canvas API", "Real-time Data", "Medical UI"],
      github: "https://github.com/Barospooky/ecg-simulator",
      demo: "https://ecg-simulator-demo.netlify.app",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 gradient-text">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass-card hover-lift group h-full flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Project Header */}
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-semibold gradient-neon group-hover:text-neon transition-smooth pb-1">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full
                                   border border-primary/30 hover:bg-primary/30 transition-smooth"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4 pt-4">
                    <Button
                      asChild
                      variant="outline"
                      className="hover-glow border-neon/50 group"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                        <ExternalLink className="ml-2 h-3 w-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </Button>
                    
                    {project.demo && (
                      <Button
                        asChild
                        className="hover-lift neon-glow group"
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo
                          <ExternalLink className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More Projects Link */}
          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="hover-glow border-primary/50"
            >
              <a
                href="https://github.com/Barospooky"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                View More Projects
                <ExternalLink className="ml-2 h-3 w-3" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;