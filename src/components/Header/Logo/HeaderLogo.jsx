import { HeaderLogo, Span } from 'components/Header/Logo/HeaderLogoStyled';

const Logo = ({ active, setActive }) => {
    return (
        <HeaderLogo to="/" onClick={() => setActive(false)}>
            pe<Span>t</Span>ly
        </HeaderLogo>
    );
};

export default Logo;
