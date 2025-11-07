import { Award, Target, Users } from 'lucide-react'

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-primary via-accent to-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden shadow-2xl">
              <img 
                src="/images/profile-photo.jpg" 
                alt="Fabiano Vasconcelos Bispo (Japa) - Personal Trainer" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-white px-6 py-4 rounded-xl shadow-xl">
              <div className="flex items-center gap-2">
                <Award size={24} />
                <div>
                  <div className="font-bold text-lg">Melhores do Ano</div>
                  <div className="text-sm opacity-90">Prêmio Reconhecido</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-4 font-montserrat">
              Sobre Mim
            </h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>

            <h3 className="text-2xl font-semibold text-primary mb-2">
              Fabiano Vasconcelos Bispo (Japa)
            </h3>
            <p className="text-textSecondary mb-4 flex items-center gap-2">
              <span className="font-semibold">CREF:</span> 015562-G/BA
            </p>

            <p className="text-textSecondary mb-6 leading-relaxed">
              Com mais de 10 anos de experiência no mercado fitness, sou apaixonado por transformar vidas através do treinamento personalizado. Meu trabalho foi reconhecido com o prêmio "Melhores do Ano", reflexo do compromisso com a excelência e resultados reais dos meus alunos.
            </p>

            <div className="space-y-4 mb-6">
              <h4 className="font-semibold text-textMain text-lg flex items-center gap-2">
                <Target className="text-primary" size={20} />
                Especializações:
              </h4>
              <ul className="space-y-2 ml-7">
                {/* PLACEHOLDER: Adicione suas especializações aqui */}
                <li className="text-textSecondary flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>[Adicione sua especialização 1]</span>
                </li>
                <li className="text-textSecondary flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Treinamento Feminino</span>
                </li>
                <li className="text-textSecondary flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>[Adicione sua especialização 3]</span>
                </li>
                <li className="text-textSecondary flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>[Adicione sua especialização 4]</span>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl border-l-4 border-primary">
              <Users className="text-primary flex-shrink-0" size={32} />
              <p className="text-textMain font-semibold">
                Resultados comprovados com centenas de alunos satisfeitos
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
