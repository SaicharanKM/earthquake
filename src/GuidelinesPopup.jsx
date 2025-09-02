import React from "react";

export default function GuidelinesPopup({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-900 text-white p-6 rounded-xl max-w-md w-full shadow-lg">
        <h2 className="text-xl font-bold mb-4">Welcome to Earthquake Visualizer</h2>
        <p className="mb-4">
          Guidelines:
          <ul className="list-disc list-inside mt-2">
            <li>Zoom and pan the map to explore earthquakes.</li>
            <li>Click on markers to view detailed info.</li>
            <li>Red circles: magnitude {">"}5, Orange: 3–5, Yellow: ≤ 3.</li>
          </ul>
        </p>
        <button
          onClick={onClose}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Got it!
        </button>
      </div>
    </div>
  );
}
