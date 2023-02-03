import { nanoid } from "nanoid"
import { List } from "./CardsListStyled"
export const CardsList = ({cardsArray, CardsItem, styles}) => {
    return <List style={styles}> 
        {cardsArray && cardsArray.map(card => {
            return <CardsItem key={nanoid()} card={card} />
        })}
    </List>
}