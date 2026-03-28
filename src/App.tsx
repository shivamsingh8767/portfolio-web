import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
      </main>

      <footer className="py-20 border-t border-slate-100 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-blue-500/5 to-transparent -z-10" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-black text-gradient mb-6 tracking-tighter">Shivam Singh</h2>
              <p className="text-slate-500 font-medium max-w-sm leading-relaxed">
                A passionate web developer dedicated to creating modern, responsive, and user-friendly websites. 
                Turning ideas into functional digital experiences.
              </p>
            </div>
            
            <div>
              <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-6">Navigation</h3>
              <ul className="space-y-4 text-sm font-bold text-slate-400">
                <li><a href="#home" className="hover:text-blue-600 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-blue-600 transition-colors">About</a></li>
                <li><a href="#portfolio" className="hover:text-blue-600 transition-colors">Portfolio</a></li>
                <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-6">Connect</h3>
              <ul className="space-y-4 text-sm font-bold text-slate-400">
                <li><a href="https://github.com/shivamsingh8767" className="hover:text-blue-600 transition-colors">GitHub</a></li>
                <li><a href="https://wa.me/917654674490" className="hover:text-blue-600 transition-colors">WhatsApp</a></li>
                <li><a href="mailto:dynamoshiv@gmail.com" className="hover:text-blue-600 transition-colors">Email</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-6">Location & Hours</h3>
              <ul className="space-y-4 text-sm font-bold text-slate-400">
                <li className="flex items-center gap-2">Noida, Delhi NCR</li>
                <li className="flex items-center gap-2">Mon - Fri, 9AM - 7PM</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              © 2026 Shivam Singh. All Rights Reserved.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
              Built with <span className="text-red-500 animate-pulse">❤</span> in India
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
