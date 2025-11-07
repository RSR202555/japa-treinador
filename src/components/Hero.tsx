import { ArrowRight, Zap, Trophy, Users, ShieldCheck } from 'lucide-react'

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
      {/* Background Photos (under content) */}
      <div
        className="absolute inset-0 scale-[1.08] lg:scale-[1.18] will-change-transform"
        style={{
          backgroundImage: `url('/images/musa-1.jpg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
            <span className="text-white font-semibold text-sm md:text-base">
              JAPA TREINADOR
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 leading-tight font-montserrat">
            MÉTODO MUSA 2.0
          </h1>
          <div className="w-28 h-1.5 bg-cta mx-auto mb-6 rounded-full"></div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Construa força, saúde e autoestima com treinos personalizados para o seu nível.
          </p>

          {/* Offer Card */}
          <div className="bg-orange-500 text-white rounded-2xl shadow-2xl p-8 md:p-10 mb-10 max-w-2xl mx-auto ring-2 ring-white/10">
            <div className="flex items-center gap-3 justify-center">
              <Zap className="text-white" size={24} />
              <p className="text-left font-semibold text-base md:text-lg">
                Avaliação física <strong>grátis</strong> na adesão ao plano mensal!
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleCTAClick}
            className="group bg-orange-500 hover:bg-orange-600 text-white px-10 md:px-12 py-5 md:py-6 rounded-xl transition-all duration-300 font-extrabold text-lg md:text-xl shadow-2xl hover:scale-105 inline-flex items-center gap-3 ring-2 ring-white/0 hover:ring-white/30 hover:shadow-white/40"
          >
            COMECE SUA TRANSFORMAÇÃO
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
          </button>

          {/* Social Proof */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 md:p-7 shadow-lg border border-bgSecondary text-textMain text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Trophy size={24} />
                <span className="text-3xl font-bold">10+</span>
              </div>
              <div className="text-textSecondary text-sm">Anos de Experiência</div>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-7 shadow-lg border border-bgSecondary text-textMain text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Users size={24} />
                <span className="text-3xl font-bold">500+</span>
              </div>
              <div className="text-textSecondary text-sm">Alunos Transformados</div>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-7 shadow-lg border border-bgSecondary text-textMain text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <ShieldCheck size={24} />
                <span className="text-3xl font-bold">100%</span>
              </div>
              <div className="text-textSecondary text-sm">Resultados Garantidos</div>
            </div>
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
