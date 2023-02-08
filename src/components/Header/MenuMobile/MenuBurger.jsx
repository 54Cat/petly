import { MobileMenu } from './MenuBurgerStyled';
import { MenuTop } from './MenuBurgerStyled';
import { MenuAuth } from './MenuBurgerStyled';
import { MenuBottom } from './MenuBurgerStyled';

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