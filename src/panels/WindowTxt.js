import React from 'react';
import Template from "./textTemplate";

function Windowtxt(props){
    const isClicked=props.isclicked;
    if(isClicked){
        return <Template text={props.text}/>
    }
    return null
}

export default Windowtxt;