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
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
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
            {/* Section Title */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                About <span className="gradient-text">Me</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                I'm a passionate web developer and designer with over 5 years of
                experience creating beautiful, functional, and user-friendly
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

            {/* Skills */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">My Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                          <skill.icon className="w-4 h-4 text-primary-600" />
                        </div>
                        <span className="font-medium text-gray-700">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                      />
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

        {/* Fun Facts Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
              Fun Facts About Me
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: "500+", label: "Cups of Coffee", emoji: "☕" },
                { number: "50+", label: "Projects Completed", emoji: "🚀" },
                { number: "24/7", label: "Learning Mode", emoji: "📚" },
              ].map((fact, index) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl mb-2">{fact.emoji}</div>
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {fact.number}
                  </div>
                  <div className="text-gray-600 font-medium">{fact.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
