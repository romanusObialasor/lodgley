import React from "react";
import Header from "./subHome/Header";
import SearchSection from "./subHome/SearchSection";

const Home = () => {
  return (
    <div
    style={{
        // backgroundColor: "red",
        height: "100vh",
    }}>
      <Header />
      <SearchSection />
    </div>
  );
};

export default Home;



