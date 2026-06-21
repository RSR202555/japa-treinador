import { Quote, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const Transformations = () => {
  const transformations = [
    {
      name: 'Transformação 1',
      result: 'Corrida e Definição Muscular',
      testimonial: 'Consegui melhorar meu condicionamento físico e definir meu corpo. A mudança foi incrível!',
      image: '/images/transformation-1.jpg',
    },
    {
      name: 'Transformação 2',
      result: 'Emagrecimento e Tonificação',
      testimonial: 'Perdi gordura e ganhei massa magra. Me sinto muito mais confiante e saudável!',
      image: '/images/transformation-2.jpg',
    },
    {
      name: 'Transformação 3',
      result: 'Definição e Força',
      testimonial: 'Alcancei o corpo que sempre sonhei. O treino personalizado fez toda a diferença!',
      image: '/images/transformation-3.jpg',
    },
    {
      name: 'Transformação 4',
      result: 'Evolução Progressiva',
      testimonial: 'Cada semana via resultados novos. O acompanhamento constante foi essencial!',
      image: '/images/transformation-4.jpg',
    },
    {
      name: 'Transformação 5',
      result: 'Redução de Gordura',
      testimonial: 'Eliminei gordura localizada e ganhei definição. Resultado surpreendente!',
      image: '/images/transformation-5.jpg',
    },
    {
      name: 'Transformação 6',
      result: 'Ganho de Massa Magra',
      testimonial: 'Construí músculos e perdi gordura ao mesmo tempo. Resultados incríveis!',
      image: '/images/transformation-6.jpg',
    },
    {
      name: 'Transformação 7',
      result: 'Mudança Completa',
      testimonial: 'Transformei não só meu corpo, mas minha autoestima e qualidade de vida!',
      image: '/images/transformation-7.jpg',
    },
    {
      name: 'Transformação 8',
      result: 'Evolução Total do Corpo',
      testimonial: 'Resultados reais com acompanhamento e consistência. Evolução visível!',
      image: '/images/transformation-8.jpeg',
    },
  ]

  return (
    <section id="transformacoes" className="relative py-20 bg-gradient-to-br from-[#0B1220] via-[#070A13] to-[#0B1220] overflow-hidden">
      {/* Decorative Blur Blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-orange-500/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat"
          >
            Antes e Depois - <span className="text-orange-500">Transformações Reais</span>
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
            Veja os resultados das minhas alunas e inspire-se para começar sua própria transformação
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {transformations.map((transformation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300 shadow-xl hover:-translate-y-2 group"
            >
              {/* Before/After Image */}
              <div className="relative aspect-[3/4] bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                <img 
                  src={transformation.image} 
                  alt={`${transformation.name} - Antes e Depois`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#070A13] via-transparent to-transparent opacity-60" />
                
                {/* Floating Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full">
                  <span className="text-orange-500 text-xs font-bold uppercase tracking-wider">
                    Resultado Real
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {transformation.name}
                </h3>
                <p className="text-orange-500 font-bold text-lg mb-4">
                  {transformation.result}
                </p>

                {/* Testimonial */}
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 text-orange-500/10" size={32} />
                  <p className="text-white/70 italic pl-6 text-sm leading-relaxed">
                    "{transformation.testimonial}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const element = document.querySelector('#contato')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-xl transition-all duration-300 font-extrabold text-lg shadow-2xl hover:shadow-orange-500/20 inline-flex items-center gap-3 animate-pulse-glow"
          >
            Quero Minha Transformação
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={22} />
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default Transformations
