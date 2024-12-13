import React, { useState } from 'react';

export const TestCard = ({ card, cardIndex }) => {

  const [active, setActive] = useState(null)

  const changeActive = (answer) => {
    setActive(answer)
  }

  return (
    <article className='max-w-[1000px] w-full bg-cardColor p-[20px] rounded-standartRadius'>
      <div className='flex gap-[10px]'>
        <span>{cardIndex + 1}.</span>
        <h3>{card.question}</h3>
      </div>
      <ul className='flex gap-[80px] list-[upper-alpha] pl-[60px] cursor-pointer'>
        {card.answers.map((answer, index) =>
          <li
            key={index}
            onClick={() => changeActive(answer)}
            className='relative'
          >
            <label className='cursor-pointer'>
              <input
                className='absolute left-[-40px] top-[50%] translate-y-[-50%] cursor-pointer'
                type="radio"
                name={`answer№${cardIndex}`}
                value={answer}
              />
              {answer}
            </label>
          </li>
        )}
      </ul>
    </article>
  );
}
