import { GraduationCap, Award } from "lucide-react";
import profilePicture from "@/assets/profile-picture-hero.jpg";
const About = () => {
  return <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 gradient-text">
            About Me
          </h2>

          <div className="space-y-12">
            {/* Bio */}
            <div className="space-y-6">
              <div className="glass-card text-center lg:text-left">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto lg:mx-0">
                  I'm Barani Chandrasekar, a passionate Full Stack Developer with strong foundations in both frontend and backend technologies. Skilled in React, Node.js, Express.js, and PostgreSQL, I specialize in creating scalable web applications that deliver seamless user experiences.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-semibold gradient-neon flex items-center justify-center lg:justify-start pb-1">
                <GraduationCap className="mr-3" />
                Education
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-card hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/20 rounded-lg shrink-0">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-base sm:text-lg leading-tight">B.E. Electronics and Communication Engineering</h4>
                      <p className="text-neon text-sm sm:text-base">K.S.R. College of Engineering</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">2021–2025 • CGPA: 8.6</p>
                    </div>
                  </div>
                </div>

                <div className="glass-card hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-accent/20 rounded-lg shrink-0">
                      <Award className="h-6 w-6 text-accent" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-base sm:text-lg leading-tight">Higher Secondary</h4>
                      <p className="text-neon text-sm sm:text-base">Govt. Hr. Sec. School, Kozhikkalnatham</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">2021 • 87.67%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;