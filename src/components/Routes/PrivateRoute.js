import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuth } from "redux/selectors";

export default function PrivateRoute() {
    const authSelector = useSelector(getAuth);
    const token = authSelector.token;

    if (!token) {
        return <Navigate to="/login" />;
    }
    else {
        return <Outlet />;
    }
};