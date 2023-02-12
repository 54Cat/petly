import styled from '@emotion/styled';
import imgDesc from '../../../../components/images/BackgroundAuth/bg-desc.png';
import imgDesc2x from '../../../../components/images/BackgroundAuth/bg-desc2x.png';
import imgTable from '../../../../components/images/BackgroundAuth/bg-table.png';
import imgTablex2 from '../../../../components/images/BackgroundAuth/bg-table2x.png';
import imgPhone from '../../../../components/images/BackgroundAuth/bg-phone.png';
import imgPhonex2 from '../../../../components/images/BackgroundAuth/bg-phone2x.png';

export const Container = styled.section`
    margin-top: 74px;
    padding-top: 40px;
    padding-bottom: 40px;
    background: #fdf7f2;
    background-image: url(${imgPhone});
    background-position: center 100%;
    height: calc(100vh - 147px);
    background-repeat: no-repeat;
    background-size: contain;

    @media (min-device-pixel-ratio: 2),
        (-webkit-min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url('${imgPhonex2}');
    }

    @media (min-width: 768px) {
        margin-top: 96px;
        padding-top: 100px;
        padding-bottom: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url(${imgTable});
        
        @media (min-device-pixel-ratio: 2),
            (-webkit-min-device-pixel-ratio: 2),
            (min-resolution: 192dpi),
            (min-resolution: 2dppx) {
            background-image: url('${imgTablex2}');
        }

        @media (min-width: 1280px) {
            display: block;
            height: calc(100vh - 208px);
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
