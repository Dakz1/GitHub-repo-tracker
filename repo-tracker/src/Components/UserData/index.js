import React from "react";

function UserData({apiData}){
    let userData;

    if(apiData.length > 0){
        userData = {name: apiData[0].owner.login, avatar: apiData[0].owner.avatar_url}

        return (
            <>
                <h1 id="username">{userData.name}</h1>
                <img id="avatar" src={userData.avatar} alt='github profile'/>
            </>
        )
    }

}

export default UserData;