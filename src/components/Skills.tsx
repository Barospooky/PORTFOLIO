import { Code, Database, Server, Wrench } from "lucide-react";
const Skills = () => {
  const skillCategories = [{
    title: "Frontend",
    icon: Code,
    skills: ["React", "Next.js", "HTML/CSS", "JavaScript", "TypeScript"],
    color: "primary"
  }, {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs"],
    color: "accent"
  }, {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Sequelize ORM"],
    color: "neon"
  }, {
    title: "Tools & Other",
    icon: Wrench,
    skills: ["Git", "GitHub", "Docker", "Postman", "Power BI"],
    color: "primary"
  }];
  return <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 gradient-text py-4">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => <div key={index} className="glass-card hover-lift group">
                <div className="space-y-6">
                  {/* Icon and Title */}
                  <div className="text-center space-y-4">
                    <div className="inline-flex p-4 rounded-2xl bg-primary/20 group-hover:neon-glow transition-smooth">
                      <category.icon className="h-8 w-8 text-neon" />
                    </div>
                    <h3 className="text-xl font-semibold gradient-neon pb-1">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center justify-center p-3 rounded-lg bg-background/50 border border-white/10 hover:border-neon/30 transition-smooth">
                        <span className="text-sm font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>)}
          </div>

          {/* Services Section */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12 gradient-neon pb-2">
              Services
            </h3>
            <div className="max-w-4xl mx-auto">
              <div className="glass-card text-center hover-lift">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold gradient-neon">Full Stack Web Development</h4>
                  <p className="text-lg text-muted-foreground">
                    Custom websites, web applications, dashboards, and scalable backend solutions 
                    tailored to your business needs. From concept to deployment, I deliver 
                    modern, responsive, and performant web solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Skills;