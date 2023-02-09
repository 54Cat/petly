import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuth } from "redux/selectors";

export default function PrivateRoute() {
    const authSelector = useSelector(getAuth);
    const token = authSelector.token;

    return token ? <Outlet /> : <Navigate to="/user" />;    
};