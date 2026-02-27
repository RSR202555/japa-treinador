import { useState } from 'react'
import { Menu, X } from 'lucide-react'

interface HeaderProps {
  scrolled: boolean
}

const Header = ({ scrolled }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const menuItems = [
    { label: 'Início', href: '#hero' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Transformações', href: '#transformacoes' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Planos', href: '#planos' },
    { label: 'Contato', href: '#contato' },
  ]

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-transparent py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3" onClick={(e) => handleClick(e, '#hero')}>
            <h1 className="text-2xl md:text-3xl font-bold text-white font-montserrat">
              Japa Treinador
            </h1>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-md transition-colors duration-200 font-semibold shadow-sm"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={(e) => handleClick(e, '#contato')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg transition-all duration-200 font-semibold shadow-md hover:shadow-lg"
            >
              Começar Agora
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-textMain p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-bgSecondary/40 pt-4">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="bg-orange-500 hover:bg-orange-600 text-white transition-colors duration-200 font-semibold py-3 px-4 rounded-md shadow-sm"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={(e) => handleClick(e, '#contato')}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-all duration-200 font-semibold text-center shadow-md"
              >
                Começar Agora
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
