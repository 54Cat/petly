import imgF from './img/female.png';
import imgM from './img/male.png';
import styled from '@emotion/styled';
export const Input = styled.input`
    width: 0;
    height: 0;
    position: absolute;
`;
export const Label = styled.label`
    display: flex;
`;

export const LabelFemale = styled.span`
    display: inline-block;
    background-image: url(${imgF});
    width: 60px;
    height: 60px;
    background-size: contain;
    background-repeat: no-repeat;
`;
export const LabelMale = styled.span`
    display: inline-block;
    background-image: url(${imgM});
    width: 60px;
    height: 60px;
    background-size: contain;
    background-repeat: no-repeat;
`;
export const SpanTXT = styled.span``;
export const Thumb = styled.div`
    display: flex;
`;
