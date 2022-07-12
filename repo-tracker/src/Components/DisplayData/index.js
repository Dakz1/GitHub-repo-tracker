import React from "react";

function DisplayData({apiData}){

    const results = [];

    apiData.forEach(repo => {
        results.push(
            <li key={repo.id}>
                <h1>{repo.name}</h1>
                <h1>{repo.fork_count}</h1>
                <h1>{repo.stargazers_count}</h1>
                <h1>{repo.watchers_count}</h1>
            </li>
        )
    })
    
    
   return results;
}

export default DisplayData;