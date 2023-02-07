import { useDispatch } from 'react-redux';
import { TbLogout } from 'react-icons/tb';
import { ButtonLogout } from './UserDataStyle';
import { loggedOut } from '../../auth/UserAuth/AuthUser';

export const UserLogout = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(loggedOut());
    };
    return (
        <>
            <ButtonLogout
                onClick={() => {
                    handleClick();
                }}
                type="submit"
            >
                <TbLogout color="#F59256" className="icon-logout" />
                Log Out
            </ButtonLogout>
        </>
    );
};
