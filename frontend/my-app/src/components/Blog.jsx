import { motion } from "framer-motion";
import { FaCalendarAlt, FaUser, FaArrowRight, FaTag } from "react-icons/fa";
import LazyImage from "./LazyImage";

const Blog = () => {
  // Sample blog data - in a real app, this would come from an API
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      excerpt:
        "Learn the fundamentals of React Hooks and how they can simplify your component logic.",
      content:
        "React Hooks revolutionized the way we write React components...",
      author: "John Doe",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "React",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop",
      featured: true,
    },
    {
      id: 2,
      title: "Mastering CSS Grid Layout",
      excerpt:
        "A comprehensive guide to CSS Grid and how to create complex layouts with ease.",
      content:
        "CSS Grid is a powerful layout system that allows you to create complex...",
      author: "Jane Smith",
      date: "2024-01-12",
      readTime: "8 min read",
      category: "CSS",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
      featured: false,
    },
    {
      id: 3,
      title: "JavaScript ES2024 Features",
      excerpt:
        "Explore the latest JavaScript features and how they can improve your code.",
      content:
        "JavaScript continues to evolve with new features that make development...",
      author: "Mike Johnson",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "JavaScript",
      image:
        "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=500&h=300&fit=crop",
      featured: false,
    },
    {
      id: 4,
      title: "Building Responsive Web Design",
      excerpt:
        "Best practices for creating websites that work perfectly on all devices.",
      content:
        "Responsive web design is essential in today's multi-device world...",
      author: "Sarah Wilson",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "Design",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      featured: false,
    },
    {
      id: 5,
      title: "Node.js Performance Optimization",
      excerpt:
        "Tips and tricks to optimize your Node.js applications for better performance.",
      content:
        "Performance optimization is crucial for Node.js applications...",
      author: "David Brown",
      date: "2024-01-05",
      readTime: "9 min read",
      category: "Node.js",
      image:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500&h=300&fit=crop",
      featured: false,
    },
    {
      id: 6,
      title: "Introduction to TypeScript",
      excerpt:
        "Learn TypeScript basics and how it can improve your JavaScript development.",
      content:
        "TypeScript brings static typing to JavaScript, making your code more...",
      author: "Lisa Davis",
      date: "2024-01-03",
      readTime: "6 min read",
      category: "TypeScript",
      image:
        "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=500&h=300&fit=crop",
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="blog" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Latest <span className="gradient-text">Blog Posts</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover insights, tutorials, and stories from the world of web
            development
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {(() => {
            const featuredPost = blogPosts.find((post) => post.featured);
            return (
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="relative h-64 md:h-full">
                      <LazyImage
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-full"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="flex items-center text-gray-500 text-sm">
                        <FaTag className="w-4 h-4 mr-1" />
                        {featuredPost.category}
                      </span>
                      <span className="text-gray-300">•</span>
                      <span className="text-gray-500 text-sm">
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                          <FaUser className="w-5 h-5 text-primary-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">
                            {featuredPost.author}
                          </div>
                          <div className="flex items-center text-gray-500 text-sm">
                            <FaCalendarAlt className="w-3 h-3 mr-1" />
                            {new Date(featuredPost.date).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary flex items-center space-x-2"
                      >
                        <span>Read More</span>
                        <FaArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts
            .filter((post) => !post.featured)
            .map((post) => (
              <motion.article
                key={post.id}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <LazyImage
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                    <span className="flex items-center">
                      <FaCalendarAlt className="w-3 h-3 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                        <FaUser className="w-4 h-4 text-primary-600" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {post.author}
                      </span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center space-x-1"
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
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
          >
            Load More Posts
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
