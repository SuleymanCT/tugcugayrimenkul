import type { Metadata } from 'next'
import Link from 'next/link'
import { FaCalendar, FaClock, FaTag, FaArrowRight } from 'react-icons/fa'
import { getAllGuides } from '@/lib/guide-posts'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Kılavuzlar | Tuğcu İnşaat - Tadilat ve İnşaat Kılavuzları',
  description: 'Ev tadilatı, inşaat ve yenileme projeleri için detaylı adım adım kılavuzlar. Beylikdüzü, Esenyurt ve İstanbul genelinde profesyonel rehberlik.',
  keywords: 'tadilat kılavuzu, ev tadilatı rehberi, inşaat kılavuzu, mutfak tadilatı, banyo yenileme, tadilat ipuçları',
}

export default function GuidesPage() {
  const guides = getAllGuides()

  return (
    <>
      <Navbar scrolled={true} />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-brand-600 text-white py-20">
          <div className="section-container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Tadilat ve İnşaat Kılavuzları
              </h1>
              <p className="text-xl text-gray-200">
                Ev tadilatı ve inşaat projeleriniz için detaylı adım adım kılavuzlar.
                Başlangıçtan bitişe kadar ihtiyacınız olan tüm bilgiler burada.
              </p>
            </div>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="section-padding">
          <div className="section-container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guides.map((guide) => (
                <article
                  key={guide.slug}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                  {/* Image */}
                  <Link href={`/kilavuzlar/${guide.slug}`}>
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={guide.image}
                        alt={guide.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="inline-block px-4 py-2 bg-brand-500 text-white text-sm font-semibold rounded-full">
                          {guide.category}
                        </span>
                      </div>
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <FaCalendar className="text-brand-500" />
                        <span>{new Date(guide.date).toLocaleDateString('tr-TR')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaClock className="text-brand-500" />
                        <span>{guide.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <Link href={`/kilavuzlar/${guide.slug}`}>
                      <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-brand-600 transition-colors line-clamp-2">
                        {guide.title}
                      </h2>
                    </Link>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {guide.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {guide.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          <FaTag className="text-xs" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More */}
                    <Link
                      href={`/kilavuzlar/${guide.slug}`}
                      className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:gap-3 transition-all"
                    >
                      Kılavuzu İncele
                      <FaArrowRight />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
