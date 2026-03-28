import { motion } from "motion/react";
import { ArrowRight, Github, Mail, Code2, Database, Sparkles, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] animate-pulse delay-700" />
      
      {/* Scrolling Background Text */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 opacity-[0.02] pointer-events-none select-none overflow-hidden whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="text-[20rem] font-black uppercase flex gap-20"
        >
          <span>DEVELOPER</span>
          <span>CREATOR</span>
          <span>ANALYST</span>
          <span>DEVELOPER</span>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/40 border border-white/60 text-blue-600 text-xs font-bold mb-8 shadow-sm backdrop-blur-sm"
          >
            <Sparkles size={14} className="animate-spin-slow" />
            <span>Available for Freelance & Internships</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-[0.9] tracking-tighter text-slate-900">
            CRAFTING <br />
            <span className="text-gradient">DIGITAL</span> <br />
            EXPERIENCES
          </h1>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-blue-600/30" />
            <p className="text-xl text-blue-600 font-semibold tracking-tight uppercase">Shivam Singh — Web Developer</p>
          </div>

          <p className="text-slate-600 text-lg mb-10 max-w-xl leading-relaxed font-medium">
            I am a passionate developer dedicated to creating modern, responsive, and user-friendly websites. 
            Currently pursuing B.Tech at IILM University, I turn ideas into functional digital reality.
          </p>

          <div className="flex flex-wrap gap-5">
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold flex items-center gap-3 transition-all shadow-xl shadow-slate-900/20"
            >
              Explore Projects <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 glass glass-hover rounded-2xl font-bold text-slate-800 transition-all"
            >
              Let's Talk
            </motion.a>
          </div>

          <div className="mt-16 flex items-center gap-8">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white glass overflow-hidden">
                  <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white glass flex items-center justify-center text-[10px] font-bold text-slate-600">
                +10
              </div>
            </div>
            <p className="text-sm font-semibold text-slate-500">Trusted by local clients for quality work</p>
          </div>
        </motion.div>

        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            className="relative z-10"
          >
            <div className="relative w-full aspect-square max-w-sm mx-auto rounded-full overflow-hidden glass p-3 shadow-2xl">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500/10 to-indigo-500/10 flex items-center justify-center relative overflow-hidden">
                <img 
                  src="https://i.postimg.cc/Mn5fCyqW/file-0000000006347207b715d77eaab6c88e.jpg" 
                  alt="Shivam Singh" 
                  className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-110"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback if the direct link guess is wrong
                    e.currentTarget.src = "https://picsum.photos/seed/shivam-singh/800/800";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
              </div>
            </div>

            {/* Floating Bento Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
            >
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-600">
                <Terminal size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Status</p>
                <p className="text-xs font-bold text-slate-800">Coding...</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 -left-12 glass p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
            >
              <div className="p-2 bg-purple-500/10 rounded-lg text-purple-600">
                <Database size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Focus</p>
                <p className="text-xs font-bold text-slate-800">Data Science</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 right-12 glass p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
            >
              <div className="p-2 bg-orange-500/10 rounded-lg text-orange-600">
                <Code2 size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Skills</p>
                <p className="text-xs font-bold text-slate-800">React & JS</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Decorative shapes */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-blue-500/10 rounded-full -z-10 animate-spin-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-indigo-500/5 rounded-full -z-10 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '20s' }} />
        </div>
      </div>
    </section>
  );
}
