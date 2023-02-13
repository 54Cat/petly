import styled from '@emotion/styled';

export const List = styled.ul`
    text-align: left;
    display: flex;
    flex-wrap: wrap;
    row-gap: 40px;

    @media (min-width: 768px) {
        row-gap: 60px;
        column-gap: 32px;
    }
`

export const IfEmptyList = styled.div`
margin: 0 auto;
    color: #111111;
    font-size: 24px;
    font-weight: 500;
    text-align: center;

    @media (min-width: 768px) {
        font-size: 48px;
    }`
