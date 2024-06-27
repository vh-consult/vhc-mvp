"use client"
import React, {useState, useEffect, useRef, FC} from 'react'
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMapEvents,
    useMap
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"
import "leaflet-defaulticon-compatibility";
import { handleError } from '@/lib/utils';
import Loader from '../Loader';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

interface MarkerData {
    coordinates: [number, number];
    title: string;
}

const MapComponent: FC = () => {
  const [inputValue, setInputValue] = useState<string>("")
  const [markerData, setMarkerData] = useState<MarkerData | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [submittedQuestion, setSubmittedQuestion] = useState<string | null>(null)

  const mapRef = useRef<any | null>(null)
  const ZoomHandler: FC = () => {
    const map = useMap()

    const flyToMarker = (coordinates: [number, number], zoom: number) => {
        if (coordinates && typeof coordinates[0] !== "undefined") {
            map.flyTo(coordinates, zoom, {
                animate: true,
                duration: -1.5,
            })
        }
    }

    useEffect(() => {   
        if (markerData) {
            if (markerData.coordinates && typeof markerData.coordinates[0] !== "undefined") {
                flyToMarker(markerData.coordinates, 11)
            }
        }
    }, [markerData])
    return null;
  }
  const handleSubmit = async () => {
    setLoading(true);
    try {
        setSubmittedQuestion(inputValue)
        setInputValue("")

        const response = await fetch("/api/map", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({value: inputValue})

        });
        const data = await response.json();
        setMarkerData(data)
    } catch (error) {
        handleError(error)
    }
  }
  return (
    <>
      {loading && <Loader/>}

      {
        markerData && markerData.coordinates && 
           ( 
            <div className="flex flex
            -center absolute top-3 right-3 z-[100000]">
                <h1 className="text-3xl font-bold text-black p-2 
                bg-white rounded-md z-[100000]">
                    {markerData.title}
                </h1>
            </div>
        )
      }

      <MapContainer 
        style={{
            height: "100vh",
            width: "100vw"
        }}

        // zoom={11} 
        // center={[43.6426, -79.3871]} 
      >
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />

        {
            markerData && markerData.coordinates && (
                <Marker position={markerData.coordinates}>
                    <Popup>
                        {markerData.title}
                    </Popup>
                </Marker>
            )
        }

        <ZoomHandler/>
      </MapContainer>
      <Input 
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className='flex-grow p-2 border rounded-md'
        onKeyPress={(e) => {
            if (e.key === "Enter") handleSubmit();
        }}
      />
      <Button 
      onClick={handleSubmit} 
      className='p-2 ml-2 bg-green-2 text-green-1 rounded-md'
      >
        Search
      </Button>
    </>
  )
}

export default MapComponent
