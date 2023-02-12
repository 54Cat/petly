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

const NewsCard = ({ card }) => {
    const { title, description, date, url } = card;
    return (
        <NewsItem>
            <DecorLine></DecorLine>
            <TitleNews>{`${title.slice(0, 32)}...,`}</TitleNews>
            <NewsInfo>{` ${description.slice(0, 170)}...,`}</NewsInfo>
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
