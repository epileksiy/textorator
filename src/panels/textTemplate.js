import React from 'react';
import {Div, Group} from "@vkontakte/vkui";
import Transpo from "./Transpo";

function Template(props){
    let text=props.text;
    const mode=props.mode;
    return(
        <div className="bta">
        <Group>
            <Div >
                <Transpo mode={mode} text={text}/>
            </Div>
        </Group>
        </div>
)
}
export default Template;