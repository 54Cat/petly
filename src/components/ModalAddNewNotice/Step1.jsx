import React from 'react';
import { AddNoticeTitle, Text, CategorierList, CategoriesBtn, FormLabel, NoticeFormInput } from './Step1.styled';

const Step1 = ({ category, title, TitleColor, name, birthday, breed, updateFields }) => {
    return (
        <div>
            <AddNoticeTitle>Add pet</AddNoticeTitle>
                <Text>
                      Lorem ipsum dolor sit amet, consectetur Lorem ipsum
                      dolor sit amet, consectetur
                  </Text>
            <CategorierList>
                <CategoriesBtn
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
                </CategoriesBtn>
                <CategoriesBtn
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
                </CategoriesBtn>
                <CategoriesBtn
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
                </CategoriesBtn>
            </CategorierList>
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
        </div>
    );
};

export default Step1;
