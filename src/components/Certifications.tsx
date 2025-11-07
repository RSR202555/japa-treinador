import { GraduationCap, CheckCircle } from 'lucide-react'

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
    <section id="certificacoes" className="py-20 bg-gradient-to-br from-primary via-accent to-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat">
            Certificações e Formação
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Formação sólida e atualização constante para oferecer o melhor serviço
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Certification Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-t-4 border-primary">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-primary/10 rounded-xl">
                <GraduationCap className="text-primary" size={40} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-textMain font-montserrat">
                  Profissional Registrado
                </h3>
                <p className="text-primary font-semibold text-lg">CREF: 015562-G/BA</p>
              </div>
            </div>
            <p className="text-textSecondary leading-relaxed">
              Profissional de Educação Física devidamente registrado no Conselho Regional de Educação Física, 
              garantindo qualidade, ética e segurança no atendimento.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-primary/30"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="text-primary" size={24} />
                  </div>
                  <p className="text-textMain font-medium leading-relaxed">
                    {cert}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="mt-8 text-center">
            <p className="text-textSecondary">
              🎓 Educação continuada e participação regular em cursos e workshops de atualização profissional
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications
