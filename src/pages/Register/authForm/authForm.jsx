import React, { useState } from 'react';

import { StepOne } from '../step/StepOne';
import { StepTwo } from '../step/StepTwo';

export const AuthForm = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
        confirm: '',
        name: '',
        phone: '',
        city: '',
    });

    const [currentStep, setCurrentStep] = useState(0);

    const handleNextStep = (newData, final = false) => {
        setData(prev => ({ ...prev, ...newData }));
        if (final) {
            return;
        }
        setCurrentStep(prev => prev + 1);
    };
    const handlePrevStep = newData => {
        setData(prev => ({ ...prev, ...newData }));
        setCurrentStep(prev => prev - 1);
    };
    const steps = [
        <StepOne next={handleNextStep} data={data} />,
        <StepTwo prev={handlePrevStep} data={data} />,
    ];

    return <div>{steps[currentStep]}</div>;
};
