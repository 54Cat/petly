import {Card, FlexBox, Info, InfoLink} from "./OurFriendsCardStyled"

const OurFriendsCard = ({ items }) => {
    
    const elements = items.map(({ title, url, imageUrl, addressUrl, address, phone, email }) => {
        return (
            <Card key={title}>
                <a href={url} target="_blank" rel="noreferrer">
                    <h3>{title}</h3>
                </a>
                    <FlexBox>
                        <div>
                            <img src={imageUrl} alt={title}></img>
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
    return <ol>{ elements}</ol>    
}

export default OurFriendsCard;