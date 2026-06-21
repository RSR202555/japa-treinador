import { ArrowRight, Zap, Trophy, Users, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  const handleCTAClick = () => {
    const element = document.querySelector('#contato')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Photo with slow-zoom animation */}
      <div
        className="absolute inset-0 will-change-transform animate-kenburns"
        style={{
          backgroundImage: `url('/images/musa-1.jpg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
        }}
      />
      
      {/* Dark Gradient Overlay for premium feel and perfect text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg"
          >
            <span className="text-white font-bold text-xs md:text-sm tracking-widest uppercase">
              ⚡ JAPA TREINADOR
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 leading-tight font-montserrat tracking-tight"
          >
            MÉTODO MUSA 2.0
          </motion.h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 112 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-1.5 bg-orange-500 mx-auto mb-6 rounded-full shadow-[0_0_12px_rgba(249,115,22,0.6)]"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed text-balance"
          >
            Construa força, saúde e autoestima com treinos personalizados para o seu nível.
          </motion.p>

          {/* Glassmorphic Offer Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-black/40 backdrop-blur-md border border-orange-500/30 text-white rounded-2xl p-6 md:p-8 mb-10 max-w-2xl mx-auto shadow-2xl hover:border-orange-500/50 transition-colors duration-300"
          >
            <div className="flex items-center gap-4 justify-center">
              <div className="p-3 bg-orange-500/20 rounded-xl border border-orange-500/30 animate-pulse">
                <Zap className="text-orange-500" size={24} />
              </div>
              <p className="text-left font-medium text-base md:text-lg leading-relaxed text-white/95">
                Avaliação física <strong className="text-orange-500 font-bold">grátis</strong> na adesão ao plano mensal!
              </p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCTAClick}
            className="group bg-orange-500 hover:bg-orange-600 text-white px-10 md:px-12 py-5 md:py-6 rounded-xl transition-all duration-300 font-extrabold text-lg md:text-xl shadow-2xl hover:shadow-orange-500/20 inline-flex items-center gap-3 animate-pulse-glow"
          >
            COMECE SUA TRANSFORMAÇÃO
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
          </motion.button>

          {/* Social Proof */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Trophy, value: "10+", label: "Anos de Experiência" },
              { icon: Users, value: "500+", label: "Alunos Transformados" },
              { icon: ShieldCheck, value: "100%", label: "Resultados Garantidos" }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.15 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-7 text-white text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-xl"
                >
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <Icon className="text-orange-500" size={24} />
                    <span className="text-3xl font-extrabold tracking-tight">{stat.value}</span>
                  </div>
                  <div className="text-white/70 text-sm font-medium">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
