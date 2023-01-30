import {List, Card, Title, FlexBox, Info, InfoLink, AddressLink, BoxInfo, SpanInfo} from "./OurFriendsCardStyled"

const OurFriendsCard = ({ items, image }) => {
    
    const elements = items.map(({ title, url, imageUrl, addressUrl, address, phone, email }) => {
        return (
            <Card key={title}>
                <a href={url} target="_blank" rel="noreferrer">
                    <Title>{title}</Title>
                </a>
                    <FlexBox>
                        <div>
                            <img src={imageUrl? imageUrl : image} alt="logo"></img>
                        </div>
                        <div>
                            <BoxInfo>
                                <Info>Time:</Info>
                                <SpanInfo>------------------</SpanInfo>
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