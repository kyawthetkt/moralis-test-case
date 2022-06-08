import React, { useEffect } from "react";
import { useMoralisQuery } from "react-moralis";

const Home = () => {
  
  const { data } = useMoralisQuery("CvlCollections");
  console.log("data: ", data);

  return (
    <div>
      <h3>Test On Home Page</h3>
    </div>
  );
};

export default Home;
