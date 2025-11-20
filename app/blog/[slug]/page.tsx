import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { FaCalendar, FaClock, FaTag, FaArrowLeft, FaPhone, FaArrowRight } from 'react-icons/fa'
import { getPostBySlug, getAllPosts, getRecentPosts } from '@/lib/blog-posts'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Yazı Bulunamadı | Tuğcu İnşaat',
    }
  }

  return {
    title: `${post.title} | Tuğcu İnşaat Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const recentPosts = getRecentPosts(3).filter(p => p.slug !== post.slug)

  return (
    <>
      <Navbar scrolled={true} />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative h-[400px] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />

          <div className="absolute inset-0 flex items-end">
            <div className="section-container pb-12">
              <div className="max-w-4xl">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-white mb-6 hover:text-brand-400 transition-colors"
                >
                  <FaArrowLeft />
                  Blog'a Dön
                </Link>

                <div className="inline-block px-4 py-2 bg-brand-500 text-white text-sm font-semibold rounded-full mb-4">
                  {post.category}
                </div>

                <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-white">
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-brand-400" />
                    <span>{new Date(post.date).toLocaleDateString('tr-TR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="text-brand-400" />
                    <span>{post.readTime} okuma</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-300">Yazar:</span>
                    <span className="font-semibold">{post.author}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding">
          <div className="section-container">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8 pb-8 border-b border-gray-200">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-brand-50 hover:text-brand-600 transition-colors"
                      >
                        <FaTag className="text-xs" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Blog Content */}
                  <div className="prose prose-lg max-w-none
                    prose-headings:font-bold prose-headings:text-gray-800
                    prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-brand-600
                    prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-gray-800
                    prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3
                    prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-4
                    prose-a:text-brand-600 prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-gray-800 prose-strong:font-bold
                    prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
                    prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
                    prose-li:text-gray-600 prose-li:my-2
                    prose-blockquote:border-l-4 prose-blockquote:border-brand-500 prose-blockquote:pl-4 prose-blockquote:italic
                    prose-code:text-brand-600 prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded
                  ">
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                  </div>
                </article>

                {/* CTA Section */}
                <div className="mt-8 bg-gradient-to-br from-brand-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Profesyonel Tadilat Hizmeti mi Arıyorsunuz?
                  </h3>
                  <p className="text-lg text-gray-100 mb-6">
                    Beylikdüzü, Esenyurt ve İstanbul genelinde 15 yıllık tecrübemizle
                    hayalinizdeki projeyi gerçekleştirelim. Ücretsiz keşif için hemen arayın!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:+905332582468"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-brand-600 font-bold rounded-xl hover:bg-gray-100 transition-all"
                    >
                      <FaPhone />
                      0533 258 24 68
                    </a>
                    <Link
                      href="/#iletisim"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/20 transition-all border border-white/30"
                    >
                      Ücretsiz Keşif
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                {/* Recent Posts */}
                <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Son Yazılar
                  </h3>
                  <div className="space-y-6">
                    {recentPosts.map((recentPost) => (
                      <Link
                        key={recentPost.slug}
                        href={`/blog/${recentPost.slug}`}
                        className="block group"
                      >
                        <div className="flex gap-4">
                          <img
                            src={recentPost.image}
                            alt={recentPost.title}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-800 group-hover:text-brand-600 transition-colors line-clamp-2 mb-2">
                              {recentPost.title}
                            </h4>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <FaCalendar className="text-brand-500" />
                              {new Date(recentPost.date).toLocaleDateString('tr-TR')}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-brand-600 font-semibold mt-6 hover:gap-3 transition-all"
                  >
                    Tüm Yazılar
                    <FaArrowRight />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
