import React from 'react';
var slovar={' ':' ','a':'𝖆','b':'𝖇','c':'𝖈','d':'𝖉','e':'𝖊','f':'𝖋','g':'𝖌','h':'𝖍','i':'𝖎','j':'𝖏','k':'ҝ','l':'𝖑','m':'𝖒',
    'n':'𝖓','o':'𝖔','p':'𝖕','q':'𝖖','r':'𝖗','s':'𝖘','t':'𝖙','u':'𝖚','v':'𝖛','w':'𝖜','x':'𝖝','y':'𝖞','z':'𝖟','1':'Ⅰ','2':'Ⅱ','3':'Ⅲ',
    '4':'Ⅳ','5':'Ⅴ','6':'Ⅵ','7':'Ⅶ','8':'Ⅷ','9':'Ⅸ','10':'Ⅹ','L':'ℒ'};
function Transpo(props) {
    const text=props.text;
    const texta=text.split('');
    for(let i=0;i<texta.length;i++){
        texta[i]=slovar[texta[i]];
    }
    return <h1>{texta}</h1>;
}
export default Transpo;