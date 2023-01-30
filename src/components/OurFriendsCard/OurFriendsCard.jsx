import {List, Card, Title, FlexBox, Info, InfoLink, AddressLink, BoxInfo, SpanInfo, Image} from "./OurFriendsCardStyled"

const OurFriendsCard = ({ items, image }) => {
    
    const elements = items.map(({ title, url, imageUrl, workDays, addressUrl, address, phone, email }) => {
        const workDaysFrom = workDays?.filter(item => item.isOpen === true).map(item => item.from);
        const workDaysTo = workDays?.filter(item => item.isOpen === true).map(item => item.to);
        return (
            <Card key={title}>
                <a href={url} target="_blank" rel="noreferrer">
                    <Title>{title}</Title>
                </a>
                    <FlexBox>
                        <div>
                            <Image src={imageUrl? imageUrl : image} alt="logo"></Image>
                        </div>
                        <div>
                            <BoxInfo>
                                <Info>Time:</Info>
                            <p>{workDays? `${workDaysFrom[0]} - ${workDaysTo[0]}` : <SpanInfo>------------------</SpanInfo>}</p>
                            </BoxInfo>
                            <BoxInfo>
                                <Info>Adress: </Info>
                                <AddressLink href={addressUrl}>{address? address.slice(0, 21) : <SpanInfo>------------------</SpanInfo>}</AddressLink>
                            </BoxInfo>
                            <BoxInfo>
                                <Info>Email:</Info>
                                <InfoLink href={`mailto:${email}`} target="_blank" rel="noreferrer">{email ? email : <SpanInfo>------------------</SpanInfo>}</InfoLink>
                            </BoxInfo>
                            <BoxInfo>
                                <Info>Phone:</Info>
                                <InfoLink href={`tel:${phone}`} target="_blank" rel="noreferrer">{ phone? phone : <SpanInfo>------------------</SpanInfo>}</InfoLink>
                            </BoxInfo>       
                        </div>
                    </FlexBox>
                
            </Card>
        )         
    }  
    )
    return <List>{ elements}</List>    
}

export default OurFriendsCard;