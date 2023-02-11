import {
    TitleNews,
    DecorLine,
    NewsInfo,
    NewsDate,
    NewsLink,
    NewsItem,
    NewsFooter,
} from './NewsStyledCard';
import formatNewsDate from 'components/Utils/helpers/formatNewsDate';

// const NewsCard = ({items}) => {
//     const elements = items?.map(({ title, url, description, date }) => {
//         return (
//             <NewsItem key={title}>
//                 <DecorLine></DecorLine>
//                     <TitleNews>{`${title.slice(0, 52)}...,`}</TitleNews>
//                 <NewsInfo>{` ${description.slice(0, 100)}...,`}</NewsInfo>
//                 <NewsFooter>
//                     <NewsDate>{formatNewsDate(date)}</NewsDate>
//                     <NewsLink href={url} target="_blank" rel="noreferrer">Read more</NewsLink>
//                 </NewsFooter>
//         </NewsItem>
//     )
//     })
//     return elements;
// }

const NewsCard = ({ card }) => {
    const { title, description, date, url } = card;
    return (
        <NewsItem>
            <DecorLine></DecorLine>
            <TitleNews>{`${title.slice(0, 32)}...,`}</TitleNews>
            <NewsInfo>{` ${description.slice(0, 130)}...,`}</NewsInfo>
            <NewsFooter>
                <NewsDate>{formatNewsDate(date)}</NewsDate>
                <NewsLink href={url} target="_blank" rel="noreferrer">
                    Read more
                </NewsLink>
            </NewsFooter>
        </NewsItem>
    );
};

export default NewsCard;
