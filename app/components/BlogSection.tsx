'use client'

import Link from 'next/link'
import { FaCalendar, FaClock, FaArrowRight } from 'react-icons/fa'
import { getRecentPosts } from '@/lib/blog-posts'

export default function BlogSection() {
  const recentPosts = getRecentPosts(3)

  return (
    <section id="blog" className="section-padding bg-gray-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Blog & Rehberler</h2>
          <p className="section-description">
            İnşaat, tadilat ve emlak hakkında uzman ipuçları ve rehberler.
            Projeleriniz için ihtiyacınız olan bilgileri keşfedin.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {recentPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Image */}
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 bg-brand-500 text-white text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
              </Link>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <FaCalendar className="text-brand-500" />
                    <span>{new Date(post.date).toLocaleDateString('tr-TR')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaClock className="text-brand-500" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-brand-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:gap-3 transition-all"
                >
                  Devamını Oku
                  <FaArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 px-8 py-4 brand-gradient text-white font-bold rounded-xl hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Tüm Yazıları Görüntüle
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}
