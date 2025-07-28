export function Brands() {
  return (
    <section className='px-4 py-12'>
      <h3 className='text-2xl font-bold text-center mb-6'>Marcas Parceiras</h3>
      <div className='flex flex-wrap justify-center items-center gap-6'>
        {/* Exemplo de logo */}
        <img src='/logos/signalrgb.png' alt='SignalRGB' className='h-10' />
        {/* Demais logos aqui */}
      </div>
    </section>
  )
}
