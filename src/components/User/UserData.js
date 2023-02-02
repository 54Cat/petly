import image from "../../images/userPhoto.png"
import { TbLogout } from "react-icons/tb";
import { MdCreate } from "react-icons/md";
// import { BsCheckLg } from "react-icons/bs";
import { IoIosCamera } from "react-icons/io";
import { userCurrent } from "../../auth/UserAuth/AuthUser";
import { Wrapper, Text, Image, ButtonEdit, Span, ButtonCreate, Input, Lable, Form, ButtonLogout, Conteiner } from "./UserDataStyle";


const UserData = () => {
    userCurrent();
    return (
        <>
            <Text>My information:</Text>
            <Wrapper>
                <Image src={image} alt="my portret" width="233" height="233" />
                <ButtonEdit> <Span><IoIosCamera fill="#F59256" size="22px" /></Span> Edit photo</ButtonEdit><br/>
                <Form>
                    <Lable > Name:
                        <Conteiner>
                            <Input type="text" id="name" name="Name" value={"Volodymyr"} />
                            <ButtonCreate type="submit"> <MdCreate color="#F59256" /></ButtonCreate> 
                        </Conteiner>
                    </Lable>
                    <Lable> Email:
                        <Conteiner>
                            <Input type="text" id="email" name="Email" value={"anna00@gmail.com"} />
                            <ButtonCreate type="submit"> <MdCreate color="#F59256" /></ButtonCreate>
                        </Conteiner>
                    </Lable>
                    <Lable> Birthday:
                        <Conteiner>
                            <Input type="text" id="birthday" name="Birthday" value={"00.00.0000"} />
                            <ButtonCreate type="submit"> <MdCreate color="#F59256" /></ButtonCreate>
                        </Conteiner>
                    </Lable>
                    <Lable> Phone:
                        <Conteiner>
                            <Input type="text" id="phone" name="Phone" value={"+38000000000"} />
                            <ButtonCreate type="submit"> <MdCreate color="#F59256" /></ButtonCreate>
                        </Conteiner>
                    </Lable>
                    <Lable> City:
                        <Conteiner>
                            <Input type="text" id="city" name="City" value={"Kiev"} />
                            <ButtonCreate type="submit"> <MdCreate color="#F59256" /></ButtonCreate>
                        </Conteiner>
                    </Lable>
                        
                </Form>
                    <ButtonLogout type="submit"><TbLogout color="#F59256"/>Log Out</ButtonLogout>
            </Wrapper>
        </>
    )
}

export default UserData;