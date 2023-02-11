import styled from '@emotion/styled';

export const Wrapper = styled.header`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: #FDF7F2;
    height: 74px;

    &.active {
        height: 100vh;
    }

    @media (min-width: 768px) {
        height: 96px;
    }

    @media (min-width: 1280px) {
        position: sticky;
        display: flex;
        align-items: center;
        justify-content: space-between;
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

    @media (min-width: 1280px) {
        
    }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
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

    @media (min-width: 1280px) {
        display: flex;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 80px;
        padding-left: 16px;
        
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