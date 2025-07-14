import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { motion, useInView } from 'framer-motion';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  ChartDataLabels
);

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const teamStatsData = {
    labels: ['Las Vegas Aces', 'New York Liberty', 'Connecticut Sun', 'Seattle Storm', 'Chicago Sky'],
    datasets: [
      {
        label: 'Points Per Game',
        data: [85.2, 82.7, 80.1, 78.9, 77.3],
        backgroundColor: [
          '#FF6900',
          '#1D428A',
          '#C8102E',
          '#007A33',
          '#552583'
        ],
        borderColor: [
          '#FF6900',
          '#1D428A',
          '#C8102E',
          '#007A33',
          '#552583'
        ],
        borderWidth: 2,
        borderRadius: 8,
      },
    ],
  };

  const playerStatsData = {
    labels: ['A\'ja Wilson', 'Breanna Stewart', 'Sabrina Ionescu', 'Kelsey Plum', 'Alyssa Thomas'],
    datasets: [
      {
        data: [22.8, 21.5, 20.2, 18.7, 16.9],
        backgroundColor: [
          '#FF6900',
          '#1D428A',
          '#C8102E',
          '#00788C',
          '#552583'
        ],
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#FF6900',
        borderWidth: 1,
      },
      datalabels: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#666',
          font: {
            family: 'WNBA',
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#666',
          font: {
            family: 'WNBA',
          },
          maxRotation: 45,
        },
      },
    },
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#666',
          font: {
            family: 'WNBA',
            size: 12,
          },
          padding: 20,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#FF6900',
        borderWidth: 1,
      },
      datalabels: {
        color: '#fff',
        font: {
          weight: 'bold',
          size: 14,
        },
        formatter: (value) => `${value}`,
      },
    },
  };

  const stats = [
    { label: 'Total Games', value: '408', description: 'Regular Season' },
    { label: 'Teams', value: '12', description: 'Competing' },
    { label: 'Players', value: '144', description: 'Active Roster' },
    { label: 'Attendance', value: '1.6M', description: 'Season Total' },
  ];

  return (
    <section id="stats" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black font-wnba text-gray-800 mb-4">
            BY THE <span className="gradient-text">NUMBERS</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dive into the statistics that define excellence in women's basketball
          </p>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="text-center bg-white rounded-xl p-6 shadow-lg card-hover"
            >
              <div className="text-3xl md:text-4xl font-black font-wnba text-wnba-orange mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-800 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Team Stats Chart */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold font-wnba text-gray-800 mb-6 text-center">
              Top Teams - Points Per Game
            </h3>
            <div className="h-80">
              <Bar data={teamStatsData} options={chartOptions} />
            </div>
          </motion.div>

          {/* Player Stats Chart */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold font-wnba text-gray-800 mb-6 text-center">
              Leading Scorers - PPG
            </h3>
            <div className="h-80">
              <Doughnut data={playerStatsData} options={doughnutOptions} />
            </div>
          </motion.div>
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-wnba-orange to-wnba-blue rounded-xl p-8 text-white text-center"
        >
          <h3 className="text-3xl font-bold font-wnba mb-4">
            Season Highlights
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-black mb-2">89.2%</div>
              <div className="text-lg">Average Attendance</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">2.1M</div>
              <div className="text-lg">Social Media Followers</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">156</div>
              <div className="text-lg">Countries Watching</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;