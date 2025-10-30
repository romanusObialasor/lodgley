import React from "react";
import { useParams } from "react-router-dom";
import DetailHeader from "./DetailHeader";
import ApartmentImageCarousel from "./ApartmentImagesCarousel";
import ApartmentInfo from "./ApartmentInfo";

// Temporary sample data (you can import this from a separate file)
import data from "../../../utils/data.json"; // adjust path

const Detail = () => {
  const { id } = useParams();
  const apartment = data.find((apt) => apt.id === Number(id));

  if (!apartment) {
    return <p style={{ textAlign: "center", marginTop: "40px" }}>Apartment not found.</p>;
  }

  return (
    <div>
      <DetailHeader />
      <ApartmentImageCarousel images={apartment.images || [apartment.image]} />
      <ApartmentInfo apartment={apartment} />
    </div>
  );
};

export default Detail;
