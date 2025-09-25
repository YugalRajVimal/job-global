import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function StaffingSection() {
  return (
    <section className="relative py-20 bg-[#f3f4f6]">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Video Thumbnail */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-md min-h-[250px] bg-zinc-200 rounded-md">
            
            <img
              src="/images/staffing-video.jpg"
              alt="Staffing Platform"
              className="rounded-xl shadow-lg"
            />
          </div>
        </motion.div>

        {/* Right Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-green-100 text-green-700 font-medium px-4 py-1 rounded-full mb-4">
            ABOUT US
          </span>

          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
            The Leading Hospitality{" "}
            <span className="text-green-600">Staffing Platform</span>
          </h2>

          <p className="text-gray-600 mb-6">
            This staffing platform provides access to a diverse pool of
            qualified candidates with specialized skills in areas such as
            hospitality management.
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <Check className="text-green-500 w-6 h-6" />
              <span className="text-gray-700">
                This helps businesses maintain service excellence
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-green-500 w-6 h-6" />
              <span className="text-gray-700">
                This scalability allows businesses to adjust staffing
              </span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto px-6">
        <div className="bg-white shadow rounded-xl p-6 text-center">
          <h3 className="text-2xl font-bold">12k</h3>
          <p className="text-gray-500">Freelance Workers</p>
        </div>
        <div className="bg-white shadow rounded-xl p-6 text-center">
          <h3 className="text-2xl font-bold">95%</h3>
          <p className="text-gray-500">Jobs Fulfillment Rate</p>
        </div>
        <div className="bg-white shadow rounded-xl p-6 text-center">
          <h3 className="text-2xl font-bold">12k+</h3>
          <p className="text-gray-500">Jobs Filled</p>
        </div>
        <div className="bg-white shadow rounded-xl p-6 text-center">
          <h3 className="text-2xl font-bold">825+</h3>
          <p className="text-gray-500">Satisfied Businesses</p>
        </div>
      </div>
    </section>
  );
}
