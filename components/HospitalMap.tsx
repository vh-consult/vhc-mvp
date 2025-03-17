"use client";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export function HospitalMap({ latitude, longitude }: { latitude: number; longitude: number }) {
  const [hospitals, setHospitals] = useState<any[]>([]);

  useEffect(() => {
    async function fetchHospitals() {
      const res = await fetch(`/api/hospitals?lat=${latitude}&lon=${longitude}`);
      const data = await res.json();
      setHospitals(data);
    }
    fetchHospitals();
  }, [latitude, longitude]);

  return (
    <MapContainer center={[latitude, longitude]} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {hospitals.map((hospital, index) => (
        <Marker key={index} position={[hospital.lat, hospital.lon]}>
          <Popup>{hospital.display_name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
