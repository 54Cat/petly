import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuth } from "redux/selectors";

export default function PrivateRoute() {
    const authSelector = useSelector(getAuth);

    if (!authSelector.isLoggedIn) {
        return <Navigate to='/login' />
    }

    return <Outlet/>
};