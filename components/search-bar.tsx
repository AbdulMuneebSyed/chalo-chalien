"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";

export default function SearchBar() {
  const destinations = ["Karela", "Andaman", "Jummu", "Goa", "Kerala"];
  const [current, setCurrent] = useState(0);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % destinations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [destinations.length]);

  return (
    <div className="search-container flex items-center justify-center text-white w-full p-2 sm:p-3 bg-black/30 rounded-full max-w-lg mx-auto">
      <span className="text-sm sm:text-base font-medium ml-2 sm:ml-0">
        Search For
      </span>

      <div className="relative flex-grow mx-2 sm:mx-0">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder=""
          className="bg-transparent border-none outline-none text-white text-sm sm:text-base md:text-xl px-2 sm:px-4 w-full relative z-10"
        />

        {/* Show suggestion only when input is empty */}
        <AnimatePresence mode="wait">
          {!inputValue && (
            <motion.span
              key={destinations[current]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="absolute top-0 left-2 sm:left-4 pointer-events-none text-white text-sm sm:text-base md:text-xl"
            >
              {destinations[current]}
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <button className="bg-amber-500 hover:bg-amber-600 transition-colors p-2 sm:p-3 rounded-full">
        <Search className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
      </button>
    </div>
  );
}
