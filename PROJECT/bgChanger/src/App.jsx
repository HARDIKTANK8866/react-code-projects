import { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-300 flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <motion.div
        className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2 rounded-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {[
          { label: "Red", color: "red" },
          { label: "Orange", color: "orange" },
          { label: "Yellow", color: "yellow" },
          { label: "Green", color: "green" },
          { label: "Blue", color: "blue" },
          { label: "Indigo", color: "indigo" },
          { label: "Violet", color: "violet" },
        ].map((btn) => (
          <motion.button
            key={btn.color}
            className="outline-none px-4 py-2 rounded-3xl shadow-lg transform transition-transform duration-300 hover:scale-110 hover:bg-opacity-80"
            style={{ backgroundColor: btn.color, color: 'white' }}
            onClick={() => setColor(btn.color)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {btn.label}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}

export default App;
