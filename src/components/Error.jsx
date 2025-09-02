import React from "react";

export default function Error({ message }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[400px] bg-red-100 dark:bg-gray-900 rounded-xl shadow-md border border-red-400 p-6 mt-6">
      <h2 className="text-red-600 dark:text-red-400 text-xl font-bold mb-2">
         Something went wrong
      </h2>
      <p className="text-gray-700 dark:text-gray-300 text-center">
        {message || "Unable to fetch earthquake data. Please try again later."}
      </p>
    </div>
  );
}
