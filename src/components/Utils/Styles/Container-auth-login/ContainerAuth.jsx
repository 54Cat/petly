import styled from '@emotion/styled';
import imgDesc from './bg-desc.png';
import imgDesc2x from './bg-desc2x.png';
import imgTable from './bg-table.png';
import imgTablex2 from './bg-table2x.png';
import imgPhone from './bg-phone.png';
import imgPhonex2 from './bg-phone2x.png';
export const Container = styled.section`
    padding-top: 40px;
    padding-bottom: 40px;
    background: #fdf7f2;
    background-image: url(${imgPhone});
    background-position: center 100%;
    background-repeat: no-repeat;

    background-size: contain;

    @media (min-device-pixel-ratio: 2),
        (-webkit-min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url('${imgPhonex2}');
    }

    @media (min-width: 768px) {
        padding-top: 100px;
        padding-bottom: 100px;

        background-image: url(${imgTable});
        @media (min-device-pixel-ratio: 2),
            (-webkit-min-device-pixel-ratio: 2),
            (min-resolution: 192dpi),
            (min-resolution: 2dppx) {
            background-image: url('${imgTablex2}');
        }
        @media (min-width: 1280px) {
            background-image: url(${imgDesc});
            padding-top: 70px;
            padding-bottom: 70px;
            @media (min-device-pixel-ratio: 2),
                (-webkit-min-device-pixel-ratio: 2),
                (min-resolution: 192dpi),
                (min-resolution: 2dppx) {
                background-image: url('${imgDesc2x}');
            }
        }
    }
`;
// export const Div = styled.div`
//     height: calc(100vh - 54px);
//     background-image: url(${imgPhone});
//     background-position: bottom;
//     background-repeat: no-repeat;
//     margin: 0 auto;

//     @media (min-width: 768px) {
//         width: 768px;
//         height: 1024px;
//         background-image: url(${imgTable});
//         background-position: bottom;
//         background-repeat: no-repeat;
//         margin: 0 auto;
//     }
//     @media (min-width: 1280px) {
//         width: 1280px;
//         height: 768px;
//         background-image: url(${imgDesc});
//         background-position: bottom;
//         background-repeat: no-repeat;
//         margin: 0 auto;
//     }
// `;
