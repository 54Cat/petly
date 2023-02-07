import { NoticesList, NoticesTestItem } from "./NoticesCategoriesListStyled"
import { nanoid } from "nanoid"

export const NoticesCategoriesList = () => {
    return <NoticesList>
        <NoticesTestItem key={nanoid()}>AAA</NoticesTestItem>
        <NoticesTestItem key={nanoid()}>AAA</NoticesTestItem>
        <NoticesTestItem key={nanoid()}>AAA</NoticesTestItem>
        <NoticesTestItem key={nanoid()}>AAA</NoticesTestItem>
        <NoticesTestItem key={nanoid()}>AAA</NoticesTestItem>
        <NoticesTestItem key={nanoid()}>AAA</NoticesTestItem>
        <NoticesTestItem key={nanoid()}>AAA</NoticesTestItem>
        <NoticesTestItem key={nanoid()}>AAA</NoticesTestItem>
        <NoticesTestItem key={nanoid()}>AAA</NoticesTestItem>
    </NoticesList>
}