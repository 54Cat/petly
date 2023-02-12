import UserDataItem from './UserDataItem';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { getUserOperation } from 'redux/User/userOperations';
// import { Loader } from 'components/Utils/Loader/Loader';

import { UserAvatar } from './UserAvatar';
import { UserLogout } from '../Logout/Logout';
import { getUserInfo } from 'redux/selectors';
import { useSelector } from 'react-redux';

import { Wrapper, Text, UserCard } from './UserDataStyle';

const UserData = () => {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getUserOperation());
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [dispatch]);

    const { isLoading } = useSelector(getUserInfo);
    console.log(isLoading);

    return (
        <>
            <UserCard>
                <Text>My information:</Text>
                <Wrapper>
                    <>
                        <UserAvatar />
                        <div>
                            <UserDataItem />
                            <UserLogout />
                        </div>
                    </>
                </Wrapper>
            </UserCard>
        </>
    );
};

export default UserData;
