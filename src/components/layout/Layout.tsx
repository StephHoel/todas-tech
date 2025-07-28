import { Outlet } from 'react-router-dom'
import { Header } from './Header'

export function Layout() {
  return (
    <div className='bg-gradient-to-b from-[#B23BF3] via-[#AA36ED] to-[#1C1B21] text-white min-h-screen'>
      <Header />

      <main className='grow px-4 py-6 mx-auto lg:max-w-3/4 2xl:max-w-2/4'>
        <Outlet />
      </main>

      {/* <Footer /> */}
    </div>
  )
}
