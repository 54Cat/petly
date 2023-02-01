import { nanoid } from "nanoid"
import { List } from "./CardsListStyled"
export const CardsList = ({cardsArray, CardsItem}) => {
    return <List> 
        {cardsArray && cardsArray.map(card => {
            return <CardsItem key={nanoid()} card={card} />
        })}
    </List>
}