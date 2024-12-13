import React from 'react';
import { TestData } from '../../../../public/AppData';
import { TestCard } from './TestCard';

export const TestTop = () => {


  const submitTestForm = (e) => {
    e.preventDefault()
    const results = new FormData(e.target)
    console.log([...results])
    
  }

  return (
    <section>
      <form className='flex flex-wrap gap-[10px]' onSubmit={e => submitTestForm(e)}>
        {TestData.map((card, index) =>
          <TestCard key={card.id} card={card} cardIndex={index} />
        )}
        <button className='btn'>Wynik</button>
      </form>
    </section>
  );
}
