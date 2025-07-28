import { Card, CardContent } from '../ui/card'

export function Founders() {
  return (
    <section className='px-4 py-12 bg-[#1C1B21]'>
      <h3 className='text-2xl font-bold text-center mb-8'>Fundadoras</h3>
      <div className='grid md:grid-cols-4 gap-4'>
        {/* Cards de fundadoras aqui - exemplo */}
        <Card className='bg-purple-700'>
          <CardContent className='p-4 text-sm'>
            <p className='font-bold'>Samara Ramos | @nekomantetv</p>
            <p>
              "Minha missão é conectar mulheres a tecnologia e empoderar cada
              uma delas para que possam montar seus PCs com confiança."
            </p>
          </CardContent>
        </Card>
        {/* ... Demais fundadoras */}
      </div>
    </section>
  )
}
