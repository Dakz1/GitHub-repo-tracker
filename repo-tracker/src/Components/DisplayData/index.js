import React from "react";

function DisplayData({apiData}){

    const results = [];

    apiData.forEach(repo => {
        results.push(
            <li key={repo.id}>
                <h1>{repo.name}</h1>
                <p>Forks: {repo.forks}</p>
                <p>stargazers: {repo.stargazers_count}</p>
                <p>watchers: {repo.watchers_count}</p>
            </li>
        )
    })
    
    
   return results;
}

export default DisplayData;