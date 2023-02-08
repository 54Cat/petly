import { MobileMenu } from './MenuBurgerStyled';
import { MenuTop } from './MenuTopStyled';
import { MenuAuth } from './MenuAuthStyled';
import { MenuBottom } from './MenuBottomStyled';

const MenuBurger = () => {
  return (
    <MobileMenu>
      <MenuTop />
      <MenuAuth />
      <MenuBottom />
  </ MobileMenu>
  );
};

export default MenuBurger;