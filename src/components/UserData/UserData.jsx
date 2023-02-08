import UserDataItem from './UserDataItem';
import { UserAvatar } from './UserAvatar';
import { UserLogout } from '../Logout/LogOut';
import { Wrapper, Text } from './UserDataStyle';

const UserData = () => {
    return (
        <>
            <Text>My information:</Text>
            <Wrapper>
                <UserAvatar />
                <div>
                    <UserDataItem />
                    <UserLogout />
                </div>
            </Wrapper>
        </>
    );
};

export default UserData;
