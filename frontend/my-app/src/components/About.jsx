import { motion } from "framer-motion";
import { FaCode, FaPalette, FaRocket, FaHeart } from "react-icons/fa";
import LazyImage from "./LazyImage";

const About = () => {
  const skills = [
    { name: "Frontend Development", icon: FaCode, level: 90 },
    { name: "UI/UX Design", icon: FaPalette, level: 85 },
    { name: "Performance Optimization", icon: FaRocket, level: 88 },
    { name: "User Experience", icon: FaHeart, level: 92 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-primary-50/20 to-secondary-50/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10">
                <LazyImage
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop"
                  alt="About Me"
                  className="w-full h-96 lg:h-[500px] rounded-2xl shadow-2xl"
                />
              </div>

              {/* Background Elements */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 rounded-full opacity-60"
              />
              <motion.div
                animate={{
                  rotate: [360, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary-200 rounded-full opacity-60"
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Enhanced Section Title */}
            <motion.div variants={itemVariants}>
              <div className="relative mb-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
                  About <span className="gradient-text">Me</span>
                </h2>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-2 -right-8 text-3xl"
                >
                  👋
                </motion.div>
              </div>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                I'm a passionate web developer and designer with over{" "}
                <span className="text-primary-600 font-semibold">5 years</span>{" "}
                of experience creating beautiful, functional, and user-friendly
                digital experiences.
              </p>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                My journey in web development started with a curiosity about how
                websites work. Since then, I've dedicated myself to mastering
                the latest technologies and best practices in frontend
                development.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I believe in creating solutions that not only look great but
                also provide exceptional user experiences. Every project is an
                opportunity to learn, grow, and make a positive impact.
              </p>
            </motion.div>

            {/* Enhanced Skills */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h3 className="text-3xl font-black text-gray-900 flex items-center">
                My Skills
                <motion.span
                  animate={{ rotate: [0, 20, -20, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="ml-3 text-2xl"
                >
                  🚀
                </motion.span>
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-6 rounded-2xl space-y-4 group cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-primary-500/25 transition-shadow"
                        >
                          <skill.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <span className="font-semibold text-gray-800 text-lg">
                          {skill.name}
                        </span>
                      </div>
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        className="text-lg font-bold text-primary-600 bg-primary-50 px-3 py-1 rounded-full"
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1.5,
                          delay: index * 0.1 + 0.5,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-600 h-3 rounded-full relative"
                      >
                        <motion.div
                          animate={{ x: [-10, 10, -10] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 bg-white/30 rounded-full"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Download Resume
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Fun Facts Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="glass-card rounded-3xl p-8 md:p-16 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-100/50 via-transparent to-secondary-100/50" />
            <div className="relative z-10">
              <motion.h3
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                className="text-3xl md:text-4xl font-black text-center text-gray-900 mb-12"
              >
                Fun Facts About Me
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="inline-block ml-3 text-3xl"
                >
                  🎯
                </motion.span>
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    number: "500+",
                    label: "Cups of Coffee",
                    emoji: "☕",
                    color: "from-accent-500 to-accent-700",
                  },
                  {
                    number: "50+",
                    label: "Projects Completed",
                    emoji: "🚀",
                    color: "from-primary-500 to-primary-700",
                  },
                  {
                    number: "24/7",
                    label: "Learning Mode",
                    emoji: "📚",
                    color: "from-secondary-500 to-secondary-700",
                  },
                ].map((fact, index) => (
                  <motion.div
                    key={fact.label}
                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center group cursor-pointer"
                  >
                    <div className="glass-card rounded-2xl p-8 group-hover:shadow-2xl transition-all duration-300">
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.5,
                        }}
                        className="text-6xl mb-4"
                      >
                        {fact.emoji}
                      </motion.div>
                      <div
                        className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${fact.color} bg-clip-text text-transparent mb-3`}
                      >
                        {fact.number}
                      </div>
                      <div className="text-gray-700 font-semibold text-lg">
                        {fact.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
