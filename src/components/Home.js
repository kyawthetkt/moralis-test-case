import React from "react";

import { useMoralisQuery } from "react-moralis";

const Home = () => {

    // const collectionName = "alphabet";    
    // const { data: collections } = useMoralisQuery("CvlCollections", (query) =>
    //     query.fullText("name", collectionName)
    // );
    const { data: collections } = useMoralisQuery("CvlCollections", (query) =>
        query.equalTo("objectId", "bdJhoxg2dXAAbff6IBtx9JOH")
    );

    console.log("collections: ", collections)

    return(<h3>Home Page</h3>);
}

export default Home;