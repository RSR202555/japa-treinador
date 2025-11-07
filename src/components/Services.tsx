import { Smartphone, BarChart3, Target, Video } from 'lucide-react'

const Services = () => {
  // PLACEHOLDER: Personalize os serviços conforme sua oferta
  const services = [
    {
      icon: Smartphone,
      title: 'Consultoria Online',
      description: 'Acompanhamento personalizado totalmente online, com treinos adaptados à sua rotina e objetivos.',
    },
    {
      icon: BarChart3,
      title: 'Avaliação Física Completa',
      description: 'Análise detalhada do seu corpo, composição corporal e definição de metas realistas e alcançáveis.',
    },
    {
      icon: Target,
      title: 'Planejamento Nutricional',
      description: 'Orientação nutricional personalizada para potencializar seus resultados e melhorar sua saúde.',
    },
    {
      icon: Video,
      title: 'Vídeos Demonstrativos',
      description: 'Acesso a biblioteca completa de vídeos com execução correta de cada exercício do seu treino.',
    },
  ]

  return (
    <section id="servicos" className="py-20 bg-gradient-to-br from-primary via-accent to-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat">
            Serviços
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Soluções completas para sua transformação física
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary"
              >
                <div className="mb-6 inline-block p-4 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="text-primary group-hover:text-white transition-colors" size={32} />
                </div>
                <h3 className="text-xl font-bold text-textMain mb-3 font-montserrat">
                  {service.title}
                </h3>
                <p className="text-textSecondary leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
