import React from "react";

export default function Legend() {
    return (
        <div className="bg-gray-900 text-white p-4 w-full mx-auto mt-4 mb-5">
            <h3 className="font-bold text-lg mb-3 text-center">
                Magnitude
                <span className="block w-20 h-1 mx-auto mt-1 bg-gradient-to-r from-white to-transparent"></span>
            </h3>

            <div className="flex flex-col md:flex-row md:justify-center md:space-x-6 space-y-2 md:space-y-0">
                <div className="flex items-center">
                    <span className="inline-block w-4 h-4 bg-red-600 rounded mr-2"></span>
                    <span>High (mag &gt; 5)</span>
                </div>
                <div className="flex items-center">
                    <span className="inline-block w-4 h-4 bg-orange-500 rounded mr-2"></span>
                    <span>Medium (3 &lt; mag ≤ 5)</span>
                </div>
                <div className="flex items-center">
                    <span className="inline-block w-4 h-4 bg-yellow-400 rounded mr-2"></span>
                    <span>Low (mag ≤ 3)</span>
                </div>
            </div>
        </div>
    );
}
