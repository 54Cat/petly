import styled from '@emotion/styled';

export const BtnBox = styled.div`    
        display: flex;
        justify-content: space-between;
        align-items: center;
`;

export const TextBtn = styled.p`
    margin-right: 15px;
    @media(min-width: 768px) {
    
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 1.35;
        color: #111111;
    }   
`;

export const BtnAddPet = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: #F59256;
    color: #ffffff;
    border: none;
    outline: none;
    border-radius: 50%;
    font-size: 50px;    
`;