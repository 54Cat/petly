import { Card, Title, FlexBox, Info, InfoLink, AddressLink, BoxInfo, Image, InfoTime } from "./OurFriendsCardStyled"
import ifEmptyString from "components/Utils/helpers/emptyInfoString"
import image from './defaultImage.jpg'
import WorkWeekTable from "components/WorkWeekTable/WorkWeekTable"
import { useState } from "react"

const OurFriendsCard = ({ card }) => {
    const [visible, setVisible] = useState(false);

    const toggle = () => {
        setVisible(prevState => !prevState)
    }
    
    const { title, url, imageUrl, workDays, addressUrl, address, phone, email } = card;
      
    const workDaysFrom = workDays?.filter(item => item.isOpen === true).map(item => item.from);
    const workDaysTo = workDays?.filter(item => item.isOpen === true).map(item => item.to);  
    
        return (
        <Card>
                <a href={url} target="_blank" rel="noreferrer">
                    <Title>{title}</Title>
                </a>
                    <FlexBox>
                        <div>
                        <Image src={imageUrl ? imageUrl : image} alt="logo"></Image>
                        </div>
                        <div>
                            <BoxInfo onClick={toggle}>
                            
                            {workDays ? <InfoTime>
                                Time:<br></br>
                                {workDaysFrom[0]} - {workDaysTo[0]}
                                {visible && <WorkWeekTable items={workDays} ></WorkWeekTable>}</InfoTime> : <Info>Time:<br></br>{ifEmptyString()}</Info>}
                            
                            </BoxInfo>
                            <BoxInfo>
                            <Info>Adress: </Info>
                            {address ? <AddressLink target="_blank" href={addressUrl}>{`${address.slice(0, 20)}...,`}</AddressLink> : ifEmptyString()}
                            </BoxInfo>
                            <BoxInfo>
                                <Info>Email:</Info>
                            {email ? <InfoLink href={`mailto:${email}`} target="_blank" rel="noreferrer">{email} </InfoLink> : <Info>{ifEmptyString()}</Info>}
                            </BoxInfo>
                            <BoxInfo>
                            <Info>Phone:</Info>
                            {phone ? <InfoLink href={`tel:${phone}`} target="_blank" rel="noreferrer">{phone}</InfoLink> : <Info>{ifEmptyString()}</Info>}
                            </BoxInfo>       
                        </div>
                    </FlexBox>
            </Card>
        )         

}

export default OurFriendsCard;