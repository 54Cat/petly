import UserDataItem from './UserDataItem';
import { UserAvatar } from './UserAvatar';
import { UserLogout } from '../Logout/Logout';

import { Wrapper, Text, UserCard } from './UserDataStyle';

const UserData = () => {
    // console.log("UserData");

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