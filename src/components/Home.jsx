import { ArrowRight } from 'phosphor-react';
import { Link } from 'react-scroll';
import LOGO from '../assets/logo.jpg'

export function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Eu sou um desenvolvedor web
          </h2>
          <p className="text-gray-300 py-4 max-w-md">
            Atualmente, eu amo trabalhar em aplicativos web usando tecnologias como
            React, Tailwind, JavaScript e TypeScript!
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer duration-500 hover:scale-105"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-500">
                <ArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={LOGO}
            alt=""
            className="rounded-2xl mx-auto w-2/3 md:w-full shadow-lg shadow-gray-600 duration-500 hover:scale-150"
          />
        </div>
      </div>
    </div>
  )
}