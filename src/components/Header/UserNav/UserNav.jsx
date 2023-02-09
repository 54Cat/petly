import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/authSelectors';
import { AccountButton, CircleIcon } from './UserNav.styled';

export const UserNav = ({ onClose }) => {
    const user = useSelector(selectUser);
    const { name, avatarURL } = user;

    return (
        <>
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
        </>
    );
};
