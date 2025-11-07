import { Quote, ArrowRight } from 'lucide-react'

const Transformations = () => {
  const transformations = [
    {
      name: 'Transformação 1',
      result: 'Corrida e Definição Muscular',
      testimonial: 'Consegui melhorar meu condicionamento físico e definir meu corpo. A mudança foi incrível!',
      image: '/images/transformation-1.jpg',
    },
    {
      name: 'Transformação 2',
      result: 'Emagrecimento e Tonificação',
      testimonial: 'Perdi gordura e ganhei massa magra. Me sinto muito mais confiante e saudável!',
      image: '/images/transformation-2.jpg',
    },
    {
      name: 'Transformação 3',
      result: 'Definição e Força',
      testimonial: 'Alcancei o corpo que sempre sonhei. O treino personalizado fez toda a diferença!',
      image: '/images/transformation-3.jpg',
    },
    {
      name: 'Transformação 4',
      result: 'Evolução Progressiva',
      testimonial: 'Cada semana via resultados novos. O acompanhamento constante foi essencial!',
      image: '/images/transformation-4.jpg',
    },
    {
      name: 'Transformação 5',
      result: 'Redução de Gordura',
      testimonial: 'Eliminei gordura localizada e ganhei definição. Resultado surpreendente!',
      image: '/images/transformation-5.jpg',
    },
    {
      name: 'Transformação 6',
      result: 'Ganho de Massa Magra',
      testimonial: 'Construí músculos e perdi gordura ao mesmo tempo. Resultados incríveis!',
      image: '/images/transformation-6.jpg',
    },
    {
      name: 'Transformação 7',
      result: 'Mudança Completa',
      testimonial: 'Transformei não só meu corpo, mas minha autoestima e qualidade de vida!',
      image: '/images/transformation-7.jpg',
    },
  ]

  return (
    <section id="transformacoes" className="py-20 bg-gradient-to-br from-primary via-accent to-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat">
            Antes e Depois - Transformações Reais
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Veja os resultados das minhas alunas e inspire-se para começar sua própria transformação
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {transformations.map((transformation, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Before/After Image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                <img 
                  src={transformation.image} 
                  alt={`${transformation.name} - Antes e Depois`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-textMain mb-2">
                  {transformation.name}
                </h3>
                <p className="text-primary font-bold text-lg mb-4">
                  {transformation.result}
                </p>

                {/* Testimonial */}
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 text-primary/20" size={32} />
                  <p className="text-textSecondary italic pl-6 text-sm leading-relaxed">
                    "{transformation.testimonial}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={() => {
              const element = document.querySelector('#contato')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group bg-white text-primary px-8 py-4 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 font-bold shadow-xl inline-flex items-center gap-3 border-2 border-primary"
          >
            Quero Minha Transformação
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Transformations
