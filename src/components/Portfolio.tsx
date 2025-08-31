import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Brain, Users, MessageSquare, ChevronDown, MapPin, Calendar, Award, ArrowRight, Sparkles } from "lucide-react";
import profileImage from "@/assets/profile-image-new.jpg";
const Portfolio = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const skills = [{
    name: "Java",
    icon: Code,
    category: "Programming"
  }, {
    name: "Python",
    icon: Code,
    category: "Programming"
  }, {
    name: "JavaScript",
    icon: Code,
    category: "Programming"
  }, {
    name: "HTML/CSS",
    icon: Globe,
    category: "Web"
  }, {
    name: "SQL",
    icon: Database,
    category: "Database"
  }, {
    name: "Git/GitHub",
    icon: Github,
    category: "Tools"
  }, {
    name: "Data Structures",
    icon: Brain,
    category: "Algorithms"
  }, {
    name: "Machine Learning",
    icon: Brain,
    category: "AI/ML"
  }];
  const projects = [{
    title: "Student Management System",
    description: "Full-stack application for managing student records with comprehensive CRUD operations and user authentication.",
    tech: ["Java", "MySQL", "HTML", "CSS"],
    github: "https://github.com/umar1318",
    demo: "#"
  }, {
    title: "Online Portfolio Website",
    description: "Responsive personal website built with modern web technologies and hosted on GitHub Pages.",
    tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    github: "https://github.com/umar1318",
    demo: "#"
  }];
  const education = [{
    degree: "B.Tech in Computer Science and Engineering",
    institution: "G. Pullaiah College of Engineering and Technology",
    year: "Expected 2026",
    icon: Award
  }, {
    degree: "Diploma in Computer Science and Engineering",
    institution: "Govt. Polytechnic for Minorities",
    year: "2023",
    icon: Award
  }, {
    degree: "Secondary Education",
    institution: "Zilla Parishad High School",
    year: "2020",
    icon: Award
  }];
  const services = [{
    title: "Web Development",
    description: "Responsive and user-friendly websites built with modern technologies",
    icon: Globe
  }, {
    title: "Software Development",
    description: "Clean, efficient applications with robust functionality",
    icon: Code
  }];
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // EmailJS configuration
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Umar Mukhtiyar Mulla'
      };
      await emailjs.send('service_lznwsmb',
      // Your Service ID
      'template_wpoo6e8',
      // Your Template ID
      templateParams, 'QfC4-WiOomtmRCqNM' // Your Public Key
      );
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon."
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
        description: "Something went wrong. Please try again or contact me directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <div className="min-h-screen bg-background">
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
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90"></div>
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 right-1/4 w-4 h-4 bg-primary/20 rotate-45 animate-bounce delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-6 h-6 border-2 border-primary/30 rotate-12 animate-pulse delay-500"></div>
        <div className="absolute top-1/2 right-10 w-3 h-3 bg-accent/40 rounded-full animate-bounce delay-300"></div>

        <div className="relative z-10 section-padding pt-32 w-full">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 animate-fade-in">
                {/* Status Badge */}
                <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-primary font-medium">Available for opportunities</span>
                </div>
                
                {/* Main Heading */}
                <div className="space-y-4">
                  <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                    Hi, I'm{" "}
                    <span className="gradient-text block lg:inline">Umar Mukhtiyar Mulla</span>
                  </h1>
                  <div className="relative">
                    <h2 className="text-2xl lg:text-3xl text-muted-foreground font-light">Aspiring Software Engineer & Developer</h2>
                    <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-primary rounded-full"></div>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Passionate about creating innovative solutions through code. 
                  Transforming ideas into digital reality with modern technologies.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button variant="default" size="lg" className="hover-glow group relative overflow-hidden" onClick={() => scrollToSection('portfolio')}>
                    <span className="relative z-10">View My Work</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                  <Button variant="outline" size="lg" className="group hover:bg-primary/5 hover:border-primary/50" onClick={() => scrollToSection('contact')}>
                    <span>Contact Me</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                
                {/* Social Links */}
                <div className="flex items-center space-x-6 pt-6">
                  <div className="w-8 h-px bg-border"></div>
                  <div className="flex space-x-4">
                    <a href="https://github.com/umar1318" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/mulla-umar-mukhtiyar" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="mailto:mukhtiyargpm2020@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Profile Image Section */}
              <div className="flex justify-center lg:justify-end animate-slide-up">
                <div className="relative group">
                  {/* Outer glow ring */}
                  <div className="absolute -inset-4 bg-gradient-primary rounded-full opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-500"></div>
                  
                  {/* Main image container */}
                  <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                    <div className="glass-card rounded-full p-1 w-full h-full">
                      <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary/30 relative">
                        <img src={profileImage} alt="Umar Mukhtiyar Mulla - Computer Science Engineer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating badges */}
                  <div className="absolute -top-4 -right-4 glass-card rounded-full p-3 animate-bounce delay-200">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 glass-card rounded-full p-3 animate-bounce delay-700">
                    <Sparkles className="w-6 h-6 text-accent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xs text-muted-foreground tracking-widest">SCROLL</span>
            <ChevronDown className="w-5 h-5 text-primary" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative section-padding overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-accent/5 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-primary font-medium">About Me</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              Know More <span className="gradient-text">About Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A passionate computer science student with a strong foundation in programming, 
              web development, and emerging technologies.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="animate-fade-in space-y-8">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-primary rounded-full"></div>
                <div className="pl-8">
                  <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Sparkles className="w-8 h-8 text-primary" />
                    My Journey
                  </h3>
                  <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      I'm currently pursuing my B.Tech in Computer Science and Engineering, 
                      with a deep interest in artificial intelligence, web development, and 
                      open-source technologies. My goal is to leverage technology to create 
                      innovative solutions that have a positive impact on society.
                    </p>
                    <p>
                      Through various projects and internships, I've developed strong 
                      analytical thinking skills and a collaborative approach to problem-solving. 
                      I'm always eager to learn new technologies and take on challenging projects.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[{
                label: "Problem Solver",
                icon: Brain
              }, {
                label: "Team Player",
                icon: Users
              }, {
                label: "Fast Learner",
                icon: Award
              }, {
                label: "Tech Enthusiast",
                icon: Code
              }].map((trait, index) => <div key={index} className="glass-card p-4 hover:bg-primary/5 transition-colors group">
                    <div className="flex items-center gap-3">
                      <trait.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                      <span className="font-medium text-sm">{trait.label}</span>
                    </div>
                  </div>)}
              </div>
            </div>
            
            <div className="animate-slide-up space-y-8">
              <div className="relative">
                <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Award className="w-8 h-8 text-accent" />
                  Education
                </h3>
                <div className="space-y-6">
                  {education.map((edu, index) => <div key={index} className="relative group">
                      <div className="glass-card p-6 hover:bg-primary/5 transition-all duration-300 border border-transparent hover:border-primary/20">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-gradient-primary rounded-xl shadow-glow group-hover:scale-110 transition-transform duration-300">
                            <edu.icon className="w-6 h-6 text-background" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-xl mb-2">{edu.degree}</h4>
                            <p className="text-primary font-medium mb-3">{edu.institution}</p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              <span>{edu.year}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative section-padding bg-gradient-to-br from-secondary/10 via-background to-secondary/5 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-1/4 w-6 h-6 border-2 border-primary/20 rotate-45 animate-bounce delay-500"></div>
        <div className="absolute bottom-32 right-1/3 w-4 h-4 bg-accent/30 rounded-full animate-pulse delay-700"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 text-sm mb-6">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-accent font-medium">Professional Journey</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              My <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Professional experience and internships that have shaped my technical skills and career path.
            </p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-primary rounded-full hidden md:block"></div>
            
            <div className="glass-card border border-primary/20 hover:border-primary/40 transition-all duration-500 group">
              <div className="p-8 md:p-12 relative">
                {/* Timeline dot */}
                <div className="absolute left-8 top-12 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow hidden md:block transform -translate-x-1/2"></div>
                
                <div className="md:ml-16">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-gradient-primary rounded-xl shadow-glow group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-10 h-10 text-background" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                        <h3 className="text-3xl font-bold">Intern - Eduskills</h3>
                        <div className="flex items-center gap-2 text-primary font-medium bg-primary/10 px-3 py-1 rounded-full w-fit">
                          <Calendar className="w-4 h-4" />
                          <span>
                        </span>
                        </div>
                      </div>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        Participated in comprehensive training programs focusing on industry-relevant 
                        skills including software development, project management, and collaborative 
                        problem-solving. Gained hands-on experience with modern development tools 
                        and methodologies while working on real-world projects.
                      </p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {["Team Collaboration", "Project Management", "Software Development", "Problem Solving"].map((skill, index) => <div key={index} className="glass-card p-3 text-center hover:bg-primary/5 transition-colors group/skill">
                            <span className="text-sm font-medium group-hover/skill:text-primary transition-colors">{skill}</span>
                          </div>)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative section-padding overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-primary"></div>
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse delay-300"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-700"></div>
        
        {/* Floating code symbols */}
        <div className="absolute top-32 right-1/4 text-primary/20 text-4xl font-bold animate-bounce delay-1000">&lt;/&gt;</div>
        <div className="absolute bottom-40 left-1/4 text-accent/20 text-3xl font-bold animate-pulse delay-500">{}</div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm mb-6">
              <Code className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium">Technical Expertise</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive toolkit of technologies and frameworks I work with to build amazing digital experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {skills.map((skill, index) => <div key={index} className="group">
                <div className="glass-card p-6 text-center hover:bg-primary/5 transition-all duration-300 border border-transparent hover:border-primary/20 h-full">
                  <div className="relative mb-4">
                    <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl mx-auto w-fit group-hover:scale-110 transition-transform duration-300 shadow-md group-hover:shadow-glow">
                      <skill.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                    </div>
                    {/* Skill level indicator */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{skill.category}</p>
                </div>
              </div>)}
          </div>
          
          {/* Additional Skills Cloud */}
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-8 flex items-center justify-center gap-3">
              <Brain className="w-8 h-8 text-accent" />
              Additional Expertise
            </h3>
            <div className="glass-card p-8 border border-primary/20">
              <div className="flex flex-wrap justify-center gap-4">
                {["Analytical Thinking", "Communication", "Adaptability", "Cloud Computing", "Open Source", "RDBMS", "Algorithms"].map((skill, index) => <div key={index} className="group">
                    <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 hover:border-primary/40 rounded-full px-4 py-2 transition-all duration-300 hover:scale-105 hover:shadow-glow">
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors">{skill}</span>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative section-padding bg-gradient-to-br from-secondary/5 via-background to-accent/5 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-200"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-2xl animate-pulse delay-800"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 text-sm mb-6">
              <Globe className="w-4 h-4 text-accent" />
              <span className="text-accent font-medium">What I Offer</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              My <span className="gradient-text">Services</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive development services to bring your digital ideas to life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => <div key={index} className="group">
                <div className="glass-card p-8 h-full hover:bg-primary/5 transition-all duration-500 border border-transparent hover:border-primary/20 relative overflow-hidden">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="p-4 bg-gradient-primary rounded-xl shadow-glow group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-8 h-8 text-background" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                        <p className="text-muted-foreground leading-relaxed text-lg">{service.description}</p>
                      </div>
                    </div>
                    
                    {/* Service features */}
                    <div className="flex items-center gap-2 text-sm text-primary/80 group-hover:text-primary transition-colors">
                      <ArrowRight className="w-4 h-4" />
                      <span>Professional & Modern Solutions</span>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="relative section-padding overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 -left-20 w-80 h-80 bg-accent/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Floating project icons */}
        <div className="absolute top-32 left-1/4 w-8 h-8 border-2 border-primary/20 rounded-lg rotate-12 animate-bounce delay-300"></div>
        <div className="absolute bottom-40 right-1/3 w-6 h-6 bg-accent/30 rounded-full animate-pulse delay-700"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm mb-6">
              <Code className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium">My Work</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent projects and development work, featuring modern technologies and innovative solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => <div key={index} className="group">
                <div className="glass-card p-8 h-full hover:bg-primary/5 transition-all duration-500 border border-transparent hover:border-primary/20 relative overflow-hidden">
                  {/* Project number */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-background font-bold text-sm">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-lg flex-1">{project.description}</p>
                    </div>
                    
                    {/* Tech stack */}
                    <div className="mb-8">
                      <h4 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => <div key={techIndex} className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full px-3 py-1 text-sm font-medium hover:bg-primary/20 transition-colors">
                            {tech}
                          </div>)}
                      </div>
                    </div>
                    
                    {/* Action buttons */}
                    <div className="flex gap-4 mt-auto">
                      <Button variant="outline" size="sm" className="flex items-center gap-2 group/btn hover:bg-primary/10 hover:border-primary/40 flex-1">
                        <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        <span>View Code</span>
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center gap-2 group/btn hover:bg-accent/10 hover:border-accent/40 flex-1">
                        <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        <span>Live Demo</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
          
          {/* Call to action */}
          <div className="text-center mt-16">
            <div className="glass-card p-8 border border-primary/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
              <p className="text-muted-foreground mb-6">Check out my GitHub for more projects and contributions to open source.</p>
              <Button className="hover-glow group">
                <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Visit GitHub Profile
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative section-padding bg-gradient-to-br from-secondary/10 via-background to-secondary/5 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-accent/5 rounded-full blur-2xl animate-pulse delay-700"></div>
        
        {/* Communication symbols */}
        <div className="absolute top-32 right-1/4 text-primary/10 text-6xl animate-pulse delay-500">@</div>
        <div className="absolute bottom-40 left-1/4 text-accent/10 text-4xl animate-bounce delay-300">#</div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 text-sm mb-6">
              <MessageSquare className="w-4 h-4 text-accent" />
              <span className="text-accent font-medium">Let's Connect</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="animate-fade-in space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Mail className="w-8 h-8 text-primary" />
                  Let's Connect
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, collaborations, 
                  or just having a conversation about technology and innovation.
                </p>
              </div>
              
              <div className="space-y-8">
                {[{
                icon: Mail,
                label: "Email",
                value: "mukhtiyargpm2020@gmail.com",
                color: "primary"
              }, {
                icon: Linkedin,
                label: "LinkedIn",
                value: "https://www.linkedin.com/in/mulla-umar-mukhtiyar",
                color: "accent"
              }, {
                icon: Github,
                label: "GitHub",
                value: "https://github.com/umar1318",
                color: "primary"
              }].map((contact, index) => <div key={index} className="group">
                    <div className="glass-card p-6 hover:bg-primary/5 transition-all duration-300 border border-transparent hover:border-primary/20">
                      <div className="flex items-center gap-6">
                        <div className={`p-4 bg-gradient-to-br from-${contact.color}/10 to-accent/10 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300`}>
                          <contact.icon className={`w-6 h-6 text-${contact.color}`} />
                        </div>
                        <div>
                          <p className="font-bold text-lg mb-1">{contact.label}</p>
                          <p className="text-muted-foreground group-hover:text-primary transition-colors">{contact.value}</p>
                        </div>
                      </div>
                    </div>
                  </div>)}
              </div>
              
              {/* Social proof */}
              <div className="glass-card p-6 border border-primary/20">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-primary font-medium">Usually responds within 24 hours</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Ready to discuss your next project</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="animate-slide-up">
              <div className="glass-card p-8 border border-primary/20 hover:border-primary/30 transition-colors">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Send a Message</h3>
                  <p className="text-muted-foreground">Fill out the form below and I'll get back to you soon.</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">Name *</label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required className="bg-background/50 border-border hover:border-primary/50 focus:border-primary transition-colors" placeholder="Your full name" />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">Email *</label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required className="bg-background/50 border-border hover:border-primary/50 focus:border-primary transition-colors" placeholder="mukhtiyargpm2020@gmail.com" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">Message *</label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={5} className="bg-background/50 border-border hover:border-primary/50 focus:border-primary transition-colors resize-none" placeholder="Tell me about your project or just say hello..." />
                  </div>
                  
                  <Button type="submit" disabled={isSubmitting} className="w-full hover-glow group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? <>
                          <div className="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </> : <>
                          <MessageSquare className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          Send Message
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-border/50 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-secondary/5 to-background"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="text-2xl font-bold gradient-text">Umar Mulla</div>
              <p className="text-muted-foreground leading-relaxed">
                Aspiring Computer Science Engineer passionate about creating innovative digital solutions.
              </p>
              <div className="flex items-center gap-2 text-sm text-primary">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span>Open to new opportunities</span>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Quick Links</h4>
              <div className="flex flex-col space-y-2">
                {['About', 'Experience', 'Skills', 'Portfolio', 'Contact'].map(link => <button key={link} onClick={() => scrollToSection(link.toLowerCase())} className="text-muted-foreground hover:text-primary transition-colors text-left w-fit">
                    {link}
                  </button>)}
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Get In Touch</h4>
              <div className="space-y-3">
                <a href="mailto:mukhtiyargpm2020@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">mukhtiyargpm2020@gmail.com</span>
                </a>
                <div className="flex gap-3">
                  <a href="https://github.com/umar1318" target="_blank" rel="noopener noreferrer" className="p-2 glass-card hover:bg-primary/10 transition-colors group">
                    <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                  <a href="https://www.linkedin.com/in/mulla-umar-mukhtiyar" target="_blank" rel="noopener noreferrer" className="p-2 glass-card hover:bg-primary/10 transition-colors group">
                    <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom bar */}
          <div className="border-t border-border/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground text-sm">
                © 2024 Umar Mukhtiyar Mulla. All rights reserved.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Built with React & Tailwind CSS</span>
                <div className="w-1 h-1 bg-primary rounded-full"></div>
                
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Portfolio;