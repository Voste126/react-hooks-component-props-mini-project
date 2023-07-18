import React from "react";

function About({image = "https://via.placeholder.com/215",text = "personal Blog by Steve Austin I explain words with code"}){
    return(
        <>
        <aside>
        <img src={image} alt="blog logo" />
        <p className="about-text">
        personal Blog by <span style={{ color: "Red" }}>Steve Austin</span>.<br></br> I explain words with code.
      </p>
        </aside>
        </>
       
    );
}
export default About;