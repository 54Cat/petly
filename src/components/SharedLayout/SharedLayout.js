import { Suspense } from 'react'; 
import { Outlet } from 'react-router-dom';
import {Logo,Span, Main, Text} from './SharedLayoutStyle'


const SharedLayout = () => {
   
    return (
        <>
            <Logo to="/">pe<Span>t</Span>ly</Logo>
            <nav>
                    {/* <Navigation/> */}
            </nav>
            <Main>
                <Suspense fallback={null}>
                    <Outlet />
                </Suspense>
            </Main>
            <footer>
                <Text>Copyrigh<Span>t</Span> &copy; by Bes<Span>t</Span> <Span>T</Span>eam </Text>
            </footer>
    </>
    )
};

export default SharedLayout;
