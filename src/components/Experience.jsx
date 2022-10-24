import React from '../assets/react.png'
import JavaScript from '../assets/javascript.png'
import Tailwind from '../assets/tailwind.png'
import TypeScript from '../assets/typescript.jpg'
import Graphql from '../assets/graphql.png'
import Github from '../assets/github.png'

export function Experience() {
  const techs = [
    {
      id: 1,
      src: React,
      title: 'React',
      style: 'shadow-blue-600'
    },
    {
      id: 2,
      src: JavaScript,
      title: 'JavaScript',
      style: 'shadow-yellow-500'
    },
    {
      id: 3,
      src: Tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-400'
    },
    {
      id: 4,
      src: TypeScript,
      title: 'TypeScript',
      style: 'shadow-sky-500'
    },
    {
      id: 5,
      src: Graphql,
      title: 'GraphQL',
      style: 'shadow-pink-400'
    },
    {
      id: 6,
      src: Github,
      title: 'Github',
      style: 'shadow-gray-400'
    },
  ]
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">Estas são as tecnologias que tenho experiencia</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

          {
            techs.map(({ id, src, title, style }) => (
              <div key={id}
                className={`shadow-md hover:scale-105 duration-500 rounded-lg ${style}`}>
                <img src={src} alt="" className="w-20 mx-auto" />
                <p>{title}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}