import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const VideoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const [activeVideo, setActiveVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const videos = [
    {
      id: 1,
      title: "Best Plays of the Season",
      description: "Watch the most incredible moments from this year's WNBA season",
      thumbnail: "https://cdn.prod.website-files.com/6855a75e01536cdaa2507be2/687150bca040dead286fa010_maxresdefault.jpg",
      duration: "3:45",
      category: "Highlights"
    },
    {
      id: 2,
      title: "Championship Preview",
      description: "An in-depth look at the teams competing for the title",
      thumbnail: "https://cdn.prod.website-files.com/6855a75e01536cdaa2507be2/685eefa9d263d1d66bd1df78_court.png",
      duration: "5:20",
      category: "Analysis"
    },
    {
      id: 3,
      title: "Rising Stars Documentary",
      description: "Meet the next generation of WNBA superstars",
      thumbnail: "https://cdn.prod.website-files.com/6855a75e01536cdaa2507be2/685ecd2c6586cbff69fbcb15_Lines.avif",
      duration: "12:30",
      category: "Documentary"
    },
    {
      id: 4,
      title: "Behind the Scenes",
      description: "Exclusive access to training sessions and team preparations",
      thumbnail: "https://cdn.prod.website-files.com/6855a75e01536cdaa2507be2/685ecd2c23fd218e1f1ace74_star.avif",
      duration: "8:15",
      category: "Behind the Scenes"
    }
  ];

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoSelect = (index) => {
    setActiveVideo(index);
    setIsPlaying(false);
  };

  return (
    <section id="video" className="py-20 bg-gray-900 text-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black font-wnba mb-4">
            WATCH <span className="gradient-text">NOW</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the excitement with our exclusive video content
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Video Player */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl">
              {/* Video Placeholder */}
              <div className="relative aspect-video bg-gradient-to-br from-wnba-orange to-wnba-blue flex items-center justify-center">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  poster={videos[activeVideo].thumbnail}
                  muted={isMuted}
                >
                  <source
                    src="https://cdn.prod.website-files.com/66984aec344ebf0116886c30%2F66987720e2ebebd5015ad683_wnba-ig-transcode.webm"
                    type="video/webm"
                  />
                  <source
                    src="https://cdn.prod.website-files.com/66984aec344ebf0116886c30%2F66987720e2ebebd5015ad683_wnba-ig-transcode.mp4"
                    type="video/mp4"
                  />
                </video>

                {/* Play Button Overlay */}
                {!isPlaying && (
                  <button
                    onClick={togglePlay}
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition-all duration-300"
                  >
                    <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300 transform hover:scale-110">
                      <Play size={32} className="text-gray-800 ml-1" />
                    </div>
                  </button>
                )}

                {/* Video Controls */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={togglePlay}
                      className="p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 transition-all duration-300"
                    >
                      {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                    </button>
                    <button
                      onClick={toggleMute}
                      className="p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 transition-all duration-300"
                    >
                      {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </button>
                  </div>
                  <button className="p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 transition-all duration-300">
                    <Maximize size={20} />
                  </button>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="bg-wnba-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {videos[activeVideo].category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-wnba mb-2">
                  {videos[activeVideo].title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {videos[activeVideo].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Video Playlist */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold font-wnba mb-6">More Videos</h3>
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                onClick={() => handleVideoSelect(index)}
                className={`cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${
                  activeVideo === index
                    ? 'ring-2 ring-wnba-orange bg-gray-800'
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                <div className="flex">
                  <div className="relative w-24 h-16 flex-shrink-0">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-6 h-6 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                        <Play size={12} className="text-gray-800 ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-1 right-1 bg-black bg-opacity-70 text-white text-xs px-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-3 flex-1">
                    <div className="mb-1">
                      <span className="text-wnba-orange text-xs font-semibold">
                        {video.category}
                      </span>
                    </div>
                    <h4 className="font-semibold text-sm leading-tight mb-1">
                      {video.title}
                    </h4>
                    <p className="text-gray-400 text-xs leading-tight">
                      {video.description.substring(0, 60)}...
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* View All Videos Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-4"
            >
              <button className="w-full bg-wnba-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                View All Videos
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;