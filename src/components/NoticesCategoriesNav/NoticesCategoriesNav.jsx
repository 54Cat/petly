
import { useParams } from 'react-router-dom';
import { NoticesCategoriesNavList, NoticesCategoriesNavButton } from 'components/NoticesCategoriesNav/NoticesCategoriesNavStyled';
import { ModalAddNotice } from 'components/Modals/modalAddNotice/modalAddNotice';
export const NoticesCategoriesNav = () => {
    const { category } = useParams();

    return (
        <>
         <NoticesCategoriesNavList>
        <NoticesCategoriesNavButton to={'/notices/lostFound'}  style={category === "lostFound" ? { color: '#ffffff', backgroundColor: '#F59256', border: 0 } : undefined}>lost/found</NoticesCategoriesNavButton>
        <NoticesCategoriesNavButton to={'/notices/inGoodHands'}  style={category === "inGoodHands" ? { color: '#ffffff', backgroundColor: '#F59256', border: 0 } : undefined}>In good hands</NoticesCategoriesNavButton>
        <NoticesCategoriesNavButton to={'/notices/sell'} style={category === "sell" ? { color: '#ffffff', backgroundColor: '#F59256', border: 0 } : undefined}>sell</NoticesCategoriesNavButton>
        <NoticesCategoriesNavButton to={'/notices/favoriteAds'}  style={category === "favoriteAds" ? { color: '#ffffff', backgroundColor: '#F59256', border: 0 } : undefined}>Favorite ads</NoticesCategoriesNavButton>
        <NoticesCategoriesNavButton to={'/notices/myAds'}  style={category === "myAds" ? { color: '#ffffff', backgroundColor: '#F59256', border: 0 } : undefined}>My ads</NoticesCategoriesNavButton>
    </NoticesCategoriesNavList>
    <ModalAddNotice />
    </>
        );
};