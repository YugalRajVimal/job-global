import { motion } from "framer-motion";

const cards = [
  {
    icon: "https://img.icons8.com/ios-filled/50/000000/user-male-circle.png",
    title: "Retain Top Talent",
    text: "Providing clear career paths and growth opportunities is key to retaining top talent.",
  },
  {
    icon: "https://img.icons8.com/ios-filled/50/000000/shield.png",
    title: "Stay Compliant",
    text: "Educate employees about compliance requirements through regular training.",
  },
  {
    icon: "https://img.icons8.com/ios-filled/50/000000/combo-chart.png",
    title: "Improve Employee",
    text: "Invest in employee training and development programs to enhance skills and knowledge.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-gradient-to-r from-green-50 to-orange-50 text-center py-20 px-6">
      {/* Badge */}
      <span className="inline-block px-4 py-1 bg-green-100 text-green-600 font-semibold rounded-full text-sm mb-3">
        WHY US
      </span>

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-12">Why Choose Us</h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center"
          >
            <div className="bg-green-400 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <img src={card.icon} alt={card.title} className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">{card.title}</h3>
            <p className="text-gray-600 text-sm mb-6">{card.text}</p>
            <a
              href="#"
              className="font-semibold text-gray-900 hover:text-green-600 transition flex items-center gap-1"
            >
              Learn More →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
