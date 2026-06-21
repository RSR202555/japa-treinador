import { Target, TrendingUp, Users, Award } from 'lucide-react'
import { motion } from 'framer-motion'

const Methodology = () => {
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
    <section id="metodologia" className="relative py-20 bg-gradient-to-br from-[#070A13] via-[#0B1220] to-[#070A13] overflow-hidden">
      {/* Decorative Blur Blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-orange-500/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat"
          >
            MÉTODO MUSA 2.0
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-orange-500 to-transparent mx-auto mb-6 rounded-full"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Uma metodologia comprovada que combina treino personalizado, acompanhamento próximo e 
            ajustes constantes para garantir que você alcance seus objetivos de forma sustentável e eficaz.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10 hover:border-orange-500/30 text-white group"
              >
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-6 inline-block p-4 bg-orange-500/10 border border-orange-500/20 text-orange-500 rounded-xl group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <Icon size={32} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 font-montserrat">
                  {step.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 max-w-4xl mx-auto bg-orange-500/10 rounded-2xl p-8 border-l-4 border-orange-500"
        >
          <p className="text-white text-center text-lg leading-relaxed">
            <strong className="text-orange-500">Método testado e aprovado</strong> por centenas de alunos 
            que transformaram não apenas seus corpos, mas toda sua relação com saúde e bem-estar.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Methodology
