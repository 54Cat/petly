import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import { useMultistepForm } from './useMultistepForm';
import { useDispatch } from 'react-redux';
import { addNoticeOperation } from 'redux/Notices/noticesOperations';
import { ModalCard, NoticeBtn, NoticeBtnList } from './formAddNoticeStyled';

const INITIAL_DATA = {
    category: 'sell',
    title: '',
    name: '',
    birthday: '',
    breed: '',
    sex: '',
    location: '',
    price: '',
    petsPhoto: '',
    comments: '',
};

const ModalContent = ({ Close }) => {
    const [data, setData] = useState(INITIAL_DATA);

    function updateFields(fields) {
        setData(prev => {
            return { ...prev, ...fields };
        });
    }

    const { step, isFirstStep, isLastStep, back, next } = useMultistepForm([
        <Step1 {...data} updateFields={updateFields} />,
        <Step2 {...data} updateFields={updateFields} />,
    ]);

    const dispatch = useDispatch();

    const entries = Object.entries(data).filter(entry => entry[0] !== 'price');

    function onSubmit(e) {
        e.preventDefault();
        if (!isLastStep) return next();

        const formData = new FormData();
        entries.forEach(entry => {
            formData.append(entry[0], entry[1]);
        });

        if (!data.price) {
            for (let property of formData.entries()) {
                console.log('без прайс', property[0], property[1]);
            }
            dispatch(addNoticeOperation(formData));

            Close();
            return;
        }

        const keyPrice = Object.entries(data).filter(
            entry => entry[0] === 'price'
        );
        const keyPriceNew = keyPrice[0]
        console.log('keyPriceNew', keyPriceNew)

        formData.append(keyPriceNew[0], keyPriceNew[1]);

        for (let property of formData.entries()) {
            console.log(property[0], property[1]);
        }
        dispatch(addNoticeOperation(formData));

        Close();
    }

    return (
        <ModalCard onSubmit={onSubmit}>
            {step}
            <NoticeBtnList>
                {!isFirstStep ? (
                    <NoticeBtn type="button" onClick={back}>
                        Back
                    </NoticeBtn>
                ) : (
                    <NoticeBtn type="button" onClick={Close}>
                        Cancel
                    </NoticeBtn>
                )}
                <NoticeBtn type="submit">
                    {isLastStep ? 'Done' : 'Next'}
                </NoticeBtn>
            </NoticeBtnList>
        </ModalCard>
    );
};

export default ModalContent;
