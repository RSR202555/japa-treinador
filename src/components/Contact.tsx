import { useState } from 'react'
import { Phone, Mail, Instagram, Send } from 'lucide-react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
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
    <section id="contato" className="relative py-20 bg-gradient-to-br from-[#070A13] via-[#0B1220] to-[#070A13] text-white overflow-hidden">
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
            className="text-3xl md:text-4xl font-bold mb-4 font-montserrat"
          >
            Entre em Contato
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
            Tire suas dúvidas e comece sua transformação hoje mesmo
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-8 font-montserrat">Informações de Contato</h3>
            
            <div className="space-y-6">
              {/* WhatsApp */}
              <motion.a
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                href="https://wa.me/5575991155655"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300 group"
              >
                <div className="p-3 bg-orange-500/10 border border-orange-500/20 text-orange-500 rounded-lg group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="font-semibold mb-1">WhatsApp</div>
                  <div className="text-white/70 text-sm">(75) 99115-5655</div>
                </div>
              </motion.a>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl"
              >
                <div className="p-3 bg-orange-500/10 border border-orange-500/20 text-orange-500 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="font-semibold mb-1">E-mail</div>
                  <div className="text-white/70 text-sm">Fabianogt260@gmail.com</div>
                </div>
              </motion.div>

              {/* Instagram */}
              <motion.a
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                href="https://instagram.com/japatreinador__"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300 group"
              >
                <div className="p-3 bg-orange-500/10 border border-orange-500/20 text-orange-500 rounded-lg group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <Instagram size={24} />
                </div>
                <div>
                  <div className="font-semibold mb-1">Instagram</div>
                  <div className="text-white/70 text-sm">@japatreinador__</div>
                </div>
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 p-6 bg-orange-500/10 rounded-xl border border-orange-500/20"
            >
              <p className="text-white/90 leading-relaxed text-sm">
                💬 <strong>Resposta rápida!</strong> Geralmente respondemos em até 1 hora durante o horário comercial.
              </p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-8 font-montserrat">Envie uma Mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-semibold text-sm">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none transition-all text-white placeholder-white/30 text-sm"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-semibold text-sm">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none transition-all text-white placeholder-white/30 text-sm"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-semibold text-sm">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none transition-all text-white placeholder-white/30 resize-none text-sm"
                  placeholder="Conte-me sobre seus objetivos..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg transition-all duration-300 font-extrabold text-lg shadow-xl shadow-orange-500/20 flex items-center justify-center gap-3 group border-none animate-pulse-glow"
              >
                Enviar Mensagem
                <Send className="group-hover:translate-x-1 transition-transform" size={20} />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
