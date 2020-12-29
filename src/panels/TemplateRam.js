import React from 'react';
import {Div, Group} from "@vkontakte/vkui";
import TranspoRam from "./TranspoRam";

function TemplateRam(props){
    let text=props.text;
    return(
        <div className="bta">
            <Group>
                <Div >
                    <TranspoRam text={text}/>
                </Div>
            </Group>
        </div>
    )
}
export default TemplateRam;
