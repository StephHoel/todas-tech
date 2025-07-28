import { Card, CardContent } from '../ui/card'

export function Oportunity() {
  return (
    <section className='px-4 py-12'>
      <h3 className='text-2xl font-bold text-center mb-8'>
        O que oferecemos...
      </h3>
      <div className='grid md:grid-cols-4 gap-4'>
        <Card className='bg-white text-black'>
          <CardContent className='p-4 text-center'>Workshops Tech</CardContent>
        </Card>
        <Card className='bg-white text-black'>
          <CardContent className='p-4 text-center'>Networking</CardContent>
        </Card>
        <Card className='bg-white text-black'>
          <CardContent className='p-4 text-center'>
            Sorteios Exclusivos
          </CardContent>
        </Card>
        <Card className='bg-white text-black'>
          <CardContent className='p-4 text-center'>
            Suporte à Comunidade
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
