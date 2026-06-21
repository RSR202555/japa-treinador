import { Instagram, Mail, Phone, Heart } from 'lucide-react'
import { useState } from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const [logoOk, setLogoOk] = useState(true)
  const [logoSrc, setLogoSrc] = useState('/images/logo.png.jfif')
  const [triedAlt, setTriedAlt] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative bg-gradient-to-b from-[#0B1220] to-[#04060A] text-white/80 py-16 border-t border-white/10 overflow-hidden">
      {/* Subtle bottom orange glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            {logoOk ? (
              <div className="inline-block p-1 bg-white/5 border border-white/10 rounded-xl mb-4 shadow-xl">
                <img
                  src={logoSrc}
                  alt="Logo Japa Treinador"
                  className="h-12 w-auto object-contain rounded-lg"
                  loading="lazy"
                  decoding="async"
                  onError={() => {
                    if (!triedAlt) { setLogoSrc('/images/logo.png.jfif'); setTriedAlt(true); }
                    else { setLogoOk(false); }
                  }}
                />
              </div>
            ) : (
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-orange-500 to-primary p-0.5 shadow-xl mb-4">
                <div className="w-full h-full bg-[#070A13] rounded-[10px] grid place-items-center text-white font-bold text-lg font-montserrat">
                  J
                </div>
              </div>
            )}
            <h3 className="text-2xl font-bold mb-4 font-montserrat text-white tracking-wide">
              Japa Treinador
            </h3>
            <p className="text-white/60 mb-4 leading-relaxed text-sm max-w-sm">
              Transformando vidas através do treinamento personalizado e acompanhamento profissional.
            </p>
            <p className="text-white/60 text-sm">
              <span className="font-semibold text-white/80">CREF:</span> 015562-G/BA
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-montserrat text-white relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-orange-500 after:mt-2">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('#hero')}
                  className="text-white/60 hover:text-orange-500 transition-colors text-sm text-left font-medium"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#sobre')}
                  className="text-white/60 hover:text-orange-500 transition-colors text-sm text-left font-medium"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#servicos')}
                  className="text-white/60 hover:text-orange-500 transition-colors text-sm text-left font-medium"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#planos')}
                  className="text-white/60 hover:text-orange-500 transition-colors text-sm text-left font-medium"
                >
                  Planos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#contato')}
                  className="text-white/60 hover:text-orange-500 transition-colors text-sm text-left font-medium"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-montserrat text-white relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-orange-500 after:mt-2">
              Redes Sociais
            </h4>
            <div className="space-y-4">
              <a
                href="https://wa.me/5575991155655"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group text-sm"
              >
                <div className="p-2.5 bg-white/5 border border-white/10 text-orange-500 rounded-xl group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300 shadow-lg">
                  <Phone size={16} />
                </div>
                <span className="font-medium hover:text-orange-500 transition-colors">(75) 99115-5655</span>
              </a>
              <a
                href="https://instagram.com/japatreinador__"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group text-sm"
              >
                <div className="p-2.5 bg-white/5 border border-white/10 text-orange-500 rounded-xl group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300 shadow-lg">
                  <Instagram size={16} />
                </div>
                <span className="font-medium hover:text-orange-500 transition-colors">@japatreinador__</span>
              </a>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <div className="p-2.5 bg-white/5 border border-white/10 text-orange-500 rounded-xl">
                  <Mail size={16} />
                </div>
                <span className="text-xs break-all">Fabianogt260@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              {logoOk ? (
                <div className="p-1 bg-white/5 border border-white/10 rounded-lg">
                  <img
                    src={logoSrc}
                    alt="Logo Japa Treinador"
                    className="h-10 md:h-12 w-auto object-contain rounded"
                    loading="lazy"
                    decoding="async"
                    onError={() => {
                      if (!triedAlt) { setLogoSrc('/images/logo.png.jfif'); setTriedAlt(true); }
                      else { setLogoOk(false); }
                    }}
                  />
                </div>
              ) : (
                <div className="h-10 w-10 rounded-lg bg-[#070A13] border border-white/10 grid place-items-center text-white font-bold text-sm">
                  J
                </div>
              )}
              <p className="text-white/40 text-xs text-center md:text-left">
                © {currentYear} Japa Treinador - Todos os direitos reservados
              </p>
            </div>
            <p className="text-white/40 text-xs flex items-center gap-1.5">
              Feito com <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" /> para transformar vidas
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

