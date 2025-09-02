import { Circle, Popup } from "react-leaflet";
import dayjs from "dayjs";

export default function EarthquakeMarker({ quake }) {
    const {
        mag,
        place,
        time,
        url,
        felt,
        cdi,
        mmi,
        alert,
        status,
        tsunami,
        type
    } = quake.properties;
    const [lon, lat, depth] = quake.geometry.coordinates;

    return (
        <Circle
            center={[lat, lon]}
            radius={mag * 20000}
            pathOptions={{
                color: mag > 5 ? "red" : mag > 3 ? "orange" : "yellow", 
                fillColor: mag > 5 ? "red" : mag > 3 ? "orange" : "yellow", 
                fillOpacity: 0.5,
            }}
        >
            <Popup>
                <div className="text-sm">
                    <p><strong>Location:</strong> {place}</p>
                    <p style={{ color: mag > 5 ? "red" : mag > 3 ? "orange" : "yellow" }}>
                        Magnitude: {mag}
                    </p>
                    <p><strong>Time:</strong> {dayjs(time).format("DD MMM YYYY, HH:mm:ss")}</p>
                    <p><strong>Depth:</strong> {depth} km</p>
                    <p><strong>Felt Reports:</strong> {felt ?? "N/A"}</p>
                    <p><strong>Alert Level:</strong> {alert ?? "None"}</p>
                    <p><strong>Status:</strong> {status}</p>
                    <p>
                        <strong>Tsunami Warning:</strong>{" "}
                        <span className={tsunami === 1 ? "text-red-500 font-bold" : "text-green-400"}>
                            {tsunami === 1 ? "Yes" : "No"}
                        </span>
                    </p>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
                        More info
                    </a>
                </div>
            </Popup>
        </Circle>

    );
}
