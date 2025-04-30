import TripCard from "@/components/trip-card";
import bg from "@/public/IMG_4405.jpg";
import kashmir from "@/public/kashmir.webp";
import kerala from "@/public/karela.jpeg";
import dal from "@/public/dal lake.webp";
const trips = [
  {
    title: "Dal Lake",
    description:
      "Sail through the stunning waters of Dal Lake surrounded by the mighty Himalayas.",
    imageSrc: dal.src,
    href: "/trips/kerala-weekend",
  },
  {
    title: "Kashmir Trek",
    description:
      "Embark on an unforgettable trek across Kashmir’s pristine meadows and snow-capped peaks.",
    imageSrc: kashmir.src,
    href: "/trips/kerala-weekend",
  },
  {
    title: "Kerala Weekend",
    description:
      "Unwind amid Kerala’s lush greenery, waterfalls, and tranquil backwaters.",
    imageSrc: kerala.src,
    href: "/trips/kerala-weekend",
  },
];

export default function TripsPage() {
  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className="bg-cover bg-center bg-no-repeat min-h-screen relative before:absolute before:inset-0 before:bg-green-400/30 before:z-0"
    >
      <div className="fixed bg-black/20 w-screen h-[200%] -top-3/12 left-5/12 rounded-full"></div>
      <div className="relative z-10 container mx-auto px-4 py-24 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {trips.map((trip, index) => (
            <TripCard
              key={index}
              title={trip.title}
              description={trip.description}
              imageSrc={trip.imageSrc}
              href={trip.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
