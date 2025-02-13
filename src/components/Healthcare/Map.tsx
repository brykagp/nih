



// import dynamic from "next/dynamic";
// import { useEffect, useState } from "react";

// // Dynamically load Leaflet only on the client side
// const MapContainer = dynamic(
//   () => import("react-leaflet").then((mod) => mod.MapContainer),
//   { ssr: false }
// );
// const TileLayer = dynamic(
//   () => import("react-leaflet").then((mod) => mod.TileLayer),
//   { ssr: false }
// );
// const Circle = dynamic(
//   () => import("react-leaflet").then((mod) => mod.Circle),
//   { ssr: false }
// );
// const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
//   ssr: false,
// });

// import "leaflet/dist/leaflet.css";

// interface CaseData {
//   location: string;
//   lat: number;
//   lon: number;
//   cases: number;
//   hospitalizations: number;
// }

// const caseData: CaseData[] = [
//   {
//     "location": "San Francisco",
//     "lat": 37.7749,
//     "lon": -122.4194,
//     "cases": 4367,
//     "hospitalizations": 140
//   },
//   {
//     "location": "Miami",
//     "lat": 25.7617,
//     "lon": -80.1918,
//     "cases": 4449,
//     "hospitalizations": 210
//   },
//   {
//     "location": "Dallas",
//     "lat": 32.7767,
//     "lon": -96.797,
//     "cases": 5113,
//     "hospitalizations": 240
//   },
//   {
//     "location": "Boston",
//     "lat": 42.3601,
//     "lon": -71.0589,
//     "cases": 3318,
//     "hospitalizations": 188
//   },
//   {
//     "location": "Seattle",
//     "lat": 47.6062,
//     "lon": -122.3321,
//     "cases": 3815,
//     "hospitalizations": 261
//   },
//   {
//     "location": "Denver",
//     "lat": 39.7392,
//     "lon": -104.9903,
//     "cases": 3811,
//     "hospitalizations": 311
//   },
//   {
//     "location": "Phoenix",
//     "lat": 33.4484,
//     "lon": -112.074,
//     "cases": 5104,
//     "hospitalizations": 384
//   },
//   {
//     "location": "Philadelphia",
//     "lat": 39.9526,
//     "lon": -75.1652,
//     "cases": 4951,
//     "hospitalizations": 229
//   },
//   {
//     "location": "Atlanta",
//     "lat": 33.749,
//     "lon": -84.388,
//     "cases": 2879,
//     "hospitalizations": 291
//   },
//   {
//     "location": "Las Vegas",
//     "lat": 36.1699,
//     "lon": -115.1398,
//     "cases": 3240,
//     "hospitalizations": 271
//   },
//   {
//     "location": "Detroit",
//     "lat": 42.3314,
//     "lon": -83.0458,
//     "cases": 4783,
//     "hospitalizations": 284
//   },
//   {
//     "location": "Portland",
//     "lat": 45.5051,
//     "lon": -122.675,
//     "cases": 4212,
//     "hospitalizations": 216
//   },
//   {
//     "location": "San Diego",
//     "lat": 32.7157,
//     "lon": -117.1611,
//     "cases": 3699,
//     "hospitalizations": 393
//   },
//   {
//     "location": "Nashville",
//     "lat": 36.1627,
//     "lon": -86.7816,
//     "cases": 4864,
//     "hospitalizations": 209
//   },
//   {
//     "location": "Charlotte",
//     "lat": 35.2271,
//     "lon": -80.8431,
//     "cases": 2537,
//     "hospitalizations": 317
//   },
//   {
//     "location": "Indianapolis",
//     "lat": 39.7684,
//     "lon": -86.1581,
//     "cases": 3041,
//     "hospitalizations": 382
//   },
//   {
//     "location": "Columbus",
//     "lat": 39.9612,
//     "lon": -82.9988,
//     "cases": 3274,
//     "hospitalizations": 302
//   },
//   {
//     "location": "Baltimore",
//     "lat": 39.2904,
//     "lon": -76.6122,
//     "cases": 2565,
//     "hospitalizations": 281
//   },
//   {
//     "location": "Kansas City",
//     "lat": 39.0997,
//     "lon": -94.5786,
//     "cases": 4437,
//     "hospitalizations": 291
//   },
//   {
//     "location": "New Orleans",
//     "lat": 29.9511,
//     "lon": -90.0715,
//     "cases": 2779,
//     "hospitalizations": 290
//   }
// ];





// const EpidemiologicalData = () => {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return <p>Loading Map...</p>;

//   return (
//     <div>
//       <h2 className="text-lg font-semibold">Epidemiological Data - Map View</h2>
//       <p>Visualizing epidemiological data on a geographic map.</p>

//       <MapContainer
//         center={[37.0902, -95.7129]}
//         zoom={4}
//         className="h-96 w-full rounded-md border"
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution="© OpenStreetMap contributors"
//         />

//         {caseData.map((data, index) => (
//           <Circle
//             key={index}
//             center={[data.lat, data.lon]}
//             radius={data.cases * 10} // Adjust size dynamically based on cases
//             fillColor="red"
//             color="darkred"
//             fillOpacity={0.4}
//           >
//             <Popup>
//               <strong>{data.location}</strong>
//               <br />
//               Cases: {data.cases}
//               <br />
//               Hospitalizations: {data.hospitalizations}
//             </Popup>
//           </Circle>
//         ))}
//       </MapContainer>
//     </div>
//   );
// };

// export default EpidemiologicalData;













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
