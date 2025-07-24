import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Nav = () => {
  const navItems = [
    { name: "rooms", icon: "/assets/Logos/living-room 1.png" },
    { name: "Mansions", icon: "/assets/Logos/mansion 1.png" },
    { name: "countryside", icon: "/assets/Logos/farm 1.png" },
    { name: "Villa", icon: "/assets/Logos/villa 1.png" },
    { name: "Tropical", icon: "/assets/Logos/palm-tree 1.png" },
    { name: "New", icon: "/assets/Logos/key-chain 1.png" },
    { name: "Amazing pool", icon: "/assets/Logos/swimming-pool 1.png" },
    { name: "Beachhouse", icon: "/assets/Logos/vacations 1.png" },
    { name: "Island", icon: "/assets/Logos/island (1) 1.png" },
    { name: "Camping", icon: "/assets/Logos/tent 1.png" },
    { name: "Apartment", icon: "/assets/Logos/apartment 1.png" },
    { name: "House", icon: "/assets/Logos/home 1.png" },
    { name: "Lakefront", icon: "/assets/Logos/cottage 1.png" },
    { name: "Farmhouse", icon: "/assets/Logos/barn 1.png" },
    { name: "Cabins", icon: "/assets/Logos/cabin 1.png" },
    { name: "Castles", icon: "/assets/Logos/castle-tower 1.png" },
  ];

  return (
    <nav className="w-full mb-6 max-w-[1440px] mx-auto px-4 sm:px-6">
      <div className="flex items-center justify-center">
        <div className="flex space-x-5 py-2 w-full overflow-hidden scrollbar-hide">
          {navItems.map(({ name, icon }, index) => (
            <div 
              key={name}
              className={`flex-shrink-0 sm:pr-2 md:pr-1.5 ${index >= 6 ? 'hidden md:flex' : 'flex'}`}
            >
              <Link
                href="#"
                className="flex flex-col items-center min-w-[60px]"
                style={{
                  color: "#374151",
                  textDecoration: "none",
                  gap: "0.5rem",
                }}
              >
                <div className="w-6 h-6 relative">
                  <Image
                    src={icon}
                    alt={name}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <span className="text-xs mt-1 whitespace-nowrap">{name}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;