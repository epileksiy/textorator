import React from 'react';
import {Button, FormLayout,Textarea} from "@vkontakte/vkui";
import '@vkontakte/vkui/dist/vkui.css';
import '../App.css';
import gifka from '../img/randomizer.gif';
import WindowsRam from "./WindowsRam";

class Randomizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isclicked: false,
            value: ''
        };
        this.cClicked=this.cClicked.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    cClicked() {
        if (this.state.isclicked === false) {
            this.setState({isclicked: true});
        }
    }

    handleChange(event) {
        this.setState({mode: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        let a=document.getElementById("textarea").value;
        this.setState({value: a});
    }

    render() {
        var isclick = this.state.isclicked;
        var text=this.state.value;

        return (
            <div className='fix'>
                <div className='panel'>
                    <div className='up'>
                        <div className="gif" >
                            <img src={gifka} width="375px" height="125px" alt="Textorator"/>
                        </div>
                        <FormLayout onSubmit={this.handleSubmit}>
                            <div className="textarea">
                                {/*value={this.state.value} onChange={this.handleChange}*/}
                                <Textarea spellCheck="false" id="textarea" placeholder="Введите текст или ваш никнейм."/>
                            </div>
                            <div className="but">
                                <Button type="submit" size="xl" style={{backgroundColor: 'white'}} onClick={this.cClicked}>rAnD0miZe</Button>
                            </div>
                        </FormLayout>
                        <WindowsRam  text={text} isclicked={isclick}/>
                    </div>
                </div>
            </div>

        )
    }
}
export default Randomizer;
