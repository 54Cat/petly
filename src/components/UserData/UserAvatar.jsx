import { useSelector, useDispatch } from 'react-redux';
import { updateUserOperation } from '../../redux/User/userOperations';
import { useRef, useState } from 'react';
import { BsCheckLg } from 'react-icons/bs';
import { selectUser } from 'redux/Auth/AuthSelectors';

import { IoIosCamera } from 'react-icons/io';
import { Image, Label, Container, Input, Button } from './UserAvatarStyle';

export const UserAvatar = () => {
    const userInState = useSelector(selectUser);
    const dispatch = useDispatch();
    const ref = useRef();

    const { avatarURL } = userInState.user;

    const [uploadAvatar, setUploadAvatar] = useState(avatarURL);
    const [addButton, setAddButton] = useState(false);

    const addAvatar = e => {
        e.preventDefault();
        console.log(uploadAvatar);

        dispatch(updateUserOperation({ uploadAvatar }));

        setAddButton(false);
    };

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
        }
        const form = document.getElementById('id');
        const formData = new FormData(form);
        formData.append('avatar', file.name);

        for (const [key, value] of formData) {
            console.log({ key, value });
            setUploadAvatar({ key, value });
        }

        dispatch(updateUserOperation({ uploadAvatar }));

        setAddButton(true);
    };

    return (
        <Container>
            <Image
                ref={ref}
                src={uploadAvatar}
                alt="my portret"
                width="233"
                height="233"
            />
            <form id="id" onChange={onChange}>
                {addButton && (
                    <Button onClick={addAvatar}>
                        {' '}
                        <BsCheckLg color="#F59256" className="icon" />
                        add
                    </Button>
                )}
                <Label htmlFor="avatar">
                    <IoIosCamera fill="#F59256" className="icon-edit" />
                    Edit photo
                    <Input
                        id="avatar"
                        type="file"
                        accept="image/*"
                        multiple={false}
                        // onChange={onChange}
                    />
                </Label>
            </form>
        </Container>
    );
};
