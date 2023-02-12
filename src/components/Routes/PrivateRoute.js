import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuth } from "../../redux/selectors";

export default function PrivateRoute() {
    const { isLoggedIn } = useSelector(getAuth);

    return !isLoggedIn ? <Navigate to="/login" /> : <Outlet />;
}