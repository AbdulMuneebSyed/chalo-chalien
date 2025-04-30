"use client"
import SearchBar from "@/components/search-bar";
import Carousel3D from "@/components/3d-carousel";
import bg from "@/public/IMG_4405.jpg";
import Preloader from "@/components/preloader";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
export default function Home() {
     const [loading, setLoading] = useState(true);

     useEffect(() => {
       const timer = setTimeout(() => setLoading(false), 3500); // fast load
       return () => clearTimeout(timer);
     }, []);

     if (loading) return <Preloader />;
  return (
    <motion.div
      style={{ backgroundImage: `url(${bg.src})` }}
      className="bg-cover bg-center bg-no-repeat min-h-screen relative before:absolute before:inset-0 before:bg-orange-200/20 before:z-0"
        initial={{ opacity: 1, y: -20 }}
        animate={{ opacity: 1 ,y: 0 }}
        transition={{ duration: 1 }}
    >
       <div className="fixed bg-black/20 w-screen h-[200%] -top-3/12 left-5/12 rounded-full"></div>
      <section className="pt-24 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 mx-auto w-full max-w-md md:max-w-none">
              <Carousel3D />
            </div>

            <div className="text-center md:text-left order-1 md:order-2">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-playfair font-bold mb-4 text-black">
                Chalo Chalein...
              </h2>
              <p className="text-2xl sm:text-3xl md:text-5xl font-playfair mb-8 text-black">
                Ek Suhaane Safar pe
              </p>
              <div className="max-w-full sm:max-w-md mx-auto md:mx-0">
                <SearchBar />
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
