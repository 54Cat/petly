// import { useSelector } from 'react-redux';
import UserDataItem from './UserDataItem';
import { UserAvatar } from './UserAvatar';
import { UserLogout } from '../Logout/Logout';
// import { getUserInfo } from '../../redux/selectors';
// import { Loader } from 'components/Utils/Loader/Loader';
import { Wrapper, Text } from './UserDataStyle';

const UserData = () => {
    // const { isLoading } = useSelector(getUserInfo);

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
