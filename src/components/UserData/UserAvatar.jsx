import { useSelector, useDispatch } from 'react-redux';
import { updateUserOperation } from '../../redux/User/userOperations';
import { useRef, useState } from 'react';
import { BsCheckLg } from 'react-icons/bs';

// import { Image } from 'cloudinary-react';
import { IoIosCamera } from 'react-icons/io';
import { getUserInfo } from '../../redux/selectors';
import { Image, Label, Container, Input } from './UserAvatarStyle';

export const UserAvatar = () => {
    const userInState = useSelector(getUserInfo);
    const dispatch = useDispatch();
    const ref = useRef();

    const { avatarURL } = userInState.user;

    const [uploadAvatar, setUploadAvatar] = useState(avatarURL);
    const [addButton, setAddButton] = useState(false);

    const addAvatar = e => {
        e.preventDefault();
        dispatch(
            updateUserOperation({
                uploadAvatar,
            })
        );
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
        // const form = document.getElementById('id');
        const formData = new FormData();
        formData.append('avatar', file.name);

        for (const [key, value] of formData) {
            console.log({ key, value });
            setUploadAvatar({ value });
        }
        // setUploadAvatar(formData);
        // dispatch(
        //     updateUserOperation({
        //         uploadAvatar,
        //     })
        // );
        // dd();
        // console.log(uploadAvatar);
        //http://res.cloudinary.com/dukz65bwt/image/upload/v1676142811/main/picture.png
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
                    <button onClick={addAvatar}>
                        {' '}
                        <BsCheckLg color="#F59256" className="icon" />
                        add
                    </button>
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
