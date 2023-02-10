import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import { useMultistepForm } from './useMultistepForm';

// import { ModalCard } from './ModalContent.styled';

const INITIAL_DATA = {
    title: '',
    name: '',
    birthday: '',
    breed: '',
    sex: '',
    state: '',
    zip: '',
    email: '',
    password: '',
};

const ModalContent = () => {
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

    function onSubmit(e) {
        e.preventDefault();
        if (!isLastStep) return next();
        alert('Successful Account Creation');
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                {step}
                <div>
                    {!isFirstStep && (
                        <button type="button" onClick={back}>
                            Back
                        </button>
                    )}
                    <button type="submit">
                        {isLastStep ? 'Finish' : 'Next'}
                    </button>
                </div>
            </form>
        </div>
    );
};
// const [data, setData] = useState({
//     title: '',
//     name: '',
//     birthday: '',
//     breed: '',
//     myPetsPhoto: '',
//     comments: '',
// });

// const [currentStep, setCurrentStep] = useState(0);

// const handleNextStep = (newData, final = false) => {
//     setData(prev => ({ ...prev, ...newData }));
//     if (final) {
//         return;
//     }

//     setCurrentStep(prev => prev + 1);
// };
// const handlePrevStep = newData => {
//     setData(prev => ({ ...prev, ...newData }));
//     setCurrentStep(prev => prev - 1);
// };
// const steps = [
//     <Step1 next={handleNextStep} data={data} onClose={onClose} />,
//     <Step2 prev={handlePrevStep} data={data} />,
// ];

export default ModalContent;
