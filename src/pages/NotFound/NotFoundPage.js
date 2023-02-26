import { Container, Title, Hero } from './NotFoundPageStyled';
import { NavButtonLink } from '../../components/Header/AuthNav/AuthNav.styled';

const NotFound = () => {
  return (
    <Container>
      <Hero></Hero>
      <Title>Sorry, the page not found</Title>
      <NavButtonLink to="/" >Home</NavButtonLink>
    </Container>
  );
};

export default NotFound;