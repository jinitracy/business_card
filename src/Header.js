import React from "react";
import Profile from "./images/profile.png"

export default function Header(){
    return(
        <header>
            <img src={Profile} className="img"></img>
            <h1 className="name">Jini Tracy</h1>
            <h5 className="job">Frontend Developer</h5>
            <h5 className="email">jinitracy03.tj@gmail.com</h5>
            <button className="email-btn">Email</button>
            <button className="linkedin-btn"><a>LinkedIn</a></button>
        </header>
    )
}