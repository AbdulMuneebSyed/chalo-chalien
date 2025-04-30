"use client";
import { motion } from "framer-motion";
import logo from "@/public/IMG_4406-removebg-preview (1).png"; // Adjust the path as necessary
import Image from "next/image";
export default function Preloader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
      {/* Optional: Shimmer effect */}
      <motion.div
        className="w-32 h-32 rounded-full bg-gradient-to-tr from-white via-white to-white animate-pulse flex justify-center items-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={logo || "/placeholder.svg"} alt="logo" width={32} height={32}/>
      </motion.div>
      <motion.h1
        className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold tracking-widest"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        ChaloChalien
      </motion.h1>
    </div>
  );
}
