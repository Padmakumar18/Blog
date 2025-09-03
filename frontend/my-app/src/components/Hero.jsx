import { motion } from "framer-motion";
import { FaArrowDown, FaPlay, FaStar } from "react-icons/fa";

const Hero = () => {
  const scrollToBlog = () => {
    const element = document.getElementById("blog");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-neutral-50 via-primary-50/30 to-secondary-50/20"
    >
      {/* Smooth Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-primary-200/20 to-secondary-200/20 rounded-full blur-2xl"
        />

        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-accent-200/15 to-primary-200/15 rounded-full blur-3xl"
        />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid opacity-30" />

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
            className="absolute w-1 h-1 bg-primary-400 rounded-full"
            style={{
              left: `${15 + i * 10}%`,
              top: `${25 + i * 8}%`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 px-3 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative mb-8 sm:mb-12"
          >
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-neutral-900 mb-6 sm:mb-8 leading-[1.1] sm:leading-tight tracking-tight px-2 sm:px-0">
              <span className="block sm:inline">Welcome to</span>{" "}
              <span className="relative inline-block">
                <span className="text-gradient">My Blog</span>
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -inset-4 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-3xl blur-xl -z-10"
                />
              </span>
            </h1>

            {/* Decorative elements */}
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 text-4xl opacity-60"
            >
              ✨
            </motion.div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl text-neutral-600 leading-relaxed mb-16 max-w-4xl mx-auto"
          >
            Discover amazing stories, insights, and experiences through my
            personal blog. Join me on this journey of{" "}
            <span className="text-gradient font-semibold">
              continuous learning
            </span>{" "}
            and{" "}
            <span className="text-gradient-accent font-semibold">
              creative sharing
            </span>
            .
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToBlog}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <span>Explore Articles</span>
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FaArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
              </motion.div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-neutral-200 hover:bg-white hover:border-primary-300 text-neutral-700 hover:text-primary-700 font-semibold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
                className="w-6 h-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center"
              >
                <FaPlay className="w-3 h-3 text-white ml-0.5" />
              </motion.div>
              <span>Watch Demo</span>
            </motion.button>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[
              {
                number: "50+",
                label: "Articles Published",
                icon: "📚",
                gradient: "from-primary-500 to-primary-700",
                bgGradient: "from-primary-50 to-primary-100",
              },
              {
                number: "10K+",
                label: "Happy Readers",
                icon: "👥",
                gradient: "from-secondary-500 to-secondary-700",
                bgGradient: "from-secondary-50 to-secondary-100",
              },
              {
                number: "4.9",
                label: "Average Rating",
                icon: <FaStar className="w-8 h-8 text-accent-500" />,
                gradient: "from-accent-500 to-accent-700",
                bgGradient: "from-accent-50 to-accent-100",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1 + index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="group cursor-pointer"
              >
                <div
                  className={`bg-white/80 backdrop-blur-sm border border-white/20 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 text-center bg-gradient-to-br ${stat.bgGradient} border-0`}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: "easeInOut",
                    }}
                    className="text-5xl mb-6 flex justify-center"
                  >
                    {typeof stat.icon === "string" ? stat.icon : stat.icon}
                  </motion.div>
                  <div
                    className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-4`}
                  >
                    {stat.number}
                  </div>
                  <div className="text-neutral-700 font-semibold text-lg">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Smooth Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-neutral-300 rounded-full flex justify-center cursor-pointer hover:border-primary-400 transition-colors duration-300"
          onClick={scrollToBlog}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-neutral-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
