import { HeaderLogo, Span } from 'components/Header/HeaderLogoStyled';

const Logo = ({ active, setActive }) => {
    return (
        <HeaderLogo to="/" onClick={() => setActive(false)}>
            pe<Span>t</Span>ly
        </HeaderLogo>
    );
};

export default Logo;
