import React from 'react';
import { useTranslation } from 'react-i18next';
import { listExp } from '../hooks/listExp';

const listadoExperiencia = listExp();

const Ecard = ({ id, title, position, duration, description }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col border-2 border-white/10 px-3 py-3 w-auto rounded-xl mb-6 bg-stone-950 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
      <h2 name={id} className="text-2xl font-bold mb-1 text-amber-500 bg-clip-text text-left">{t(title)}</h2>
      <p className="text-gray-300 text-lg mb-4">{t(position)}</p>
      <p className="text-gray-300 text-lg mb-4">{t(duration)}</p>
      <p className="text-gray-300 text-lg mb-4">{t(description)}</p>
    </div>
  );
};

export const Card = () => {
  return (
    <>
      {listadoExperiencia.map(item => (
        <Ecard
          key={item.id}
          title={item.title}
          position={item.position}
          duration={item.duration}
          description={item.description}
        />
      ))}
    </>
  );
};
