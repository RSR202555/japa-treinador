import { Award, Target, Users } from 'lucide-react'
import { motion } from 'framer-motion'

 const About = () => {
  return (
    <section id="sobre" className="relative py-20 bg-gradient-to-br from-[#070A13] via-[#0B1220] to-[#070A13] overflow-hidden">
      {/* Decorative Blur Blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-orange-500/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl border border-white/10"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full bg-gradient-to-br from-orange-500 to-primary p-1 overflow-hidden shadow-2xl group"
              >
                <img 
                  src="/images/foto.jpeg" 
                  alt="Fabiano Vasconcelos Bispo (Japa) - Personal Trainer" 
                  className="w-full h-full rounded-full group-hover:scale-105 transition-transform duration-500 ease-out"
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
              </motion.div>
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 right-0 md:-right-6 bg-orange-500 text-white px-6 py-4 rounded-xl shadow-2xl border border-orange-400/20"
              >
                <div className="flex items-center gap-2">
                  <Award size={24} className="text-white animate-pulse" />
                  <div>
                    <div className="font-bold text-base md:text-lg">Melhores do Ano</div>
                    <div className="text-xs opacity-90">Prêmio Reconhecido</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Content Column */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat"
              >
                Sobre Mim
              </motion.h2>
              
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-1 bg-gradient-to-r from-orange-500 to-transparent mb-6 rounded-full"
              />

              <h3 className="text-2xl font-semibold text-orange-500 mb-2">
                Fabiano Vasconcelos Bispo (Japa)
              </h3>
              <p className="text-white/60 mb-4 flex items-center gap-2 text-sm">
                <span className="font-semibold text-white/80">CREF:</span> 015562-G/BA
              </p>

              <p className="text-white/85 mb-6 leading-relaxed">
                Com mais de 10 anos de experiência no mercado fitness, sou apaixonado por transformar vidas através do treinamento personalizado. Meu trabalho foi reconhecido com o prêmio "Melhores do Ano", reflexo do compromisso com a excelência e resultados reais dos meus alunos.
              </p>

              <div className="space-y-4 mb-6">
                <h4 className="font-semibold text-white text-lg flex items-center gap-2">
                  <Target className="text-orange-500" size={20} />
                  Especializações:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 ml-7">
                  {[
                    "Hipertrofia & Ganho de Massa",
                    "Emagrecimento & Definição",
                    "Treinamento Feminino Avançado",
                    "Correção Postural & Reabilitação"
                  ].map((spec, sIdx) => (
                    <motion.li
                      key={sIdx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + sIdx * 0.1 }}
                      className="text-white/80 flex items-start gap-2 text-sm font-medium"
                    >
                      <span className="text-orange-500 mt-1">•</span>
                      <span>{spec}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center gap-4 p-4 bg-orange-500/10 rounded-xl border-l-4 border-orange-500"
              >
                <Users className="text-orange-500 flex-shrink-0" size={32} />
                <p className="text-white font-semibold text-sm md:text-base">
                  Resultados comprovados com centenas de alunos satisfeitos
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
