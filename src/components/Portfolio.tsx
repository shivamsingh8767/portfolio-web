import { motion } from "motion/react";
import GlassCard from "./GlassCard";
import { ExternalLink, Github, Info } from "lucide-react";

const projects = [
  {
    title: "SAHAYAK AI",
    subtitle: "Smart Doctor Queue Management System",
    description: "A hackathon project focused on social impact. Inspired by IRCTC, this AI-based system helps manage patient queues efficiently in hospitals, reducing wait times and improving healthcare accessibility.",
    tags: ["AI", "Healthcare", "Queue Management", "Social Impact"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2670&auto=format&fit=crop",
    link: "#",
    github: "#",
  },
  {
    title: "Professional Portfolio",
    subtitle: "Freelance Project",
    description: "A customized website built for a working professional client, focusing on clean design, smooth navigation, and professional branding.",
    tags: ["Web Design", "Responsive", "Client Project"],
    image: "https://picsum.photos/seed/portfolio-client/800/600",
    link: "#",
    github: "#",
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-black mb-4 text-slate-900 tracking-tighter"
            >
              SELECTED <span className="text-gradient">WORKS</span>
            </motion.h2>
            <p className="text-slate-500 font-medium max-w-md">A collection of projects that demonstrate my technical skills and passion for problem-solving.</p>
          </div>
          <div className="h-px flex-grow bg-slate-200 mx-8 hidden md:block mb-4" />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-2"
          >
            <span className="px-4 py-2 glass rounded-full text-xs font-bold text-slate-600">All Projects</span>
            <span className="px-4 py-2 bg-slate-900 rounded-full text-xs font-bold text-white">Featured</span>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <GlassCard key={project.title} delay={i * 0.2} className="p-0 overflow-hidden flex flex-col h-full glass-hover border-white/60">
              <div className="relative h-80 overflow-hidden group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute top-6 left-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white bg-slate-900/80 backdrop-blur-md px-4 py-1.5 rounded-full">
                    {project.subtitle}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex gap-3">
                    <a href={project.link} className="flex-grow py-3 bg-white text-slate-900 rounded-xl font-bold text-center text-sm hover:bg-blue-50 transition-colors">
                      Live Preview
                    </a>
                    <a href={project.github} className="p-3 bg-white/20 backdrop-blur-md text-white rounded-xl hover:bg-white/30 transition-colors">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-10 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight">{project.title}</h3>
                  <div className="p-2 bg-blue-500/10 rounded-lg text-blue-600">
                    <ExternalLink size={18} />
                  </div>
                </div>
                
                <p className="text-slate-600 mb-8 flex-grow leading-relaxed font-medium">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
