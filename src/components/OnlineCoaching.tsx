import { Laptop, MessageCircle, Calendar, TrendingUp, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const OnlineCoaching = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#0B1220] via-[#070A13] to-[#0B1220] overflow-hidden">
      {/* Decorative Blur Blobs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-500/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Content Column */}
          <div className="order-2 md:order-1">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat"
            >
              Consultoria Online <span className="text-orange-500">Personalizada</span>
            </motion.h2>
            
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-orange-500 to-transparent mb-6 rounded-full"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/80 mb-8 leading-relaxed text-lg"
            >
              Acompanhamento completo e personalizado, onde quer que você esteja. 
              Receba seu treino, orientações nutricionais e suporte direto comigo através de plataformas digitais.
            </motion.p>

            <div className="space-y-4">
              {[
                { icon: Laptop, title: "Treinos Personalizados", desc: "Planilhas adaptadas ao seu nível e objetivos, atualizadas regularmente" },
                { icon: MessageCircle, title: "Suporte Direto", desc: "Tire suas dúvidas e receba feedback sobre execução dos exercícios" },
                { icon: Calendar, title: "Acompanhamento Semanal", desc: "Check-ins regulares para ajustar estratégias e garantir progresso" },
                { icon: TrendingUp, title: "Análise de Evolução", desc: "Monitoramento de resultados com ajustes baseados em dados reais" }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-lg hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300 hover:translate-x-2 group"
                  >
                    <div className="p-3 bg-orange-500/10 border border-orange-500/20 text-orange-500 rounded-lg flex-shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1 group-hover:text-orange-500 transition-colors duration-300">{item.title}</h3>
                      <p className="text-white/70 text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Image Column */}
          <div className="order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group"
            >
              <div className="overflow-hidden relative h-full w-full">
                <img 
                  src="/images/foto.jpeg" 
                  alt="Consultoria Online - Japa Treinador" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#070A13] via-transparent to-transparent opacity-80" />
              
              {/* Floating Glassmorphic Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute bottom-6 left-6 right-6 p-4 bg-black/65 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl flex items-center gap-3"
              >
                <div className="w-3.5 h-3.5 bg-green-500 rounded-full animate-ping absolute top-4 right-4" />
                <div className="w-3.5 h-3.5 bg-green-500 rounded-full absolute top-4 right-4" />
                <div className="p-2 bg-orange-500/20 rounded-lg border border-orange-500/30 text-orange-500">
                  <Zap size={20} />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">Acompanhamento Premium 1-on-1</div>
                  <div className="text-white/75 text-xs">Vagas limitadas para este mês</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OnlineCoaching
