import React from 'react';
import { NavButton } from './Step1.styled';

const Step1 = ({ category, title, name, birthday, breed, updateFields }) => {
    return (
        <div>
            <h1>Add pet</h1>
            <div>
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
            </div>
            <label htmlFor="title">Title of ad</label>
            <input
                type="text"
                placeholder="Type name pet"
                name="title"
                value={title}
                onChange={e => updateFields({ title: e.target.value })}
            />

            <label htmlFor="name">Name pet</label>
            <input
                type="text"
                placeholder="Type name pet"
                name="name"
                value={name}
                onChange={e => updateFields({ name: e.target.value })}
            />

            <label htmlFor="birthday">Date of birth</label>
            <input
                type="text"
                placeholder="Type name pet"
                name="birthday"
                value={birthday}
                onChange={e => updateFields({ birthday: e.target.value })}
            />

            <label htmlFor="breed">Breed</label>
            <input
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
