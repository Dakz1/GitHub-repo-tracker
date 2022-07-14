import React from "react";

function SearchBar({setUserInput}){
    
    function handleSubmit(e){
        e.preventDefault();
        setUserInput(e.target.userName.value);
        e.target.userName.value = "";
    }

    return (
        <form onSubmit={handleSubmit}>
            <input required type='text' name='userName' placeholder="GitHub UserName"></input>
        </form>
    )
}

export default SearchBar;