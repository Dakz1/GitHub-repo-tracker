import React from "react";

function DisplayData({apiData}){
    const results = [];


    if(apiData.length > 0){
        apiData.forEach(repo => {
            results.push(
                <li key={repo.id} className='repo' onClick={()=> {
                        window.open(repo.html_url, '_blank');
                    }}>
                    <h1>{repo.name}</h1>
                    <div>
                        <i className="fa-solid fa-code-fork tooltip"> {repo.forks} <span className="tooltiptext">Fork count</span> </i>
                        <i className="fa-solid fa-star tooltip"> {repo.stargazers_count} <span className="tooltiptext">stargazers</span> </i> 
                        <i className="fa-solid fa-eye tooltip"> {repo.watchers_count} <span className="tooltiptext">Watchers</span> </i> 
                        <i className="fa-solid fa-bug tooltip"> {repo.open_issues} <span className="tooltiptext">Open issues</span> </i> 
                    </div>
                </li>
            );
        });
    };
    
   return results;
};

export default DisplayData;