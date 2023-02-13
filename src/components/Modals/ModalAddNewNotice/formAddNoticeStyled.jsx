import styled from '@emotion/styled';
import { Button } from 'components/Utils/Styles/basicStyle';

export const ModalCard = styled.form`
    box-sizing: border-box;
    margin: 0 auto;
    padding: 60px 20px 40px;
    background-color: #ffffff;
    border-radius: 20px;
    display: flex;
    flex-direction: column;

    @media (min-width: 320px) {
        width: 280px;
    }

    @media (min-width: 768px) {
        padding: 32px 24px 32px 20px;
        width: 608px;
        border-radius: 40px;
    }
`;

export const NoticeBtnList = styled.div`  
    display: block;
    align-items: center;  
    @media (min-width: 768px) {
      display: flex;
      /* align-self: center; */
      place-self: center;
    }  
`;

export const NoticeBtn = styled(Button)` 
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 12px;
    color: black;
    @media (min-width: 768px) {      
        align-self: center;
    }
      
`;

