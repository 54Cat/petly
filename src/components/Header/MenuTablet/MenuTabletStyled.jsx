import styled from '@emotion/styled';

export const Wrapper = styled.div`
	position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    &.active {
        z-index: 99999;
	    background-color: #FDF7F2;
    }
`;

export const WrapperTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;

    @media (min-width: 768px) {
        padding: 24px 32px;
    }

`;

export const WrapperBtn = styled.div`
    display: contents;
`;

export const WrapperNav = styled.div`
    display: flex;
    flex-direction: column;
    
    transform: translateX(100%);
    transition: all 0.3s;

    &.active {
        transform: translateX(0);
    }
    
    @media (min-width: 768px) {
        padding: 0;
        
        transform: translateX(0);

        &.active {
            display: none;
        }
    }
`;

export const Btn = styled.button`
    display: inline-flex;
    cursor: pointer;
	margin: 0;
	padding: 0;
	border: none;
	background-color: transparent;
`;