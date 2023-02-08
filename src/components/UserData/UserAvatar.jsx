import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../redux/User/userOperations';
import { useRef } from 'react';
import { IoIosCamera } from 'react-icons/io';
import { getUser } from 'redux/User/selectors';
import { Image, Label, Container, Input } from './UserAvatarStyle';

export const UserAvatar = () => {
    const userInState = useSelector(getUser);
    const dispatch = useDispatch();

    const ref = useRef();
    const { avatarURL } = userInState.user;

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
        // const formData = new FormData(file.name);
        // formData.set('avatarURL', file.name);
        // console.log(formData.append('avatarURL', file.name));
        // console.log(formData);

        dispatch(
            updateUser({
                avatarURL: file.name,
            })
        );
    };
    return (
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
    );
};
