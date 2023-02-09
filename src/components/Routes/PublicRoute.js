import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from "redux/Auth/AuthSelectors";

export default function PublicRoute() {
    const authSelector = useSelector(selectUser);
    const token = authSelector.token;

    return !token ? <Navigate to="/login" /> : <Outlet /> ;
}