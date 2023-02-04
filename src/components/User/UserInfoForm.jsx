import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getUser } from 'redux/User/selectors';

import { MdCreate } from 'react-icons/md';
import {
    ButtonCreate,
    Input,
    Lable,
    Form,
    Conteiner,
} from './UserInfoFormStyle';

const UserInfoForm = () => {
    const user = useSelector(getUser);

    const { name, city, email, phone, birthday } = user.user;
    console.log(name);

    const [newName, setNewName] = useState(name);
    const [newEmail, setNewEmail] = useState(email);
    const [newBirthday, setNewBirthday] = useState(birthday);
    const [newPhone, setNewPhone] = useState(phone);
    const [newCity, setNewCity] = useState(city);

    const imputChange = async e => {
        const { name, value } = e.currentTarget;

        switch (name) {
            case 'Name':
                setNewName(value);
                break;
            case 'Email':
                setNewEmail(value);
                break;
            case 'Birthday':
                setNewBirthday(value);
                break;
            case 'Phone':
                setNewPhone(value);
                break;
            case 'City':
                setNewCity(value);
                break;
            default:
                return;
        }
    };

    const submitChenges = e => {
        e.preventDefault();
    };

    return (
        <Form>
            <Lable>
                {' '}
                Name:
                <Conteiner onSubmit={submitChenges}>
                    <Input
                        autoComplete="off"
                        type="text"
                        id="name"
                        name="Name"
                        value={newName}
                        onChange={imputChange}
                    />
                    <ButtonCreate type="submit">
                        {' '}
                        <MdCreate color="#F59256" />
                    </ButtonCreate>
                </Conteiner>
            </Lable>
            <Lable>
                {' '}
                Email:
                <Conteiner>
                    <Input
                        autoComplete="off"
                        type="text"
                        id="email"
                        name="Email"
                        value={newEmail}
                        onChange={imputChange}
                    />
                    <ButtonCreate type="submit">
                        {' '}
                        <MdCreate color="#F59256" />
                    </ButtonCreate>
                </Conteiner>
            </Lable>
            <Lable>
                {' '}
                Birthday:
                <Conteiner>
                    <Input
                        autoComplete="off"
                        type="text"
                        id="birthday"
                        name="Birthday"
                        value={newBirthday}
                        onChange={imputChange}
                    />
                    <ButtonCreate type="submit">
                        {' '}
                        <MdCreate color="#F59256" />
                    </ButtonCreate>
                </Conteiner>
            </Lable>
            <Lable>
                {' '}
                Phone:
                <Conteiner>
                    <Input
                        autoComplete="off"
                        type="text"
                        id="phone"
                        name="Phone"
                        value={newPhone}
                        onChange={imputChange}
                    />
                    <ButtonCreate type="submit">
                        {' '}
                        <MdCreate color="#F59256" />
                    </ButtonCreate>
                </Conteiner>
            </Lable>
            <Lable>
                {' '}
                City:
                <Conteiner>
                    <Input
                        autoComplete="off"
                        type="text"
                        id="city"
                        name="City"
                        value={newCity}
                        onChange={imputChange}
                    />
                    <ButtonCreate type="submit">
                        {' '}
                        <MdCreate color="#F59256" />
                    </ButtonCreate>
                </Conteiner>
            </Lable>
        </Form>
    );
};

export default UserInfoForm;
