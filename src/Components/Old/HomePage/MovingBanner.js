import { motion } from "framer-motion";

const items = [
  "Hospitality",
  "Manufacturing",
  "Special Events",
  "Finance",
  "Cleaner",
];

export default function MovingBanner() {
  return (
    <section className="relative bg-[#f3f4f6]  py-32 overflow-hidden border-t border-b border-gray-200 flex justify-center items-center">
      <div className="absolute top-1/2 -translate-y-1/2 bg-[#79ec54] scale-[1.1] left-0 w-full  overflow-hidden rotate-[-10deg]">
        <motion.div
          className="flex space-x-16 whitespace-nowrap  text-xl py-1 font-semibold text-gray-700 "
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-100%"] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        >
          {[...items, ...items].map((text, index) => (
            // Wrap each text and star pair in a div to apply spacing correctly
            <div key={index} className="flex items-center">
              <span className="px-8 py-2 shadow-sm">{text}</span>
              {/* Add the star image between each text item */}
              <img
                src="/bannerStar.png"
                className="ml-4 h-6 w-6 object-contain"
                alt="Decorative star"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
