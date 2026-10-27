import { useState, useEffect } from 'react'
import './App.css'
import CanastaConjunto from './CanastaConjunto'

// Los 4 productos exclusivos vinculados con sus imágenes locales en /public
const PRODUCTOS = [
  {
    id: 'paneton-bolsa',
    nombre: 'Panetón Gloria (Edición Bolsa)',
    precio: 'S/ 23.00',
    badge: '🎅 Clásico en Bolsa',
    imagen: '/paneton_bolsa.webp'
  },
  {
    id: 'paneton-caja',
    nombre: 'Panetón Gloria (Edición Caja)',
    precio: 'S/ 26.00',
    badge: '🎁 Presentación Regalo',
    imagen: '/paneton_caja.webp'
  },
  {
    id: 'mantequilla-pluma-roja',
    nombre: 'Mantequilla Pluma Roja (Pote)',
    precio: 'S/ 38.00',
    badge: '⭐ Tradición Danesa',
    imagen: '/pluma_roja.jpeg'
  },
  {
    id: 'vino-tabernero',
    nombre: 'Vino Tabernero Gran Selección',
    precio: 'S/ 20.00',
    badge: '🍷 Brindis de Medianoche',
    imagen: '/tabernero.webp'
  }
]

// Detección automática de ruta (sin barras en pantalla):
// '/'         -> Pantalla 1 (Vertical 1 a 1)
// '/conjunto' o '#conjunto' -> Pantalla 2 (Vista Conjunto)
const detectRoute = () => {
  const path = window.location.pathname.toLowerCase()
  const hash = window.location.hash.toLowerCase()
  const search = window.location.search.toLowerCase()
  return path.includes('conjunto') || hash.includes('conjunto') || search.includes('conjunto')
    ? 'conjunto'
    : 'vertical'
}

export default function App() {
  const [route, setRoute] = useState(detectRoute)

  useEffect(() => {
    const handleRouteChange = () => setRoute(detectRoute())
    window.addEventListener('popstate', handleRouteChange)
    window.addEventListener('hashchange', handleRouteChange)
    return () => {
      window.removeEventListener('popstate', handleRouteChange)
      window.removeEventListener('hashchange', handleRouteChange)
    }
  }, [])

  // PANTALLA 2: Vista de los 4 productos en conjunto
  if (route === 'conjunto') {
    return <CanastaConjunto />
  }

  // PANTALLA 1: Catálogo Vertical 100vh individual original
  return (
    <div className="catalog-wrapper">
      {/* Destellos y Nieve Ambiental en CSS Puro */}
      <div className="festive-particles" aria-hidden="true">
        <span className="particle">✦</span>
        <span className="particle">❄</span>
        <span className="particle">✧</span>
        <span className="particle">❅</span>
        <span className="particle">✦</span>
        <span className="particle">❄</span>
      </div>

      {/* Header Festivo con Número de WhatsApp Visible */}
      <header className="catalog-header">
        <div className="header-pill">
          <span className="header-icon">🎄</span>
          <span className="header-text">Navidad Peruana</span>
          <span className="header-dot">•</span>
          <span className="header-sub">Mesa de Nochebuena</span>
        </div>
        <div className="header-contact-badge" title="Número de WhatsApp">
          <span className="contact-icon">💬</span>
          <span className="contact-label">WhatsApp:</span>
          <span className="contact-number">995 031 972</span>
        </div>
      </header>

      {/* Feed Vertical 100vh de Una Sola Columna */}
      <main className="vertical-feed">
        {PRODUCTOS.map((producto, index) => (
          <section
            key={producto.id}
            className="product-section"
            aria-label={`${producto.nombre} - ${producto.precio}`}
          >
            {/* Vitrina Central del Producto */}
            <div className="product-showcase-card">
              {/* Resplandor cálido de fondo (Backlight) */}
              <div className="card-halo-glow" aria-hidden="true" />

              {/* Badge Festivo Superior */}
              <div className="showcase-badge">
                <span>{producto.badge}</span>
              </div>

              {/* Marco para apreciar el producto completo sin recortes */}
              <div className="image-viewport">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="product-clean-image"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>

              {/* Panel de Datos: Únicamente Nombre y Precio */}
              <div className="showcase-footer">
                <h2 className="product-title">{producto.nombre}</h2>

                <div className="price-tag-wrapper">
                  <span className="price-value">{producto.precio}</span>
                </div>
              </div>
            </div>

            {/* Contador de Posición Vertical (01/04) */}
            <div className="product-step-indicator" aria-hidden="true">
              <span>0{index + 1}</span>
              <span className="step-sep">/</span>
              <span>0{PRODUCTOS.length}</span>
            </div>

            {/* Indicador de Desplazamiento */}
            {index < PRODUCTOS.length - 1 && (
              <div className="scroll-chevron-hint" aria-hidden="true">
                <span className="scroll-label">Desliza</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            )}
          </section>
        ))}
      </main>
    </div>
  )
}
