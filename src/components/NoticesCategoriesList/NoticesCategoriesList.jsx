import { useParams } from "react-router-dom"

export const NoticesCategoriesList = () => {
    const { categoryName } = useParams();
    return <div>{categoryName}</div>
}