import { MenuTopNav } from './MenuTopStyled';
import Logo from './HeaderLogo';
import MenuBurger from './MenuMobile/MenuBurger';

const MenuTop = () => {
    return (
      <MenuTopNav>
        <Logo />
        <MenuBurger />
    </ MenuTopNav>
    );
  };

export default MenuTop;