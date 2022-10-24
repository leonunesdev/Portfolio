import { data } from '../data'

export function Portfolio() {
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">

      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-6">Confira um pouco do meu trabalho aqui</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mb-12">
          {data.map(({ id, src, github, site }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center cursor-pointer">
                <a href={github} target="_blank" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Github
                </a>
                <a href={site} target="_blank" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Site
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};