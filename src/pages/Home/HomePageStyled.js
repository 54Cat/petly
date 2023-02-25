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
  background-color: #fdf7f2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-top: 74px;
  background-image: url(${bg_mobile});
  background-repeat: no-repeat;
  background-position: center bottom 74px ;
  background-size: 100% 67%;

  @media (min-width: 768px) {
    padding-top: 96px;
    background-image: url(${bg_tablet});
    background-position: center bottom 96px;
    background-size: 100% 85%;
  }
      
  @media (min-width: 1280px) {
    background-image: url(${bg_inside_desktop}), url(${bg_outside_desktop}), url(${bg_heart_desktop}), url(${bg_point_desktop});
    background-position: bottom 96px left, bottom 96px right -52px, top 170px right 40%, bottom 296px left 38%;    
    background-size: 96% 37%, 100% 46%, auto, auto;
  }
`;

export const Hero = styled.div`  
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 56%;
  background-image: url(${hero_mobile});
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: contain;

  @media (min-width: 768px) {
    height: 60%;
    background-image: url(${hero_tablet});
  }

  @media (min-width: 1280px) {
    height: 83%;
    background-image: url(${hero_desktop});
    background-position: right bottom;
  }
`;

export const Title = styled.p`
  padding: 42px 0 0 20px;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  max-width: 280px;

  @media (min-width: 768px) {
    padding: 68px 0 0 32px;
    font-size: 68px;
    line-height: 100px;
    max-width: 588px;
  }

  @media (min-width: 1280px) {
    padding: 72px 0 0 16px;
  }
`;
