import React from 'react';
import {
    LabelFemale,
    LabelMale,
    SpanTXT,
    Label,
    Input,
    Thumb,
    Title,
    TitleColor, 
    InputFile,
    NoticeAddFile,
} from './step2Styled';

import {AddNoticeTitle, FormLabel, NoticeFormInput, AddNoticeForm} from './Step1Styled';
// import { BtnAddFileIcon } from 'components/Modals/ModalAddsPet/AddsPetForm/AddsPetModalStyled';


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
            <FormLabel htmlFor="location">Location<TitleColor>*</TitleColor>:</FormLabel>
            <NoticeFormInput
                type="text"
                name="location"
                placeholder="Type name pet"
                value={location}
                onChange={e => updateFields({ location: e.target.value })}
            />

            {category === 'sell' && (
                <>
                    <FormLabel htmlFor="price">Price<TitleColor>*</TitleColor>:</FormLabel>
                    <NoticeFormInput
                        type="text"
                        name="price"
                        placeholder="Type name pet"
                        value={price}
                        onChange={e => updateFields({ price: e.target.value })}
                    />
                </>
            )}

            {/* <FormLabel htmlFor="myPetsPhoto"> */}
                    
                <NoticeAddFile htmlFor="myPetsPhoto">
                    
                    Load the pet’s image:
                        {/* {updateFields ? <p>File added success</p>:<BtnAddFileIcon />} */}
                <InputFile
                    id="myPetsPhoto"
                    type="file"
                    name="myPetsPhoto"
                    onChange={e =>
                        updateFields({ myPetsPhoto: e.target.files[0] })
                    }
                            
                        />
                </NoticeAddFile>        
            {/* </FormLabel> */}

            <FormLabel htmlFor="comments">Comments</FormLabel>
            <NoticeFormInput
                type="text"
                name="comments"
                placeholder="Type name pet"
                value={comments}
                onChange={e => updateFields({ comments: e.target.value })}
                />
            </AddNoticeForm>
        </div>
    );
};

export default Step2;