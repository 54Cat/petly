import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuth } from 'redux/selectors';

export default function PublicRoute() {
    const authSelector = useSelector(getAuth);

    if (authSelector.isLoggedIn) {
        return <Navigate to="/user" />;
    }

    return <Outlet />;
}
