import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeaderLogo = styled(Link)`

font-family: 'Poppins';
font-weight: 700;
color: #111111;
font-size: 28px;
line-height: 1.5;
letter-spacing: 0.07em;

@media (min-width: 768px) {
    font-size: 32px;
}
`;

export const Span = styled.span`
    color:#F59256;
`;