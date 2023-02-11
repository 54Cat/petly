import { Rings } from 'react-loader-spinner';
import { LoaderContainer } from './LoaderStyled';
export const Loader = () => {
    return (
        <LoaderContainer>
            <Rings
                height="180"
                width="180"
                color="#F59256"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass="loading"
                visible={true}
            />
        </LoaderContainer>
    );
};
