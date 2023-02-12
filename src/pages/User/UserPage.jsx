import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserOperation } from 'redux/User/userOperations';
import { getUserInfo } from 'redux/selectors';
// import { Loader } from 'components/Utils/Loader/Loader';

import UserData from 'components/UserData/UserData';
import PetsData from 'components/PetsData/PetsData';
import { Container, ButtonContainer } from './UserPageStyled';
import ButtonAddsPet from 'components/ButtonAddsPet/ButtonAddsPet';

const UserPage = () => {
    const dispatch = useDispatch();

    const { isLoading } = useSelector(getUserInfo);
    console.log(isLoading);

    useEffect(() => {
        dispatch(getUserOperation());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    return (
        <>
            {/* {!isLoading ? ( */}
            <Container>
                <ButtonContainer>
                    <ButtonAddsPet />
                </ButtonContainer>
                <UserData />
                <PetsData />
            </Container>
            {/* ) : (
                <Loader />
            )} */}
        </>
    );
};

export default UserPage;
