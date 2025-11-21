import { content2025Trendler } from './blog-content-2025-trendler'
import { contentBeylikduzu } from './blog-content-beylikduzu'
import { contentKucukcekmece } from './blog-content-kucukcekmece'
import { contentCamBalkon } from './blog-content-cam-balkon'
import { contentInnovia } from './blog-content-innovia'

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  category: string
  tags: string[]
  image: string
  readTime: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'innovia-tadilat-hizmetleri',
    title: 'Innovia 1, Innovia 2 ve Innovia 3 Tadilat ve Tamirat Hizmetleri',
    excerpt: 'Innovia sitelerine özel tadilat hizmetleri: Komple daire tadilatı, mutfak ve banyo yenileme, boya, zemin kaplama, elektrik ve tesisat işleri. Yerel ofisimizle Innovia sakinlerine hızlı ve güvenilir hizmet.',
    date: '2024-11-21',
    author: 'Tuğcu İnşaat',
    category: 'Site Özel Hizmetler',
    tags: ['innovia', 'innovia 1', 'innovia 2', 'innovia 3', 'innovia tadilat', 'esenyurt tadilat', 'esenyurt', 'yeşilkent', 'site tadilatı', 'daire tadilatı'],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070',
    readTime: '26 dk',
    content: contentInnovia
  },
  {
    slug: 'cam-balkon-kapatma-rehberi',
    title: 'Cam Balkon Kapatma Rehberi: Balkonunuzu Yaşam Alanına Dönüştürün',
    excerpt: 'Cam balkon sistemleri hakkında detaylı rehber: Katlanır, sürme, guillotine sistemler, malzeme seçimi, montaj süreci, bakım ve bölgesel öneriler ile balkonunuzu yaşam alanına dönüştürün.',
    date: '2024-11-21',
    author: 'Tuğcu İnşaat',
    category: 'Özel Uygulamalar',
    tags: ['cam balkon', 'balkon kapatma', 'katlanır cam', 'sürme cam balkon', 'beylikdüzü cam balkon', 'esenyurt cam balkon', 'istanbul cam balkon', 'balkon', 'kış bahçesi'],
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070',
    readTime: '32 dk',
    content: contentCamBalkon
  },
  {
    slug: 'kucukcekmece-ev-tadilati',
    title: 'Küçükçekmece Ev Tadilatı: Kapsamlı Rehber',
    excerpt: 'Küçükçekmece\'de ev tadilatı rehberi: Mahalle bazlı öneriler, nem ve ses yalıtımı, enerji verimliliği, bölgeye özel tadilat çözümleri ve uzman tavsiyeleri.',
    date: '2024-11-21',
    author: 'Tuğcu İnşaat',
    category: 'Bölgesel Rehberler',
    tags: ['küçükçekmece', 'küçükçekmece tadilat', 'küçükçekmece ev tadilatı', 'halkalı tadilat', 'sefaköy tadilat', 'istanbul tadilat', 'ev tadilatı', 'mutfak tadilatı', 'banyo tadilatı'],
    image: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?q=80&w=2074',
    readTime: '28 dk',
    content: contentKucukcekmece
  },
  {
    slug: 'beylikduzu-ev-tadilati',
    title: 'Beylikdüzü Ev Tadilatı: Kapsamlı Rehber ve Öneriler',
    excerpt: 'Beylikdüzü\'nde ev tadilatı için kapsamlı rehber: Bölgeye özel öneriler, popüler tadilat türleri, malzeme seçimi, süreçler ve uzman tavsiyeleri ile hayalinizdeki eve kavuşun.',
    date: '2024-11-21',
    author: 'Tuğcu İnşaat',
    category: 'Bölgesel Rehberler',
    tags: ['beylikdüzü', 'beylikdüzü ev tadilatı', 'beylikdüzü tadilat', 'istanbul tadilat', 'ev tadilatı', 'mutfak tadilatı', 'banyo tadilatı', 'komple tadilat'],
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070',
    readTime: '30 dk',
    content: contentBeylikduzu
  },
  {
    slug: '2025-ev-tadilati-trendleri',
    title: '2025 Yılında Ev Tadilatı Trendleri: Modern Yaşam Alanları İçin İlham Rehberi',
    excerpt: '2025 yılının en popüler ev tadilatı trendleri: Sürdürülebilir malzemeler, akıllı ev teknolojileri, minimalist tasarım ve daha fazlası. Modern yaşam alanları için kapsamlı ilham rehberi.',
    date: '2024-11-21',
    author: 'Tuğcu İnşaat',
    category: 'Trend ve Tasarım',
    tags: ['ev tadilatı', '2025 trendleri', 'modern tasarım', 'beylikdüzü tadilat', 'esenyurt ev yenileme', 'akıllı ev', 'minimalist tasarım'],
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2074',
    readTime: '25 dk',
    content: content2025Trendler
  },
  {
    slug: 'mutfak-tadilatinda-nelere-dikkat-edilmeli',
    title: 'Mutfak Tadilatında Nelere Dikkat Edilmeli? Beylikdüzü ve Esenyurt\'ta Profesyonel Rehber',
    excerpt: 'Mutfak tadilatı öncesi bilmeniz gereken tüm detaylar: Malzeme seçimi, bütçe planlaması, işçilik ve daha fazlası. 15 yıllık tecrübemizle hazırladığımız kapsamlı rehber.',
    date: '2024-11-20',
    author: 'Tuğcu İnşaat',
    category: 'Tadilat Rehberleri',
    tags: ['mutfak tadilatı', 'beylikdüzü tadilat', 'esenyurt mutfak yenileme', 'mutfak dolabı', 'tezgah seçimi'],
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2068',
    readTime: '15 dk',
    content: `# Mutfak Tadilatında Nelere Dikkat Edilmeli? Beylikdüzü ve Esenyurt'ta Profesyonel Rehber

Mutfak, evin en çok kullanılan ve aynı zamanda değer katan alanlarından biridir. İyi planlanmış bir mutfak tadilatı hem günlük yaşam kalitenizi artırır hem de evinizin değerini yükseltir. Tuğcu İnşaat olarak uzun yıllara dayanan tecrübemizle, Beylikdüzü, Esenyurt ve İstanbul genelinde birçok mutfak tadilatı gerçekleştirdik. Bu yazıda, mutfak tadilat sürecinde dikkat edilmesi gereken tüm detayları sizlerle paylaşıyoruz.

## Mutfak Tadilatına Başlamadan Önce: Planlama Aşaması

Başarılı bir mutfak tadilatının ilk adımı doğru planlamadır. Aceleyle başlanan projeler genellikle bütçe aşımına ve hayal kırıklığına neden olur.

### Bütçenizi Belirleyin

Mutfak tadilatı maliyetleri, seçeceğiniz malzemelere ve işin kapsamına göre büyük farklılıklar gösterir. Bütçenizi belirlerken tüm kalemleri düşünmek önemlidir:

- Tezgah ve dolap maliyetleri
- Beyaz eşya ve ankastre ürünler
- İşçilik ve usta ücreti
- Su tesisatı, elektrik ve fayans işleri
- Acil durum fonu (öngörülemeyen masraflar için)

Bütçenizi belirlerken mutlaka ekstra bir fon ayırın. Tadilatın ortasında çıkabilecek beklenmedek durumlar (eski tesisatın yenilenmesi, yapısal sorunlar) için hazırlıklı olmak önemlidir.

### İhtiyaç Analizi Yapın

Mutfağınızı nasıl kullandığınızı düşünün:

- Günde kaç öğün yemek yapıyorsunuz?
- Ailede kaç kişi mutfağı aktif kullanıyor?
- Çok fazla bulaşık mı yapıyorsunuz? (Bulaşık makinesi şart olabilir)
- Yemek yapmayı seviyor musunuz? (Geniş tezgah alanı gerekebilir)
- Depolama alanı yeterli mi yoksa daha fazla dolaba mı ihtiyacınız var?

Bu soruların cevapları, mutfak tasarımınızı şekillendirecektir.

## Mutfak Ölçüleri ve Ergonomi: Konfor İçin Temel Kurallar

Mutfak tadilatında estetik kadar işlevsellik de önemlidir. Yanlış ölçüler, günlük kullanımda büyük rahatsızlıklara neden olabilir.

### Çalışma Üçgeni Prensibi

Profesyonel mutfak tasarımında "çalışma üçgeni" kavramı çok önemlidir. Bu üçgen, buzdolabı, ocak ve lavabo arasındaki mesafeyi ifade eder. İdeal bir mutfakta bu üç nokta arasında dengeli mesafeler olmalı ve üçgenin içinden geçen bir trafik yolu olmamalıdır.

### Temel Ölçü İlkeleri

- Alt dolap ve tezgah yüksekliği kullanıcının boyuna göre ayarlanmalıdır
- Tezgah ile üst dolap arasında rahat çalışma mesafesi bırakılmalıdır
- Geçiş genişlikleri tek veya çift kişilik kullanıma göre planlanmalıdır
- Dolap kapakları açıkken rahat hareket alanı olmalıdır

## Malzeme Seçimi: Kalite ve Bütçe Dengesi

Mutfak malzemeleri uzun vadeli bir yatırımdır. Kaliteli malzeme seçimi, yıllarca sorunsuz kullanım anlamına gelir.

### Mutfak Dolabı Seçimi

**Gövde Malzemesi:**
- **MDF (Orta Yoğunlukta Lif Levha):** En popüler seçenek. Nem direnci iyi, fiyat/performans dengesi mükemmel. Kaliteli MDF 18 mm kalınlığında olmalı.
- **Suntalam:** Bütçe dostu ama nem direnci düşük. Sadece çok kuru ortamlar için önerilir.
- **Masif Ahşap:** En dayanıklı ve lüks seçenek. Ancak bakım gerektirir ve maliyetli.
- **Laminat Kaplı MDF:** Günümüzde en çok tercih edilen. Kolay temizlenir, su geçirmez.

**Kapak Seçenekleri:**
- **Akrilik Kapak:** Parlak yüzey, modern görünüm, kolay silinir. Çizilmeye karşı orta direnç.
- **Membran Kapak:** Mat ya da parlak seçenekleri var. Orta segment için ideal. Fiyat/performans açısından en dengeli seçenek.
- **Lake Kapak:** Yüksek kaliteli, pürüzsüz yüzey. Premium segment.
- **Ahşap Kaplama:** Klasik ve şık görünüm. Doğal doku arayanlar için.

**Beylikdüzü ve Esenyurt'ta Öneri:** Bu bölgelerde denize yakınlık nedeniyle nem oranı yüksek olabilir. Mutlaka suya dayanıklı, kaliteli yapışkan ve kenar bandı kullanımına dikkat edin.

### Tezgah Malzemesi

Tezgah, mutfağın en çok kullanılan yüzeyidir. Hem dayanıklı hem de estetik olmalıdır.

**Granit:**
- Artılar: Çok dayanıklı, çizilmeye karşı dirençli, ısıya dayanıklı, hijyenik
- Eksiler: Ağır, döküldüğünde çatlayabilir
- Fiyat: Orta-Yüksek segment
- Ömrü: Uzun ömürlü

**Mermer:**
- Artılar: Lüks görünüm, serin yüzey (hamur işleri için ideal)
- Eksiler: Asit ve leke hassasiyeti yüksek (limon suyu bile leke yapabilir), çizilmeye açık
- Fiyat: Yüksek segment
- Ömrü: Bakımlı kullanımda uzun ömürlü

**Kuvars (Kompakt):**
- Artılar: Mermer görünümü, çok dayanıklı, lekeye karşı dirençli, bakım gerektirmez
- Eksiler: Yüksek maliyetli, çok sıcak tencere direkt konulmamalı
- Fiyat: Yüksek segment
- Ömrü: Çok uzun ömürlü
- **En Çok Önerdiğimiz:** Fiyat/performans ve dayanıklılık açısından en dengeli seçenek

**Dekton:**
- Artılar: Aşırı dayanıklı, çizilmez, yanmaz, donmaz
- Eksiler: Yüksek maliyetli
- Fiyat: Premium segment
- Ömrü: Ömür boyu

**Laminat (Compact Laminat):**
- Artılar: Ekonomik, çok çeşitli renk ve desen
- Eksiler: Çizilmeye ve ısıya hassas, kenarlarda soyulma olabilir
- Fiyat: Ekonomik
- Ömrü: Orta vadeli

**Bizim Önerimiz:** Bütçeniz elveriyorsa kuvars tezgah, daha ekonomik arayış içindeyseniz kaliteli granit en akıllı yatırımdır.

### Fayans Seçimi

Mutfak fayanı sadece estetik değil, aynı zamanda pratik olmalıdır.

**Duvar Kaplaması:**
- Parlak fayanslar kolay temizlenir ancak parmak izi gösterir
- Mat fayanslar leke tutabilir ama daha şık durur
- 10x20 cm ya da 15x15 cm ebatlar klasik tercihler
- Büyük ebat fayanslar (60x120 cm) modern ve derz az olduğu için temizliği kolay
- Cam mozaik fayanslar tezgah arası için şık bir seçenek

**Yer Kaplaması:**
- Kayma önleyici (R10-R11 sınıfı) fayans şart
- 30x30 cm veya daha büyük ebatlar pratik
- Koyu renkler lekeleri gizler ama toz gösterir
- Desenli fayanslar kirleri kamufle eder

**Derz Rengi:** Beyaz derz temiz durur ama kirlenme gösterir. Gri ya da fayans rengine yakın derz daha pratiktir.

## Tesisat ve Altyapı: Görünmeyen Ama Kritik Detaylar

Mutfak tadilatında en sık yapılan hata, sadece görünen yerlere odaklanmaktır. Oysa altyapı çok daha önemlidir.

### Su Tesisatı

- **Eski tesisatı yenileyin:** Eski tesisatlar muhtemelen galvanizlidir ve paslanmıştır. Mutlaka PPR (Plastik) boruya çevirin.
- **Filtreleme sistemi:** Beylikdüzü ve Esenyurt'ta su kalitesi bölgeden bölgeye değişir. Su arıtma sistemi için yer bırakın.
- **Kapatma vanaları:** Lavabo altı, bulaşık makinesi ve çamaşır makinesi için ayrı kapatma vanaları olmalı.
- **Sıcak su hattı:** Sıcak su borularının yalıtımlı olmasına dikkat edin.
- **Drenaj sistemi:** Sifon ve atık su hattının eğimi doğru ayarlanmalı, aksi halde tıkanma ve koku problemi yaşarsınız.

### Elektrik Tesisatı

Modern mutfaklarda çok fazla elektrikli cihaz kullanılır. Elektrik altyapısı buna uygun planlanmalıdır.

**Priz Sayısı ve Konumları:**
- Tezgah üstü için yeterli sayıda priz
- Ankastre cihazlar için (fırın, ocak, davlumbaz) ayrı sigortalı devre
- Bulaşık makinesi için topraklı priz
- Buzdolabı için ayrı sigortalı priz (tatilde diğer sigortaları kapatabilmek için)
- Ada mutfaklarda ada içine yerleştirilmiş prizler

**Aydınlatma Devreleri:**
- Genel aydınlatma (tavan lambası)
- Tezgah aydınlatması (üst dolap altı LED şerit)
- Dolap içi aydınlatma (sensörlü LED'ler)
- Dekoratif aydınlatma (vitrin dolap içi)

**Önemli:** Bulaşık makinesi, fırın ve çamaşır makinesi gibi yüksek güç çeken cihazlar için kaliteli kablo ve ayrı sigortalı devre kullanılmalıdır.

### Havalandırma ve Davlumbaz

İyi bir havalandırma sistemi mutfağı nem, yağ buharı ve kokulardan korur.

**Davlumbaz Seçimi:**
- Aspirtör gücü ocak ebatına göre belirlenmelidir
- Davlumbaz ocaktan yeterli yükseklikte olmalı
- Davlumbaz genişliği ocak genişliğinden fazla olmalı
- Dışarı havalandırma her zaman karbon filtreli sisteme tercih edilir

**Havalandırma Kanalı:**
- Davlumbaz dış duvara yakın olmalı
- Mümkünse düz kanal tercih edilmeli (her dirsek hava gücünü düşürür)
- Kanal çapı yeterli olmalı
- PVC boru yerine galvaniz sac boru tercih edin

## İşçilik ve Uygulama: Başarının Anahtarı

En kaliteli malzemeler bile kötü işçilikle berbat sonuç verir. İşçilik mutfak tadilatının en kritik unsurudur.

### Mutfak Tadilatı Süreci ve Aşamaları

**Yıkım ve Alt Yapı:**
- Eski mutfağın sökümü
- Hafriyat atıklarının taşınması
- Tesisat ve elektrik yenilemesi
- Gerekirse duvar düzeltmeleri ve sıva

**Kaplama İşleri:**
- Yer fayansı döşeme
- Duvar fayansı döşeme
- Alçıpan ve asma tavan işleri (varsa)
- Derz dolgu ve temizlik

**Mobilya Montajı:**
- Alt dolap montajı
- Tezgah yerleştirme
- Üst dolap montajı
- Aksesuar ve tutamak montajı

**Cihaz ve Son Dokunuşlar:**
- Ankastre ürün yerleştirme
- Davlumbaz montajı
- Musluk ve lavabo bağlantıları
- Son kontroller ve teslim

**Toplam Süre:** Standart bir mutfak için birkaç hafta. Daha büyük ve karmaşık mutfaklar daha uzun sürebilir.

### Ustanız Kimler Olmalı?

Kaliteli bir mutfak tadilatı multidisipliner bir iştir:

- **Tesisatçı:** Sertifikalı ve deneyimli olmalı
- **Elektrikçi:** Mutlaka belgeli elektrikçi çalıştırın
- **Fayansçı:** Portfolyosunu mutlaka isteyin, önceki işlere bakın
- **Marangoz:** Dolap montajı konusunda uzman olmalı
- **Genel koordinatör:** Tüm işi koordine eden bir usta ya da şirket

**Tuğcu İnşaat Farkı:** Yıllardır aynı usta ekiplerimizle çalışıyoruz. Tüm ustalarımız sertifikalı ve sigortasıdır. İşin tüm aşamalarını koordine eder, müşterimize tek muhatap konforunu sağlarız.

## Beylikdüzü ve Esenyurt'a Özel Öneriler

Bölgesel faktörler mutfak tadilatı kararlarını etkiler. Beylikdüzü ve Esenyurt için özel önerilerimiz:

### Nem ve Deniz Havası

- Dolap kenar bantlarına ekstra dikkat edin (lazer kenar bandı tercih edin)
- Menteşe ve ray sistemlerinde paslanmaz çelik kullanın
- Mutlaka su geçirmez tutkal ve vida kullanılmasını sağlayın
- Duvar kaplamasında nefes alan malzemeler tercih edin

### Bölge Mimarisi

- Beylikdüzü'nde çoğu daire yeni ve modern, açık mutfak modelleri uygun
- Esenyurt'ta hem eski hem yeni yapılar var, mutfak boyutları daha değişken
- Site içi dairelerde gürültü kurallarına dikkat edin (sessiz elektrikli aletler)

### Ulaşım ve Lojistik

- Malzeme teslimatları için asansör rezervasyonu yapın
- Site yönetiminden çalışma izni alın
- Hafriyat için konteyner izni gerekebilir
- Hafta sonu çalışma genellikle yasak, planlamayı ona göre yapın

## Sık Yapılan Hatalar ve Nasıl Önlenir

15 yıllık tecrübemizde gördüğümüz en yaygın hatalar:

### 1. Yetersiz Depolama Alanı

**Hata:** "Zaten fazla eşyamız yok" diye düşünerek az dolap yaptırmak.

**Sonuç:** 1-2 yıl içinde mutfak eşyaları artıyor ve dolap sayısı yetersiz kalıyor.

**Çözüm:** Mevcut eşyalarınızın %30 fazlası için alan planlayın. Tavan arasından yararlanın. Köşe dolaplar için döner sistemler kullanın.

### 2. Aydınlatmayı İhmal Etmek

**Hata:** Sadece tavan lambasına güvenmek.

**Sonuç:** Tezgah üzerinde çalışırken gölge oluşur, görmek zorlaşır.

**Çözüm:** Üst dolap altına LED şerit aydınlatma. Ocak üstüne spot. İhtiyaç noktalarına özel aydınlatma.

### 3. Priz Sayısını Küçümsemek

**Hata:** "Şu an sadece 3-4 cihazımız var, yeter" demek.

**Sonuç:** Sürekli fiş takıp çıkarmak, çoklu priz kullanmak zorunda kalmak.

**Çözüm:** Minimum 8-10 priz. Gömme prizler estetik açıdan daha iyi. Gelecekte alacağınız cihazları düşünün (robot süpürge, kahve makinesi, mikser, vb).

### 4. Bütçe Hatası

**Hata:** Sadece dolap ve tezgaha bütçe ayırmak, diğer masrafları unutmak.

**Sonuç:** İşin ortasında para sıkıntısı, kaliteden taviz vermek zorunda kalmak.

**Çözüm:** Toplam bütçenizi tüm kalemlere dengeli şekilde dağıtın (dolap/tezgah, tesisat, elektrik, fayans, işçilik, nakliye, vb).

### 5. En Ucuz Teklifi Seçmek

**Hata:** Fiyata bakıp en ucuzunu seçmek.

**Sonuç:** Kalitesiz malzeme, deneyimsiz usta, sorunlar ve ilave masraflar.

**Çözüm:** En az 3-4 teklif alın. Sadece fiyata değil, referanslara, malzeme kalitesine, garanti şartlarına bakın. Orta-üst segment teklifler genellikle en doğru seçimdir.

### 6. Trend Peşinde Koşmak

**Hata:** O sırada moda olan renk ve tasarımı seçmek.

**Sonuç:** 3-5 yıl sonra modası geçmiş bir mutfağınız oluyor.

**Çözüm:** Klasik renkler (beyaz, gri, bej, ahşap tonları) ve zamansız tasarımlar tercih edin. Trendi aksesuarlarla yakalayın.

## Mutfak Tadilatında Maliyet Tasarrufu İpuçları

Kaliteden ödün vermeden tasarruf etmek mümkün:

### Akıllı Tercihler:

1. **Dolap gövdelerinde ekonomik, kapaklarda kaliteli:** Gövde MDF olsun, bütçeyi kapak ve tezgaha ayırın.

2. **Yarı ankastre yerine tam ankastre:** Tam ankastre daha estetik ve genellikle daha ekonomik.

3. **Seramik granit yerine kompakt granit:** Görsel fark yok, fiyat farkı önemli.

4. **Açık raf kullanımı:** Üst dolapların bir kısmını açık rafa çevirin. Hem tasarruf hem modern görünüm.

5. **Beyaz eşyayı kampanya dönemlerinde alın:** Belirli dönemler beyaz eşyada kampanya zamanıdır.

6. **Daha az donanım:** Her dolaba özel mekanizma yerine standart sistemler kullanın. Gerçekten ihtiyaç duyulan yerlere özel aksesuarlar ekleyin.

7. **Kademeli yenileme:** Bütçe sınırlıysa önce dolap ve tezgah, sonraki dönemde cihazlar yenilenebilir.

### Dikkat: Bunlarda Kesinlikle Tasarruf Yapmayın:

- Tesisat malzemesi (ucuz borular 2-3 yıl içinde sorun çıkarır)
- Elektrik kablosu kalitesi (yangın riski)
- Dolap menteşe ve ray kalitesi (sürekli tamir masrafı)
- Usta seçimi (kötü işçilik her şeyi mahveder)
- Su yalıtımı (lavabo altı, duvar arkası)

## Mutfak Tadilatı Sonrası Bakım ve Kullanım

Yeni mutfağınız uzun yıllar boyunca güzel kalması için:

### İlk Dönem (Alıştırma Dönemi):

- Yeni dolaplara çok ağır yük koymayın (vidalar oturmalı)
- Menteşeleri ayarlatın (ilk zamanlarda kaymalar normal)
- Derz aralarını kontrol edin (gerekirse ilave dolgu)
- Tüm cihazları test edin, sorun varsa hemen bildirin

### Günlük Kullanım:

- Sıcak tencereleri direkt tezgaya koymayın (granit bile çatlayabilir)
- Asitli içecekleri (limon suyu, sirke) hemen silin
- Dolap kapakları açıkken fazla güç uygulamayın
- Tezgah üzerinde kesme işlemi yaparken mutlaka tahta kullanın

### Düzenli Bakım:

- Davlumbaz filtresini düzenli temizleyin
- Dolap menteşe ve raylarını kontrol edin
- Fayans derzlerini kontrol edin, gerekirse yenileyin
- Tesisat altlarını kontrol edin (sızıntı var mı?)

### Temizlik Önerileri:

- **Dolap kapakları:** Nemli mikrofiber bez, hafif sabunlu su. Aşındırıcı ürün kullanmayın.
- **Granit/Mermer tezgah:** Özel taş temizleyiciler. Asit içerikli ürünlerden uzak durun.
- **Kuvars tezgah:** Sabunlu su yeterli. Çok dayanıklı.
- **Paslanmaz çelik lavabo:** Sirke-su karışımı parlaklık verir.
- **Fayans derz:** Eski diş fırçası ve karbonat pastası.

## Yasal İzinler ve Dikkat Edilmesi Gerekenler

Özellikle apartman ve site içinde yaşıyorsanız:

### Site/Apartman Yönetiminden:

- Tadilatı başlatmadan yönetimden yazılı izin alın
- Çalışma saatleri genellikle hafta içi mesai saatleri ile sınırlıdır
- Hafriyat konteyner izni
- Asansör kullanım saatleri
- Gürültü kuralları

### Belediye İzinleri:

- Yapısal değişiklik yoksa (duvar yıkma gibi) izne gerek yok
- Doğalgaz hattında değişiklik yapılacaksa mutlaka IGDAŞdan izin
- Kombi yerini değiştiriyorsanız yetkili servisten onay

## Tuğcu İnşaat ile Mutfak Tadilatı Süreci

15 yıldır Beylikdüzü, Esenyurt, Büyükçekmece ve İstanbul genelinde profesyonel mutfak tadilatı hizmeti sunuyoruz. Sürecimiz şeffaf ve müşteri odaklıdır:

### 1. Ücretsiz Keşif ve Danışmanlık

- Yerinize geliyoruz, ölçüm yapıyoruz
- İhtiyaç analizi ve danışmanlık
- Farklı seçenekler sunuyoruz
- 3D görselleştirme (talep edilirse)

### 2. Detaylı Fiyat Teklifi

- Kalite, detay ve kalem kalem açıklamalı teklif
- Malzeme marka ve modelleri belirtilir
- Gizli maliyet yoktur
- Ödeme planı esnektir

### 3. Sözleşme ve Başlangıç

- Yazılı sözleşme (ne yapılacak, ne kadar sürecek, ne kadara mal olacak)
- Çalışma takvimi
- Başlangıç tarihi

### 4. Uygulama Süreci

- Deneyimli usta ekiplerimiz
- Düzenli fotoğraf raporları
- Sürekli iletişim
- Temiz ve özenli çalışma

### 5. Teslim ve Sonrası

- Detaylı teslim tutanağı
- Kullanım kılavuzu ve bakım önerileri
- İşçilik garantisi
- Malzeme garantisi (markaya göre değişir)
- Sonrası destek ve servis

### Neden Tuğcu İnşaat?

✓ Uzun yıllık tecrübe
✓ Çok sayıda başarılı mutfak projesi
✓ Sertifikalı usta kadrosu
✓ Kaliteli malzeme garantisi
✓ Zamanında teslimat
✓ Şeffaf fiyatlandırma
✓ 7/24 iletişim
✓ Teslim sonrası destek

## Sonuç: Hayalinizdeki Mutfağa Kavuşun

Mutfak tadilatı sadece estetik bir yenileme değil, yaşam kalitenizi artıran önemli bir yatırımdır. Doğru planlama, kaliteli malzeme ve profesyonel işçilikle hayalinizdeki mutfağa kavuşmak mümkün.

Unutmayın:
- Acele etmeyin, iyi planlayın
- Kaliteden ödün vermeyin
- Deneyimli firmaları tercih edin
- Sadece fiyata değil, referanslara bakın
- Sözleşmeye güvenin

**Mutfak tadilatı için profesyonel destek mi arıyorsunuz?**

Tuğcu İnşaat olarak Beylikdüzü, Esenyurt, Büyükçekmece, Küçükçekmece ve İstanbul genelinde ücretsiz keşif ve detaylı fiyat teklifi için bizimle iletişime geçin.

📞 **Telefon:** 0533 258 24 68 - 0533 235 68 24
🌐 **Web:** www.tugcuinsaat.com.tr

Hayalinizdeki mutfağı birlikte inşa edelim!`
  }
]

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function getRecentPosts(limit: number = 3): BlogPost[] {
  return getAllPosts().slice(0, limit)
}
