import { useState } from 'react';
import { NoticesCategoriesNavList, NoticesCategoriesNavButton } from 'components/NoticesCategoriesNav/NoticesCategoriesNavStyled';
export const NoticesCategoriesNav = () => {
    const [active, setActive] = useState("");

    const handleClick = (event) => {
    setActive(event.target.id);
    
    }
    return <NoticesCategoriesNavList>
        <NoticesCategoriesNavButton to={'lostFound'} onClick={handleClick} id={"1"} style={active === "1" ? { color: '#ffffff', backgroundColor: '#F59256', border: 0 } : undefined}>lost/found</NoticesCategoriesNavButton>
        <NoticesCategoriesNavButton to={'inGoodHands'} onClick={handleClick} id={"2"} style={active === "2" ? { color: '#ffffff', backgroundColor: '#F59256', border: 0 } : undefined}>In good hands</NoticesCategoriesNavButton>
        <NoticesCategoriesNavButton to={'sell'} onClick={handleClick} id={"3"} style={active === "3" ? { color: '#ffffff', backgroundColor: '#F59256', border: 0 } : undefined}>sell</NoticesCategoriesNavButton>
        <NoticesCategoriesNavButton to={'favoriteAds'} onClick={handleClick} id={"4"} style={active === "4" ? { color: '#ffffff', backgroundColor: '#F59256', border: 0 } : undefined}>Favorite ads</NoticesCategoriesNavButton>
        <NoticesCategoriesNavButton to={'myAds'} onClick={handleClick} id={"5"} style={active === "5" ? { color: '#ffffff', backgroundColor: '#F59256', border: 0 } : undefined}>My ads</NoticesCategoriesNavButton>
    </NoticesCategoriesNavList>
}