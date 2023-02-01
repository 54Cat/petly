import image from "../../images/userPhoto.png"
import { TbLogout } from "react-icons/tb";
import { MdCreate } from "react-icons/md";
// import { BsCheckLg } from "react-icons/bs";
import { IoIosCamera } from "react-icons/io";
import { userCurrent } from "../../auth/UserAuth/AuthUser";
import { Wrapper, Text, Image, ButtonEdit, Span, ButtonCreate, Input, Lable, Form, ButtonLogout } from "./UserDataStyle";


const UserData = () => {
    userCurrent();
    return (
        <>
            <Text>My information:</Text>
            <Wrapper>
                <Image src={image} alt="my portret" width="233" height="233" />
                <ButtonEdit> <Span><IoIosCamera size ="15px" viewBox="60 140 385 310" fill="#F59256" margin-right="5px"/></Span> Edit photo</ButtonEdit><br/>
                <Form>
                    <Lable htmlFor="name"> Name:</Lable>
                    <Input type="text" id="name" name="Name" value={""} />
                    <ButtonCreate type="submit"> <MdCreate color="#F59256" /></ButtonCreate> <br/>
                    
                    {/* <label for="email">Email:</label>
                    <input type="text" id="email" name="Email" value={""} />
                    <button type="submit"><BsCheckLg/></button><br/>
                    
                    <label for="birthday">Birthday:</label>
                    <input type="text" id="birthday" name="Birthday" value={""} />
                    <button type="submit">X</button><br/>
                    
                    <label for="phone">Phone:</label>
                    <input type="text" id="phone" name="Phone" value={""} />
                    <button type="submit">X</button><br/>
                    
                    <label for="city">City:</label>
                    <input type="text" id="city" name="City" value={""} />
                    <button type="submit">X</button> */}
                        
                </Form>
                <ButtonLogout type="submit"><TbLogout color="#F59256"/>Log Out</ButtonLogout>
            </Wrapper>
        </>
    )
}

export default UserData;