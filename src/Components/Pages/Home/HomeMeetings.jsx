import React from 'react';
import { pakietyData } from '../../../../public/AppData';
import { Card } from '../../Global/Card';

export const HomeMeetings = () => {
  return (
    <section className='text-center'>
      <div className='mb-[20px]'>
        <h2 className='title'>Pakiety Spotkań</h2>
        <h3 className='subtitle max-w-[700px] mx-auto'>Indywidualne Lekcje Sprzedaży na Amazonie</h3>
      </div>
      <div className='flex flex-col items-center gap-[20px]'>
        <p className='max-w-[950px]'>Oferujemy indywidualne lekcje sprzedaży na Amazonie prowadzone przez Zoom. Nauczysz się wszystkiego, od podstawowych zasad działania platformy po zaawansowane techniki maksymalizacji sprzedaży. Jeśli posiadasz już doświadczenie, możesz wypełnić test, aby określić, ile godzin szkolenia będzie potrzebne, by w pełni opanować materiał. Każda lekcja jest dopasowana do Twoich potrzeb, co pozwala na skuteczne osiągnięcie Twoich celów biznesowych.</p>
        <div className='flex gap-[30px]'>
          {pakietyData.map(pakiet => (
            <Card key={pakiet.id} data={pakiet} />
          ))}
        </div>
      </div>
    </section>
  );
}
