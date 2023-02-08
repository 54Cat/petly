import NavLink from './HeaderLogo';

  const Navigations = () => {
    return (
      <nav>
        <NavLink
          to="/pages/news"
        >
          News
        </NavLink>
        <NavLink
          to="/pages/findpet"
        >
          Find Pet
        </NavLink>
        <NavLink
          to="/pages/ourfriend"
        >
          Our Friend
        </NavLink>
      </nav>
    );
  };

  export default Navigations;