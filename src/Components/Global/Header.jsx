import React from 'react';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';
import { headerNavData } from '../../../public/AppData';

export const Header = () => {
    return (
        <header className='mb-[100px]'>
            <div className="inner py-[35px]">
                <Logo />
                <ul className='flex gap-[40px]'>
                    {headerNavData.map(item => (
                        <li key={item.id}>
                            <Link to={item.pathname}>{item.text}</Link>
                        </li>
                    ))}
                </ul>
                <Link className='btn'>Free Consultation</Link>
            </div>
        </header>
    );
}
