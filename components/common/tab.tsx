import React, { useState, useRef } from 'react';
import Image from 'next/image'
import ReviewSection from '../property/ReviewSection';
import { PropertyProps } from '@/interfaces';

interface TabProps {
  property: PropertyProps;
}

const Tab: React.FC<TabProps> = ({ property }) => {
  const [activeTab, setActiveTab] = useState('tab1');
  const sectionRefs = {
    description: useRef<HTMLDivElement>(null),
    whatWeOffer: useRef<HTMLDivElement>(null),
    reviews: useRef<HTMLDivElement>(null),
    aboutHost: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const tabs = [
    { id: 'tab1', name: 'Description', ref: sectionRefs.description },
    { id: 'tab2', name: 'What we offer', ref: sectionRefs.whatWeOffer },
    { id: 'tab3', name: 'Reviews', ref: sectionRefs.reviews },
    { id: 'tab4', name: 'About', ref: sectionRefs.aboutHost },
  ];

  const handleTabClick = (tabId: string, ref: React.RefObject<HTMLDivElement | null>) => {
    setActiveTab(tabId);
    setTimeout(() => scrollToSection(ref), 100); // Small delay to ensure DOM update
  };

  return (
    <div className="w-full px-2 max-w-7xl mx-auto mt-1 sm:mt-0 sm:pr-2">
      <div className="w-full bg-white">
        {/* Tabs */}
        <div className="flex border-b border-t border-gray-300 text-gray-500 text-sm top-0 bg-white z-10 pt-4 gap-1 sm:gap-2 sm:py-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id, tab.ref)}
              className={`px-4 py-2 font-medium whitespace-nowrap border-b-2 ${
                activeTab === tab.id
                  ? "border-teal-600 text-teal-600"
                  : "border-transparent"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div>
          {/* Description Section */}
          <div
            ref={sectionRefs.description}
            id="description"
            className="pt-2 mb-2"
          >
            <div className=" text-black space-y-3 pt-4 items-center sm:pr-2">
              <p className="text-sm sm:pr-2 items-center">
                Feel like exploring the Dominican? Start the day with a hike on
                one of Playa Moron’s many trails. Weave through the gated
                community to find secluded sandy coves for swimming and
                paddleboarding. When you’Feel like exploring the Dominican?
                Start the day with a hike on one of Playa Moron’s many trails.
                Weave your way around the gated community to find secluded sandy
                coves for swimming and paddleboarding. When you’re ready to
                chill with friends, the beach house pool awaits. Spend the night
                entertaining in the outdoor lounge, sipping drinks in the hot
                tub, and gazing out over incredible ocean views.
                <br />
                <br />
                <b>The space:</b>
                <br />
                BEDROOM & BATHROOM • Bedroom 1 - King size bed, Ensuite bathroom
                with stand-alone rain shower, Dual vanity, Walk-in closet,
                Television, Sofa, Deck, Balcony, Ocean view
                <br />
                <span className="inline-flex items-center text-teal-600 cursor-pointer mt-2">
                  <Image
                    src="/assets/icons/Linear/Arrows/Arrow Right.png"
                    alt="arrow right"
                    width={16}
                    height={16}
                    className="inline-block mr-1"
                  />
                  Read more
                </span>
              </p>
            </div>
          </div>

          {/* What We Offer Section */}
          <div
            ref={sectionRefs.whatWeOffer}
            id="what-we-offer"
            className="pt-8"
          >
            <h2 className="text-md font-bold mb-3">What this place offers</h2>
            <div className="text-sm space-y-3">
              <p>
                Each home is fully equipped to meet your needs, with ample space
                and privacy.
              </p>
              <ul className="grid grid-cols-2 md:p-1 p-2 mb-3 ">
                <li className=" mb-2">
                  <Image
                    src="/assets/icons/mountain 1.png"
                    alt="mountain view"
                    width={22}
                    height={22}
                    className="inline-block mr-2"
                  />
                  Mountain View
                </li>
                <li className=" mb-2">
                  <Image
                    src="/assets/icons/chef 1.png"
                    alt="Beach Access"
                    width={22}
                    height={22}
                    className="inline-block mr-2"
                  />{" "}
                  Chef
                </li>
                <li className=" mb-2">
                  <Image
                    src="/assets/icons/broom 1.png"
                    alt="Cleaning"
                    width={22}
                    height={22}
                    className="inline-block mr-2"
                  />{" "}
                  Cleaning Available on stay
                </li>
                <li className="pt-2 mb-2">
                  <Image
                    src="/assets/icons/Pool 1.png"
                    alt="Pool"
                    width={22}
                    height={22}
                    className="inline-block mr-2"
                  />{" "}
                  Pool - Infinity
                </li>
                <li className="pt-2 pb-1">
                  <Image
                    src="/assets/icons/pan 1.png"
                    alt="kitchen"
                    width={22}
                    height={22}
                    className="inline-block mr-2"
                  />{" "}
                  Kitchen
                </li>
                <li className="mb-2">
                  <Image
                    src="/assets/icons/sunrise 1.png"
                    alt="Shared Beach Access"
                    width={22}
                    height={22}
                    className="inline-block mr-2"
                  />{" "}
                  Shared Beach Access
                </li>
                <li className="mb-3">
                  <Image
                    src="/assets/icons/bell 1.png"
                    alt="Wifi"
                    width={22}
                    height={22}
                    className="inline-block mr-2"
                  />{" "}
                  Butler
                </li>
                <li className="mb-3">
                  <Image
                    src="/assets/icons/shaker 1.png"
                    alt="Bartender"
                    width={22}
                    height={22}
                    className="inline-block mr-2"
                  />{" "}
                  Bartender
                </li>
                <li className=" mb-3">
                  <Image
                    src="/assets/icons/hot-tub 1.png"
                    alt="Hot tub"
                    width={22}
                    height={22}
                    className="inline-block mr-2"
                  />{" "}
                  Hot tub
                </li>
                <li className="mb-2">
                  <Image
                    src="/assets/icons/wifi 1.png"
                    alt="Wifi"
                    width={22}
                    height={22}
                    className="inline-block mr-2"
                  />{" "}
                  Wifi
                </li>
              </ul>
            </div>
          </div>

          {/* Reviews Section */}
          <div ref={sectionRefs.reviews} id="reviews" className="pt-4 mx-auto">
            <ReviewSection propertyId={property.id} />
          </div>

          {/* About Host Section 
          <div ref={sectionRefs.aboutHost} id="about-host" className="pt-8">
            <h2 className="text-sm font-bold mb-3">About</h2>
            <div className="text-xs space-y-3">
              <p>The host is dedicated to .....</p>
            </div>
          </div>*/}
        </div>
      </div>
    </div>
  );
};

export default Tab;