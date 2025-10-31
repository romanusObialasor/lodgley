// src/components/ApartmentMap.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import { MapContainer, TileLayer, Marker, Polyline, Popup } from "react-leaflet";
import { haversineDistanceKm } from "../../../utils/distance";

const DEFAULT_SCHOOL = { lat: 7.76745162664026, lng: 8.62053215016805 }; // replace with actual school coords

// Props: apartment = { location: { lat, lng }, name, ... }
export default function ApartmentMap({ apartment, school = DEFAULT_SCHOOL }) {
  const apt = apartment?.location;
  const center = apt || school;

  // compute distance (km) if both coords available
  const distanceKm = apt ? haversineDistanceKm(apt.lat, apt.lng, school.lat, school.lng) : null;

  return (
    <Box sx={{ mt: 3, mx: 2 }}>
      <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
        Location
      </Typography>

      <Box sx={{ height: 260, borderRadius: 2, overflow: "hidden", boxShadow: 2 }}>
        <MapContainer
          center={[center.lat, center.lng]}
          zoom={15}
          style={{ width: "100%", height: "100%" }}
          scrollWheelZoom={false}
        >
          {/* OpenStreetMap tiles (no key required) */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* School marker */}
          <Marker position={[school.lat, school.lng]}>
            <Popup>
              Convocation Square (Jostum)
            </Popup>
          </Marker>

          {/* Apartment marker (if exists) */}
          {apt && (
            <>
              <Marker position={[apt.lat, apt.lng]}>
                <Popup>{apartment.name || "Apartment"}</Popup>
              </Marker>

              {/* line between points */}
              <Polyline positions={[[school.lat, school.lng], [apt.lat, apt.lng]]} pathOptions={{ color: "#1976d2" }} />
            </>
          )}
        </MapContainer>
      </Box>

      {/* Distance text */}
      <Box sx={{ mt: 1 }}>
        {distanceKm != null ? (
          <Typography variant="body2" color="text.secondary">
            ~{distanceKm.toFixed(2)} km from the Convocation square
          </Typography>
        ) : (
          <Typography variant="body2" color="text.secondary">
            Apartment location not set. (Admin can set it on listing)
          </Typography>
        )}
      </Box>
    </Box>
  );
}
