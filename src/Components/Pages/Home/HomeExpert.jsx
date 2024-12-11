import React from 'react';
import { expert } from '../../../../public/ImgData';
import { Link } from 'react-router-dom';
import { PATHNAMES } from '../../../../public/Constants';

export const HomeExpert = () => {
    return (
        <section>
            <div className="container">
                <div className="inner gap-[30px] mb-[20px]">
                    <div className='max-w-[490px]'>
                        <img className='img' src={expert} alt="expert" />
                    </div>
                    <div className='text-box max-w-[650px]'>
                        <h2 className='title max-w-[800px]'>Let’s Know About Your Expert Consultant</h2>
                        <p>Grigor Sargsyan is a highly experienced consultant specializing in Amazon, Allegro, and Walmart platforms. With a deep understanding of e-commerce strategies, he helps businesses optimize their presence on these leading marketplaces.</p>
                        <p>Grigor excels in guiding clients through product listings, sales optimization, and platform-specific marketing techniques. His expertise includes inventory management, pricing strategies, and boosting visibility through SEO and advertising tools.</p>
                    </div>
                </div>
                <div className='text-center'>
                    <Link to={PATHNAMES.test} className='btn mx-auto'>Test</Link>
                </div>
            </div>
        </section>
    );
}
