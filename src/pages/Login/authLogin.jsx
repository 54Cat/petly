import React from 'react';
import { Login } from './Login';
import { Loader } from 'components/Utils/Loader/Loader';
import { useSelector } from 'react-redux';
import { isLoading } from 'redux/Auth/AuthSelectors';

export const AuthLogin = () => {
    const isLoaders = useSelector(isLoading);
    return <div>{isLoaders ? <Loader /> : <Login />}</div>;
};
