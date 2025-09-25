import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-screen  h-[90vh] my-0  text-white overflow-hidden pt-[8vh]">
      <div className="absolute inset-0">
        <img
          src="/download.png" // <-- replace with your image path
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for better contrast */}
        {/* <div className="absolute inset-0 bg-black/60"></div> */}
      </div>
      {/* Background Curved Lines */}
      {/* <div className="absolute inset-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-full opacity-20"
        >
          <path
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            d="M0,320L48,288C96,256,192,192,288,170.7C384,149,480,171,576,197.3C672,224,768,256,864,261.3C960,267,1056,245,1152,208C1248,171,1344,117,1392,90.7L1440,64"
          ></path>
        </svg>
      </div> */}

      {/* Hero Content */}
      <div className="relative container mx-auto px-6 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Find Your Next Career Here
          <br /> Our Open Positions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10"
        >
          Explore our open positions to find roles that align with your
          interests and expertise. From entry-level positions to leadership
          roles.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex justify-center gap-4"
        >
          <button className="bg-green-500 hover:bg-green-600 text-white rounded-full px-6 py-3 text-lg">
            Find Works →
          </button>
          <button className="bg-white text-black rounded-full px-6 py-3 text-lg border border-gray-300">
            Hire Talents Now
          </button>
        </motion.div>
      </div>

      {/* Floating Avatars */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-24 left-20 flex flex-col gap-6 flex flex-col justify-center items-center"
      >
        <img
          src="/avatars/waiter.jpg"
          alt="Waiter"
          className="w-20 h-20 rounded-full shadow-lg border-4 border-green-500"
        />
        <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm text-center">
          Driver
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="absolute bottom-40 left-40 flex flex-col justify-center items-center"
      >
        <img
          src="/avatars/painter.jpg"
          alt="Painter"
          className="w-20 h-20 rounded-full shadow-lg border-4 border-white"
        />
        <span className="bg-gray-200 text-black px-3 py-1 rounded-full text-sm text-center">
          Plumber
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="absolute top-1/3 right-12 flex flex-col justify-center items-center"
      >
        <img
          src="/avatars/finance.jpg"
          alt="Finance"
          className="w-20 h-20 rounded-full shadow-lg border-4 border-yellow-500"
        />
        <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm text-center">
          Electrician
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="absolute bottom-16 right-20 flex flex-col justify-center items-center"
      >
        <img
          src="/avatars/nurse.jpg"
          alt="Nurse"
          className="w-20 h-20 rounded-full shadow-lg border-4 border-purple-500"
        />
        <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm text-center">
          Heavy Vehicle Operator
        </span>
      </motion.div>
    </section>
  );
}
