import { useState } from "react";
import { useNewMoralisObject } from "react-moralis";

const useCvlAuctionData = () => {
    const collectionName = "CvlAuctions";
    const { error, isSaving, save } = useNewMoralisObject(collectionName);
    const [success, setSuccess] = useState(false);
    const [response, setResponse] = useState({});

    const create = async (params) => {
        let status, cvlAuction, message;
        await save(params, {
            onSuccess: (result) => {
                setSuccess(true);
                setResponse(result);
                status = "success";
                cvlAuction = result;
                message = "Auction Successfully Created.";
            },
            onError: (error) => {
                status = "failed";
                // message = error.message;
                message = "Unable to create auction.";
            },
        });
        return { status, message, cvlAuction };
    };

    const update = async (params) => {
        let status, message, cvlAuction;
        await save(params, {
            onSuccess: (result) => {
                setSuccess(true);
                setResponse(result);
                status = "success";
                cvlAuction = result;
                message = "Auction Successfully Created.";
            },
            onError: (error) => {
                status = "error";
                message = error.message;
                console.log("error: ", error);
            },
        });

        return { status, message, cvlAuction };
    };

    const remove = async (id) => {};

    return {
        collectionName,
        create,
        update,
        remove,
        error,
        isSaving,
        success,
        response,
    };
};

export default useCvlAuctionData;
