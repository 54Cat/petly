import { nanoid } from "nanoid"
import { List, TestItem} from "./CardsListStyled"
export const CardsList = ({cardsArray}) => {
    return <List>{cardsArray.map(card => {
        return <TestItem key={nanoid()}>
            <p>{card.title}</p> 
       </TestItem>
    })}</List>
}