import styled from '@emotion/styled';
import imgDesc from './bg-desc.png';
import imgTable from './bg-tabl.png';
import imgPhone from './bg-phone.png';
export const Container = styled.div`
    background: #fdf7f2;
`;
export const BgPhoto = styled.div`
    @media (min-width: 320px) {
        width: 320px;
        height: 568px;
        background-image: url(${imgPhone});
        background-position: bottom;
        background-repeat: no-repeat;
        margin: 0 auto;
    }
    @media (min-width: 768px) {
        width: 768px;
        height: 1024px;
        background-image: url(${imgTable});
        background-position: bottom;
        background-repeat: no-repeat;
        margin: 0 auto;
    }
    @media (min-width: 1280px) {
        width: 1280px;
        height: 768px;
        background-image: url(${imgDesc});
        background-position: bottom;
        background-repeat: no-repeat;
        margin: 0 auto;
    }
`;
