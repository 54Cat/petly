import { Bars } from 'react-loader-spinner';

export const Loader = () => {
    return (
        <Bars
            height="80"
            width="80"
            color="#F59256"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass="loading"
            visible={true}
        />
    );
};
