import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-gray-500 mt-5 border-t-25 border-teal-600 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-gray-950">
        <div className="grid gap-10 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Description */}
          <div className="space-y-4 mr-6">
            <Image
              src="/assets/Logos/alxlogo2.png"
              alt="Logo"
              width={40}
              height={20}
              className="object-contain"
            />
            <p className="text-xs leading-relaxed">
              As a combination of technology and biological labour-intensive
              comfortions, you can provide helping to thrive worldwide. From one
              day to your home and around our own parts, we create several
              booming APIs, ads connects, you win the perfect place for long for
              any trip.
            </p>
          </div>

          {/* Link Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold uppercase text-xs mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2 text-xs">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.url}
                      className="hover:text-white transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950  py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-center md:text-left">
              Some hotels require you to cancel more than 24 hours before
              check-in. Details
              <Link href="/" className="text-teal-600 hover:text-teal-400 ml-1">
                here
              </Link>
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs">
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="hover:text-white">
                Cookies Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
