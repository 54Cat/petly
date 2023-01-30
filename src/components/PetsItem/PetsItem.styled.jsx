import styled from '@emotion/styled';

export const PetsCard = styled.div`
margin: 0;
  padding: 0;
  background: #FFFFFF;
box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;

  @media (min-width: 320px) {
width: 360px;  
}
`;

export const Wrapper = styled.div`
margin: 0;
  padding: 20px;
  background: #FFFFFF;
box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;

  @media (min-width: 320px) {
width: 280px;  
}
`;

export const PetsImg = styled.img`
/* width: 100%; */
  height: auto;
  /* display: block; */

@media (min-width: 320px) {
width: 240px;
  height: 240px;
}
  margin: 0;
  /* margin-bottom: 20px; */
`;

export const CardText = styled.p`
  &:not(:last-child) {
    margin-bottom: 12px;
  }

width: 240px;
`;