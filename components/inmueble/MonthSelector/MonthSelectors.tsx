"use client";

import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";

const months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];

export const MonthSelector = () => {
  const [selectedMonths, setSelectedMonths] = useState<string[]>([]);

  const toggleMonth = (month: string) => {
    setSelectedMonths((prev) =>
      prev.includes(month)
        ? prev.filter((m) => m !== month)
        : [...prev, month]
    );
  };

  const removeMonth = (month: string) => {
    setSelectedMonths((prev) => prev.filter((m) => m !== month));
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Select Months</h2>

      {/* Chips */}
      <div className="flex flex-wrap gap-2 mb-6">
        {selectedMonths.map((month) => (
          <span
            key={month}
            className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
          >
            {month}
            <button
              onClick={() => removeMonth(month)}
              className="ml-2 text-blue-500 hover:text-blue-700"
            >
              <XMarkIcon className="w-4 h-4" />
            </button>
          </span>
        ))}
        {selectedMonths.length === 0 && (
          <p className="text-gray-400 text-sm">No months selected</p>
        )}
      </div>

      {/* Month Buttons */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
        {months.map((month) => {
          const isSelected = selectedMonths.includes(month);
          return (
            <button
              key={month}
              onClick={() => toggleMonth(month)}
              className={`px-4 py-2 rounded-md border font-medium text-sm
                ${isSelected
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}
              `}
            >
              {month}
            </button>
          );
        })}
      </div>
    </div>
  );
}
