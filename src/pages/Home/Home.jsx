import React from "react";
import Header from "./subHome/Header";
import SearchSection from "./subHome/SearchSection";
import ApartmentCard from "./subHome/ApartmentCard";

const Home = () => {

const apartment={
    id: 1,
    name: "Cozy Apartment",
    image: "/bedroom.jpg",
    type: "Self Contain",
    price: 120000,
    amenities: ["Water", "Electricity", "Kitchen"],
    description: "A cozy apartment located in the heart of the city with all modern amenities.",
    }

  return (
    <div
    style={{
        // backgroundColor: "red",
        height: "100vh",
    }}>
      <Header />
      <SearchSection />
      <div
      style={
        {
            padding: "20px 16px",

        }
      }>
        <ApartmentCard apartment={apartment}/>
      </div>
    </div>
  );
};

export default Home;



