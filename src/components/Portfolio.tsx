import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Database, 
  Globe, 
  Brain,
  Users,
  MessageSquare,
  ChevronDown,
  MapPin,
  Calendar,
  Award
} from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

const Portfolio = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const skills = [
    { name: "Java", icon: Code, category: "Programming" },
    { name: "Python", icon: Code, category: "Programming" },
    { name: "JavaScript", icon: Code, category: "Programming" },
    { name: "HTML/CSS", icon: Globe, category: "Web" },
    { name: "SQL", icon: Database, category: "Database" },
    { name: "Git/GitHub", icon: Github, category: "Tools" },
    { name: "Data Structures", icon: Brain, category: "Algorithms" },
    { name: "Machine Learning", icon: Brain, category: "AI/ML" },
  ];

  const projects = [
    {
      title: "Student Management System",
      description: "Full-stack application for managing student records with comprehensive CRUD operations and user authentication.",
      tech: ["Java", "MySQL", "HTML", "CSS"],
      github: "#",
      demo: "#"
    },
    {
      title: "Online Portfolio Website",
      description: "Responsive personal website built with modern web technologies and hosted on GitHub Pages.",
      tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      github: "#",
      demo: "#"
    }
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "G. Pullaiah College of Engineering and Technology",
      year: "Expected 2026",
      icon: Award
    },
    {
      degree: "Diploma in Computer Science and Engineering",
      institution: "Govt. Polytechnic for Minorities",
      year: "2023",
      icon: Award
    },
    {
      degree: "Secondary Education",
      institution: "Zilla Parishad High School",
      year: "2020",
      icon: Award
    }
  ];

  const services = [
    {
      title: "Web Development",
      description: "Responsive and user-friendly websites built with modern technologies",
      icon: Globe
    },
    {
      title: "Software Development",
      description: "Clean, efficient applications with robust functionality",
      icon: Code
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold gradient-text">Umar Mulla</div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('experience')} className="text-foreground hover:text-primary transition-colors">Experience</button>
              <button onClick={() => scrollToSection('skills')} className="text-foreground hover:text-primary transition-colors">Skills</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-foreground hover:text-primary transition-colors">Portfolio</button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="section-padding pt-32 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Hi, I'm{" "}
                <span className="gradient-text">Umar Mukhtiyar Mulla</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground mb-6">
                Aspiring Computer Science Engineer & Developer
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Passionate about technology, problem-solving, and innovation. 
                Building solutions that make a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="default" 
                  size="lg" 
                  className="hover-glow"
                  onClick={() => scrollToSection('portfolio')}
                >
                  View My Work
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                >
                  Contact Me
                </Button>
              </div>
            </div>
            <div className="flex justify-center animate-slide-up">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow">
                  <img 
                    src={profileImage} 
                    alt="Umar Mukhtiyar Mulla" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-10"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate computer science student with a strong foundation in programming, 
              web development, and emerging technologies.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm currently pursuing my B.Tech in Computer Science and Engineering, 
                with a deep interest in artificial intelligence, web development, and 
                open-source technologies. My goal is to leverage technology to create 
                innovative solutions that have a positive impact on society.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Through various projects and internships, I've developed strong 
                analytical thinking skills and a collaborative approach to problem-solving. 
                I'm always eager to learn new technologies and take on challenging projects.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary">Problem Solver</Badge>
                <Badge variant="secondary">Team Player</Badge>
                <Badge variant="secondary">Fast Learner</Badge>
                <Badge variant="secondary">Tech Enthusiast</Badge>
              </div>
            </div>
            
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="card-hover glass-card">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <edu.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-1">{edu.degree}</h4>
                          <p className="text-muted-foreground mb-2">{edu.institution}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.year}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional experience and internships that have shaped my technical skills.
            </p>
          </div>
          
          <Card className="card-hover glass-card max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">Intern - Eduskills</h3>
                  <p className="text-primary mb-4">Cohort 7 to 12</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Participated in comprehensive training programs focusing on industry-relevant 
                    skills including software development, project management, and collaborative 
                    problem-solving. Gained hands-on experience with modern development tools 
                    and methodologies while working on real-world projects.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline">Team Collaboration</Badge>
                    <Badge variant="outline">Project Management</Badge>
                    <Badge variant="outline">Software Development</Badge>
                    <Badge variant="outline">Problem Solving</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A diverse set of technical skills and technologies I work with.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="card-hover glass-card group">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-primary/10 rounded-lg mx-auto w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                    <skill.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">{skill.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-6">Additional Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary">Analytical Thinking</Badge>
              <Badge variant="secondary">Communication</Badge>
              <Badge variant="secondary">Adaptability</Badge>
              <Badge variant="secondary">Cloud Computing</Badge>
              <Badge variant="secondary">Open Source</Badge>
              <Badge variant="secondary">RDBMS</Badge>
              <Badge variant="secondary">Algorithms</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What I can help you build and create.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-hover glass-card">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent projects and development work.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="card-hover glass-card group">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's connect and discuss opportunities to work together.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, collaborations, 
                or just having a conversation about technology and innovation.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">umarmulla@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Linkedin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-muted-foreground">linkedin.com/in/umarmulla</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Github className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-muted-foreground">github.com/umarmulla</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="glass-card">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="bg-background/50"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full hover-glow">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">
              © 2024 Umar Mukhtiyar Mulla. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;