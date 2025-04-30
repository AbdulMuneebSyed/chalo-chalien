import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface TripCardProps {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
  className?: string;
}

export default function TripCard({
  title,
  description,
  imageSrc,
  href,
  className = "",
}: TripCardProps) {
  return (
    <div className={`trip-card ${className}`}>
      <div className="relative h-64 w-full">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="p-6 text-white">
        <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-4">
          {title}
        </h3>
        <p className="text-gray-200 mb-6">{description}</p>
        <Link href={href} className="read-more-btn">
          Read More
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
