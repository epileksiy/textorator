import React from 'react';
import {Select,Button, FormLayout,Textarea} from "@vkontakte/vkui";
import '@vkontakte/vkui/dist/vkui.css';
import '../App.css';
import Windowtxt from "./WindowTxt";
import gifka from '../img/textorator.gif';

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
                    <div className="gif" >
                        <img src={gifka} width="375px" height="125px" alt="Textorator"/>
                    </div>
                    <FormLayout onSubmit={this.handleSubmit}>
                        <div className="textarea">
                            {/*value={this.state.value} onChange={this.handleChange}*/}
                            <Textarea spellCheck="false" id="textarea" placeholder="Введите текст и выберите стиль."/>
                        </div>
                    <div className="but">
                        <Button type="submit" size="xl" style={{backgroundColor: 'white'}} onClick={this.cClicked}>tEXtoratE</Button>
                    </div>
                    </FormLayout>
                    <Select placeholder="Выберите стиль" onChange={this.handleChange}>
                        <option value="g">𝖌𝖍𝖙𝖔𝖙𝖎𝖈</option>
                        <option value="o">𝕠𝕦𝕥𝕝𝕚𝕟𝕖</option>
                        <option value="h">𝓱𝓪𝓷𝓭𝔀𝓻𝓲𝓽𝓲𝓷𝓰</option>
                        <option value="c">ⓒⓘⓡⓒⓛⓔⓓ</option>
                        <option value="gr">ḠṜΣϾΣ</option>
                        <option value="a">ａｅｓｔｈｅｔｉｃ</option>
                        <option value="i">𝙗𝙤𝙡𝙙 𝙞𝙩𝙖𝙡𝙞𝙘</option>
                        <option value="st">ｓ☆ｔ☆ａ☆ｒ☆ｓ☆</option>
                        <option value="b">[̲̅b][̲̅o][̲̅x][̲̅e][̲̅d]</option>
                        <option value="1337">l337</option>
                        <option value="bbl">🅑🅤🅑🅑🅛🅔</option>
                        <option value="gay">𝓰♡°𝙖♡°𝔂♡°</option>
                        <option value="jap">丂卂ズㄩ尺卂</option>
                        <option value="bld">𝐛𝐨𝐥𝐝</option>
                    </Select>
                    <Windowtxt mode={mode} text={text} isclicked={isclick}/>
                </div>
            </div>
            </div>

        )
    }
}
export default Textorator;
