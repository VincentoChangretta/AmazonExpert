import { faCircleDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const HomeConsultation = () => {
    return (
        <section>
            <h2 className='title'>Konsultacje</h2>
            <div>
                <div className="flex items-start gap-[50px]">
                    <div>
                        <h3 className='subtitle withIcon'>
                            <FontAwesomeIcon icon={faCircleDot} className='fontIcon' />
                            Konsultacje Sprzedażowe na Rynki USA i Europy
                        </h3>
                        <p>
                            Oferujemy profesjonalne konsultacje dotyczące sprzedaży na Amazonie zarówno na rynku amerykańskim, jak i europejskim. Skorzystaj z naszej wiedzy i doświadczenia, aby efektywnie rozwijać swoją działalność w tych regionach.
                        </p>
                    </div>
                    <div className='max-w-[50%]'>
                        <h3 className='subtitle withIcon'>
                            <FontAwesomeIcon icon={faCircleDot} className='fontIcon' />
                            Sugestia dotycząca zakupu pakietu lekcji:
                        </h3>
                        <p>
                            Chociaż oferujemy pakiety spotkań indywidualnych, na początek rekomendujemy zakup jednego spotkania, aby sprawdzić, czy nasze podejście Ci odpowiada. Najefektywniejsza współpraca ma miejsce, gdy podczas spotkań aktywnie zadajesz pytania. Wolimy unikać sytuacji, w której np. spotkania są kupowane w ramach prezentu przez osobę trzecią, gdyż nasze lekcje opierają się na indywidualnym zaangażowaniu i są dostosowane do realnych potrzeb uczestnika.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
