import { Suspense } from 'react'; 
import { Outlet } from 'react-router-dom';
import { Logo, Span, Text } from './SharedLayoutStyle'

const SharedLayout = () => {
   
    return (
        <>
            <Logo to="/">pe<Span>t</Span>ly</Logo>
            <nav>
                    {/* <Navigation/> */}
            </nav>
            <main>
                <Suspense fallback={null}>
                    <Outlet />
                </Suspense>
            </main>
            <footer>
                <Text>Copyrigh<Span>t</Span> &copy; by Bes<Span>t</Span> <Span>T</Span>eam </Text>
            </footer>
    </>
    )
};

export default SharedLayout;
