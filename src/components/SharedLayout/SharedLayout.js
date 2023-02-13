import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
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
        </>
    );
};

export default SharedLayout;
