import { useSelector } from 'react-redux';
import { getUserInfo } from 'redux/selectors';
import { UserNavContainer, AccountButton, CircleIcon } from './UserNavStyled';

export const UserNav = ({ active, setActive }) => {
    const user = useSelector(getUserInfo);
    const { name, avatarURL } = user.user;

    return (
        <UserNavContainer
            className={active ? 'active' : ''}
            onClick={() => setActive(false)}
        >
            <AccountButton to="/user" size="164px">
                <div>
                    {avatarURL ? (
                        <img src={avatarURL} alt="Account" />
                    ) : (
                        <CircleIcon />
                    )}
                </div>
                {name ? name : 'Account'}
            </AccountButton>
        </UserNavContainer>
    );
};
