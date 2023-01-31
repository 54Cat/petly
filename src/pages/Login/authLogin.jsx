import React, { useState } from 'react';

import { Login } from './Login';

export const AuthLogin = () => {
    const [data, setData] = useState({
        email: '',
        password: '',

        name: '',
        phone: '',
        city: '',
    });

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

    return (
        <div>
            {' '}
            <Login data={data} />,
        </div>
    );
};
