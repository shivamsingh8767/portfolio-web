import { useState, useRef, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import GlassCard from "./GlassCard";
import { Mail, Phone, Github, Send, MessageSquare, MapPin, Clock, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus("submitting");

    try {
      await emailjs.sendForm(
        "service_akzkav9",
        "template_7p00btz",
        form.current,
        "JY4sEl31WzCb6w8JF"
      );
      setStatus("success");
      form.current.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-blue-600 font-bold text-xs uppercase tracking-[0.3em] mb-4"
            >
              Contact
            </motion.div>
            <h2 className="text-6xl font-black text-slate-900 tracking-tighter mb-8 leading-tight">
              LET'S <span className="text-gradient">BUILD</span> <br />
              SOMETHING <br />
              <span className="text-gradient">GREAT</span>
            </h2>
            <p className="text-slate-500 font-medium text-lg mb-12 leading-relaxed">
              Have a project in mind or just want to say hi? Feel free to reach out. 
              I'm always open to discussing new opportunities and creative ideas.
            </p>

            <div className="space-y-4">
              <GlassCard className="glass-hover border-white/60 p-6">
                <div className="flex items-center gap-5">
                  <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-600 shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-1">Email Me</p>
                    <a href="mailto:dynamoshiv@gmail.com" className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors">
                      dynamoshiv@gmail.com
                    </a>
                  </div>
                </div>
              </GlassCard>

              <GlassCard delay={0.1} className="glass-hover border-white/60 p-6">
                <div className="flex items-center gap-5">
                  <div className="p-4 bg-green-500/10 rounded-2xl text-green-600 shadow-sm">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-1">WhatsApp</p>
                    <a href="https://wa.me/917654674490" className="text-lg font-bold text-slate-900 hover:text-green-600 transition-colors">
                      +91 7654674490
                    </a>
                  </div>
                </div>
              </GlassCard>

              <GlassCard delay={0.2} className="glass-hover border-white/60 p-6">
                <div className="flex items-center gap-5">
                  <div className="p-4 bg-slate-900/5 rounded-2xl text-slate-900 shadow-sm">
                    <Github size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-1">GitHub</p>
                    <a href="https://github.com/shivamsingh8767" target="_blank" rel="noreferrer" className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors">
                      @shivamsingh8767
                    </a>
                  </div>
                </div>
              </GlassCard>

              <div className="grid grid-cols-2 gap-4">
                <GlassCard delay={0.3} className="glass-hover border-white/60 p-5">
                  <div className="flex flex-col gap-3">
                    <div className="p-3 bg-red-500/10 rounded-xl text-red-600 w-fit">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-[9px] text-slate-400 font-black uppercase tracking-[0.2em] mb-1">Location</p>
                      <p className="text-sm font-bold text-slate-900">Noida, Delhi NCR</p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard delay={0.4} className="glass-hover border-white/60 p-5">
                  <div className="flex flex-col gap-3">
                    <div className="p-3 bg-amber-500/10 rounded-xl text-amber-600 w-fit">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-[9px] text-slate-400 font-black uppercase tracking-[0.2em] mb-1">Working Hours</p>
                      <p className="text-sm font-bold text-slate-900">Mon - Fri, 9AM - 7PM</p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <GlassCard delay={0.3} className="border-white/60 p-12 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center py-20 text-center"
                  >
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-600 mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-500 font-medium">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                    <button 
                      onClick={() => setStatus("idle")}
                      className="mt-8 text-sm font-black text-blue-600 uppercase tracking-widest hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    ref={form}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-8" 
                    onSubmit={handleSubmit}
                  >
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                        <input 
                          required
                          name="from_name"
                          type="text" 
                          placeholder="John Doe" 
                          className="w-full px-8 py-5 glass rounded-2xl border-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all placeholder:text-slate-300 font-medium"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                        <input 
                          required
                          name="from_email"
                          type="email" 
                          placeholder="john@example.com" 
                          className="w-full px-8 py-5 glass rounded-2xl border-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all placeholder:text-slate-300 font-medium"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Subject</label>
                      <input 
                        required
                        name="subject"
                        type="text" 
                        placeholder="Project Inquiry / Job Opportunity" 
                        className="w-full px-8 py-5 glass rounded-2xl border-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all placeholder:text-slate-300 font-medium"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
                      <textarea 
                        required
                        name="message"
                        rows={6} 
                        placeholder="Tell me about your project..." 
                        className="w-full px-8 py-5 glass rounded-2xl border-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all resize-none placeholder:text-slate-300 font-medium"
                      ></textarea>
                    </div>
                    
                    {status === "error" && (
                      <div className="flex items-center gap-2 text-red-500 text-sm font-bold bg-red-500/5 p-4 rounded-xl border border-red-500/10">
                        <AlertCircle size={18} />
                        Something went wrong. Please try again or email me directly.
                      </div>
                    )}

                    <motion.button
                      disabled={status === "submitting"}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 shadow-2xl transition-all ${
                        status === "submitting" 
                        ? "bg-slate-400 cursor-not-allowed" 
                        : "bg-slate-900 text-white shadow-slate-900/20"
                      }`}
                    >
                      {status === "submitting" ? (
                        <>Sending... <Loader2 size={18} className="animate-spin" /></>
                      ) : (
                        <>Send Message <Send size={18} /></>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
