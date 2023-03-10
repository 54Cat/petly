import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/Auth/AuthSelectors';
import { updateUserOperation } from '../../redux/User/userOperations';
import { MdCreate } from 'react-icons/md';
import { BsCheckLg } from 'react-icons/bs';

import {
    ButtonCreate,
    Input,
    Lable,
    Form,
    Conteiner,
} from './UserDataItemStyle';

const UserDataItem = () => {
    const dispatch = useDispatch();
    const userInState = useSelector(selectUser);

    const { name, city, email, phone, birthday } = userInState.user;

    useEffect(() => {
        if (!name) {
        return
        }
        setNewName(name)
    }, [name])

    useEffect(() => {
        if (!city) {
        return
        }
        setNewCity(city)
    }, [city])

    useEffect(() => {
        if (!email) {
        return
        }
        setNewEmail(email)
    }, [email])

    useEffect(() => {
        if (!phone) {
        return
        }
        setNewPhone(phone)
    }, [phone])

    useEffect(() => {
        if (!birthday) {
        return
        }
        setNewBirthday(birthday)
    }, [birthday])

    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newBirthday, setNewBirthday] = useState('');
    const [newPhone, setNewPhone] = useState('');
    const [newCity, setNewCity] = useState('');

    const iconCreate = <MdCreate color="#F59256" className="icon" />;
    const iconCriateBlack = <MdCreate color="#111111" className="icon" />;
    const iconConfirm = <BsCheckLg color="#F59256" className="icon" />;

    const [iconName, setIconName] = useState(iconCreate);
    const [iconEmail, setIconEmail] = useState(iconCreate);
    const [iconBirthday, setIconBirthday] = useState(iconCreate);
    const [iconPhone, setIconPhone] = useState(iconCreate);
    const [iconCity, setIconCity] = useState(iconCreate);

    const imputChange = e => {
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

    const onFocus = e => {
        const { name } = e.currentTarget;

        switch (name) {
            case 'Name':
                setIconName(iconConfirm);
                setIconEmail(iconCriateBlack);
                setIconBirthday(iconCriateBlack);
                setIconPhone(iconCriateBlack);
                setIconCity(iconCriateBlack);
                break;
            case 'Email':
                setIconEmail(iconConfirm);
                setIconName(iconCriateBlack);
                setIconBirthday(iconCriateBlack);
                setIconPhone(iconCriateBlack);
                setIconCity(iconCriateBlack);
                break;
            case 'Birthday':
                setIconBirthday(iconConfirm);
                setIconEmail(iconCriateBlack);
                setIconName(iconCriateBlack);
                setIconPhone(iconCriateBlack);
                setIconCity(iconCriateBlack);
                break;
            case 'Phone':
                setIconPhone(iconConfirm);
                setIconBirthday(iconCriateBlack);
                setIconEmail(iconCriateBlack);
                setIconName(iconCriateBlack);
                setIconCity(iconCriateBlack);
                break;
            case 'City':
                setIconCity(iconConfirm);
                setIconPhone(iconCriateBlack);
                setIconBirthday(iconCriateBlack);
                setIconEmail(iconCriateBlack);
                setIconName(iconCriateBlack);
                break;
            default:
                return;
        }
    };

    const submitChenges = e => {
        e.preventDefault();
        dispatch(
            updateUserOperation({
                newName,
                newEmail,
                newBirthday,
                newPhone,
                newCity,
            })
        );
        setIconName(iconCreate);
        setIconEmail(iconCreate);
        setIconBirthday(iconCreate);
        setIconPhone(iconCreate);
        setIconCity(iconCreate);
    };

    return (
        <Form onSubmit={submitChenges}>
            <Lable>
                {' '}
                Name:
                <Conteiner>
                    <Input
                        autoComplete="off"
                        type="text"
                        id="name"
                        name="Name"
                        value={newName}
                        onChange={imputChange}
                        onFocus={onFocus}
                    />
                    <ButtonCreate>{iconName}</ButtonCreate>
                </Conteiner>
            </Lable>
            <Lable>
                {' '}
                Email:
                <Conteiner>
                    <Input
                        autoComplete="off"
                        type="email"
                        id="email"
                        name="Email"
                        value={newEmail}
                        onChange={imputChange}
                        onFocus={onFocus}
                    />
                    <ButtonCreate disabled={true}>{iconEmail}</ButtonCreate>
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
                        onFocus={onFocus}
                    />
                    <ButtonCreate type="submit">{iconBirthday}</ButtonCreate>
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
                        onFocus={onFocus}
                    />
                    <ButtonCreate type="submit">{iconPhone}</ButtonCreate>
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
                        onFocus={onFocus}
                    />
                    <ButtonCreate type="submit">{iconCity}</ButtonCreate>
                </Conteiner>
            </Lable>
        </Form>
    );
};

export default UserDataItem;
