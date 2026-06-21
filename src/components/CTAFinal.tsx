import { ArrowRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const CTAFinal = () => {
  const handleClick = () => {
    const whatsappNumber = '5575991155655'
    const message = encodeURIComponent('Olá! Quero começar minha transformação com a Japa Treinador!')
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  return (
    <section className="relative py-20 bg-gradient-to-br from-[#0B1220] via-[#070A13] to-[#0B1220] overflow-hidden">
      {/* Decorative Blur Blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-orange-500/5 blur-[130px] rounded-full pointer-events-none" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-orange-500/20 border border-orange-500/30 rounded-full mb-6 animate-pulse"
          >
            <Sparkles className="text-orange-500" size={40} />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-white mb-6 font-montserrat leading-tight tracking-tight"
          >
            Está pronto para alcançar seus objetivos?
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            Agende sua sessão inicial e comece sua transformação hoje mesmo!
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleClick}
            className="group bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-xl transition-all duration-300 font-extrabold text-lg md:text-xl shadow-2xl hover:shadow-orange-500/20 inline-flex items-center gap-3 border-none animate-pulse-glow"
          >
            QUERO COMEÇAR AGORA
            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
          </motion.button>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/85">
            <div className="flex items-center gap-2 font-medium">
              <span className="text-2xl text-orange-500">✓</span>
              <span>Resultados Comprovados</span>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <span className="text-2xl text-orange-500">✓</span>
              <span>Acompanhamento Personalizado</span>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <span className="text-2xl text-orange-500">✓</span>
              <span>Suporte Total</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTAFinal
