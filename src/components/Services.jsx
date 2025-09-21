import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Smartphone, Zap } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Web Development",
    icon: Code,
    description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
    features: ["React & Next.js", "Responsive Design", "Performance Optimization", "SEO Friendly"],
    gradient: "from-blue-500 to-purple-600"
  },
  {
    id: 2,
    title: "Brand Identity",
    icon: Palette,
    description: "Complete brand development from logo design to brand guidelines that capture your unique identity.",
    features: ["Logo Design", "Brand Guidelines", "Color Palettes", "Typography"],
    gradient: "from-pink-500 to-rose-600"
  },
  {
    id: 3,
    title: "UI/UX Design",
    icon: Smartphone,
    description: "User-centered design solutions that prioritize usability, accessibility, and aesthetic appeal.",
    features: ["User Research", "Wireframing", "Prototyping", "User Testing"],
    gradient: "from-green-500 to-teal-600"
  },
  {
    id: 4,
    title: "Digital Solutions",
    icon: Zap,
    description: "Complete digital transformation services to streamline your business processes and enhance productivity.",
    features: ["Automation", "Integration", "Analytics", "Consultation"],
    gradient: "from-orange-500 to-yellow-600"
  }
];

const Services = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
      rotateY: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      rotateY: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section ref={containerRef} className="py-20 px-6 relative overflow-hidden" id="services">
      {/* Background Elements */}
      <motion.div
        style={{ y }}
        className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-brand-accent/10 to-brand-primary/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-brand-primary to-brand-accent mx-auto mb-6"
          />
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-text-primary mb-6"
          >
            Our Services
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-text-secondary max-w-3xl mx-auto"
          >
            We craft digital experiences that captivate, engage, and deliver results for your business.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover="hover"
                className="group relative"
              >
                <motion.div
                  variants={cardHoverVariants}
                  className="bg-surface/50 backdrop-blur-sm rounded-2xl p-8 border border-surface-secondary hover:border-brand-primary/50 transition-all duration-300 relative overflow-hidden h-full"
                >
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />
                  
                  {/* Icon with enhanced animation */}
                  <motion.div
                    variants={iconVariants}
                    className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 relative z-10`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                    
                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-white/20"
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{ opacity: 1, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  <motion.h3
                    className="text-2xl font-bold text-text-primary mb-4 group-hover:text-brand-primary transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {service.title}
                  </motion.h3>

                  <motion.p
                    className="text-text-secondary mb-6 leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {service.description}
                  </motion.p>

                  {/* Features list with staggered animation */}
                  <motion.ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        className="flex items-center text-text-muted group-hover:text-text-secondary transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          delay: featureIndex * 0.1,
                          duration: 0.4 
                        }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="w-2 h-2 bg-brand-primary rounded-full mr-3"
                          whileHover={{ scale: 1.5 }}
                          transition={{ duration: 0.2 }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </motion.ul>

                  {/* Hover effect - floating arrow */}
                  <motion.div
                    className="absolute top-6 right-6 opacity-0 group-hover:opacity-100"
                    initial={{ rotate: -45, scale: 0 }}
                    whileHover={{ rotate: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-6 h-6 border-2 border-brand-primary border-l-0 border-b-0 transform rotate-45" />
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px -10px hsl(var(--brand-primary) / 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-accent text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
          >
            <motion.span
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10">Let's Work Together</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;