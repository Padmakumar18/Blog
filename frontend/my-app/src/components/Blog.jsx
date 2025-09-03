import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaUser,
  FaArrowRight,
  FaTag,
  FaClock,
  FaHeart,
} from "react-icons/fa";
import LazyImage from "./LazyImage";

const Blog = () => {
  // Enhanced blog data with modern categories and better content
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      excerpt:
        "Learn the fundamentals of React Hooks and how they can simplify your component logic with practical examples.",
      content:
        "React Hooks revolutionized the way we write React components...",
      author: "John Doe",
      date: "2024-01-15",
      readTime: "5 min",
      category: "React",
      categoryColor: "from-blue-500 to-cyan-500",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop&auto=format",
      featured: true,
      likes: 124,
      views: "2.1k",
    },
    {
      id: 2,
      title: "Mastering CSS Grid Layout",
      excerpt:
        "A comprehensive guide to CSS Grid and how to create complex, responsive layouts with ease and precision.",
      content:
        "CSS Grid is a powerful layout system that allows you to create complex...",
      author: "Jane Smith",
      date: "2024-01-12",
      readTime: "8 min",
      category: "CSS",
      categoryColor: "from-purple-500 to-pink-500",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&auto=format",
      featured: false,
      likes: 89,
      views: "1.8k",
    },
    {
      id: 3,
      title: "JavaScript ES2024 Features",
      excerpt:
        "Explore the latest JavaScript features and how they can improve your code quality and development experience.",
      content:
        "JavaScript continues to evolve with new features that make development...",
      author: "Mike Johnson",
      date: "2024-01-10",
      readTime: "6 min",
      category: "JavaScript",
      categoryColor: "from-yellow-500 to-orange-500",
      image:
        "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=600&h=400&fit=crop&auto=format",
      featured: false,
      likes: 156,
      views: "3.2k",
    },
    {
      id: 4,
      title: "Building Responsive Web Design",
      excerpt:
        "Best practices for creating websites that work perfectly on all devices, from mobile to desktop.",
      content:
        "Responsive web design is essential in today's multi-device world...",
      author: "Sarah Wilson",
      date: "2024-01-08",
      readTime: "7 min",
      category: "Design",
      categoryColor: "from-green-500 to-teal-500",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format",
      featured: false,
      likes: 203,
      views: "4.1k",
    },
    {
      id: 5,
      title: "Node.js Performance Optimization",
      excerpt:
        "Tips and tricks to optimize your Node.js applications for better performance and scalability.",
      content:
        "Performance optimization is crucial for Node.js applications...",
      author: "David Brown",
      date: "2024-01-05",
      readTime: "9 min",
      category: "Node.js",
      categoryColor: "from-emerald-500 to-green-600",
      image:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop&auto=format",
      featured: false,
      likes: 78,
      views: "1.5k",
    },
    {
      id: 6,
      title: "Introduction to TypeScript",
      excerpt:
        "Learn TypeScript basics and how it can improve your JavaScript development with type safety.",
      content:
        "TypeScript brings static typing to JavaScript, making your code more...",
      author: "Lisa Davis",
      date: "2024-01-03",
      readTime: "6 min",
      category: "TypeScript",
      categoryColor: "from-indigo-500 to-blue-600",
      image:
        "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=400&fit=crop&auto=format",
      featured: false,
      likes: 134,
      views: "2.7k",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="blog"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-50 via-primary-50/20 to-secondary-50/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Modern Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative inline-block mb-8"
          >
            <h2 className="heading-2 mb-4">
              Latest <span className="text-gradient">Articles</span>
            </h2>

            {/* Decorative elements */}
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -right-8 text-3xl opacity-60"
            >
              ✨
            </motion.div>

            <motion.div
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-4 -left-6 text-2xl opacity-40"
            >
              📚
            </motion.div>
          </motion.div>

          <p className="body-large max-w-3xl mx-auto">
            Discover insights, tutorials, and stories from the world of{" "}
            <span className="text-gradient font-semibold">web development</span>
            , <span className="text-gradient-accent font-semibold">design</span>
            , and{" "}
            <span className="text-gradient font-semibold">technology</span>.
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-20"
        >
          {(() => {
            const featuredPost = blogPosts.find((post) => post.featured);
            return (
              <motion.div
                whileHover={{ y: -8, scale: 1.01 }}
                className="card card-hover card-gradient rounded-4xl overflow-hidden group cursor-pointer"
              >
                <div className="lg:flex">
                  <div className="lg:w-3/5 relative overflow-hidden">
                    <div className="relative h-80 lg:h-96">
                      <LazyImage
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 smooth-transform"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                      {/* Featured badge */}
                      <div className="absolute top-6 left-6">
                        <motion.span
                          whileHover={{ scale: 1.05 }}
                          className={`inline-flex items-center gap-2 bg-gradient-to-r ${featuredPost.categoryColor} text-white px-4 py-2 rounded-2xl text-sm font-semibold shadow-large`}
                        >
                          <span className="text-lg">⭐</span>
                          Featured
                        </motion.span>
                      </div>

                      {/* Stats overlay */}
                      <div className="absolute bottom-6 left-6 flex items-center gap-4 text-white">
                        <div className="flex items-center gap-1 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
                          <FaHeart className="w-3 h-3" />
                          <span className="text-sm font-medium">
                            {featuredPost.likes}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
                          <span className="text-sm font-medium">
                            {featuredPost.views} views
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      <span
                        className={`inline-flex items-center gap-2 bg-gradient-to-r ${featuredPost.categoryColor} text-white px-4 py-2 rounded-2xl text-sm font-semibold`}
                      >
                        <FaTag className="w-3 h-3" />
                        {featuredPost.category}
                      </span>
                      <div className="flex items-center gap-1 text-neutral-500">
                        <FaClock className="w-3 h-3" />
                        <span className="text-sm font-medium">
                          {featuredPost.readTime}
                        </span>
                      </div>
                    </div>

                    <h3 className="heading-3 mb-6 group-hover:text-primary-600 smooth-hover">
                      {featuredPost.title}
                    </h3>

                    <p className="body mb-8">{featuredPost.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center shadow-soft">
                          <FaUser className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-neutral-900">
                            {featuredPost.author}
                          </div>
                          <div className="flex items-center gap-1 text-neutral-500 text-sm">
                            <FaCalendarAlt className="w-3 h-3" />
                            {new Date(featuredPost.date).toLocaleDateString()}
                          </div>
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02, x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        className="btn-primary interactive"
                      >
                        <span>Read Article</span>
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <FaArrowRight className="w-4 h-4" />
                        </motion.div>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })()}
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {blogPosts
            .filter((post) => !post.featured)
            .map((post, index) => (
              <motion.article
                key={post.id}
                variants={cardVariants}
                whileHover={{ y: -12, scale: 1.02 }}
                className="card card-hover card-gradient rounded-3xl overflow-hidden group cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <LazyImage
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 smooth-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className={`inline-flex items-center gap-2 bg-gradient-to-r ${post.categoryColor} text-white px-3 py-1.5 rounded-2xl text-xs font-semibold shadow-medium`}
                    >
                      <FaTag className="w-2.5 h-2.5" />
                      {post.category}
                    </motion.span>
                  </div>

                  {/* Reading time */}
                  <div className="absolute top-4 right-4">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.5,
                        ease: "easeInOut",
                      }}
                      className="bg-white/20 backdrop-blur-sm rounded-full p-2 text-white"
                    >
                      <FaClock className="w-3 h-3" />
                    </motion.div>
                  </div>

                  {/* Stats overlay */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-3 text-white text-sm">
                    <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
                      <FaHeart className="w-3 h-3" />
                      <span className="font-medium">{post.likes}</span>
                    </div>
                    <div className="bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
                      <span className="font-medium">{post.views}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4 text-sm text-neutral-500">
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt className="w-3 h-3" />
                      <span className="font-medium">
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                    </div>
                    <span>•</span>
                    <span className="font-medium">{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-neutral-900 mb-3 line-clamp-2 group-hover:text-primary-600 smooth-hover leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-neutral-600 mb-6 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 bg-gradient-to-br ${post.categoryColor} rounded-2xl flex items-center justify-center shadow-soft`}
                      >
                        <FaUser className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-neutral-700">
                        {post.author}
                      </span>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05, x: 4 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-ghost btn-sm interactive"
                    >
                      <span>Read</span>
                      <FaArrowRight className="w-3 h-3" />
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="btn-secondary btn-lg interactive shimmer"
          >
            <span>Load More Articles</span>
            <motion.div
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <FaArrowRight className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
