import { MapContainer, TileLayer } from "react-leaflet";
import EarthquakeMarker from "./EarthquakeMarker";
import useEarthquakes from "../hooks/useEarthquakes";
import Loader from "./Loader";
import Error from "./Error";
import Legend from "./Legend";
import "leaflet/dist/leaflet.css";

const worldCenter = [20, 0];

export default function EarthquakeMap() {
  const { data: earthquakes, loading, error } = useEarthquakes();

  if (loading) return <Loader />;
  if (error) return <Error message={error} />;

  return (
    <div className="flex justify-center items-stretch bg-gray-800 min-h-screen">
      <div className="bg-gray-900 shadow-2xl w-full border border-gray-700 flex flex-col">
        <div className="bg-gray-900 px-6 py-4  flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-xl md:text-2xl font-bold text-white">
            Earthquake Visualizer
          </h2>
          <p className="text-gray-400 text-sm md:text-base mt-2 md:mt-0">
            Recent seismic activity worldwide
          </p>
        </div>
        <div className="flex-1 relative flex justify-center items-center">
          <div className="w-9/10 h-full rounded shadow-lg overflow-hidden">
            <MapContainer
              center={worldCenter}
              zoom={2}
              scrollWheelZoom={true}
              className="w-full h-full"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {earthquakes.map((quake) => (
                <EarthquakeMarker key={quake.id} quake={quake} />
              ))}
            </MapContainer>
          </div>
        </div>

        <div className="bg-gray-900">
          <Legend />
        </div>
      </div>
    </div>
  );
}
