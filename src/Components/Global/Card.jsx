import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Card.module.css'

export const Card = ({ data }) => {
  return (
    <article className={classes.card}>
      <h2 className='text-2xl font-bold'>{data.name}</h2>
      <p className='text-base'>
        {data.text}
      </p>
      <p className='py-[5px] px-[20px] w-fit bg-white rounded-[20px] text-standartColor font-bold mb-[20px] tracking-wide'>
        {data.price}/{data.time}
      </p>
      <Link className='btn inverted'>Zamówić</Link>
    </article>
  );
}
