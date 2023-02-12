import { useDispatch, useSelector } from 'react-redux';
import { useRef, useState, useEffect } from 'react';
import { getUser } from 'redux/User/selectors';
import UserDataItem from './UserDataItem';
import { getUserOperation, updateUserOperation } from '../../redux/User/userOperations';
import { IoIosCamera } from 'react-icons/io';
import { UserLogout } from './UserLogOut';
import {
    UserCard,
    Wrapper,
    Text,
    Image,
    Label,
    Input,
    Container,
    FormContainer
} from './UserDataStyle';

const UserData = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserOperation());
    }, [dispatch]);

    const [image, setImage] = useState();
    const userData = useSelector(getUser);
    const { avatarURL } = userData.avatarURL;
    const ref = useRef(avatarURL);

    const onChange = e => {
        const [file] = e.target.files;
        if (file) {
            const reader = new FileReader();
            const { current } = ref;
            current.file = file;
            reader.onload = e => {
                current.src = e.target.result;
            };
            reader.readAsDataURL(file);
            const formData = new FormData();

            formData.set('imageURL', reader);
            setImage(reader);
            dispatch(
                updateUserOperation({
                    image,
                })
            );
        }
    };

    return (
        <UserCard>
            <Text>My information:</Text>
            <Wrapper>
                <Container>
                    <Image
                        ref={ref}
                        src={avatarURL}
                        alt="my portret"
                        width="233"
                        height="233"
                    />
                    <Label htmlFor="avatar">
                        <IoIosCamera fill="#F59256" className="icon-edit" />
                        Edit photo
                        <Input
                            id="avatar"
                            type="file"
                            accept="image/*"
                            multiple={false}
                            onChange={onChange}
                        />
                    </Label>
                </Container>
                <FormContainer>
                    <UserDataItem />
                    <UserLogout />
                </FormContainer>
            </Wrapper>
        </UserCard>
    );
};

export default UserData;
