import UserDataItem from './UserDataItem';
import { UserAvatar } from './UserAvatar';
import { UserLogout } from '../Logout/Logout';
import { getUserInfo } from 'redux/selectors';
import { useSelector } from 'react-redux';

import { Wrapper, Text } from './UserDataStyle';

const UserData = () => {
    const { isLoading } = useSelector(getUserInfo);
    console.log(isLoading);

    return (
        <>
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
        </>
    );
};

export default UserData;
