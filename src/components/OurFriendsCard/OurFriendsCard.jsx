import { Card, Title, FlexBox, Info, InfoLink, AddressLink, BoxInfo, Image } from "./OurFriendsCardStyled"
import ifEmptyString from "components/Utils/helpers/emptyInfoString"
import image from './defaultImage.jpg'

const OurFriendsCard = ({ card }) => {
        const { title, url, imageUrl, workDays, addressUrl, address, phone, email } = card
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
                            <BoxInfo>
                                <Info>Time:</Info>
                            <p>{workDays? `${workDaysFrom[0]} - ${workDaysTo[0]}` : ifEmptyString()}</p>
                            </BoxInfo>
                            <BoxInfo>
                                <Info>Adress: </Info>
                                <AddressLink href={addressUrl}>{address? `${address.slice(0, 25)}...,` : ifEmptyString()}</AddressLink>
                            </BoxInfo>
                            <BoxInfo>
                                <Info>Email:</Info>
                                <InfoLink href={`mailto:${email}`} target="_blank" rel="noreferrer">{email ? email : ifEmptyString()}</InfoLink>
                            </BoxInfo>
                            <BoxInfo>
                                <Info>Phone:</Info>
                                <InfoLink href={`tel:${phone}`} target="_blank" rel="noreferrer">{ phone? phone : ifEmptyString()}</InfoLink>
                            </BoxInfo>       
                        </div>
                    </FlexBox>
            </Card>
        )         

}

export default OurFriendsCard;