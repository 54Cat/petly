import {List, Card, Title, FlexBox, Info, InfoLink} from "./OurFriendsCardStyled"

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
                            <div>
                                <Info>Time:</Info>
                                <span>------------------</span>
                            </div>
                            <div>
                                <Info>Adress: </Info>
                                <InfoLink href={addressUrl}>{address? address.slice(0, 19) : "------------------"}</InfoLink>
                            </div>
                            <div>
                                <Info>Email:</Info>
                                <InfoLink href={`mailto:${email}`} target="_blank" rel="noreferrer">{email ? email : "------------------"}</InfoLink>
                            </div>
                            <div>
                                <Info>Phone:</Info>
                                <InfoLink href={`tel:${phone}`} target="_blank" rel="noreferrer">{ phone? phone : "------------------"}</InfoLink>
                            </div>       
                        </div>
                    </FlexBox>
                
            </Card>
        )         
    }  
    )
    return <List>{ elements}</List>    
}

export default OurFriendsCard;