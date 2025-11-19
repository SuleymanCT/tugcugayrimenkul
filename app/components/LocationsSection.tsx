'use client'

import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

export default function LocationsSection() {
  const locations = [
    {
      title: 'Kağıthane',
      description: 'Kağıthane\'de inşaat, gayrimenkul ve tadilat hizmetleri. Güvenilir ve kaliteli çözümler.',
      keywords: ['Kağıthane İnşaat', 'Kağıthane Tadilat', 'Kağıthane Gayrimenkul', 'Kağıthane Emlak']
    },
    {
      title: 'Alibeyköy',
      description: 'Alibeyköy\'de profesyonel inşaat, gayrimenkul danışmanlığı ve tadilat hizmetleri.',
      keywords: ['Alibeyköy Tadilat', 'Alibeyköy İnşaat', 'Alibeyköy Gayrimenkul', 'Alibeyköy Emlak']
    },
    {
      title: 'Küçükçekmece',
      description: 'Küçükçekmece\'de her türlü inşaat, gayrimenkul ve tadilat ihtiyacınız için yanınızdayız.',
      keywords: ['Küçükçekmece Tadilat', 'Küçükçekmece İnşaat', 'Küçükçekmece Gayrimenkul', 'Ev Tadilatı']
    },
    {
      title: 'Büyükçekmece',
      description: 'Büyükçekmece\'de villa inşaatı, gayrimenkul ve tadilat hizmetleri. Uygun fiyatlar.',
      keywords: ['Büyükçekmece Tadilat', 'Büyükçekmece İnşaat', 'Büyükçekmece Gayrimenkul', 'Villa Yapımı']
    },
    {
      title: 'Şişli',
      description: 'Şişli\'de inşaat, gayrimenkul ve tadilat projelerinde uzman ekibimizle hizmetinizdeyiz.',
      keywords: ['Şişli İnşaat', 'Şişli Tadilat', 'Şişli Gayrimenkul', 'Şişli Emlak']
    },
    {
      title: 'Beyoğlu',
      description: 'Beyoğlu\'nda tarihi ve modern binaların tadilat, inşaat ve gayrimenkul hizmetleri.',
      keywords: ['Beyoğlu Tadilat', 'Beyoğlu İnşaat', 'Beyoğlu Gayrimenkul', 'Beyoğlu Emlak']
    },
    {
      title: 'Beylikdüzü',
      description: 'Beylikdüzü\'nde inşaat, gayrimenkul ve tadilat hizmetleri. Bölgenin en güvenilir firması.',
      keywords: ['Beylikdüzü İnşaat', 'Beylikdüzü Tadilat', 'Beylikdüzü Gayrimenkul', 'Beylikdüzü Emlak']
    },
    {
      title: 'Esenyurt',
      description: 'Esenyurt\'ta komple tadilat, gayrimenkul danışmanlığı ve inşaat çözümleri. 70+ başarılı proje.',
      keywords: ['Esenyurt Tadilat', 'Esenyurt İnşaat', 'Esenyurt Gayrimenkul', 'Esenyurt Emlak']
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-brand-100 text-brand-700 rounded-full font-semibold mb-4">
            Çalışma Alanlarımız
          </div>
          <h2 className="section-title">
            <span className="gradient-text">İstanbul ve Tekirdağ Geneli</span> Hizmetinizdeyiz
          </h2>
          <p className="section-subtitle mt-4">
            Kağıthane, Alibeyköy, Küçükçekmece, Büyükçekmece, Şişli, Beyoğlu, Beylikdüzü ve Esenyurt başta olmak üzere
            İstanbul ve Tekirdağ genelinde profesyonel inşaat, gayrimenkul ve tadilat hizmetleri sunuyoruz
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {locations.map((location, index) => (
            <div
              key={index}
              className="card p-8 group hover:border-2 hover:border-brand-400 transition-all"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-brand-100 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500 transition-colors">
                  <FaMapMarkerAlt className="text-xl text-brand-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {location.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {location.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {location.keywords.map((keyword, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-brand-50 text-brand-700 text-sm rounded-full font-medium hover:bg-brand-100 transition-colors"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* SEO Content */}
        <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-2xl p-12 mb-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              İstanbul ve Tekirdağ Genelinde İnşaat, Gayrimenkul ve Tadilat Hizmetleri
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>TUGCU İnşaat, Gayrimenkul ve Tadilat</strong> olarak Kağıthane, Alibeyköy, Küçükçekmece, Büyükçekmece,
                Şişli, Beyoğlu, Beylikdüzü ve Esenyurt başta olmak üzere İstanbul ve Tekirdağ genelinde profesyonel hizmetler sunuyoruz.
                15 yıllık tecrübemiz ve 70+ tamamlanmış projemizle bölgenin en güvenilir inşaat, gayrimenkul ve tadilat firmasıyız.
              </p>
              <p>
                <strong>Kağıthane inşaat</strong>, <strong>Alibeyköy tadilat</strong>, <strong>Şişli gayrimenkul</strong>,
                <strong> Beyoğlu tadilat</strong>, <strong>Beylikdüzü inşaat</strong> ve <strong>Esenyurt gayrimenkul</strong>
                alanlarında uzmanız. Hayalinizdeki projeyi uygun fiyatlarla gerçekleştiriyoruz.
                Ev tadilatından villa inşaatına, gayrimenkul danışmanlığından arsa değerlendirmeye kadar her konuda yanınızdayız.
              </p>
              <p>
                <strong>Küçükçekmece tadilat</strong>, <strong>Büyükçekmece inşaat</strong>, <strong>İstanbul gayrimenkul</strong> ve
                <strong> Tekirdağ inşaat</strong> projelerinizde kaliteli malzeme, deneyimli ekip ve zamanında teslimat garantisi
                veriyoruz. Ücretsiz keşif ve detaylı fiyat teklifi için hemen bizi arayın.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+905332582468" className="btn-primary inline-flex items-center justify-center space-x-2">
                <FaPhone />
                <span>0533 258 24 68</span>
              </a>
              <a href="tel:+905332356824" className="btn-secondary inline-flex items-center justify-center space-x-2">
                <FaPhone />
                <span>0533 235 68 24</span>
              </a>
            </div>
          </div>
        </div>

        {/* Additional SEO Content */}
        <div className="bg-white rounded-2xl border-2 border-gray-100 p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            İstanbul ve Tekirdağ Genelinde Hizmet Veriyoruz
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ana çalışma alanlarımız <strong>Kağıthane, Alibeyköy, Küçükçekmece, Büyükçekmece, Şişli, Beyoğlu, Beylikdüzü ve Esenyurt</strong> olmakla birlikte,
            İstanbul ve Tekirdağ\'ın her bölgesinde inşaat, gayrimenkul ve tadilat hizmetleri sunuyoruz. Avrupa Yakası ve Anadolu Yakası\'nın
            tüm ilçelerinde profesyonel ekibimizle hizmetinizdeyiz.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold text-brand-600 mb-3">İnşaat Hizmetleri</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Bina İnşaatı</li>
                <li>• Villa İnşaatı</li>
                <li>• Konut Projeleri</li>
                <li>• Ticari Bina Yapımı</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-brand-600 mb-3">Tadilat Hizmetleri</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Ev Tadilatı</li>
                <li>• Komple Tadilat</li>
                <li>• Mutfak Banyo Tadilatı</li>
                <li>• Boya Badana</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-brand-600 mb-3">Gayrimenkul Hizmetleri</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Satılık Ev</li>
                <li>• Satılık Daire</li>
                <li>• Satılık Arsa</li>
                <li>• Gayrimenkul Danışmanlığı</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
