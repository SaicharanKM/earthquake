import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import GuidelinesPopup from "./GuidelinesPopup";
import EarthquakeMap from "./components/EarthquakeMap";


export default function AppWrapper() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const visited = Cookies.get("visited");
    console.log("Visited cookie:", visited);
    if (!visited) {
      setShowPopup(true);
      Cookies.set("visited", "true", { expires: 365, path: "/" });
    }
  }, []);

  const handleClose = () => setShowPopup(false);

  return (
    <>
      {showPopup && <GuidelinesPopup onClose={handleClose} />}
      <EarthquakeMap />
    </>
  );
}
