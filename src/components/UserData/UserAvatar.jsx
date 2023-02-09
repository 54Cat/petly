import { useSelector, useDispatch } from 'react-redux';
import { updateUserOperation } from '../../redux/User/userOperations';
import { useRef } from 'react';
import { IoIosCamera } from 'react-icons/io';
import { getUserInfo } from '../../redux/selectors';
import { Image, Label, Container, Input } from './UserAvatarStyle';

export const UserAvatar = () => {
    const userInState = useSelector(getUserInfo);
    const dispatch = useDispatch();
    const ref = useRef();

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
            updateUserOperation({
                avatarURL: file.name,
            })
        );
    };
    const { avatarURL } = userInState.user;

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
