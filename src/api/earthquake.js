import axios from "axios";

export const fetchEarthquakes = async () => {
  try {
    const url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";
    const response = await axios.get(url);
    return response.data.features; // array of earthquakes
  } catch (error) {
    throw new Error("Failed to fetch earthquake data");
  }
};
