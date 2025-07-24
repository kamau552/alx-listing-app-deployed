import React, { useState } from "react";
import { TbFilter, TbChevronDown } from "react-icons/tb";

const filters = [
  "All",
  "Top villa",
  "Free Reschedule",
  "Book Now, Pay later",
  "Self CheckIn",
  "Instant Book",
  "Filter",
  "Sort by: Highest Price",
];

const FilterPills = () => {
  const [active, setActive] = useState("All");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Filters to show in dropdown on medium screens
  const dropdownFilters = [
    "Book Now, Pay later",
    "Self CheckIn",
    "Instant Book"
  ];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const mainFilters = filters.filter(f => !dropdownFilters.includes(f) && f !== "Filter");

  return (
    <>
      {/* Desktop Version (large screens) */}
      <div className="hidden lg:block overflow-hidden w-full border-b border-gray-200 bg-white py-3 px-4 mt-4">
        <div className="flex items-center space-x-3 w-max mx-auto">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition whitespace-nowrap ${
                active === filter
                  ? "bg-teal-100 text-teal-500 border-teal-500"
                  : "text-black border-gray-300 hover:border-teal-500 hover:bg-teal-100 hover:text-teal-500"
              } ${filter === "Filter" ? "ml-35 flex items-center" : ""}`}
            >
              {filter}
              {filter === "Filter" && <TbFilter className="inline ml-2" />}
            </button>
          ))}
        </div>
      </div>

      {/* Medium Screen Version (md) */}
      <div className="hidden md:block lg:hidden bg-white border-b border-gray-200 py-3 px-4 w-full">
      <div className="flex items-center space-x-3 justify-center">

        {/* Basic Filters */}
        {["All", "Top villa", "Free Reschedule"].map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              active === filter
                ? "bg-teal-100 text-teal-500 border-teal-500"
                : "text-black border-gray-300"
            }`}
          >
            {filter}
          </button>
        ))}

        {/* Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="rounded-full border border-gray-300 px-4 py-2 mr-14 text-sm font-medium text-black"
          >
            <TbChevronDown className="ml-1" />
          </button>

          {/* Dropdown Items */}
          {showDropdown && (
            <div className="absolute left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <div className="flex flex-col p-2">
                {["Book Now, Pay Later", "Self Check-In", "Instant Book"].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setActive(item);
                      setShowDropdown(false);
                    }}
                    className={`text-sm text-left px-3 py-1.5 rounded-md ${
                      active === item
                        ? "bg-teal-100 text-teal-500"
                        : "hover:bg-gray-100 text-black"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* Filter/Sort Buttons */}
        <div className="flex items-center space-x-3 ml-4">
          <button className="flex items-center rounded-full border border-gray-300 px-4 py-2 text-sm font-medium">
            <TbFilter className="mr-2" />
            Filter
          </button>
          <button className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium">
            Sort by: Highest Price
          </button>
        </div>
      </div>
    </div>

      {/* Mobile Version */}
      <div className="md:hidden bg-white pt-4 px-4">
        <div className="flex items-center overflow-x-hidden scrollbar-hide space-x-3 pb-3">
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="flex-shrink-0 flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm font-medium"
          >
            <TbFilter /> 
          </button>

          {filters
            .filter((f) => f !== "Filter" && f !== "Sort by: Highest Price")
            .map((filter) => (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`flex-shrink-0 rounded-full border px-4 py-2 text-sm font-medium ${
                  active === filter
                    ? "bg-teal-100 text-teal-500 border-teal-500"
                    : "text-black border-gray-300 hover:border-teal-500 hover:bg-teal-100 hover:text-teal-500"
                }`}
              >
                {filter}
              </button>
            ))}
        </div>
      </div>
    </>
  );
}

export default FilterPills;