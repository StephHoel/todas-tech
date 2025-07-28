export function Footer() {
  return (
    <footer className='px-4 py-12 bg-black text-white text-center'>
      <h3 className='text-2xl font-bold mb-4'>Fale conosco</h3>
      <p className='mb-2'>Se você é:</p>
      <ul className='list-disc list-inside mb-4'>
        <li>Uma mulher que ama tecnologia</li>
        <li>Uma criadora de conteúdo que quer expandir seu alcance</li>
        <li>Uma marca que valoriza diversidade e inovação</li>
      </ul>
      <p className='mb-4'>
        Entre em contato e venha fazer parte dessa comunidade tech feita por
        mulheres, para mulheres.
      </p>
      <p className='font-bold text-pink-400'>
        E-MAIL: todastechcontato@gmail.com
      </p>

      <div className='container mx-auto px-4 text-center'>
        <p>
          © {new Date().getFullYear()} Todas Tech — Desenvolvido por StephHoel
        </p>
      </div>
    </footer>
  )
}
