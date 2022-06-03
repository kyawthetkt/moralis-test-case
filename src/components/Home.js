import React from "react";

import { useMoralisQuery } from "react-moralis";

const Home = () => {
    
    // Even though there is record related to bdJhoxg2dXAAbff6IBtx9JOH, no data is returned.
    const { data: collections } = useMoralisQuery("collection", (query) =>
        query.equalTo("objectId", "bdJhoxg2dXAAbff6IBtx9JOH")
    );
    console.log("collections: ", collections)

    return(<h3>Home Page</h3>);
}

export default Home;