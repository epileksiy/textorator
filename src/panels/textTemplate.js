import React from 'react';
import {Div, Group} from "@vkontakte/vkui";
import Transpo from "./Transpo";
//import Transpo from './Transpo'

function Template(props){
    let text=props.text;
    return(
        <div className="bta">
        <Group>
            <Div >
                <Transpo text={text}/>
            </Div>
        </Group>
        </div>
)
}
export default Template;