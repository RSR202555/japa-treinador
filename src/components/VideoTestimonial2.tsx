import { Play, Quote, Star } from 'lucide-react'
import { useState } from 'react'

const VideoTestimonial2 = () => {
  const [isPlaying, setIsPlaying] = useState(true)

  // Segundo vídeo: use um link EMBED ou deixe vazio para usar o arquivo local
  const videoUrl: string = '' // Ex: https://www.youtube.com/embed/VIDEO_ID
  const hasUrl = Boolean(videoUrl && videoUrl.trim().length > 0)
  const embedSrc = hasUrl
    ? `${videoUrl}${videoUrl.includes('?') ? '&' : '?'}autoplay=1&mute=1`
    : ''

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-accent to-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Star className="text-yellow-300 fill-yellow-300" size={20} />
              <span className="text-white font-semibold">DEPOIMENTO REAL</span>
              <Star className="text-yellow-300 fill-yellow-300" size={20} />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-montserrat leading-tight uppercase">
              ESSA TEVE GANHO DE MAIS DE 10 KG DE MASSA MUSCULAR
            </h2>

            <p className="text-xl md:text-2xl text-white/90 mb-4 leading-relaxed">
              Assista outro depoimento de aluna e veja o Método MUSA 2.0 em ação
            </p>

            <div className="flex items-center justify-center gap-2 text-white/80">
              <Quote size={20} />
              <p className="italic">"Fiz as pazes com o espelho e com a balança"</p>
            </div>
          </div>

          {/* Video Container */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black/20 backdrop-blur-sm border-4 border-white/30">
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
              {!isPlaying ? (<div />) : (
                <div className="w-full h-full">
                  {hasUrl ? (
                    <iframe
                      className="w-full h-full"
                      src={embedSrc}
                      title="Depoimento de Aluna - Japa Treinador (2)"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <video className="w-full h-full" src="/videos/testimonial-2.mp4" controls autoPlay muted>
                      Seu navegador não suporta o elemento de vídeo HTML5.
                    </video>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Caption */}
          <div className="mt-6 text-center">
            <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
              Essa ganhou mais de 10kg de massa muscular.
            </p>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <button
              onClick={() => {
                const element = document.querySelector('#planos')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group bg-white text-primary px-10 py-5 rounded-xl hover:bg-white/90 transition-all duration-300 font-bold text-lg md:text-xl shadow-2xl hover:scale-105 inline-flex items-center gap-3"
            >
              QUERO FECHAR MINHA CONSULTORIA
              <Play className="group-hover:translate-x-1 transition-transform" size={24} />
            </button>
            <p className="text-white/70 mt-3 text-xs">
              Para usar um arquivo local, coloque o vídeo MP4 em public/videos/testimonial-2.mp4
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoTestimonial2
