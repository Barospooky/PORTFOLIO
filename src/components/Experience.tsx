import { Briefcase, MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Engineer",
      company: "Ziga Infotech",
      location: "Chennai, Tamil Nadu, India (On-site)",
      period: "Aug 2025 – Present",
      description: "Started as a Full Stack Intern and promoted to Full Stack Engineer. Focusing on AI & ML-powered web and mobile solutions using MySQL, React.js, and modern full-stack technologies.",
      color: "primary"
    },
    {
      title: "Research Intern",
      company: "ISRO (SAC), Ahmedabad",
      location: "Ahmedabad, India",
      period: "Jul – Oct 2024",
      description: "Conducted research on satellite communication systems and contributed to space technology projects.",
      color: "accent"
    },
    {
      title: "Salesforce Developer Intern",
      company: "SmartBridge (Virtual)",
      location: "Remote",
      period: "Nov 2023 – Jan 2024",
      description: "Developed Salesforce applications and learned CRM platform development and customization.",
      color: "neon"
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 gradient-text pb-2">
            Experience
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-neon"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start space-x-4 sm:space-x-8">
                  {/* Timeline Dot */}
                  <div className={`relative z-10 p-2 sm:p-3 rounded-full glass-card neon-glow shrink-0`}>
                    <Briefcase className="h-4 w-4 sm:h-6 sm:w-6 text-neon" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 glass-card hover-lift min-w-0">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-semibold gradient-neon leading-tight pb-1">{exp.title}</h3>
                        <h4 className="text-base sm:text-lg text-foreground">{exp.company}</h4>
                      </div>

                      <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs sm:text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;