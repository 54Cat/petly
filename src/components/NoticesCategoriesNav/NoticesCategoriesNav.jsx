
import { useParams } from 'react-router-dom';
import { NoticesCategoriesNavList, NoticesCategoriesNavButton } from 'components/NoticesCategoriesNav/NoticesCategoriesNavStyled';
import { ModalAddNotice } from 'components/Modals/modalAddNotice/modalAddNotice';
export const NoticesCategoriesNav = () => {
    const { category } = useParams();

    return (
        <>
            <NoticesCategoriesNavList>
                <NoticesCategoriesNavButton to={'/notices/lost-found'}  style={category === "lost-found" ? { color: '#ffffff', backgroundColor: '#F59256', border: 0 } : undefined}>lost/found</NoticesCategoriesNavButton>
                <NoticesCategoriesNavButton to={'/notices/for-free'}  style={category === "for-free" ? { color: '#ffffff', backgroundColor: '#F59256', border: 0 } : undefined}>In good hands</NoticesCategoriesNavButton>
                <NoticesCategoriesNavButton to={'/notices/sell'} style={category === "sell" ? { color: '#ffffff', backgroundColor: '#F59256', border: 0 } : undefined}>sell</NoticesCategoriesNavButton>
                <NoticesCategoriesNavButton to={'/notices/favorite'}  style={category === "favorite" ? { color: '#ffffff', backgroundColor: '#F59256', border: 0 } : undefined}>Favorite ads</NoticesCategoriesNavButton>
                <NoticesCategoriesNavButton to={'/notices/own'}  style={category === "own" ? { color: '#ffffff', backgroundColor: '#F59256', border: 0 } : undefined}>My ads</NoticesCategoriesNavButton>
            </NoticesCategoriesNavList>
            <ModalAddNotice />
        </>
        );
};