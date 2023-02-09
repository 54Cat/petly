import { useSelector } from 'react-redux';
// import { selectUser } from '../../../redux/auth/authSelectors';

import { getUserInfo } from 'redux/selectors';
import { UserNavContainer, AccountButton, CircleIcon } from './UserNav.styled';

export const UserNav = ({ onClose }) => {
    const user = useSelector(getUserInfo);
    console.log("UserNav user", user)
    const { name, avatarURL } = user;

    return (
        <UserNavContainer>
            <AccountButton to="/user" onClick={onClose} size="164px">
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
