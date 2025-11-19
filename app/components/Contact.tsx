'use client'

import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.')
      setIsSubmitting(false)
      setFormData({ name: '', phone: '', email: '', service: '', message: '' })

      setTimeout(() => setSubmitMessage(''), 5000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Telefon 1',
      content: '0533 258 24 68',
      link: 'tel:+905332582468'
    },
    {
      icon: FaPhone,
      title: 'Telefon 2',
      content: '0533 235 68 24',
      link: 'tel:+905332356824'
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      content: 'Hemen Mesaj Gönder',
      link: 'https://wa.me/905332582468'
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Ücretsiz Teklif Alın
            </h3>
            <p className="text-gray-700 mb-8">
              Formu doldurun, 24 saat içinde size dönüş yapalım. İstanbul ve Tekirdağ genelinde
              inşaat, gayrimenkul ve tadilat hizmetleri için bize ulaşın.
            </p>

            {submitMessage && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Adınız Soyadınız *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-500 focus:outline-none transition-colors"
                  placeholder="Ad Soyad"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-500 focus:outline-none transition-colors"
                    placeholder="05XX XXX XX XX"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    E-posta
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-500 focus:outline-none transition-colors"
                    placeholder="ornek@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Hizmet Türü *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-500 focus:outline-none transition-colors"
                >
                  <option value="">Seçiniz...</option>
                  <option value="ev-tadilatı">Ev Tadilatı</option>
                  <option value="bina-insaatı">Bina İnşaatı</option>
                  <option value="villa-yapımı">Villa Yapımı</option>
                  <option value="ofis-tadilatı">Ofis Tadilatı</option>
                  <option value="tadilat-dekorasyon">Tadilat & Dekorasyon</option>
                  <option value="boya-badana">Boya & Badana</option>
                  <option value="diger">Diğer</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Mesajınız *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-500 focus:outline-none transition-colors resize-none"
                  placeholder="Projeniz hakkında detaylı bilgi verin..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaPaperPlane />
                <span>{isSubmitting ? 'Gönderiliyor...' : 'Gönder'}</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            {/* Contact Cards */}
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <a
                    key={index}
                    href={info.link}
                    className="card p-6 flex items-center space-x-4 hover:scale-105 transition-transform"
                  >
                    <div className="w-16 h-16 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-2xl text-brand-700" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">{info.title}</div>
                      <div className="text-lg font-bold text-gray-900">{info.content}</div>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-primary-900 to-black rounded-2xl p-8 text-white border-2 border-brand-400">
              <h4 className="text-2xl font-bold mb-4">Sosyal Medyada Bizi Takip Edin</h4>
              <p className="text-gray-200 mb-6">
                Son projelerimizi ve güncellemeleri sosyal medyada paylaşıyoruz.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/tugcuinsaat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition-all"
                >
                  <FaInstagram className="text-2xl" />
                  <span className="font-semibold">Instagram</span>
                </a>
                <a
                  href="https://wa.me/905XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg transition-all"
                >
                  <FaWhatsapp className="text-2xl" />
                  <span className="font-semibold">WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="mt-6 bg-gray-50 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Çalışma Saatleri</h4>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Pazartesi - Cumartesi:</span>
                  <span className="font-semibold">08:00 - 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Pazar:</span>
                  <span className="font-semibold">Kapalı</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-brand-700 font-semibold">
                    * Acil durumlar için 7/24 ulaşabilirsiniz
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
