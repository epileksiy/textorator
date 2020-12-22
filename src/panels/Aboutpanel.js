import React from 'react';
import {Group,List,Cell,Div, Footer} from "@vkontakte/vkui";

function Aboutpanel(){
    return(
        <div>
            <Group title="Кому будет полезно?">
                <Div>
                    Сервис создан для удобной стилизации текста.
                    Украшенный текст можно будет использовать для оформления различных соц. сетей и другого декорирования.
                    Необычный шрифт привлечет внимание и явно выделит вас на фоне остальных!
                </Div>
            </Group>
            <Group title="Доступные стили" description="К сожалению, не все стили поддерживают русский язык, но с английским работает отлично. Попробуйте сами!">
                <List>
                    <Cell>
                        𝖌𝖍𝖙𝖔𝖙𝖎𝖈
                    </Cell>
                    <Cell>
                        𝕠𝕦𝕥𝕝𝕚𝕟𝕖
                    </Cell>
                    <Cell>
                        𝓱𝓪𝓷𝓭𝔀𝓻𝓲𝓽𝓲𝓷𝓰
                    </Cell>
                    <Cell>
                        ⓒⓘⓡⓒⓛⓔⓓ
                    </Cell>
                    <Cell>
                        ḠṜΣϾΣ
                    </Cell>
                    <Cell>
                        ａｅｓｔｈｅｔｉｃ
                    </Cell>
                    <Cell>
                        𝙗𝙤𝙡𝙙 𝙞𝙩𝙖𝙡𝙞𝙘
                    </Cell>
                    <Cell>
                        ｓ☆ｔ☆ａ☆ｒ☆ｓ☆
                    </Cell>
                    <Cell>
                        [̲̅b][̲̅o][̲̅x][̲̅e][̲̅d]
                    </Cell>
                    <Cell>
                        l337
                    </Cell>
                    <Cell>
                        🅑🅤🅑🅑🅛🅔
                    </Cell>
                    <Cell>
                        𝓰♡°𝙖♡°𝔂♡°
                    </Cell>
                    <Cell>
                        丂卂ズㄩ尺卂
                    </Cell>
                    <Cell>
                        𝐛𝐨𝐥𝐝
                    </Cell>
                </List>
            </Group>
            <Footer>Создатель - epileksiy</Footer>
        </div>
    )
}
export default Aboutpanel;
