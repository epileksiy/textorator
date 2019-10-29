import React from 'react';
import {Select,Button, FormLayout,Textarea} from "@vkontakte/vkui";
import '@vkontakte/vkui/dist/vkui.css';
import '../App.css';
import Windowtxt from "./WindowTxt";


class Textorator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isclicked: false,
            value: '',
            mode:''
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
        var mode=this.state.mode;
        return (
            <div className='fix'>
            <div className='panel'>
                <div className='up'>
                    <div className="gif">
                        <img src="http://i.yapx.ru/FgvLk.gif" width="375px" height="125px" alt=""/>
                    </div>
                    <FormLayout onSubmit={this.handleSubmit}>
                        <div className="textarea">
                            {/*value={this.state.value} onChange={this.handleChange}*/}
                            <Textarea spellCheck="false" id="textarea"></Textarea>
                        </div>
                    <div className="but">
                        <Button type="submit" size="xl" style={{backgroundColor: 'white'}} onClick={this.cClicked}>tEXtoratE</Button>
                    </div>
                    </FormLayout>
                    <Select placeholder="Выберите стиль" onChange={this.handleChange}>
                        <option value="g">𝖌𝖍𝖙𝖔𝖙𝖎𝖈</option>
                    </Select>
                    <Windowtxt mode={mode} text={text} isclicked={isclick}/>
                </div>
            </div>
            </div>

        )
    }
}
export default Textorator;