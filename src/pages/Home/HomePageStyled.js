import styled from '@emotion/styled';

import hero_mobile from 'data/img_home_page/mobile/hero_mobile.png';
import bg_mobile from 'data/img_home_page/mobile/bg_mobile.png';

import hero_tablet from 'data/img_home_page/tablet/hero_tablet.png';
import bg_tablet from 'data/img_home_page/tablet/bg_tablet.png';

import hero_desktop from 'data/img_home_page/desktop/hero_desktop.png';
import bg_heart_desktop from 'data/img_home_page/desktop/bg_heart_desktop.png';
import bg_point_desktop from 'data/img_home_page/desktop/bg_point_desktop.png';
import bg_inside_desktop from 'data/img_home_page/desktop/bg_inside_desktop.png';
import bg_outside_desktop from 'data/img_home_page/desktop/bg_outside_desktop.png';

export const Container = styled.div`
  background: #fdf7f2;
  width: 100%;
  background-image: url(${bg_mobile});
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: 100% 455px;

  @media (min-width: 768px) {
    background-image: url(${bg_tablet});
    background-size: 100% 1100px;
  }
      
  @media (min-width: 1280px) {
    background-image: url(${hero_desktop}), url(${bg_inside_desktop}), url(${bg_outside_desktop}), url(${bg_heart_desktop}), url(${bg_point_desktop});
    background-position: bottom right 16px, bottom left -10px, bottom right -50px, top 250px center, bottom 250px left 500px;    
    background-size: 50%, 96%, 100%, 10%, 7%;
  }
`;

export const Hero = styled.div`
  height: 337px;
  background-image: url(${hero_mobile});
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: contain;
    
  @media (min-width: 768px) {
    height: 715px;
    background-image: url(${hero_tablet});
  }
      
  @media (min-width: 1280px) {
    background-image: none;
    height: 680px;
  }
`;

export const Title = styled.p`
  padding: 40px 16px 58px 16px;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  max-width: 280px;

  @media (min-width: 768px) {
    padding: 68px 16px 118px 16px;
    font-size: 68px;
    line-height: 100px;
    max-width: 588px;
  }

  @media (min-width: 1280px) {
    padding: 72px 16px 0 16px;
  }
`;