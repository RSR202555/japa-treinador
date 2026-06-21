import { Smartphone, BarChart3, Target, Video } from 'lucide-react'
import { motion } from 'framer-motion'

const Services = () => {
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
    <section id="servicos" className="relative py-20 bg-gradient-to-br from-[#070A13] via-[#0B1220] to-[#070A13] overflow-hidden">
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
            Serviços
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
            className="text-white/80 text-lg max-w-2xl mx-auto"
          >
            Soluções completas para sua transformação física
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/10 hover:border-orange-500/30 text-white"
              >
                <div className="mb-6 inline-block p-4 bg-orange-500/10 border border-orange-500/20 text-orange-500 rounded-xl group-hover:bg-orange-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-montserrat">
                  {service.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
