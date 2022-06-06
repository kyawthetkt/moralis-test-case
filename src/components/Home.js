import React from "react";
import { useMoralisQuery } from "react-moralis";

const Home = () => {

  const { data: collections } = useMoralisQuery("CvlCollections");
  console.log('collections: ', collections);

  return (
      <div>
         <h3>Home Page</h3>
      </div>
  );
};

export default Home;
