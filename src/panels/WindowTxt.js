import React from 'react';
import Template from "./textTemplate";

function Windowtxt(props){
    const isClicked=props.isclicked;
    const text=props.text;
    const mode=props.mode;
    if(isClicked){
        return <Template text={text} mode={mode}/>
    }
    return null
}

export default Windowtxt;