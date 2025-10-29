import React from "react";
import Header from "./subHome/Header";
import SearchSection from "./subHome/SearchSection";
import ApartmentCard from "./subHome/ApartmentCard";
import data from "../../utils/data.json"

const Home = () => {


    
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
            paddingBottom: "80px",

        }
      }>
        {
            data.map((data)=>(

                <ApartmentCard apartment={data}/>
            ))
        }
      </div>
    </div>
  );
};

export default Home;



