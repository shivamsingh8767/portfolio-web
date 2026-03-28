import { motion } from "motion/react";
import GlassCard from "./GlassCard";
import { Globe, BarChart3, Rocket, HeartHandshake, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Creating modern, responsive, and high-performance websites tailored to your needs using the latest web technologies.",
    icon: <Globe size={32} className="text-blue-400" />,
  },
  {
    title: "Data Analysis",
    description: "Extracting meaningful insights from data to help make informed decisions and drive growth.",
    icon: <BarChart3 size={32} className="text-purple-400" />,
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive and visually appealing user interfaces that provide a seamless user experience.",
    icon: <Rocket size={32} className="text-pink-400" />,
  },
  {
    title: "Freelance Support",
    description: "Providing dedicated support for small to medium projects with a focus on quality and client satisfaction.",
    icon: <HeartHandshake size={32} className="text-green-400" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-blue-600 font-bold text-xs uppercase tracking-[0.3em] mb-4"
            >
              What I Offer
            </motion.div>
            <h2 className="text-5xl font-black text-slate-900 tracking-tighter mb-6 leading-tight">
              SERVICES <br />
              <span className="text-gradient">DESIGNED</span> FOR <br />
              GROWTH
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-slate-500 font-medium text-lg leading-relaxed">
              I provide a range of digital services focused on creating value and delivering 
              exceptional user experiences. From the first line of code to the final data insight, 
              I ensure every detail is polished.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <GlassCard key={service.title} delay={i * 0.1} className="glass-hover group border-white/60 p-10">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="shrink-0 p-5 bg-white rounded-[2rem] shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {service.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
