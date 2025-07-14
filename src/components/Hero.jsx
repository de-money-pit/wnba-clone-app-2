import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);

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

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black font-wnba mb-6 leading-tight"
        >
          THE FUTURE
          <br />
          <span className="gradient-text">IS NOW</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto"
        >
          Experience the power, passion, and precision of the world's premier women's basketball league.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="btn-primary">
            Watch Highlights
          </button>
          <button className="btn-secondary">
            View Schedule
          </button>
        </motion.div>
      </div>

      {/* Video Controls */}
      <div className="absolute bottom-8 right-8 flex space-x-4 z-20">
        <button
          onClick={togglePlay}
          className="p-3 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all duration-300"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
        <button
          onClick={toggleMute}
          className="p-3 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all duration-300"
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;