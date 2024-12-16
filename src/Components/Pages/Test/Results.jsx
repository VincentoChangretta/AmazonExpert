import React from 'react';
import { useSelector } from 'react-redux';
import { calculateEndValue, calculateTestValue } from '../../../../public/Functions';

export const Results = () => {
    const testValue = useSelector(state => state.testValue.testValue)
    const testValueCounts = calculateTestValue(testValue)
    const endValue = calculateEndValue(testValueCounts)


    const createTestValueCounts = (object) => {
        return Object.entries(object).map(([key, value], index) => (
            <li className='flex justify-center items-center bg-standartColor rounded-full w-[70px] h-[70px] font-bold' key={index}>
                {key}) {value}
            </li>
        ));
    };


    return (
        <div className='text-2xl'>
            <div className='flex gap-[40px] mb-[30px]'>
                <div className='flex items-center gap-[20px]'>
                    <h3>Twoje odpowiedzi:</h3>
                    <ul className='flex gap-[20px]'>
                        {createTestValueCounts(testValueCounts)}
                    </ul>
                </div>
                <div className='flex items-center gap-[20px]'>
                    <h3>Wynik:</h3>
                    <h4 className='flex justify-center items-center bg-standartColor rounded-full w-[70px] h-[70px] font-bold'>{endValue} </h4>
                </div>
            </div>
            <div>
                <h3 className='mb-[20px]'>Ocena wyników</h3>
                <ul>
                    <li>0–10 punktów: Intensywne szkolenie (10 godzin)</li>
                    <li>11–20 punktów: Średnie wsparcie (5 godzin)</li>
                    <li>21–30 punktów: Doszlifowanie wiedzy (1 godzina)</li>
                </ul>
            </div>
        </div>
    );
}
