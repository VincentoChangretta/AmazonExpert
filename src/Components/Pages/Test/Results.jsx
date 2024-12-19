import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { calculateEndValue, calculateTestValue } from '../../../../public/Functions';
import { resultsData } from '../../../../public/AppData';

export const Results = () => {
    const testValue = useSelector(state => state.testValue.testValue)
    const testValueCounts = calculateTestValue(testValue)
    const endValue = calculateEndValue(testValueCounts)
    const [resultState, setResultState] = useState(null)

    console.log(testValue)
    console.log(testValueCounts)
    
    

    useEffect(() => {
        if (endValue > 0 && endValue <= 10) {
            setResultState(resultsData.ResultsTo10)
        } else if (endValue > 11 && endValue <= 20) {
            setResultState(resultsData.ResultsTo20)
        } else if (endValue > 21 && endValue) {
            setResultState(resultsData.ResultsTo30)
        }
    }, [])

    return (
        <div className='w-full text-center'>
            <h3 className='text-center text-2xl font-extrabold mb-[20px]'>Potrzebujesz kursu {resultState}</h3>
            <button className='btn'>Zamówić</button>
        </div>
    );
}
