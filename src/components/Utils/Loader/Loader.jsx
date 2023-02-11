import { Rings } from 'react-loader-spinner';
import { LoaderContainer, NewsLoaderContainer } from './LoaderStyled';
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

export const NewsLoader = () => {
    return (
        <NewsLoaderContainer >
            <Rings
                height="180"
                width="180"
                color="#F59256"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass="loading"
                visible={true}
            />
        </NewsLoaderContainer>
    );
};