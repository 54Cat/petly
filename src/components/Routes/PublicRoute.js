import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuth } from "redux/selectors";

export default function PublickRoute() {
    const authSelector = useSelector(getAuth);

    if (authSelector.isLoggedIn) {
        return <Navigate to='/notices' />
    }
    
    return <Outlet/>
};