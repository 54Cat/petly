import image from "../../images/userPhoto.png"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { MdCreate } from "react-icons/md";
// import { BsCheckLg } from "react-icons/bs";
import { IoIosCamera } from "react-icons/io";
import { userCurrent } from "../../auth/UserAuth/AuthUser";
import { UserLogout } from "./UserLogOut";
import { Wrapper, Text, Image, ButtonEdit, Span, ButtonCreate, Input, Lable, Form, Conteiner } from "./UserDataStyle";


const UserData = () => {

const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userCurrent());
  }, [dispatch]);
    
    const imputChange = () => {
        
    }

    return (
        <>
            <Text>My information:</Text>
            <Wrapper>
                <Image src={image} alt="my portret" width="233" height="233" />
                <ButtonEdit> <Span><IoIosCamera fill="#F59256" size="22px" /></Span> Edit photo</ButtonEdit><br/>
                <Form>
                    <Lable > Name:
                        <Conteiner>
                            <Input type="text" id="name" name="Name" value={"Volodymyr"} onChange={imputChange} />
                            <ButtonCreate type="submit"> <MdCreate color="#F59256" /></ButtonCreate> 
                        </Conteiner>
                    </Lable>
                    <Lable> Email:
                        <Conteiner>
                            <Input type="text" id="email" name="Email" value={"anna00@gmail.com"} onChange={imputChange} />
                            <ButtonCreate type="submit"> <MdCreate color="#F59256" /></ButtonCreate>
                        </Conteiner>
                    </Lable>
                    <Lable> Birthday:
                        <Conteiner>
                            <Input type="text" id="birthday" name="Birthday" value={"00.00.0000"} onChange={imputChange} />
                            <ButtonCreate type="submit"> <MdCreate color="#F59256" /></ButtonCreate>
                        </Conteiner>
                    </Lable>
                    <Lable> Phone:
                        <Conteiner>
                            <Input type="text" id="phone" name="Phone" value={"+38000000000"} onChange={imputChange} />
                            <ButtonCreate type="submit"> <MdCreate color="#F59256" /></ButtonCreate>
                        </Conteiner>
                    </Lable>
                    <Lable> City:
                        <Conteiner>
                            <Input type="text" id="city" name="City" value={"Kiev"} onChange={imputChange} />
                            <ButtonCreate type="submit"> <MdCreate color="#F59256" /></ButtonCreate>
                        </Conteiner>
                    </Lable>
                        
                </Form>
                <UserLogout/>
        
            </Wrapper>
        </>
    )
}

export default UserData;