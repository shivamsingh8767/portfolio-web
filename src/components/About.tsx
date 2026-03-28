import { motion } from "motion/react";
import GlassCard from "./GlassCard";
import { GraduationCap, User, Briefcase } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Header Bento */}
          <div className="lg:col-span-8">
            <GlassCard className="h-full flex flex-col justify-center p-12 border-white/60">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-blue-600 font-bold text-xs uppercase tracking-[0.3em] mb-6"
              >
                <div className="w-8 h-[2px] bg-blue-600" />
                About Shivam
              </motion.div>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">
                DRIVEN BY <span className="text-gradient">CURIOSITY</span> <br />
                FOCUSED ON <span className="text-gradient">IMPACT</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed font-medium max-w-2xl">
                I am currently pursuing a <span className="text-slate-900 font-bold">B.Tech in Computer Science Engineering (Core)</span> from 
                <span className="text-slate-900 font-bold"> IILM University</span>. As a first-year student, I've already begun 
                bridging the gap between academic theory and real-world application through freelance projects and hackathons.
              </p>
            </GlassCard>
          </div>

          {/* Quick Stats Bento */}
          <div className="lg:col-span-4">
            <GlassCard className="h-full bg-slate-900 text-white border-none p-10 flex flex-col justify-between">
              <div className="p-4 bg-white/10 rounded-2xl w-fit mb-8">
                <User size={32} className="text-blue-400" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">1st Year</h3>
                <p className="text-slate-400 font-medium">Undergraduate Student</p>
              </div>
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Status</span>
                  <span className="flex items-center gap-2 text-green-400 text-sm font-bold">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    Active Learner
                  </span>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Education Bento */}
          <div className="lg:col-span-5">
            <GlassCard delay={0.2} className="h-full border-white/60">
              <div className="flex items-center gap-4 text-indigo-600 mb-8">
                <div className="p-3 bg-indigo-500/10 rounded-xl">
                  <GraduationCap size={28} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Education</h3>
              </div>
              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-slate-100">
                  <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm" />
                  <h4 className="text-xl font-bold text-slate-900">B.Tech in CSE</h4>
                  <p className="text-indigo-600 font-bold text-sm mb-2">IILM University</p>
                  <p className="text-slate-500 text-sm font-medium">2025 — 2029 (Expected)</p>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Experience Bento */}
          <div className="lg:col-span-7">
            <GlassCard delay={0.4} className="h-full border-white/60">
              <div className="flex items-center gap-4 text-purple-600 mb-8">
                <div className="p-3 bg-purple-500/10 rounded-xl">
                  <Briefcase size={28} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Experience</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="inline-block px-3 py-1 rounded-lg bg-purple-500/10 text-purple-600 text-[10px] font-black uppercase tracking-widest mb-2">
                    Freelance
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Web Developer</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    Successfully delivered a professional branding website for a corporate client, 
                    focusing on modern UI and seamless UX.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="inline-block px-3 py-1 rounded-lg bg-blue-500/10 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-2">
                    Hackathons
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Innovator</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    Active participant in tech competitions, focusing on social impact projects 
                    like SAHAYAK AI.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
