import { NoticesList } from "./NoticesCategoriesListStyled"
import { NoticesCategoriesItem } from '../NoticesCaregoriesItem/NoticesCaregoriesItem'


export const NoticesCategoriesList = ({notices, favorite, updateFavorite, deleteMyNotices}) => {
    return <NoticesList>
        { 
            notices.map(notice => <NoticesCategoriesItem key={notice._id} notice={notice} favorite={favorite} updateFavorite={updateFavorite} deleteMyNotices={deleteMyNotices}/>)
        }
    </NoticesList>
}