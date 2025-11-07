import { useState } from 'react'
import { Phone, Mail, Instagram, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // PLACEHOLDER: Adicione seu número de WhatsApp aqui
    const whatsappNumber = '5575991155655'
    const message = encodeURIComponent(
      `Olá! Meu nome é ${formData.name}.\nEmail: ${formData.email}\n\nMensagem: ${formData.message}`
    )
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contato" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">
            Entre em Contato com a Japa Treinador
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Tire suas dúvidas e comece sua transformação hoje mesmo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-8 font-montserrat">Informações de Contato</h3>
            
            <div className="space-y-6">
              {/* WhatsApp */}
              <a
                href="https://wa.me/5575991155655"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="p-3 bg-white/20 rounded-lg group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="font-semibold mb-1">WhatsApp</div>
                  <div className="text-white/80">(75) 99115-5655</div>
                </div>
              </a>

              {/* Email */}
              <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                <div className="p-3 bg-white/20 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="font-semibold mb-1">E-mail</div>
                  <div className="text-white/80">Fabianogt260@gmail.com</div>
                </div>
              </div>

              {/* Instagram */}
              <a
                href="https://instagram.com/japatreinador__"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="p-3 bg-white/20 rounded-lg group-hover:scale-110 transition-transform">
                  <Instagram size={24} />
                </div>
                <div>
                  <div className="font-semibold mb-1">Instagram</div>
                  <div className="text-white/80">@japatreinador__</div>
                </div>
              </a>
            </div>

            <div className="mt-8 p-6 bg-white/10 rounded-xl border-2 border-white/20">
              <p className="text-white/90 leading-relaxed">
                💬 <strong>Resposta rápida!</strong> Geralmente respondemos em até 1 hora durante o horário comercial.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-8 font-montserrat">Envie uma Mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-semibold">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20 focus:border-white focus:outline-none transition-colors text-white placeholder-white/50"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-semibold">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20 focus:border-white focus:outline-none transition-colors text-white placeholder-white/50"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-semibold">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20 focus:border-white focus:outline-none transition-colors text-white placeholder-white/50 resize-none"
                  placeholder="Conte-me sobre seus objetivos..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-primary px-8 py-4 rounded-lg hover:bg-white/90 transition-all duration-300 font-bold text-lg shadow-xl flex items-center justify-center gap-3 group"
              >
                Enviar Mensagem
                <Send className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
