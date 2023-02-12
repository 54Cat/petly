import imgF from '../../../data/img_ModalAddNewNotice/female.png';
import imgM from '../../../data/img_ModalAddNewNotice/male.png';
import styled from '@emotion/styled';
import { AddFile } from 'components/Modals/ModalAddsPet/AddsPetForm/AddsPetModalStyled';

export const NoticeAddFile = styled(AddFile)`
    margin-top: 20px;
`

export const InputFile = styled.input`
    display: none;
    cursor: pointer;
`


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
