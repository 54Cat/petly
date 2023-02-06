import UserData from 'components/User/UserData';
import { useSelector } from 'react-redux';

import { Loader } from '../../components/Utils/Loader/Loader';
import { getLoader } from '../../redux/User/selectors';
// import { getUser } from 'redux/User/selectors';

const UserPage = () => {
    const loading = useSelector(getLoader);

    return <>{loading ? <Loader /> : <UserData />}</>;
};

export default UserPage;

 // import UserData from 'components/UserData/UserData';
 // import PetsData from 'components/PetsData/PetsData';
 // import Logout from 'components/Logout/Logout';
 // import { Container } from './UserPage.styled';

 // export const UserPage = () => {
 //     return (
 //         <Container>
 //             <UserData />
 //             <Logout />
 //             <PetsData />
 //         </Container>
 //     );
 // };