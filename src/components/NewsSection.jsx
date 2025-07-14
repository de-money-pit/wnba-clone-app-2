import React, { useRef } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const NewsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const newsItems = [
    {
      id: 1,
      title: "WNBA Finals Set: Las Vegas Aces vs New York Liberty",
      excerpt: "Two powerhouse teams prepare for an epic showdown in the championship series that promises to be one for the ages.",
      image: "https://cdn.prod.website-files.com/6855a75e01536cdaa2507be2/687150bca040dead286fa010_maxresdefault.jpg",
      category: "Finals",
      date: "2024-10-15",
      readTime: "3 min read",
      featured: true
    },
    {
      id: 2,
      title: "A'ja Wilson Breaks Single-Season Scoring Record",
      excerpt: "The Las Vegas Aces superstar makes history with her incredible performance throughout the season.",
      image: "https://cdn.prod.website-files.com/6855a75e01536cdaa2507be2/685eefa9d263d1d66bd1df78_court.png",
      category: "Records",
      date: "2024-10-12",
      readTime: "2 min read",
      featured: false
    },
    {
      id: 3,
      title: "Rookie of the Year Race Heats Up",
      excerpt: "Three outstanding first-year players are making their case for the prestigious award.",
      image: "https://cdn.prod.website-files.com/6855a75e01536cdaa2507be2/685ecd2c6586cbff69fbcb15_Lines.avif",
      category: "Awards",
      date: "2024-10-10",
      readTime: "4 min read",
      featured: false
    },
    {
      id: 4,
      title: "WNBA Expansion Plans Announced",
      excerpt: "The league reveals exciting plans for growth with new franchises joining in the coming years.",
      image: "https://cdn.prod.website-files.com/6855a75e01536cdaa2507be2/685ecd2c23fd218e1f1ace74_star.avif",
      category: "League News",
      date: "2024-10-08",
      readTime: "5 min read",
      featured: false
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <section id="news" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black font-wnba text-gray-800 mb-4">
            LATEST <span className="gradient-text">NEWS</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the most recent developments in women's basketball
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            {newsItems.filter(item => item.featured).map((item) => (
              <article key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-wnba-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl md:text-3xl font-bold font-wnba text-gray-800 mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{formatDate(item.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={16} />
                        <span>{item.readTime}</span>
                      </div>
                    </div>
                    <button className="flex items-center space-x-2 text-wnba-orange font-semibold hover:text-wnba-blue transition-colors duration-300">
                      <span>Read More</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </motion.div>

          {/* News List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {newsItems.filter(item => !item.featured).map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
              >
                <div className="flex">
                  <div className="w-24 h-24 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 flex-1">
                    <div className="mb-2">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-semibold">
                        {item.category}
                      </span>
                    </div>
                    <h4 className="font-bold font-wnba text-gray-800 mb-2 text-sm leading-tight">
                      {item.title}
                    </h4>
                    <div className="flex items-center space-x-3 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar size={12} />
                        <span>{formatDate(item.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={12} />
                        <span>{item.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}

            {/* View All News Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center pt-4"
            >
              <button className="btn-primary w-full">
                View All News
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;