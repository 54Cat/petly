import styled from '@emotion/styled';

import not_found from 'data/img_not_found/404-page-not-found.png';

export const Container = styled.div`
  background-color: #fdf7f2;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;

export const Hero = styled.div`  
  width: 298px;
  height: 116px;
  background-image: url(${not_found});
  background-repeat: no-repeat;
  background-size: 100%;
  
  @media (min-width: 768px) {
    width: 596px;
    height: 232px;
  }
`;

export const Title = styled.p`
  padding: 72px 0 16px 0;
  font-weight: 700;
  font-size: 22px;
  line-height: 44px;
  text-align: center;

  @media (min-width: 768px) {
    padding: 100px 0 24px 0;
    font-size: 54px;
    line-height: 100px;
  }
`;
