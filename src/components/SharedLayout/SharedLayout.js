// import { MainContainer } from 'components/Utils/Styles/ContainterAllStyled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { Span, Text } from './SharedLayoutStyle';
import Header from 'components/Header/Header';
import { Loader } from 'components/Utils/Loader/Loader';

const SharedLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Suspense fallback={<Loader/>}>
                    <Outlet />
                </Suspense>
            </main>
            {/* <footer>
                <Text>
                    Copyrigh<Span>t</Span> &copy; by Bes<Span>t</Span>{' '}
                    <Span>T</Span>eam{' '}
                </Text>
            </footer> */}
        </>
    );
};

export default SharedLayout;
