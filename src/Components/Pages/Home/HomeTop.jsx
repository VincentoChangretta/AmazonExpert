import React, { useState } from 'react';
import { HomeTopText } from './HomeTopText';
import { Link } from 'react-router-dom';
import { homeTopTextes } from '../../../../public/AppData';
import { HomeTopSmallText } from './HomeTopSmall';

export const HomeTop = () => {

    const [textInArrayCur, setTextInArrayCur] = useState(0);
    const [isBigTextLoading, setisBigTextLoading] = useState(false)


    return (
        <section>
            <div className='flex justify-between items-start mb-[20px] min-h-[90px]'>
                <HomeTopText
                    textArray={homeTopTextes.bigText}
                    stopTime="5000"
                    toNewTime="100"
                    addSpeed="30"
                    delSpeed="30"
                    setisBigTextLoading={setisBigTextLoading}
                    textInArrayCur={textInArrayCur}
                    setTextInArrayCur={setTextInArrayCur}
                />
                <HomeTopSmallText
                    textArray={homeTopTextes.smallText}
                    textInArrayCur={textInArrayCur}
                    isBigTextLoading={isBigTextLoading}
                />
            </div>
            <Link className='btn'>Free 15min consultation</Link>
        </section>
    );
}
