import styled from '@emotion/styled';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export const MenuBurger = styled.div`
display: flex;
flex-direction: column;
@media (min-width: 768px) {
    align-items: center;
}

@media (min-width: 1280px) {
    align-items: center;
}
`
`

const MenuBurgerIcon = styled(MenuIcon)`
cursor: pointer;
width: 16px;
height: 17px;
fill: rgba(17, 17, 17, 0.6);

&:hover {    @media (min-width: 768px) {
        align-items: center;
    }

    @media (min-width: 1280px) {
        align-items: center;
    }
`
    fill: rgba(245, 146, 86, 1);
}

@media (min-width: 768px) {
    width: 25px;
    height: 26px;
}
`

const ButtonCloseMenuIcon = styled(CloseIcon)`

position: absolute;

top: 20px;
right: 20px;

width: 34px;
height: 34px;

display: flex;
justify-content: center;
align-items: center;
position: absolute;
border: none;

color: #111111;

@media(min-width: 768px) {
    width: 44px;
    height: 44px;
    top: 25px;
    right: 25px;
}

background: #FDF7F2;
border-radius: 50%;
//border: rgba(0,0,0,0);
//outline: rgba(0,0,0,0);
//z-index: 99999;
`;

export {
    MenuBurgerIcon,
    ButtonCloseMenuIcon}