import styled from '@emotion/styled';

export const BtnBox = styled.div`
    position: absolute;
    right: 0;
    bottom: 16px;
    width: 128px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 768px) {
        bottom: 444px;
    }

    @media (min-width: 768px) {
        bottom: 8px;
    }
`;

export const TextBtn = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    color: #111111;
    margin-right: 15px;
`;

export const BtnAddPet = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: #f59256;
    color: #ffffff;
    border: none;
    outline: none;
    border-radius: 50%;
    font-size: 50px;
    cursor: pointer;
`;
