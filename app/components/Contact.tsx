'use client'

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa'

export default function Contact() {
  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Telefon 1 - Doğan Tuğcu',
      content: '0533 258 24 68',
      link: 'tel:+905332582468'
    },
    {
      icon: FaPhone,
      title: 'Telefon 2 - Süleyman Can Tuğcu',
      content: '0533 235 68 24',
      link: 'tel:+905332356824'
    },
    {
      icon: FaEnvelope,
      title: 'E-posta',
      content: 'dogantugcu@tugcuinsaat.com.tr',
      link: 'mailto:dogantugcu@tugcuinsaat.com.tr'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Çalışma Alanı',
      content: 'İstanbul ve Tekirdağ Geneli',
      link: '#'
    }
  ]

  return (
    <section id="iletisim" className="py-24 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-brand-100 text-brand-700 rounded-full font-semibold mb-4">
            İletişim
          </div>
          <h2 className="section-title">
            Hemen <span className="text-brand-600">İletişime Geçin</span>
          </h2>
          <p className="section-subtitle mt-4">
            Projeniz için ücretsiz keşif ve detaylı fiyat teklifi alın
          </p>
        </div>

        {/* Contact Info */}
        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <a
                  key={index}
                  href={info.link}
                  className="card p-8 flex items-center space-x-6 hover:scale-105 transition-transform"
                >
                  <div className="w-16 h-16 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-3xl text-brand-700" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">{info.title}</div>
                    <div className="text-xl font-bold text-gray-900">{info.content}</div>
                  </div>
                </a>
              )
            })}
          </div>

          {/* Social Media */}
          <div className="bg-gradient-to-br from-primary-900 to-black rounded-2xl p-8 text-white border-2 border-brand-400 mb-8">
            <h4 className="text-2xl font-bold mb-4">Sosyal Medyada Bizi Takip Edin</h4>
            <p className="text-gray-200 mb-6">
              Son projelerimizi ve güncellemeleri sosyal medyada paylaşıyoruz.
            </p>
            <div className="flex justify-center">
              <a
                href="https://instagram.com/tugcuinsaat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition-all"
              >
                <FaInstagram className="text-2xl" />
                <span className="font-semibold">Instagram</span>
              </a>
            </div>
          </div>

          {/* Working Hours */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Çalışma Saatleri</h4>
            <div className="space-y-2 text-gray-700 max-w-md mx-auto">
              <div className="flex justify-between">
                <span>Pazartesi - Cumartesi:</span>
                <span className="font-semibold">08:00 - 19:00</span>
              </div>
              <div className="flex justify-between">
                <span>Pazar:</span>
                <span className="font-semibold">Kapalı</span>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-brand-700 font-semibold text-center">
                  * Acil durumlar için 7/24 ulaşabilirsiniz
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
