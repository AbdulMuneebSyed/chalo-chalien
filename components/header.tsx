"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { UserCircle, Menu, X } from "lucide-react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import logo from "@/public/IMG_4406-removebg-preview (1).png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute w-full top-0 z-50 bg-transparent py-0">
      <motion.div className="container mx-auto px-4 flex justify-between items-center h-20">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            className="relative h-12 w-12 sm:h-16 sm:w-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={logo || "/placeholder.svg"}
              alt="Chalo Chalein Logo"
              width={64}
              height={64}
              className="object-contain bg-transparent"
            />
          </motion.div>
          <motion.h1
            className="text-2xl sm:text-4xl font-playfair font-bold text-black"
            initial={{ x: 0 , opacity: 0 }}
            animate={{ x: 0 , opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Chalo Chalein
          </motion.h1>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/trips"
            className="text-xl font-playfair font-semibold hover:underline"
          >
            Trips
          </Link>
          <Link
            href="/contact"
            className="text-xl font-playfair font-semibold hover:underline"
          >
            Contact Us
          </Link>
          <Link href="/profile" className="ml-4">
            <UserCircle className="h-10 w-10" />
          </Link>
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <Link href="/profile">
            <UserCircle className="h-8 w-8" />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-8 w-8" />
          </button>
        </div>
      </motion.div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6"
            aria-label="Close menu"
          >
            <X className="h-8 w-8 text-white" />
          </button>

          <nav className="flex flex-col items-center gap-8">
            <motion.div
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/trips"
                className="text-2xl font-playfair font-semibold text-white hover:text-amber-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Trips
              </Link>
            <motion.div
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/contact"
                className="text-2xl font-playfair font-semibold text-white hover:text-amber-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </motion.div>
            </motion.div>
            <motion.div
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/profile"
                className="text-2xl font-playfair font-semibold text-white hover:text-amber-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Profile
              </Link>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
