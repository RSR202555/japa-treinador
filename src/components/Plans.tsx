import { Check, Star } from 'lucide-react'

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
    // PLACEHOLDER: Adicione seu número de WhatsApp aqui
    const whatsappNumber = '5575991155655' // Formato: código do país + DDD + número
    const message = encodeURIComponent(`Olá! Tenho interesse no plano ${planName} da Japa Treinador.`)
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  return (
    <section id="planos" className="py-20 bg-gradient-to-br from-primary via-accent to-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat">
            Planos de Consultoria
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Escolha o plano ideal para sua jornada de transformação
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                plan.featured ? 'border-4 border-primary scale-105 md:scale-110' : 'border-2 border-gray-200'
              }`}
            >
              {/* Badge for featured plan */}
              {plan.badge && (
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-2 text-sm font-bold rounded-bl-xl flex items-center gap-1">
                  <Star size={16} fill="white" />
                  {plan.badge}
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-textMain mb-2 font-montserrat">
                    {plan.name}
                  </h3>
                  <p className="text-textSecondary mb-4">{plan.duration}</p>
                  {/* Preços ocultados propositalmente */}
                </div>

                {/* Benefits List */}
                <ul className="space-y-4 mb-8">
                  {plan.benefits
                    .filter((b) => !b.includes('R$'))
                    .map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <Check className="text-primary" size={14} />
                        </div>
                        <span className="text-textSecondary">{benefit}</span>
                      </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => handlePlanClick(plan.name)}
                  className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                    plan.featured
                      ? 'bg-primary text-white hover:bg-hoverBtn shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 text-primary hover:bg-primary hover:text-white border-2 border-primary'
                  }`}
                >
                  Escolher Plano
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-textSecondary max-w-2xl mx-auto">
            💳 Aceitamos diversas formas de pagamento. Entre em contato para mais informações.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Plans
