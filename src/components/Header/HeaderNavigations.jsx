import HeaderNavLink from './HeaderNavigationsStyled';

  const Navigations = () => {
    return (
      <nav>
        <HeaderNavLink
          to="./pages/news"
        >
          News
        </HeaderNavLink>
        <HeaderNavLink
          to="./pages/findpet"
        >
          Find pet
        </HeaderNavLink>
        <HeaderNavLink
          to="./pages/ourfriend"
        >
          Our friend
        </HeaderNavLink>
      </nav>
    );
  };

  export default Navigations;