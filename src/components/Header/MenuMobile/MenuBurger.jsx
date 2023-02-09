import { MobileMenu } from './MenuBurgerStyled';
import { MenuBurgerIcon } from './MenuBurgerStyled';
import { ButtonCloseMenu } from './MenuBurgerStyled';
import { MenuTop } from './MenuTopStyled';
import { MenuAuth } from './MenuAuthStyled';
import { MenuBottom } from './MenuBottomStyled';

const MenuBurger = () => {
  return (
    <MobileMenu>
      <MenuBurgerIcon />
      <MenuTop />
      <MenuAuth />
      <MenuBottom />
      <ButtonCloseMenu />
  </ MobileMenu>
  );
};

const ButtonCloseMenuIcon = () => {

const [menuOpen, setMenulOpen] = useState(false)
const openMemu = () => {
    setMenuOpen(true);
}
const closeMenu = () => {
    setMenuOpen(false);
}

return (
<>
    <BtnBox>
        <Btn use="MenuBurgerIcon"></Btn>
        <MenuBurgerIcon type="button" onClick={openMenu}></MenuBurgerIcon>
    </BtnBox>
        {menuOpen && <MobileMenu onClose={closeMenu}></MobileMenu>}
</>
)
}


export default MenuBurger;