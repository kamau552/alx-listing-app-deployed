import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-gray-500 mt-5 border-t-25 border-teal-600">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10 bg-gray-950">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/assets/Logos/alxlogo2.png"
            alt="Logo"
            width={40}
            height={20}
            className="object-contain color-white"
          />
          <p className="text-sm">
            As a combination of technology and biological labour-intensive
            comfortions,
            <br />
            you can provide helping to thrive worldwide. From one day to your
            home and <br />
            around our own parts, we create several booming APIs, ads connects,
            you win <br />
            the perfect place for long for any trip.
            <br />
          </p>
        </div>

        {/* Links Sections */}
        {footerLinks.map((section) => (
          <div key={section.title}>
            <div className="space-y-4 md:flex flex-col">
              <h3 className="text-white font-semibold uppercase text-sm tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.url}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    
      {/* Bottom Footer */}
      <div className="border-t border-gray-800 bg-gray-950 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-2">
              <p className="text-xs text-gray-500 text-center md:text-left">
                Some hotels require you to cancel more than 24 hours before
                check-in. Details 
                <Link href="/" className="text-xs text-teal-700 hover:text-teal-600 mx-1">
                  here
                </Link>
              </p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 ml-4">
                <Link
                  href="/terms"
                  className="text-xs text-gray-500 hover:text-white whitespace-nowrap"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/privacy"
                  className="text-xs text-gray-500 hover:text-white whitespace-nowrap"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/cookies"
                  className="text-xs text-gray-500 hover:text-white whitespace-nowrap"
                >
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
