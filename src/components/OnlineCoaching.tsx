import { Laptop, MessageCircle, Calendar, TrendingUp } from 'lucide-react'

const OnlineCoaching = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-accent to-primary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Content Column */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat">
              Consultoria Online Personalizada
            </h2>
            <div className="w-20 h-1 bg-white mb-6"></div>

            <p className="text-white/90 mb-8 leading-relaxed text-lg">
              Acompanhamento completo e personalizado, onde quer que você esteja. 
              Receba seu treino, orientações nutricionais e suporte direto comigo através de plataformas digitais.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Laptop className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-textMain mb-1">Treinos Personalizados</h3>
                  <p className="text-textSecondary text-sm">
                    Planilhas adaptadas ao seu nível e objetivos, atualizadas regularmente
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <MessageCircle className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-textMain mb-1">Suporte Direto</h3>
                  <p className="text-textSecondary text-sm">
                    Tire suas dúvidas e receba feedback sobre execução dos exercícios
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Calendar className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-textMain mb-1">Acompanhamento Semanal</h3>
                  <p className="text-textSecondary text-sm">
                    Check-ins regulares para ajustar estratégias e garantir progresso
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <TrendingUp className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-textMain mb-1">Análise de Evolução</h3>
                  <p className="text-textSecondary text-sm">
                    Monitoramento de resultados com ajustes baseados em dados reais
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="order-1 md:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/working-photo.jpeg" 
                alt="Consultoria Online - Japa Treinador" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OnlineCoaching
