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
    <footer className="bg-primary text-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            {logoOk ? (
              <img
                src={logoSrc}
                alt="Logo Japa Treinador"
                className="h-10 w-auto mb-3"
                loading="lazy"
                decoding="async"
                onError={() => {
                  if (!triedAlt) { setLogoSrc('/images/logo.png.jfif'); setTriedAlt(true); }
                  else { setLogoOk(false); }
                }}
              />
            ) : (
              <div className="h-10 w-10 rounded-md bg-white/50 ring-1 ring-black/20 grid place-items-center text-black font-bold mb-3">
                J
              </div>
            )}
            <h3 className="text-2xl font-bold mb-4 font-montserrat">Japa Treinador</h3>
            <p className="text-black mb-4 leading-relaxed">
              Transformando vidas através do treinamento personalizado e acompanhamento profissional.
            </p>
            <p className="text-black text-sm">
              <strong>CREF:</strong> 015562-G/BA
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 font-montserrat">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('#hero')}
                  className="text-black hover:text-black transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#sobre')}
                  className="text-black/80 hover:text-black transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#servicos')}
                  className="text-black/80 hover:text-black transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#planos')}
                  className="text-black/80 hover:text-black transition-colors"
                >
                  Planos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#contato')}
                  className="text-black/80 hover:text-black transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-bold mb-4 font-montserrat">Redes Sociais</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/5575991155655"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-black hover:text-black transition-colors group"
              >
                <div className="p-2 bg-orange-500 text-white rounded-lg group-hover:bg-orange-600 transition-colors">
                  <Phone size={18} />
                </div>
                <span>(75) 99115-5655</span>
              </a>
              <a
                href="https://instagram.com/japatreinador__"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-black/80 hover:text-black transition-colors group"
              >
                <div className="p-2 bg-orange-500 text-white rounded-lg group-hover:bg-orange-600 transition-colors">
                  <Instagram size={18} />
                </div>
                <span>@japatreinador__</span>
              </a>
              <div className="flex items-center gap-3 text-black">
                <div className="p-2 bg-orange-500 text-white rounded-lg">
                  <Mail size={18} />
                </div>
                <span className="text-sm">Fabianogt260@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-black/30 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              {logoOk ? (
                <img
                  src={logoSrc}
                  alt="Logo Japa Treinador"
                  className="h-10 md:h-12 lg:h-14 w-auto"
                  loading="lazy"
                  decoding="async"
                  onError={() => {
                    if (!triedAlt) { setLogoSrc('/images/logo.png.jfif'); setTriedAlt(true); }
                    else { setLogoOk(false); }
                  }}
                />
              ) : (
                <div className="h-10 md:h-12 lg:h-14 w-10 md:w-12 lg:w-14 rounded-md bg-white/50 ring-1 ring-black/20 grid place-items-center text-black font-bold">
                  J
                </div>
              )}
              <p className="text-black text-sm text-center md:text-left">
                © {currentYear} Japa Treinador - Todos os direitos reservados
              </p>
            </div>
            <p className="text-black text-sm flex items-center gap-2">
              Feito com <Heart size={16} className="text-red-400 fill-red-400" /> para transformar vidas
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

