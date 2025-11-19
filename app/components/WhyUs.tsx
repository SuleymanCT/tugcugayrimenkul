'use client'

import { FaCheckCircle, FaMoneyBillWave, FaClock, FaHeadset, FaTools, FaStar } from 'react-icons/fa'

export default function WhyUs() {
  const reasons = [
    {
      icon: FaCheckCircle,
      title: 'Kaliteli İşçilik',
      description: 'Sertifikalı ustalarımız ve kaliteli malzemelerle en iyi sonucu garanti ediyoruz.'
    },
    {
      icon: FaMoneyBillWave,
      title: 'Uygun Fiyat',
      description: 'Şeffaf fiyatlandırma, gizli maliyet yok. En uygun fiyatlarla kaliteli hizmet.'
    },
    {
      icon: FaClock,
      title: 'Zamanında Teslimat',
      description: 'Projenizi belirlenen sürede, eksiksiz ve zamanında teslim ediyoruz.'
    },
    {
      icon: FaHeadset,
      title: '7/24 Destek',
      description: 'Proje öncesi, sırası ve sonrasında her zaman yanınızdayız.'
    },
    {
      icon: FaTools,
      title: 'Modern Ekipman',
      description: 'En son teknoloji ekipmanlar ve modern inşaat teknikleri kullanıyoruz.'
    },
    {
      icon: FaStar,
      title: 'Müşteri Memnuniyeti',
      description: 'Binlerce mutlu müşterimiz ve %100 memnuniyet garantisi.'
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold mb-4">
            Neden Tuğcu İnşaat?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Bizi Tercih Etmeniz İçin
            <span className="block text-accent-400">6 Önemli Sebep</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            İstanbul'da binlerce müşterimizin güvenini kazandık.
            İşte bizi rakiplerimizden ayıran özellikler:
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-xl bg-accent-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-4xl font-bold text-accent-400 mb-2">15+</div>
            <div className="text-white font-medium">Yıllık Deneyim</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-4xl font-bold text-accent-400 mb-2">70+</div>
            <div className="text-white font-medium">Tamamlanan Proje</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-4xl font-bold text-accent-400 mb-2">1000+</div>
            <div className="text-white font-medium">Mutlu Müşteri</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-4xl font-bold text-accent-400 mb-2">100%</div>
            <div className="text-white font-medium">Memnuniyet</div>
          </div>
        </div>
      </div>
    </section>
  )
}
