import { ArrowRight, Sparkles } from 'lucide-react'

const CTAFinal = () => {
  const handleClick = () => {
    // PLACEHOLDER: Adicione seu número de WhatsApp aqui
    const whatsappNumber = '5575991155655'
    const message = encodeURIComponent('Olá! Quero começar minha transformação com a Japa Treinador!')
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-accent to-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 animate-pulse">
            <Sparkles className="text-white" size={40} />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-montserrat leading-tight">
            Está pronto para alcançar seus objetivos?
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
            Agende sua sessão inicial e comece sua transformação hoje mesmo!
          </p>

          {/* CTA Button */}
          <button
            onClick={handleClick}
            className="group bg-white text-primary px-10 py-5 rounded-xl hover:bg-white/90 transition-all duration-300 font-bold text-lg md:text-xl shadow-2xl hover:shadow-white/50 hover:scale-105 inline-flex items-center gap-3"
          >
            QUERO COMEÇAR AGORA
            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
          </button>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/90">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Resultados Comprovados</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Acompanhamento Personalizado</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Suporte Total</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTAFinal
