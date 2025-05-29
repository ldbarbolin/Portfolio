import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '../ui/Card';

export const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id='experience' className='md:min-h-screen flex items-center justify-center md:pt-8'>
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-amber-500 to-purple-600 bg-clip-text text-transparent text-center">
          {t("experience1.titleE")}
        </h2>
        <div className="flex flex-col px-3 py-6 rounded-xl">
          <Card />
        </div>
      </div>
    </section>
  );
};
