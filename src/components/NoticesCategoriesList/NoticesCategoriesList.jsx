import { NoticesList } from "./NoticesCategoriesListStyled"
import { NoticesCategoriesItem } from '../NoticesCaregoriesItem/NoticesCaregoriesItem'
// import { nanoid } from "nanoid"

export const NoticesCategoriesList = () => {
    const noticesFromBackEnd = [
        {
            "_id": "63da6d93a075c23d8cbd15fd",
            "title": "My like notice",
            "name": "Lagga",
            "birthdate": "2022-12-10T22:00:00.000Z",
            "breed": "dog",
            "location": "Lviv",
            "comments": "Joi.string().trim().min(8).max(120).required()",
            "price": 55,
            "sex": "Male",
            "category": "sell",
            "imageURL": "Joi.string().required()",
            "favorite": false,
            "owner": "63da64cb9a86bc425848c82e",
            "birthday": "2023-02-08T23:30:54.891Z"
        },
        {
            "_id": "63da6dcfa075c23d8cbd1600",
            "title": "My new notice",
            "name": "Mottas",
            "birthdate": "2022-12-10T22:00:00.000Z",
            "breed": "dog",
            "location": "Lviv",
            "comments": "Joi.string().trim().min(8).max(120).required()",
            "price": 55,
            "sex": "Male",
            "category": "sell",
            "imageURL": "Joi.string().required()",
            "favorite": false,
            "owner": "63da64cb9a86bc425848c82e",
            "birthday": "2023-02-08T23:30:54.893Z"
        },
        {
            "_id": "63da6de0a075c23d8cbd1603",
            "title": "My new notice",
            "name": "Trexxos",
            "birthdate": "2022-12-10T22:00:00.000Z",
            "breed": "dog",
            "location": "Lviv",
            "comments": "Joi.string().trim().min(8).max(120).required()",
            "price": 55,
            "sex": "Male",
            "category": "sell",
            "imageURL": "Joi.string().required()",
            "favorite": false,
            "owner": "63da64cb9a86bc425848c82e",
            "birthday": "2023-02-08T23:30:54.893Z"
        },
        {
            "_id": "63da6deda075c23d8cbd1606",
            "title": "My new notice",
            "name": "Puari",
            "birthdate": "2022-12-10T22:00:00.000Z",
            "breed": "dog",
            "location": "Lviv",
            "comments": "Joi.string().trim().min(8).max(120).required()",
            "price": 55,
            "sex": "Male",
            "category": "sell",
            "imageURL": "Joi.string().required()",
            "favorite": false,
            "owner": "63da64cb9a86bc425848c82e",
            "birthday": "2023-02-08T23:30:54.894Z"
        },
        {
            "_id": "63da6df7a075c23d8cbd1609",
            "title": "My new notice",
            "name": "Grola",
            "birthdate": "2022-12-10T22:00:00.000Z",
            "breed": "dog",
            "location": "Lviv",
            "comments": "Joi.string().trim().min(8).max(120).required()",
            "price": 55,
            "sex": "Male",
            "category": "sell",
            "imageURL": "Joi.string().required()",
            "favorite": false,
            "owner": "63da64cb9a86bc425848c82e",
            "birthday": "2023-02-08T23:30:54.894Z"
        },
        {
            "_id": "63da77dea075c23d8cbd160c",
            "title": "My new notice",
            "name": "Brokkas",
            "birthdate": "2022-12-10T22:00:00.000Z",
            "breed": "dog",
            "location": "Lviv",
            "comments": "Joi.string().trim().min(8).max(120).required()",
            "price": 55,
            "sex": "Male",
            "category": "sell",
            "imageURL": "Joi.string().required()",
            "favorite": false,
            "owner": "63da64cb9a86bc425848c82e",
            "birthday": "2023-02-08T23:30:54.894Z"
        },
        {
            "_id": "63dc2d314efed183b1588cbb",
            "title": "dog sell",
            "name": "Sem",
            "birthday": "2020-02-01T22:00:00.000Z",
            "breed": "whiteSnow",
            "location": "Kyiv,Ukraine",
            "comments": "fsdtygkjdtukfyugjfgn",
            "price": 5000,
            "sex": "Male",
            "category": "sell",
            "imageURL": "https://gravatar.com/avatar/559ea472958296086e61ff3eb30ecdd8?s=400&d=wavatar&r=x",
            "favorite": false,
            "owner": "63da64cb9a86bc425848c82e"
        }
    ];
    const favorite = ['63da6d93a075c23d8cbd15fd', '63da6de0a075c23d8cbd1603']
    return <NoticesList>
        {
            noticesFromBackEnd.map(notice => (<NoticesCategoriesItem notice={notice} favorite={favorite} />))
        }
        {/* // <NoticesItem key={nanoid()}></NoticesItem>
        //     <NoticesItem key={nanoid()}></NoticesItem>
        //     <NoticesItem key={nanoid()}></NoticesItem>
        //     <NoticesItem key={nanoid()}></NoticesItem>
        //     <NoticesItem key={nanoid()}></NoticesItem>
        //     <NoticesItem key={nanoid()}></NoticesItem>
        //     <NoticesItem key={nanoid()}></NoticesItem>
        //     <NoticesItem key={nanoid()}></NoticesItem>
        //     <NoticesItem key={nanoid()}></NoticesItem>
        //     <NoticesItem key={nanoid()}></NoticesItem> */}
            {/* </NoticesItem> */}
                {/* // ))} */}
    </NoticesList>
}