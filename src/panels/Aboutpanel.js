import React from 'react';
import {Group,List,Cell,Div} from "@vkontakte/vkui";

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
                </List>
            </Group>
        </div>
    )
}
export default Aboutpanel;