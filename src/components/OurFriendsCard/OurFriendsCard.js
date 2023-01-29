const OurFriendsCard = ({ title, url, addressUrl, imageUrl, address, workDays }) => {
    return (
        <li key={title}>
            <a href={url} target="_blank">
                <h3>{title}</h3>
                <img></img>
            </a>
        </li>
    )
}