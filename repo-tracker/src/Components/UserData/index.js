import React from "react";

function UserData({apiData}){
    const userData = {name: apiData[0].owner.login, avatar: apiData[0].owner.avatar_url}

    return (
        <>
            <h1>{userData.name}</h1>
            <img src={userData.avatar}/>
        </>
    )
    
}

export default UserData;