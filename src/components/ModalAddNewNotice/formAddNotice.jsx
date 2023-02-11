import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import { useMultistepForm } from './useMultistepForm';
import { useDispatch } from 'react-redux';
import { addNoticeOperation } from 'redux/Notices/noticesOperations';

// import * as yup from 'yup';

import { ModalCard } from './formAddNoticeStyled';

const INITIAL_DATA = {
    category: 'sell',
    title: '',
    name: '',
    birthday: '',
    breed: '',
    sex: '',
    location: '',
    price: '',
    myPetsPhoto: '',
    comments: '',
};

const ModalContent = ({ Close }) => {
    const [data, setData] = useState(INITIAL_DATA);

    function updateFields(fields) {
        setData(prev => {
            return { ...prev, ...fields };
        });
    }

    const {
        // steps,
        // currentStepIndex,
        step,
        isFirstStep,
        isLastStep,
        back,
        next,
    } = useMultistepForm([
        <Step1 {...data} updateFields={updateFields} />,
        <Step2 {...data} updateFields={updateFields} />,
    ]);

    const dispatch = useDispatch();

    const entries = Object.entries(data).filter(entry => entry[0] !== 'files');

    function onSubmit(e) {
        e.preventDefault();
        if (!isLastStep) return next();

        const formData = new FormData();
        entries.forEach(entry => {
            formData.append(entry[0], entry[1]);
        });
        dispatch(addNoticeOperation(formData));

        Close();
    }

    return (
        <ModalCard onSubmit={onSubmit}>
            {step}
            <div>
                {!isFirstStep ? (
                    <button type="button" onClick={back}>
                        Back
                    </button>
                ) : (
                    <button type="button" onClick={Close}>
                        Cancel
                    </button>
                )}
                <button type="submit">{isLastStep ? 'Done' : 'Next'}</button>
            </div>
        </ModalCard>
    );
};

export default ModalContent;
