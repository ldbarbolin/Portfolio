import React from 'react'
import { listIcon } from '../hooks/listIcon'  // Importa la función listExp desde el archivo listExp.js 

const listItem = listIcon() // Llama a la función listExp y asigna el resultado a la variable listBitem
// Esta variable contendrá el array de objetos con la información de los íconos y títulos

const ItemL = ({ id, title, icon }) => {
  return (  
      <a href="#" name={id} className='flex flex-col items-center justify-center text-gray-300 text-lg transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>
        <i className={icon}></i>
        {title}
      </a>
  )
}

const Section = ({ title, items }) => {
  return (
    <div className='flex flex-col px-3 py-6 w-auto rounded-xl bg-stone-950'>
      <h2 className='text-2xl font-bold mb-2 text-amber-500 bg-clip-text text-left'>{title}</h2>
      <div className='flex gap-5 py-2 items-center justify-center mb-6'>
        {items.map(item => <ItemL key={item.id} title={item.title} icon={item.icon} />)}
      </div>
    </div>
  )
}


export const Item = () => {
  const backendItems = listItem.filter(item => item.type === "Backend")
  const frontendItems = listItem.filter(item => item.type === "Frontend")
  const tecnologiaItems = listItem.filter(item => item.type === "Tecnologia")

  return (
    <>
      <Section title="Backend" items={backendItems} />
      <Section title="Frontend" items={frontendItems} />
      <Section title="Tecnología" items={tecnologiaItems} />
    </>
  )
}