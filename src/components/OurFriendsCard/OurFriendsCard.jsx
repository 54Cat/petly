const OurFriendsCard = ({ items }) => {
    
    const elements = items.map(({ title, url, imageUrl, addressUrl, address, phone, email }) => {
        return (
            <li key={title}>
                <a href={url} target="_blank" rel="noreferrer">
                    <h3>{title}</h3>
                    <div>
                        <div>
                            <img src={imageUrl} alt={title}></img>
                        </div>
                        <div>
                            <p>Time:</p>
                            <p>Adress:<a href={addressUrl}>{address}</a></p>
                            <p>Email:<a href={`mailto:${email}`} target="_blank" rel="noreferrer">{email? email : "------------------"}</a></p>
                            <p>Phone:<a href={`tel:${phone}`} target="_blank" rel="noreferrer">{ phone}</a></p>
                        </div>
                    </div>
                
                </a>
            </li>
        )         
    }  
    )
    return <ol>{ elements}</ol>    
}

export default OurFriendsCard;