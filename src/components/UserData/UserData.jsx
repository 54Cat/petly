import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { getUserInfo } from 'redux/selectors';
import { useRef } from 'react';
// import UserDataItem from './UserDataItem';
import { updateUser } from 'auth/UserAuth/AuthUser';
import { IoIosCamera } from 'react-icons/io';

// import { UserLogout } from './UserLogOut';
import { Wrapper, Text, Image, Label, Input, Container } from './UserDataStyle';

const UserData = () => {
    const [image, setImage] = useState();
    const dispatch = useDispatch();
    const user = useSelector(getUserInfo);
    const { avatarURL } = user;
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
                updateUser({
                    image,
                })
            );
        }
    };

    return (
        <>
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
                {/* <div>
                    <UserDataItem />
                    <UserLogout />
                </div> */}
            </Wrapper>
        </>
    );
};

export default UserData;
