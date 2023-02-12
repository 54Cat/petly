import imgF from './img/female.png';
import imgM from './img/male.png';
import styled from '@emotion/styled';

export const AddNoticeTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 36px;
  line-height: 1.36;
  text-align: center;
`;

export const Input = styled.input`
    width: 0;
    height: 0;
    position: absolute;
    &:checked + span,
    :hover + span,
    :focus + span {
        color: #f59256;
    }
`;
export const Label = styled.label`
    display: flex;
    flex-direction: column-reverse;
    @media (min-width: 768px) {
        margin-right: 80px;
    }
    margin-right: 40px;
    :last-child {
        margin-right: 0px;
    }
`;

export const LabelFemale = styled.span`
    background-image: url(${imgF});
    width: 40px;
    height: 40px;

    background-size: contain;
    background-repeat: no-repeat;
    @media (min-width: 768px) {
        width: 60px;
        height: 60px;
    }
`;
export const LabelMale = styled.span`
    background-image: url(${imgM});
    width: 40px;
    height: 40px;
    background-size: contain;
    background-repeat: no-repeat;
    @media (min-width: 768px) {
        width: 60px;
        height: 60px;
    }
`;
export const SpanTXT = styled.span`
    font-size: 18px;
    line-height: 26px;
    margin-top: 12px;
    @media (min-width: 768px) {
        font-size: 20px;
        margin-top: 20px;
    }
`;
export const Thumb = styled.fieldset`
    display: flex;
    border: none;
`;
export const Title = styled.legend`
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 18px;
    @media (min-width: 768px) {
        font-size: 24px;
        margin-bottom: 28px;
    }
`;
export const TitleColor = styled.span`
    color: #f59256;
`;

export const NoticeFormInput = styled.input`
  display:block;
  margin: 0;
  padding: 16px 10px;
  font: inherit;
  font-size: 18px;
  outline: none;
  border-radius: 40px;
  border: 1px solid rgba(245, 146, 86, 0.5);
  background-color: #FDF7F2;
   ::placeholder {
        color: rgba(17, 17, 17, 0.6);
    }
`;


