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
          Find Pet
        </HeaderNavLink>
        <HeaderNavLink
          to="./pages/ourfriend"
        >
          Our Friend
        </HeaderNavLink>
      </nav>
    );
  };

  export default Navigations;