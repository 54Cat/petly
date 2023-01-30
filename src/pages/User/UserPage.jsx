import UserData from "components/UserData/UserData";
import PetsData from "components/PetsData/PetsData";
import Logout from "components/Logout/Logout";

export const UserPage = () => {

    return (
        <>
            <UserData />
            <Logout/>
            <PetsData />
        </>
  )

};
