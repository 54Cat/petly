import styled from '@emotion/styled';
import DeleteIcon from '@mui/icons-material/Delete';

export const PetsCard = styled.div`
    box-sizing: border-box;
    margin: 0 auto;
    padding: 16px 20px 40px;
    background: #ffffff;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 20px;

    &:not(:last-child) {
        margin-bottom: 20px;
    }

    @media (min-width: 320px) {
        width: 280px;
    }

    @media (min-width: 768px) {
        padding: 20px;
        width: 704px;
        display: flex;
        border-radius: 40px;
        margin-left: 32px;
    }

    @media (min-width: 1280px) {
        margin-left: 0;
        width: 821px;
        &:not(:last-child) {
            margin-bottom: 22px;
        }
    }
`;

export const PetsImg = styled.img`
    object-fit: cover;
    margin-bottom: 20px;
    border-radius: 20px;

    @media (min-width: 320px) {
        width: 240px;
        height: 240px;
    }

    @media (min-width: 768px) {
        width: 161px;
        height: 161px;
        border-radius: 40px;
        margin-bottom: 0;
        margin-right: 32px;
    }
`;

export const TextWrapper = styled.div`
    @media (min-width: 768px) {
        width: 471px;
    }

    @media (min-width: 1280px) {
        width: 588px;
    }
`;

export const PetsName = styled.p`
    margin-bottom: 12px;
    position: relative;
`;

export const CardText = styled.p`
    &:not(:last-child) {
        margin-bottom: 12px;
    }
`;

export const StyledDeleteIcon = styled(DeleteIcon)`
    width: 16px;
    height: 17px;
    fill: rgba(17, 17, 17, 0.6);

    &:hover {
        fill: rgba(245, 146, 86, 1);
    }

    @media (min-width: 768px) {
        width: 25px;
        height: 26px;
    }
`;

export const DelBtn = styled.button`
    width: 17px;
    height: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    border: none;

    @media (min-width: 768px) {
        width: 44px;
        height: 44px;
        background: #fdf7f2;
        border-radius: 50%;
    }
`;

export const CardTitle = styled.span`
    font-weight: bold;
`;

export const NoPetsTitle = styled.p`
color: #111111;
font-size: 24px;
font-weight: 500;
    text-align: center;
    @media (min-width: 768px) {

        font-size: 48px;
    }
`