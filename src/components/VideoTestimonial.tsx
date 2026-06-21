import { Play, Quote, Star } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

const VideoTestimonial = () => {
  const [isPlaying] = useState(true)

  const videoUrl: string = ''
  const hasUrl = Boolean(videoUrl && videoUrl.trim().length > 0)
  const embedSrc = hasUrl
    ? `${videoUrl}${videoUrl.includes('?') ? '&' : '?'}autoplay=1&mute=1`
    : ''

  return (
    <section className="relative py-20 bg-gradient-to-br from-[#0B1220] via-[#070A13] to-[#0B1220] overflow-hidden">
      {/* Decorative Blur Blobs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-500/5 blur-[130px] rounded-full pointer-events-none" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full mb-4"
            >
              <Star className="text-orange-500 fill-orange-500" size={16} />
              <span className="text-white font-bold text-xs tracking-wider">DEPOIMENTO REAL</span>
              <Star className="text-orange-500 fill-orange-500" size={16} />
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl font-extrabold text-white mb-6 font-montserrat leading-tight uppercase tracking-tight"
            >
              Essa melhorou a <span className="text-orange-500">composição corporal</span> e teve mais definição, além disso ganhou <span className="text-orange-500">massa magra</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 mb-6 leading-relaxed"
            >
              Veja como o Método MUSA 2.0 mudou a história dela
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center justify-center gap-2 text-white/70 max-w-lg mx-auto bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm"
            >
              <Quote className="text-orange-500/40 flex-shrink-0" size={20} />
              <p className="italic text-sm">
                "Não acreditei quando vi os resultados... Minha autoestima voltou!"
              </p>
            </motion.div>
          </div>

          {/* Video Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl bg-black/40 backdrop-blur-md border border-orange-500/20 shadow-[0_0_50px_rgba(249,115,22,0.1)]"
          >
            <div className="aspect-video bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 flex items-center justify-center">
              {!isPlaying ? (
                <div />
              ) : (
                <div className="w-full h-full">
                  {hasUrl ? (
                    <iframe
                      className="w-full h-full"
                      src={embedSrc}
                      title="Depoimento de Aluna - Japa Treinador"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <video
                      className="w-full h-full"
                      src="/videos/testimonial.mp4"
                      controls
                      autoPlay
                      muted
                    >
                      Seu navegador não suporta o elemento de vídeo HTML5.
                    </video>
                  )}
                </div>
              )}
            </div>
          </motion.div>

          {/* Caption */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-6 text-center"
          >
            <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
              Nesse aqui ela melhorou a sua composição corporal, onde ela perdeu gordura e ganhou massa muscular, coxa, glúteo e superior muito mais definidos.
            </p>
          </motion.div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {[
              { value: "15kg", label: "Perdidos em 4 Meses" },
              { value: "100%", label: "Satisfação Garantida" },
              { value: "500+", label: "Vidas Transformadas" }
            ].map((ind, iIdx) => (
              <motion.div
                key={iIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: iIdx * 0.15 }}
                className="bg-white/5 backdrop-blur-md rounded-xl p-6 text-center border border-white/10 shadow-xl"
              >
                <div className="text-4xl font-extrabold text-orange-500 mb-2">{ind.value}</div>
                <div className="text-white/70 text-sm font-medium">{ind.label}</div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <motion.button
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const element = document.querySelector('#planos')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-xl transition-all duration-300 font-extrabold text-lg md:text-xl shadow-2xl hover:shadow-orange-500/20 inline-flex items-center gap-3 animate-pulse-glow"
            >
              QUERO MINHA TRANSFORMAÇÃO AGORA
              <Play className="group-hover:translate-x-1 transition-transform fill-white" size={24} />
            </motion.button>
            <p className="text-white/50 mt-4 text-sm">
              ⚡ Vagas limitadas - Garanta a sua hoje mesmo!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoTestimonial
