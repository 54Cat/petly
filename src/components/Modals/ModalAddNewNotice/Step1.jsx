import React from 'react';
import {
    AddNoticeForm,
    NavButton,
    AddNoticeTitle,
    Text,
    CategorierList,
    FormLabel,
    NoticeFormInput,
} from './Step1Styled';
import { TitleColor } from './step2Styled';

const Step1 = ({ category, title, name, birthday, breed, updateFields }) => {
    return (
        <div>
            <AddNoticeTitle>Add pet</AddNoticeTitle>
            <Text>Pets are not our whole life, but they make our lives whole. Roger Caras
            </Text>
            <CategorierList>
                <NavButton
                    type="button"
                    value="lost-found"
                    style={
                        category === 'lost-found'
                            ? {
                                  color: '#ffffff',
                                  backgroundColor: '#F59256',
                                  border: 0,
                              }
                            : undefined
                    }
                    onClick={e => updateFields({ category: e.target.value })}
                >
                    lost/found
                </NavButton>
                <NavButton
                    type="button"
                    value="for-free"
                    style={
                        category === 'for-free'
                            ? {
                                  color: '#ffffff',
                                  backgroundColor: '#F59256',
                                  border: 0,
                              }
                            : undefined
                    }
                    onClick={e => updateFields({ category: e.target.value })}
                >
                    In good hands
                </NavButton>
                <NavButton
                    type="button"
                    value="sell"
                    style={
                        category === 'sell'
                            ? {
                                  color: '#ffffff',
                                  backgroundColor: '#F59256',
                                  border: 0,
                              }
                            : undefined
                    }
                    onClick={e => updateFields({ category: e.target.value })}
                >
                    sell
                </NavButton>
            </CategorierList>
            <AddNoticeForm >
                <FormLabel htmlFor="title">Title of ad<TitleColor>*</TitleColor></FormLabel>
                <NoticeFormInput
                    type="text"
                    placeholder="Type name pet"
                    name="title"
                    value={title}
                    onChange={e => updateFields({ title: e.target.value })}
                />

                <FormLabel htmlFor="name">Name pet</FormLabel>
                <NoticeFormInput
                    type="text"
                    placeholder="Type name pet"
                    name="name"
                    value={name}
                    onChange={e => updateFields({ name: e.target.value })}
                />

                <FormLabel htmlFor="birthday">Date of birth</FormLabel>
                <NoticeFormInput
                    type="text"
                    placeholder="Type name pet"
                    name="birthday"
                    value={birthday}
                    onChange={e => updateFields({ birthday: e.target.value })}
                />

                <FormLabel htmlFor="breed">Breed</FormLabel>
                <NoticeFormInput
                    type="text"
                    placeholder="Type name pet"
                    name="breed"
                    value={breed}
                    onChange={e => updateFields({ breed: e.target.value })}
                    />
        </AddNoticeForm>
        </div>
    );
};

export default Step1;
