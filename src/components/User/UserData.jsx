import image from '../../images/userPhoto.png';

import UserInfoForm from './UserInfoForm';
// import { BsCheckLg } from "react-icons/bs";
import { IoIosCamera } from 'react-icons/io';

import { UserLogout } from './UserLogOut';
import { Wrapper, Text, Image, ButtonEdit, Span } from './UserDataStyle';

const UserData = ({ data }) => {
    // const user = useSelector(getUser);
    // console.log(user);

    return (
        <>
            <Text>My information:</Text>
            <Wrapper>
                <Image src={image} alt="my portret" width="233" height="233" />
                <ButtonEdit>
                    {' '}
                    <Span>
                        <IoIosCamera fill="#F59256" size="22px" />
                    </Span>{' '}
                    Edit photo
                </ButtonEdit>
                <UserInfoForm />
                <UserLogout />
            </Wrapper>
        </>
    );
};

export default UserData;
