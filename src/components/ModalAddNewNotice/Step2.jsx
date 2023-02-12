import React from 'react';
import {
    LabelFemale,
    LabelMale,
    SpanTXT,
    Label,
    NoticeFormInput,
    Input,
    Thumb,
    Title,
    TitleColor,
    AddNoticeTitle,
    AddNoticeForm,
    FormLabel,
    Textarea,
   
} from './step2Styled';

// import * as yup from 'yup';

const Step2 = ({ category, sex, location, price, comments, updateFields }) => {
    return (
        <div>
            <AddNoticeTitle>Add pet</AddNoticeTitle>                
            <Thumb>
                <Title>
                    The sex<TitleColor>*</TitleColor>:
                </Title>
                <Label htmlFor="Choice1">
                    <Input
                        type="radio"
                        id="Choice1"
                        value="Male"
                        name={sex}
                        onChange={e => updateFields({ sex: e.target.value })}
                    />
                    <SpanTXT>Male</SpanTXT>
                    <LabelMale></LabelMale>
                </Label>

                <Label htmlFor="Choice2">
                    <Input
                        type="radio"
                        id="Choice2"
                        value="Female"
                        name={sex}
                        onChange={e => updateFields({ sex: e.target.value })}
                    />
                    <SpanTXT>Female</SpanTXT>
                    <LabelFemale></LabelFemale>
                </Label>
            </Thumb>
        <AddNoticeForm>
            <FormLabel htmlFor="location">Location*:</FormLabel>
            <NoticeFormInput
                type="text"
                name="location"
                placeholder="Type name pet"
                value={location}
                onChange={e => updateFields({ location: e.target.value })}
            />

            {category === 'sell' && (
                <>
            <FormLabel htmlFor="price">Price*:</FormLabel>
            <NoticeFormInput
                type="text"
                name="price"
                placeholder="Type name pet"
                value={price}
                onChange={e => updateFields({ price: e.target.value })}
            />
                </>
            )}

             <FormLabel htmlFor="myPetsPhoto">
                Load the pets image:
                <NoticeFormInput
                    id="myPetsPhoto"
                    type="file"
                    name="myPetsPhoto"
                    onChange={e =>
                        updateFields({ myPetsPhoto: e.target.files[0] })
                    }
                />
            </FormLabel>         
          
            <FormLabel htmlFor="comments">Comments</FormLabel>
            <Textarea
                type="text"
                name="comments"
                placeholder="Type comment"
                as="textarea"   
                value={comments}
                onChange={e => updateFields({ comments: e.target.value })}
                />
            </AddNoticeForm>
        </div>
    );
};
export default Step2;

// const dispatch = useDispatch();

// const entries = Object.entries(data).filter(entry => entry[0] !== 'files');

// const handleClick = () => {
//     prev();
// };

// const onSubmit = async () => {
//     const formData = new FormData();
//     if (data.files) {
//         data.files.forEach(file => {
//             formData.append('files', file, file.name);
//         });
//     }

//     entries.forEach(entry => {
//         formData.append(entry[0], entry[1]);
//     });

//     dispatch(addNoticeOperation(formData));
// };
