export default function Loader() {
  return (
    <div className="fixed inset-0 bg-gray-800 flex flex-col items-center justify-center space-y-4">
      <div className="w-12 h-12 rounded-full border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-blue-300 animate-spin shadow-lg"></div>
      <span className="text-white text-lg font-semibold tracking-wide drop-shadow-lg">
        Loading Earthquake Visualizer...
      </span>
    </div>
  );
}
