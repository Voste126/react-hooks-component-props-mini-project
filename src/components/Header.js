import React  from "react";

function Header({userHeader = "Overreacted"}){
    return(
        <h1>{userHeader}</h1>
    )
}
export default Header;