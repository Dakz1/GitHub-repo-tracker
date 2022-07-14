import React from "react";

function DisplayData({apiData}){
    const results = [];


    if(apiData.length > 0){
        apiData.forEach(repo => {
            console.warn(repo);
            results.push(
                <li key={repo.id} className='repo' onClick={()=> {
                        window.open(repo.html_url, '_blank');
                    }}>
                    <h1>{repo.name}</h1>
                    <i className="fa-solid fa-code-fork"> {repo.forks} </i>
                    <i className="fa-solid fa-star"> {repo.stargazers_count} </i> 
                    <i className="fa-solid fa-eye"> {repo.watchers_count} </i> 
                </li>
            );
        });
    };
    
   return results;
};

export default DisplayData;