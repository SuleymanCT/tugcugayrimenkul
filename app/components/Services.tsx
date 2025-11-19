'use client'

import { FaHome, FaBuilding, FaHammer, FaPaintRoller, FaWarehouse, FaTools, FaKey } from 'react-icons/fa'

const services = [
  {
    icon: FaKey,
    title: 'Emlak Hizmetleri',
    description: 'Beylikdüzü, Esenyurt ve çevresinde satılık ev, daire ve arsa. Hayalinizdeki eve uygun fiyatlarla kavuşun.',
    features: ['Satılık Ev', 'Satılık Daire', 'Satılık Arsa', 'Emlak Danışmanlığı'],
    color: 'from-brand-400 to-brand-600'
  },
  {
    icon: FaHome,
    title: 'Ev Tadilatı',
    description: 'Mutfak, banyo, oda tadilatı ve komple ev yenileme. Beylikdüzü ve Esenyurt\'ta profesyonel tadilat hizmetleri.',
    features: ['Mutfak Tadilatı', 'Banyo Yenileme', 'Oda Tadilat', 'Komple Tadilat'],
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: FaBuilding,
    title: 'Bina İnşaatı',
    description: 'Arsadan başlayarak modern standartlarda bina inşaatı. Tüm İstanbul\'da A\'dan Z\'ye inşaat hizmetleri.',
    features: ['Konut İnşaatı', 'Ticari Bina', 'Villa Yapımı', 'Anahtar Teslim'],
    color: 'from-primary-700 to-primary-900'
  },
  {
    icon: FaHammer,
    title: 'Tadilat & Dekorasyon',
    description: 'Küçükçekmece, Büyükçekmece ve Silivri\'de profesyonel tadilat ve dekorasyon hizmetleri.',
    features: ['İç Dekorasyon', 'Dış Cephe', 'Zemin Kaplama', 'Asma Tavan'],
    color: 'from-brand-500 to-brand-700'
  },
  {
    icon: FaPaintRoller,
    title: 'Boya & Badana',
    description: 'İç ve dış cephe boya işleri, duvar kaplamaları ve renk danışmanlığı hizmetleri.',
    features: ['İç Cephe Boya', 'Dış Cephe Boya', 'Duvar Kağıdı', 'Dekoratif Boya'],
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: FaWarehouse,
    title: 'Arsa Değerlendirme',
    description: 'Arsa alım-satım, proje değerlendirme ve yatırım danışmanlığı hizmetleri. Halkalı ve çevresinde.',
    features: ['Arsa Analizi', 'Proje Danışmanlığı', 'Yatırım Fırsatları', 'Teknik Keşif'],
    color: 'from-green-500 to-green-600'
  },
]

export default function Services() {
  return (
    <section id="hizmetler" className="py-24 bg-gray-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-brand-100 text-brand-700 rounded-full font-semibold mb-4">
            Hizmetlerimiz
          </div>
          <h2 className="section-title">
            Profesyonel <span className="gradient-text">İnşaat, Tadilat ve Emlak</span>
          </h2>
          <p className="section-subtitle mt-4">
            Beylikdüzü, Esenyurt, Büyükçekmece, Küçükçekmece, Silivri ve Halkalı başta olmak üzere
            tüm İstanbul'da ev tadilatından bina inşaatına, satılık evden emlak danışmanlığına
            kadar tüm ihtiyaçlarınız için yanınızdayız
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="card p-8 group cursor-pointer"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-3xl text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-brand-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <a
                    href="#iletisim"
                    className="inline-flex items-center text-brand-600 font-semibold group-hover:text-brand-700 transition-colors"
                  >
                    Detaylı Bilgi
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700 mb-6">
            Aradığınız hizmeti bulamadınız mı? Tüm inşaat ve emlak ihtiyaçlarınız için bize ulaşın.
          </p>
          <a href="#iletisim" className="btn-primary inline-block">
            Ücretsiz Teklif Alın
          </a>
        </div>
      </div>
    </section>
  )
}
