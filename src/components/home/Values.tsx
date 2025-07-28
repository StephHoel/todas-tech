import { Card, CardContent } from '../ui/card'

export function Values() {
  return (
    <section className='grid md:grid-cols-2 gap-4 px-4 max-w-5xl mx-auto py-8'>
      <Card className='bg-black text-white'>
        <CardContent className='p-6'>
          <h3 className='text-xl font-bold mb-2'>
            Por que fazer parte da TODAS TECH?
          </h3>
          <ul className='list-disc pl-5'>
            <li>
              Comunidade Segura: Um espaço livre de julgamentos e assédio.
            </li>
            <li>
              Conhecimento para Todas: Troca de experiências e conteúdo
              acessível.
            </li>
            <li>
              Sorteios e Ações Mensais: Participação engajada, sorteios
              exclusivos e muito mais.
            </li>
          </ul>
        </CardContent>
      </Card>
      <Card className='bg-black text-white'>
        <CardContent className='p-6'>
          <h3 className='text-xl font-bold mb-2'>Nossa missão</h3>
          <p>
            Criar um ecossistema de apoio, incentivo e crescimento para mulheres
            no mundo Tech, promovendo acessibilidade ao conhecimento, conexões
            poderosas entre mulheres e o desenvolvimento dos nossos valores.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}
