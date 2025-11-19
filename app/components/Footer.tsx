'use client'

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    'Gayrimenkul Hizmetleri',
    'Satılık Ev',
    'Ev Tadilatı',
    'Bina İnşaatı',
    'Villa Yapımı',
    'Tadilat & Dekorasyon'
  ]

  const locations = [
    'Kağıthane',
    'Alibeyköy',
    'Küçükçekmece',
    'Büyükçekmece',
    'Şişli',
    'Beyoğlu',
    'Beylikdüzü',
    'Esenyurt'
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex flex-col leading-tight mb-4">
              <span className="text-3xl font-horizon font-black tracking-wider text-white">
                TUGCU
              </span>
              <span className="text-sm font-raleway font-semibold tracking-wide text-brand-400">
                İnşaat, Gayrimenkul ve Tadilat
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              İstanbul ve Tekirdağ genelinde 15 yıldır profesyonel inşaat, gayrimenkul ve tadilat hizmetleri.
              70+ başarılı proje, kaliteli işçilik ve güvenilir hizmet.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/tugcuinsaat"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-brand-500 rounded-lg flex items-center justify-center transition-all"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/905XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-green-500 rounded-lg flex items-center justify-center transition-all"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://facebook.com/tugcuinsaat"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-all"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Hizmetlerimiz</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#hizmetler"
                    className="text-gray-400 hover:text-brand-400 transition-colors flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-3 group-hover:scale-150 transition-transform" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-xl font-bold mb-6">Çalışma Alanları</h3>
            <ul className="space-y-3">
              {locations.map((location, index) => (
                <li key={index}>
                  <a
                    href="#iletisim"
                    className="text-gray-400 hover:text-brand-400 transition-colors flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-3 group-hover:scale-150 transition-transform" />
                    {location}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">İletişim</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+905332582468"
                  className="flex items-center space-x-3 text-gray-400 hover:text-brand-400 transition-colors group"
                >
                  <FaPhone className="text-brand-400 group-hover:scale-110 transition-transform" />
                  <span>0533 258 24 68</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:dogantugcu@tugcuinsaat.com.tr"
                  className="flex items-center space-x-3 text-gray-400 hover:text-brand-400 transition-colors group"
                >
                  <FaEnvelope className="text-brand-400 group-hover:scale-110 transition-transform" />
                  <span>dogantugcu@tugcuinsaat.com.tr</span>
                </a>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <FaMapMarkerAlt className="text-brand-400 mt-1" />
                <span>Beylikdüzü, İstanbul<br />Türkiye</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} <strong className="text-white">TUGCU İnşaat</strong>. Tüm hakları saklıdır.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-brand-400 transition-colors">
                Gizlilik Politikası
              </a>
              <a href="#" className="hover:text-brand-400 transition-colors">
                Kullanım Şartları
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Footer Content */}
      <div className="bg-gray-950 border-t border-gray-800">
        <div className="section-container py-8">
          <div className="text-xs text-gray-500 leading-relaxed">
            <strong className="text-gray-400">TUGCU İnşaat, Gayrimenkul ve Tadilat:</strong> Kağıthane, Alibeyköy, Küçükçekmece,
            Büyükçekmece, Şişli, Beyoğlu, Beylikdüzü ve Esenyurt başta olmak üzere İstanbul ve Tekirdağ genelinde profesyonel
            inşaat, gayrimenkul ve tadilat hizmetleri. İstanbul inşaat, ev tadilatı, villa yapımı, bina inşaatı, gayrimenkul danışmanlığı.
            15 yıllık tecrübe, 70+ tamamlanmış proje, kaliteli işçilik ve uygun fiyat garantisi ile yanınızdayız.
          </div>
        </div>
      </div>
    </footer>
  )
}
