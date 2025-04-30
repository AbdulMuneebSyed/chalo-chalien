import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Star, Home, Bus, Coffee, Compass } from "lucide-react";
import keralaboatrace from "@/public/kerala-boat-race.jpeg";
import keralahouseboat from "@/public/kerala-houseboat.jpeg";
import keralawaterfall from "@/public/kerala-waterfall.jpeg";
import keralatemple from "@/public/kerala-temple.jpeg";
import keralafood from "@/public/kerala-food.jpg";
import keralaresort from "@/public/kerala-resort.jpeg";
import bg from "@/public/IMG_4405.jpg";

export default function KeralaWeekendPage() {
  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className="bg-cover bg-center bg-no-repeat min-h-screen relative before:absolute before:inset-0 before:bg-green-500/30 before:z-0 overflow-hidden"
    >
      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Photo Grid - Full Width */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ImageCard src={keralawaterfall} alt="Kerala Waterfall" />
            <div className="grid grid-cols-2 gap-4">
              <ImageCard src={keralahouseboat} alt="Kerala Houseboat" />
              <ImageCard src={keralaresort} alt="Kerala Resort" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <ImageCard src={keralatemple} alt="Kerala Temple" height="h-40" />
            <ImageCard src={keralafood} alt="Kerala Food" height="h-40" />
            <ImageCard
              src={keralaboatrace}
              alt="Kerala Boat Race"
              height="h-40"
            />
          </div>
        </div>

        {/* Details Section Below Grid */}
        <div className="mt-10 text-white space-y-6 px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-32 py-8 rounded-xl shadow-xl">
          <div className="flex flex-col lg:flex-row justify-between gap-6 backdrop-blur-md rounded-xl p-6">
            {/* Text & Features */}
            <div className="flex-1 space-y-4">
              <h1 className="text-3xl sm:text-4xl font-playfair font-bold">
                Kerala Weekend Getaway
              </h1>

              <p className="text-base sm:text-lg text-gray-200 font-medium">
                3D/2N | 1N Munnar | 1N Allepy | 1N Wayanad
              </p>

              <div className="h-px w-full bg-white/30" />

              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 text-black text-sm sm:text-base lg:text-lg">
                <Feature icon={<Home />} label="Stay Included" />
                <Feature icon={<Bus />} label="Transport Included" />
                <Feature icon={<Coffee />} label="Meals Included" />
                <Feature icon={<Compass />} label="Sightseeing Included" />
              </div>

              <div className="h-px w-full bg-white/30" />
            </div>

            {/* Pricing & Rating */}
            <div className="flex flex-col justify-between bg-black/70 rounded-xl p-6 w-full sm:w-auto lg:min-w-[280px] xl:min-w-[320px] space-y-4">
              <div className="flex items-center gap-2 text-yellow-400">
                <Star className="h-5 w-5 fill-current" />
                <span className="text-white">4.5 (99 reviews)</span>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  ₹5999/Person
                </div>
                <div className="text-lg sm:text-xl line-through text-gray-400">
                  ₹7999
                </div>
              </div>

              <Link
  href="https://wa.me/919700005421?text=I'm%20interested%20in%20the%20Kerala%20Weekend%20Getaway%20package.%20Please%20share%20details."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-green-600 hover:bg-green-700 transition px-5 py-3 rounded-lg text-white font-semibold text-center text-sm sm:text-base"
>
  BOOK NOW
</Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// Reusable Components
interface ImageCardProps {
  src: StaticImageData | string;
  alt: string;
  height?: string;
}

const ImageCard = ({ src, alt, height = "h-64" }: ImageCardProps) => (
  <div className={`relative w-full ${height}`}>
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover rounded-xl shadow-md"
    />
  </div>
);

interface FeatureProps {
  icon: React.ReactNode;
  label: string;
}

const Feature = ({ icon, label }: FeatureProps) => (
  <div className="flex items-center gap-2 text-xl md:text-base">
    {icon}
    <span>{label}</span>
  </div>
);
