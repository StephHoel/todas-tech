import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className='bg-gray-900 text-white shadow-md'>
      <div className='container mx-auto px-4 py-2 text-center'>
        <h1 className='text-2xl font-bold tracking-wide'>TODAS TECH</h1>
      </div>
      <nav className='space-x-4'>
        <Link to={''} className='underline uppercase bg-gray-900/40 py-1 px-3 rounded-full text-[0.6rem] font-bold'>
        Devs
        </Link>
        <a href='a' className='hover:underline'>
          Devs
        </a>
        <a href='b' className='hover:underline'>
          Artistas
        </a>
        <a href='c' className='hover:underline'>
          Nossas Ações
        </a>
        <a href='d' className='hover:underline'>
          Colaboradoras
        </a>
      </nav>
    </header>
  )
}
