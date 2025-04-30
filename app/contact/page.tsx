import { Instagram, Facebook, Linkedin } from "lucide-react";
import bg from "@/public/IMG_4405.jpg";

export default function ContactPage() {
  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className="bg-cover bg-center bg-no-repeat min-h-screen relative before:absolute before:inset-0 before:bg-green-500/30 before:z-0 overflow-hidden"
    >
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="contact-container text-white">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold mb-4 underline">
              Office Address
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-6 leading-relaxed">
              3rd Floor, Cyber Towers, Patrika Nagar, HITEC City,
              <br />
              Hyderabad, Telangana 500081
            </p>
            <div className="relative h-64 sm:h-80 md:h-96 w-full mb-8 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2068962799037!2d78.38272837511566!3d17.437554201708336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93d154a6c64f%3A0x4e2fef3031c2296e!2sCyber%20Towers%2C%20HITEC%20City%2C%20Hyderabad%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1714559724133!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0 w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Right Section */}
          <div className="contact-container text-white">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold mb-4 underline">
              Contact :
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-2">
              +91 90000 90000
            </p>
            <p className="text-lg sm:text-xl md:text-2xl mb-6">
              +91 97000 97000
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold mb-4 underline">
              Mail :
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-6">
              contactus@gmail.com
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold mb-4 underline">
              Social Media :
            </h2>
            <div className="flex gap-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
