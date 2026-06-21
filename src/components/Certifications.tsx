import { GraduationCap, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const Certifications = () => {
  const certifications = [
    'Licenciatura e Bacharelado em Educação Física',
    'Sinergia em Saúde: Conhecimento e Prática',
    'Avaliação Física para Personal Trainer',
    'Prescrição de Exercícios',
    'Biomecânica Aplicada ao Treinamento Funcional',
    'Fisiologia do Exercício',
  ]

  return (
    <section id="certificacoes" className="relative py-20 bg-gradient-to-br from-[#0B1220] via-[#070A13] to-[#0B1220] overflow-hidden">
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
            Certificações e Formação
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
            Formação sólida e atualização constante para oferecer o melhor serviço
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Certification Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white/5 backdrop-blur-md rounded-2xl shadow-xl p-8 mb-8 border border-white/10 border-t-4 border-t-orange-500 text-white"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl">
                <GraduationCap className="text-orange-500" size={40} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white font-montserrat">
                  Profissional Registrado
                </h3>
                <p className="text-orange-500 font-semibold text-lg">CREF: 015562-G/BA</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed text-sm">
              Profissional de Educação Física devidamente registrado no Conselho Regional de Educação Física, 
              garantindo qualidade, ética e segurança no atendimento.
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/10 hover:border-orange-500/30 text-white"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="text-orange-500" size={24} />
                  </div>
                  <p className="text-white/90 font-medium leading-relaxed text-sm">
                    {cert}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="mt-8 text-center">
            <p className="text-white/60 text-sm">
              🎓 Educação continuada e participação regular em cursos e workshops de atualização profissional
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications
