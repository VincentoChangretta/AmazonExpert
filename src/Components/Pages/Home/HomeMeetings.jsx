import React from 'react';
import { pakietyData } from '../../../../public/AppData';
import { Card } from '../../Global/Card';

export const HomeMeetings = () => {
  return (
    <section>
      <div className='mb-[20px]'>
        <h2 className='title'>Pakiety Spotkań</h2>
        <h3 className='subtitle max-w-[700px]'>Indywidualne Lekcje Sprzedaży na Amazonie</h3>
      </div>
      <div className='flex items-center gap-[20px]'>
        <p>Prowadzimy indywidualne lekcje przez Zoom, ucząc sprzedaży na Amazonie od podstaw aż po zaawansowane techniki. Jeśli masz już pewną wiedzę w tej dziedzinie, możesz wypełnić test, aby sprawdzić, ile spotkań potrzebujesz do pełnego opanowania materiału.</p>
        {pakietyData.map(pakiet => (
          <Card key={pakiet.id} data={pakiet} />
        ))}
      </div>
    </section>
  );
}
