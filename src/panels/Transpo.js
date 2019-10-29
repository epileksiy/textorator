import React from 'react';
var slovarg={' ':' ','a':'𝖆','b':'𝖇','c':'𝖈','d':'𝖉','e':'𝖊','f':'𝖋','g':'𝖌','h':'𝖍','i':'𝖎','j':'𝖏','k':'ҝ','l':'𝖑','m':'𝖒',
    'n':'𝖓','o':'𝖔','p':'𝖕','q':'𝖖','r':'𝖗','s':'𝖘','t':'𝖙','u':'𝖚','v':'𝖛','w':'𝖜','x':'𝖝','y':'𝖞','z':'𝖟','1':'１','2':'２','3':'３',
    '4':'４','5':'５','6':'６','7':'７','8':'８','９':'Ⅸ','0':'０','A':'𝕬','B':'𝕭','C':'𝕮','D':'𝕯','E':'𝕰','F':'𝕱','G':'𝕲','H':'𝕳','I':'𝕴',
    'J':'𝕵','K':'𝕶','L':'𝕷', 'M':'𝕸','N':'𝕹','O':'𝕺','P':'𝕻','Q':'𝕼','R':'𝕽','S':'𝕾','T':'𝕿','U':'𝖀','V':'𝖁','W':'𝖂','X':'𝖃','Y':'𝖄','Z':'𝖅'};
function Transpo(props) {
    const text=props.text;
    const mode=props.mode;
    const texta=text.split('');
    if(mode==='g') {
        for (let i = 0; i < texta.length; i++) {
            if (texta[i] in slovarg) {
                texta[i] = slovarg[texta[i]];
            }
        }
        return <h1>{texta.join('')}</h1>;
    }else{
        return <h1>{texta.join('')}</h1>;
    }
}
export default Transpo;