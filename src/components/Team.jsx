import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import hasinaImage from '../assets/team-hasina.jpg';
import lovishImage from '../assets/team-lovish.jpg';

const teamMembers = [
  {
    id: 1,
    name: "Hasina",
    role: "Graphic Designer",
    avatar: hasinaImage,
    skills: ["Brand Identity", "Visual Design", "Illustration", "Typography"]
  },
  {
    id: 2,
    name: "Lovish",
    role: "CEO, Founder & Developer",
    avatar: lovishImage,
    skills: ["Full-Stack Development", "Strategy", "Leadership", "Innovation"]
  }
];

const Team = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8,
      rotateY: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -15,
      scale: 1.05,
      rotateY: 5,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const avatarHoverVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.1,
      backgroundColor: "hsl(var(--brand-primary))",
      color: "white",
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section ref={containerRef} className="py-20 px-6 relative overflow-hidden" id="team">
      {/* Animated Background Elements */}
      <motion.div
        style={{ y }}
        className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-brand-accent/15 to-brand-primary/15 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 30]) }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
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
            Meet Our Team
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-text-secondary max-w-3xl mx-auto"
          >
            Passionate creators dedicated to bringing your digital vision to life through innovation and expertise.
          </motion.p>
        </motion.div>

        {/* Team Members Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              whileHover="hover"
              className="group relative"
            >
              <motion.div
                variants={cardHoverVariants}
                className="bg-surface/30 backdrop-blur-sm rounded-3xl p-8 border border-surface-secondary hover:border-brand-primary/50 transition-all duration-500 relative overflow-hidden text-center"
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Avatar with multiple animation layers */}
                <motion.div className="relative mb-6 mx-auto w-32 h-32">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-accent rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  />
                  
                  <motion.img
                    variants={avatarHoverVariants}
                    src={member.avatar}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-surface-secondary group-hover:border-brand-primary/50 transition-all duration-500 relative z-10"
                  />
                  
                  {/* Floating ring animation */}
                  <motion.div
                    className="absolute inset-0 border-2 border-brand-primary/30 rounded-full"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.8, 0.3],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                {/* Name with enhanced hover effect */}
                <motion.h3
                  className="text-2xl font-bold text-text-primary mb-2 group-hover:text-brand-primary transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {member.name}
                </motion.h3>

                {/* Role with animation */}
                <motion.p
                  className="text-text-secondary mb-6 font-medium"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1.02 }}
                >
                  {member.role}
                </motion.p>

                {/* Skills with individual animations */}
                <motion.div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      variants={skillVariants}
                      initial="hidden"
                      whileInView="visible"
                      whileHover="hover"
                      custom={skillIndex}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-surface-secondary/50 text-text-muted text-sm rounded-full border border-surface-secondary hover:border-brand-primary cursor-default transition-all duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Decorative elements */}
                <motion.div
                  className="absolute top-4 right-4 w-4 h-4 bg-brand-primary/20 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.8, 0.2]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <motion.div
            className="bg-gradient-to-br from-surface/50 to-surface/30 backdrop-blur-sm rounded-3xl p-12 border border-surface-secondary relative overflow-hidden"
            whileHover={{
              scale: 1.02,
              borderColor: "hsl(var(--brand-primary) / 0.3)"
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Background decoration */}
            <motion.div
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary to-brand-accent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />

            <motion.blockquote
              className="text-2xl md:text-3xl font-light text-text-primary mb-8 italic leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              "At Solitude, we believe in the power of creative solitude to produce extraordinary digital experiences that connect and inspire."
            </motion.blockquote>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px -10px hsl(var(--brand-primary) / 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-brand-primary to-brand-accent text-white rounded-full font-semibold transition-all duration-300 group relative overflow-hidden"
              >
                <motion.span
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">Our Story</span>
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "hsl(var(--brand-primary))",
                  color: "hsl(var(--brand-primary))"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-text-muted text-text-primary rounded-full font-semibold transition-all duration-300 hover:bg-brand-primary/5"
              >
                Contact Us
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;