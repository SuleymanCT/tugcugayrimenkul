'use client'

const projects = [
  {
    title: 'Çok Katlı Apartmanlar',
    location: 'Anadolu Yakası, İstanbul',
    image: '/proje1.jpg',
    description: ''
  },
  {
    title: 'Lüks Yeni Tip Apartmanlar',
    location: 'Göztepe, İstanbul',
    image: '/proje2.jpg',
    description: ''
  },
  {
    title: 'Lüks Daireler',
    location: 'Çağlayan, İstanbul',
    image: '/proje3.jpg',
    description: ''
  },
  {
    title: 'Apartman ve Daire Tadilatı',
    location: 'Şişli, İstanbul',
    image: '/proje4.jpg',
    description: ''
  },
  {
    title: 'Modern Konut Projesi',
    location: 'Çağlayan, İstanbul',
    image: '/proje5.jpg',
    description: ''
  },
  {
    title: 'Lüks Daire Tadilatı',
    location: 'Kağıthane, İstanbul',
    image: '/proje6.jpg',
    description: ''
  },
  {
    title: 'Komple Ev Yenileme',
    location: 'Kağıthane, İstanbul',
    image: '/proje7.jpg',
    description: ''
  }
]

export default function Projects() {
  return (
    <section id="projeler" className="py-24 bg-gray-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-semibold mb-4">
            Projelerimiz
          </div>
          <h2 className="section-title">
            Tamamladığımız <span className="text-brand-600">Başarılı Projeler</span>
          </h2>
          <p className="section-subtitle mt-4">
            Yarıca'da 30'dan fazla projemizden bazı örnekler
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card group cursor-pointer overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Location */}
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2 text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700 mb-4">
            Daha fazla proje örneği için iletişime geçebilirsiniz
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Sizin projeniz de başarı hikayemize katılsın
          </p>
          <a href="#iletisim" className="btn-primary inline-block">
            Projenizi Görüşelim
          </a>
        </div>
      </div>
    </section>
  )
}
