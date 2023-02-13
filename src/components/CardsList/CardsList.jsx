import { nanoid } from "nanoid"
import { List, IfEmptyList } from "./CardsListStyled"
export const CardsList = ({cardsArray, CardsItem, styles}) => {
    return <List style={styles}> 
        {cardsArray.length === 0 && <IfEmptyList>Ops... Nothing found!</IfEmptyList>}
        {cardsArray && cardsArray.map(card => {
            return <CardsItem key={card._id?? nanoid()} card={card} />
        })}
    </List>
}