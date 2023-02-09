import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuth } from 'redux/selectors';

export default function PublicRoute() {
    const authSelector = useSelector(getAuth);
    const token = authSelector.token;

    if (!token) {
        return <Navigate to="/user" />;
    }
    else {
        return <Outlet />;
    }
}