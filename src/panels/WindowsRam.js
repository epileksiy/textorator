import React from 'react';
import TemplateRam from "./TemplateRam";

function WindowsRam(props){
    const isClicked=props.isclicked;
    const text=props.text;
    if(isClicked){
        return <TemplateRam text={text}/>
    }
    return null
}

export default WindowsRam;
