import Image from 'next/image';
import Lua from '../_resources/lua.png';

export default function Header() {
  return (
    <section className="hero bg-gradient-to-br from-slate-50 to-gray-100 pt-32">
      <div className="flex flex-col">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image src={Lua} alt="" className="w-72 h-72 rounded-lg shadow-lg" />
          <div className="lg:w-6/12 flex flex-col gap-3 px-4 lg:px-0">
            <h3 className="text-xl font-light">Healer, scholar, teacher.</h3>
            <h1 className="text-3xl lg:text-5xl font-bold leading-relaxed">
              Hello, my name is <br className="hidden lg:block" />
              <span className="bg-gradient-to-r from-gray-500 to-gray-600 bg-clip-text text-transparent font-mono">
                Lua
              </span>
            </h1>
            <p className="text-md text-pretty lg:w-8/12">
              Welcome to my vault of captivating experiences. Explore my
              work and let&apos;s create something benevolent together.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 py-12">
          <h1 className='font-bold'>Current Affiliation</h1>
          <ul className="flex flex-wrap flex-row items-center justify-center gap-2">
            <li>Universal Wits</li>
            <li>&bull;</li>
            <li>House of Pioneer</li>
            <li>&bull;</li>
            <li>Santuarnian Scholar League</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
