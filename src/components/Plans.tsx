import { Check, Star } from 'lucide-react'
import { motion } from 'framer-motion'

const Plans = () => {
  const plans = [
    {
      name: 'Mensal',
      duration: '1 mês',
      price: 'R$ 299,90',
      priceDetail: '/mês',
      featured: false,
      benefits: [
        'Treino personalizado',
        'Acompanhamento semanal',
        'Ajustes constantes',
        'Suporte via WhatsApp',
        'Material exclusivo',
        'Avaliação física grátis',
      ],
    },
    {
      name: 'Trimestral',
      duration: '3 meses',
      price: 'R$ 600,00',
      priceDetail: 'R$ 200/mês',
      featured: true,
      badge: 'MAIS POPULAR',
      benefits: [
        'Treino personalizado',
        'Acompanhamento semanal',
        'Ajustes constantes',
        'Suporte via WhatsApp',
        'Material exclusivo',
        'Avaliação física grátis',
        'Economia de R$ 299,70',
      ],
    },
    {
      name: 'Semestral',
      duration: '6 meses',
      price: 'R$ 1.200,00',
      priceDetail: 'R$ 200/mês',
      featured: false,
      benefits: [
        'Treino personalizado',
        'Acompanhamento semanal',
        'Ajustes constantes',
        'Suporte via WhatsApp',
        'Material exclusivo',
        'Avaliação física grátis',
        'Economia de R$ 599,40',
        'Melhor custo-benefício',
      ],
    },
  ]

  const handlePlanClick = (planName: string) => {
    const whatsappNumber = '5575991155655'
    const message = encodeURIComponent(`Olá! Tenho interesse no plano ${planName} da Japa Treinador.`)
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  return (
    <section id="planos" className="relative py-20 bg-gradient-to-br from-[#0B1220] via-[#070A13] to-[#0B1220] overflow-hidden">
      {/* Decorative Blur Blobs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-500/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat"
          >
            Planos de Consultoria
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
            Escolha o plano ideal para sua jornada de transformação
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative rounded-2xl shadow-xl overflow-hidden backdrop-blur-md transition-all duration-300 hover:-translate-y-2 text-white ${
                plan.featured 
                  ? 'border-2 border-orange-500 bg-orange-500/5 shadow-[0_0_40px_rgba(249,115,22,0.2)] py-10 scale-105 md:scale-108 z-10' 
                  : 'border border-white/10 bg-white/5 py-8'
              }`}
            >
              {/* Badge for featured plan */}
              {plan.badge && (
                <div className="absolute top-0 right-0 bg-orange-500 text-white px-4 py-2 text-xs font-bold rounded-bl-xl flex items-center gap-1">
                  <Star size={12} fill="white" />
                  {plan.badge}
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2 font-montserrat">
                    {plan.name}
                  </h3>
                  <p className="text-white/60 mb-4">{plan.duration}</p>
                </div>

                {/* Benefits List */}
                <ul className="space-y-4 mb-8">
                  {plan.benefits
                    .filter((b) => !b.includes('R$'))
                    .map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mt-0.5">
                          <Check className="text-orange-500" size={12} />
                        </div>
                        <span className="text-white/80 text-sm">{benefit}</span>
                      </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => handlePlanClick(plan.name)}
                  className={`w-full py-4 rounded-xl font-bold transition-all duration-300 border-none ${
                    plan.featured
                      ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/25 animate-pulse-glow'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                  }`}
                >
                  Escolher Plano
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-white/60 max-w-2xl mx-auto text-sm">
            💳 Aceitamos diversas formas de pagamento. Entre em contato para mais informações.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Plans
