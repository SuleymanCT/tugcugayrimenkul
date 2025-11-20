'use client'

import { FaArrowRight, FaPhone } from 'react-icons/fa'

export default function Hero() {
  return (
    <section
      id="anasayfa"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-primary-900/80" />
      </div>

      {/* Content */}
      <div className="section-container relative z-10 py-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white mb-8 border border-brand-400/50">
            <span className="w-2 h-2 bg-brand-400 rounded-full animate-pulse" />
            <span className="font-semibold">Beylikdüzü, Esenyurt ve Tüm İstanbul'da Hizmetinizdeyiz</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            İstanbul'da Profesyonel
            <span className="block text-brand-400">İnşaat ve Tadilat Hizmetleri</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl leading-relaxed">
            Beylikdüzü, Esenyurt, Büyükçekmece, Küçükçekmece, Silivri ve Halkalı başta olmak üzere
            tüm İstanbul'da profesyonel inşaat, tadilat ve emlak hizmetleri. Hayalinizdeki eve uygun
            fiyatlarla kavuşun.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#iletisim"
              className="group flex items-center justify-center space-x-3 px-10 py-5 brand-gradient text-white font-bold rounded-xl shadow-2xl hover:opacity-90 transform hover:scale-105 transition-all duration-300"
            >
              <span>Ücretsiz Keşif</span>
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
            <a
              href="tel:+905332582468"
              className="flex items-center justify-center space-x-3 px-10 py-5 bg-white text-brand-600 font-bold rounded-xl shadow-2xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
            >
              <FaPhone />
              <span>0533 258 24 68</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 mt-20 pt-12 border-t border-white/20">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-brand-400 mb-2">15+</div>
              <div className="text-gray-300 font-medium">Yıllık Tecrübe</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-brand-400 mb-2">70+</div>
              <div className="text-gray-300 font-medium">Tamamlanan Proje</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center space-y-2 text-white animate-bounce">
          <span className="text-sm font-medium">Keşfet</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
