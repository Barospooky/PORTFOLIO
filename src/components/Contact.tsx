import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";

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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Barani Chandrasekar",
        reply_to: formData.email
      };

      await emailjs.send(
        'service_o49rb7j',
        'template_jfw7w61',
        templateParams,
        'JempZ2MsHLd7FUMeG'
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const contactInfo = [{
    icon: Mail,
    label: "Email",
    value: "ceecbarani2025@gmail.com",
    href: "mailto:ceecbarani2025@gmail.com"
  }, {
    icon: Phone,
    label: "Phone",
    value: "+91 90047 47615",
    href: "tel:+919004747615"
  }];
  const socialLinks = [{
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Barospooky"
  }, {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/barani-chandrasekar"
  }, {
    icon: XIcon,
    label: "X (Twitter)",
    href: "https://x.com/Barospooky"
  }];
  return <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 gradient-text">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-12">
              <div className="space-y-6 text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl font-semibold gradient-neon pb-1">
                  Let's work together
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  I'm always interested in discussing new opportunities, innovative projects, 
                  and ways to create amazing digital experiences. Whether you have a project 
                  in mind or just want to chat about technology, feel free to reach out!
                </p>
              </div>

              {/* Contact Details */}
              <div className="flex flex-col gap-6">
                {contactInfo.map((info, index) => <a key={index} href={info.href} className="flex items-center space-x-6 glass-card hover-lift group p-6">
                    <div className="p-4 bg-primary/20 rounded-xl group-hover:neon-glow transition-smooth shrink-0">
                      <info.icon className="h-7 w-7 text-neon" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      <p className="text-lg sm:text-xl font-medium group-hover:text-neon transition-smooth truncate">
                        {info.value}
                      </p>
                    </div>
                  </a>)}
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-semibold gradient-neon pb-1">Send Message</h3>
                
                <div className="space-y-4">
                  <div>
                    <Input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="bg-muted/30 border-white/10 focus:border-neon/50 hover:border-white/20 transition-smooth" />
                  </div>
                  
                  <div>
                    <Input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="bg-muted/30 border-white/10 focus:border-neon/50 hover:border-white/20 transition-smooth" />
                  </div>
                  
                  <div>
                    <Textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required rows={6} className="bg-muted/30 border-white/10 focus:border-neon/50 hover:border-white/20 transition-smooth resize-none" />
                  </div>
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full hover-lift neon-glow group disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;