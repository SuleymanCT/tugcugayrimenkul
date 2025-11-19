'use client'

import { FaAward, FaUsers, FaClipboardCheck, FaShieldAlt } from 'react-icons/fa'

export default function About() {
  const values = [
    {
      icon: FaAward,
      title: 'Kalite Garantisi',
      description: 'En yüksek kalite standartlarında malzeme ve işçilik garantisi'
    },
    {
      icon: FaUsers,
      title: 'Uzman Ekip',
      description: 'Alanında deneyimli ve sertifikalı usta kadromuz'
    },
    {
      icon: FaClipboardCheck,
      title: 'Zamanında Teslimat',
      description: 'Projeleri belirlenen sürede ve eksiksiz teslim ediyoruz'
    },
    {
      icon: FaShieldAlt,
      title: 'Güvenilirlik',
      description: '15 yıllık tecrübe ve binlerce mutlu müşteri'
    }
  ]

  return (
    <section id="hakkimizda" className="py-24 bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070"
                alt="Tuğcu İnşaat Ekibi"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent" />

              {/* Floating Stats */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary-700">15+</div>
                      <div className="text-sm text-gray-600">Yıl Tecrübe</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary-700">70+</div>
                      <div className="text-sm text-gray-600">Proje</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary-700">100%</div>
                      <div className="text-sm text-gray-600">Memnuniyet</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent-500 rounded-full opacity-20 blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-500 rounded-full opacity-20 blur-3xl" />
          </div>

          {/* Right Column - Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-semibold mb-4">
              Hakkımızda
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tuğcu Ailesi Olarak
              <span className="block text-primary-700">15 Yıldır Hizmetinizdeyiz</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              İstanbul'da inşaat ve tadilat sektöründe 15 yılı aşkın tecrübemizle,
              Tuğcu İnşaat olarak her türlü inşaat projesinde yanınızdayız.
              Ev tadilatından villa inşaatına, ofis yenilemeden bina yapımına kadar
              geniş hizmet yelpazemizle müşterilerimize en kaliteli hizmeti sunuyoruz.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Beylikdüzü, Esenyurt ve İstanbul'un tüm ilçelerinde profesyonel ekibimiz
              ve modern ekipmanlarımızla, hayalinizdeki projeyi gerçeğe dönüştürüyoruz.
              Müşteri memnuniyeti bizim için her şeyden önemlidir.
            </p>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-xl text-primary-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{value.title}</h4>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CTA Button */}
            <a href="#iletisim" className="btn-primary inline-block">
              Ücretsiz Keşif Talep Et
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
