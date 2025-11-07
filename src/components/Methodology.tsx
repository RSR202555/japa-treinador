import { Target, TrendingUp, Users, Award } from 'lucide-react'

const Methodology = () => {
  // PLACEHOLDER: Personalize as etapas do seu método
  const steps = [
    {
      icon: Target,
      number: '01',
      title: 'Avaliação Inicial',
      description: 'Análise completa do seu perfil, objetivos e limitações para criar um plano personalizado.',
    },
    {
      icon: TrendingUp,
      number: '02',
      title: 'Planejamento',
      description: 'Desenvolvimento de treino e orientação nutricional adaptados ao seu estilo de vida.',
    },
    {
      icon: Users,
      number: '03',
      title: 'Acompanhamento',
      description: 'Suporte contínuo com ajustes semanais para garantir evolução constante.',
    },
    {
      icon: Award,
      number: '04',
      title: 'Resultados',
      description: 'Transformação real com metas alcançadas e hábitos saudáveis consolidados.',
    },
  ]

  return (
    <section id="metodologia" className="py-20 bg-gradient-to-br from-primary via-accent to-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat">
            MÉTODO MUSA 2.0
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-white/90 text-lg max-w-3xl mx-auto leading-relaxed">
            {/* PLACEHOLDER: Adicione a descrição do seu método aqui */}
            Uma metodologia comprovada que combina treino personalizado, acompanhamento próximo e 
            ajustes constantes para garantir que você alcance seus objetivos de forma sustentável e eficaz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="relative bg-gradient-to-br from-bgMain to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-bgSecondary hover:border-primary group"
              >
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-6 inline-block p-4 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="text-primary group-hover:text-white transition-colors" size={32} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-textMain mb-3 font-montserrat">
                  {step.title}
                </h3>
                <p className="text-textSecondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border-l-4 border-primary">
          <p className="text-textMain text-center text-lg leading-relaxed">
            <strong className="text-primary">Método testado e aprovado</strong> por centenas de alunos 
            que transformaram não apenas seus corpos, mas toda sua relação com saúde e bem-estar.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Methodology
