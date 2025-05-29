import React from 'react'
import { useTranslation } from 'react-i18next';
import { PCard } from '../ui/PCard'

export const Projects = () => {
    const { t } = useTranslation();
  return (
    <section id='projects' className="md:min-h-screen items-center justify-center ">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-amber-500 to-purple-600 bg-clip-text text-transparent text-center">
          {t("projects1.titleP")}
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 rounded-xl '>   
            <PCard />
        </div>
      </div>
    </section>
  )
}
