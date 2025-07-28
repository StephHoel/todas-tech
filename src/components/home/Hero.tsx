import { Button } from '../ui/button'

export function Hero() {
  return (
    <section className='text-center px-4 py-12'>
      <div className='mb-6'>
        <img
          src='/logo-circular.png'
          alt='Logo circular'
          className='mx-auto w-32'
        />
      </div>
      <h2 className='text-4xl font-bold mb-2'>TODAS TECH</h2>
      <p className='text-lg italic mb-6'>
        Conectando mulheres, transformando o mundo tech
      </p>
      <Button className='bg-pink-500 text-white rounded-full px-6 py-2'>
        Quem somos...
      </Button>
    </section>
  )
}
