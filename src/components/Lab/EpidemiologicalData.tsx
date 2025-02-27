

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically load Leaflet only on the client side
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Circle = dynamic(
  () => import("react-leaflet").then((mod) => mod.Circle),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

import "leaflet/dist/leaflet.css";

interface CaseData {
  location: string;
  lat: number;
  lon: number;
  cases: number;
  hospitalizations: number;
}

const caseData: CaseData[] = [
  {
    location: "Los Angeles",
    lat: 34.0522,
    lon: -118.2437,
    cases: 7123,
    hospitalizations: 480,
  },
];

const EpidemiologicalData = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <p>Loading Map...</p>;

  return (
    <div>
      <h2 className="text-lg font-semibold">Epidemiological Data - Los Angeles</h2>
      <p>Visualizing epidemiological data for Los Angeles on a geographic map.</p>

      <MapContainer
        center={[34.0522, -118.2437]} // Centered on Los Angeles
        zoom={10} // Adjusted zoom level for city focus
        className="h-96 w-full rounded-md border"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />

        {caseData.map((data, index) => (
          <Circle
            key={index}
            center={[data.lat, data.lon]}
            radius={data.cases * 10} // Adjust size dynamically based on cases
            fillColor="red"
            color="darkred"
            fillOpacity={0.4}
          >
            <Popup>
              <strong>{data.location}</strong>
              <br />
              Cases: {data.cases}
              <br />
              Hospitalizations: {data.hospitalizations}
            </Popup>
          </Circle>
        ))}
      </MapContainer>
    </div>
  );
};

export default EpidemiologicalData;
