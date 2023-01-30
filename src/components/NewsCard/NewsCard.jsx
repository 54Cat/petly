import { TitleNews } from "./NewsStyledCard";
import {List} from "../OurFriendsCard/OurFriendsCardStyled"

const NewsCard = ({items}) => {
    const elements = items?.map(({ title, url, description, date }) => {
        return (
            <li key={title}>
                <div></div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div>
                    <p>{date}</p>
                    <a href={url} target="_blank" rel="noreferrer">Read more</a>
                </div>
        </li>
    )
    })
    return <List>{ elements}</List>
}

export default NewsCard;