import React from 'react';
import { useTranslation } from 'react-i18next';
import { Item } from '../ui/Item';

export const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id='skills' className='md:min-h-screen flex items-center justify-center md:pt-20 pt-10'>
      <div className="max-w-3xl font-bold mb-8">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-amber-500 to-purple-600 bg-clip-text text-transparent text-center">
          {t("skills1.title")}
        </h2>
        <div className='border-2 border-white/10 px-3 py-3 w-auto rounded-xl g-stone-950'>
          <Item />
        </div>
      </div>
    </section>
  );
};
