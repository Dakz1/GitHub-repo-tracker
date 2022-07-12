import React, {useEffect} from "react";
import axios from "axios";

function API({userInput, setApiData}){

    useEffect(() => {
        async function getData(){
            const url = `https://api.github.com/users/${userInput}/repos`;
            const options = { 
                Accept: "application/vnd.github+json",
                Authorization: "token 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" }
            const response = await axios.get(url, options);
            setApiData(response.data);
        };
        
        if(userInput != null && userInput != undefined && userInput != ""){
            getData();
        }

    }, [userInput]);
    
}

export default API;