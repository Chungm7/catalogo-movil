import { useState } from 'react'
import './CanastaConjunto.css'

// Los 4 productos idénticos
const PRODUCTOS = [
  {
    id: 'paneton-bolsa',
    nombre: 'Panetón Gloria',
    precio: 'S/ 23.00',
    badge: '🎅 Clásico en Bolsa',
    imagen: '/paneton_bolsa.webp'
  },
  {
    id: 'paneton-caja',
    nombre: 'Panetón Gloria',
    precio: 'S/ 27.00',
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

export default function CanastaConjunto() {
  // Producto enfocado interactivamente (inicia con el primero)
  const [activeId, setActiveId] = useState(PRODUCTOS[0].id)
  const activeProduct = PRODUCTOS.find((p) => p.id === activeId) || PRODUCTOS[0]

  return (
    <div className="conjunto-screen">
      {/* Nieve y destellos festivos ambientales */}
      <div className="festive-particles" aria-hidden="true">
        <span className="particle">✦</span>
        <span className="particle">❄</span>
        <span className="particle">✧</span>
        <span className="particle">❅</span>
        <span className="particle">✦</span>
        <span className="particle">❄</span>
      </div>

      <div className="conjunto-container">
        {/* Encabezado Festivo */}
        <header className="conjunto-header">
          <div className="header-tag">
            <span className="tag-icon">🎄</span>
            <span className="tag-title">Navidad Peruana</span>
          </div>
          <h1 className="conjunto-title">La Mesa de Nochebuena</h1>
          <p className="conjunto-subtitle">Los 4 clásicos reunidos para compartir en familia</p>
        </header>

        {/* Mosaico Dinámico de los 4 Productos Juntos (2x2 en móvil) */}
        <div className="products-composite-grid">
          {PRODUCTOS.map((prod) => {
            const isSelected = prod.id === activeId

            return (
              <div
                key={prod.id}
                className={`composite-card ${isSelected ? 'is-focused' : ''}`}
                onClick={() => setActiveId(prod.id)}
                role="button"
                tabIndex={0}
                aria-label={`${prod.nombre} ${prod.presentacion} - ${prod.precio}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setActiveId(prod.id)
                }}
              >
                {/* Resplandor cálido interior */}
                <div className="card-glow" aria-hidden="true" />

                {/* Badge temático */}
                <span className="mini-badge">{prod.badge}</span>

                {/* Imagen del producto completa sin cortes */}
                <div className="card-img-wrap">
                  <img
                    src={prod.imagen}
                    alt={prod.nombre}
                    className="card-product-img"
                    loading="lazy"
                  />
                </div>

                {/* Nombre y Precio */}
                <div className="card-info">
                  <h3 className="card-title">{prod.nombre}</h3>
                  <span className="card-sub">{prod.presentacion}</span>
                  <div className="card-price-pill">
                    <span>{prod.precio}</span>
                  </div>
                </div>

                {/* Indicador de selección activa */}
                {isSelected && <span className="selection-dot" aria-hidden="true">✦</span>}
              </div>
            )
          })}
        </div>

        {/* Tarjeta Destacada Dinámica del Producto Seleccionado */}
        <section className="featured-spotlight-bar">
          <div className="spotlight-left">
            <span className="spotlight-badge">⭐ Seleccionado</span>
            <h4 className="spotlight-name">
              {activeProduct.nombre} <span className="spotlight-sub">— {activeProduct.presentacion}</span>
            </h4>
          </div>
          <div className="spotlight-right">
            <span className="spotlight-price">{activeProduct.precio}</span>
          </div>
        </section>
      </div>
    </div>
  )
}
