import React, { useState } from "react";
import { TbFilter } from "react-icons/tb";



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

  return (
    <>
      <div className="overflow-x-auto w-full border-b border-gray-200 bg-white py-3 px-4">
  <div className="flex items-center space-x-3 w-max">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition whitespace-nowrap ${
                active === filter
                  ? "bg-teal-100 text-teal-500 border-teal-500"
                  : "text-black border-gray-300 hover:border-teal-500 hover:bg-teal-100 hover:text-teal-500"
              }${filter === "Filter" ? " ml-70" : ""}`}
            >
              {filter}
              {filter === "Filter" && <TbFilter className="inline ml-2 align-center" />}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Version (appears above hero) */}
      <div className="md:hidden lg:hidden bg-white pt-4 px-4">
        <div className="flex justify-between items-center mb-2">
          <button 
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="flex items-center font-medium"
          >
          </button>
        </div>
        {showMobileFilters && (
          <div className="flex flex-wrap gap-2 pb-4">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`rounded-full border px-4 py-2 text-sm font-medium ${
                  active === filter
                    ? "bg-teal-100 text-teal-500 border-teal-500"
                    : "text-black border-gray-300 hover:border-teal-500 hover:bg-teal-100 hover:text-teal-500"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default FilterPills;

