import { motion } from "motion/react";
import GlassCard from "./GlassCard";
import { Code2, Palette, Database, Layout, Sparkles } from "lucide-react";

const skills = [
  { name: "HTML", level: 95, icon: <Code2 className="text-orange-500" /> },
  { name: "CSS", level: 90, icon: <Layout className="text-blue-500" /> },
  { name: "JavaScript", level: 85, icon: <Code2 className="text-yellow-500" /> },
  { name: "Basic UI/UX", level: 70, icon: <Palette className="text-pink-500" /> },
  { name: "Data Analytics", level: 65, icon: <Database className="text-purple-500" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-500/5 to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-blue-600 font-bold text-xs uppercase tracking-[0.3em] mb-4"
            >
              Expertise
            </motion.div>
            <h2 className="text-5xl font-black text-slate-900 tracking-tighter mb-6">
              TECHNICAL <span className="text-gradient">STACK</span>
            </h2>
            <p className="text-slate-500 font-medium text-lg">
              I specialize in building robust front-end applications and exploring the world of data analytics 
              to create intelligent web solutions.
            </p>
          </div>
          
          <div className="flex gap-4">
            <div className="glass p-6 rounded-[2rem] border-white/60 flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-black text-slate-900">85%</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Overall</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <GlassCard key={skill.name} delay={i * 0.1} className="glass-hover border-white/60 p-8 group">
              <div className="flex justify-between items-start mb-8">
                <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <span className="text-2xl font-black text-slate-200 group-hover:text-blue-500/20 transition-colors">0{i + 1}</span>
              </div>
              
              <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">{skill.name}</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                  <span className="text-slate-400">Mastery</span>
                  <span className="text-blue-600">{skill.level}%</span>
                </div>
                <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden p-0.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: i * 0.1 + 0.5, ease: "circOut" }}
                    className="h-full bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 rounded-full shadow-sm"
                  />
                </div>
              </div>
            </GlassCard>
          ))}
          
          {/* Learning Card */}
          <GlassCard delay={0.6} className="bg-slate-900 border-none p-8 flex flex-col justify-center items-center text-center">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
              <Sparkles className="text-blue-400 animate-pulse" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Always Learning</h3>
            <p className="text-slate-400 text-sm font-medium">Currently exploring Next.js & Advanced Python</p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
