
import { useParams } from 'react-router-dom';
import { NoticesCategoriesNavList, NoticesCategoriesNavButton } from 'components/NoticesCategoriesNav/NoticesCategoriesNavStyled';
import { ModalAddNotice } from 'components/Modals/modalAddNotice/modalAddNotice';
export const NoticesCategoriesNav = () => {
    const { categoryName } = useParams();

    return (
        <>
         <NoticesCategoriesNavList>
        <NoticesCategoriesNavButton to={'/notices/lostFound'}  style={categoryName === "lostFound" ? { color: '#ffffff', backgroundColor: '#F59256', border: 0 } : undefined}>lost/found</NoticesCategoriesNavButton>
        <NoticesCategoriesNavButton to={'/notices/inGoodHands'}  style={categoryName === "inGoodHands" ? { color: '#ffffff', backgroundColor: '#F59256', border: 0 } : undefined}>In good hands</NoticesCategoriesNavButton>
        <NoticesCategoriesNavButton to={'/notices/sell'} style={categoryName === "sell" ? { color: '#ffffff', backgroundColor: '#F59256', border: 0 } : undefined}>sell</NoticesCategoriesNavButton>
        <NoticesCategoriesNavButton to={'/notices/favoriteAds'}  style={categoryName === "favoriteAds" ? { color: '#ffffff', backgroundColor: '#F59256', border: 0 } : undefined}>Favorite ads</NoticesCategoriesNavButton>
        <NoticesCategoriesNavButton to={'/notices/myAds'}  style={categoryName === "myAds" ? { color: '#ffffff', backgroundColor: '#F59256', border: 0 } : undefined}>My ads</NoticesCategoriesNavButton>
    </NoticesCategoriesNavList>
    <ModalAddNotice />
    </>
        );
};