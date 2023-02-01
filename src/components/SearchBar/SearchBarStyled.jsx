import styled from '@emotion/styled';

export const SearchForm = styled.form`
width: 280px;
position: relative;
margin: 0 auto;
margin-top: 28px;
    margin-bottom: 40px;
    @media (min-width: 768px) {
        width: 652px;
        margin-top: 40px;
        margin-bottom: 60px;
    }
`
export const SearchButton = styled.button`
    border: none;
    background-color: transparent;
    width: 32px;
    height: 40px;
    padding: 0;
    position: absolute;
    top: 3px;
    right: 0;
`