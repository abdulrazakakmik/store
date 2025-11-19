'use client';

import { useState } from 'react';

const CountBtn = () => {
    const [number, setNumber] = useState<number>(1);

    const manageNumber = (status: "increase" | "decrease") => {
        if (status === "increase") setNumber(prev => prev + 1);
        else if (status === "decrease") setNumber(prev => (prev > 1 ? prev - 1 : 1)); 
    };

    return (
        <div className="border border-gray-400 rounded-md h-10 flex items-center select-none">
            <button onClick={() => manageNumber("increase")} className="border-r manage-btn"> + </button>
            <span className="px-5 text-sm">{number}</span>
            <button onClick={() => manageNumber("decrease")} className="border-l manage-btn" > - </button>
        </div>
    );
};

export default CountBtn;
