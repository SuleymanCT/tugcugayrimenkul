# Tuğcu İnşaat Web Sitesi - Deployment Rehberi

Bu rehber, Tuğcu İnşaat web sitesinin internete nasıl yükleneceğini adım adım anlatmaktadır.

## İçindekiler
1. [Yerel Kurulum](#yerel-kurulum)
2. [Vercel ile Deployment (Önerilen)](#vercel-ile-deployment)
3. [Netlify ile Deployment](#netlify-ile-deployment)
4. [SEO Optimizasyonları](#seo-optimizasyonları)
5. [Google Search Console Kurulumu](#google-search-console-kurulumu)

---

## Yerel Kurulum

### 1. Node.js Kurulumu
- [Node.js](https://nodejs.org/) indirin ve kurun (v18 veya üzeri önerilir)
- Terminal/Command Prompt'ta kontrol edin:
```bash
node --version
npm --version
```

### 2. Projeyi Çalıştırma

```bash
# Proje klasörüne gidin
cd tugcu

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Web sitesi `http://localhost:3000` adresinde açılacaktır.

### 3. Özelleştirme

**Telefon Numaralarını Güncelleyin:**
- `app/components/Navbar.tsx` dosyasında
- `app/components/Hero.tsx` dosyasında
- `app/components/Contact.tsx` dosyasında
- `app/components/Footer.tsx` dosyasında

`+905XXXXXXXXX` yerine kendi numaranızı yazın.

**Instagram ve Sosyal Medya:**
- Tüm komponentlerde `instagram.com/tugcuinsaat` linklerini kendi hesabınızla değiştirin

---

## Vercel ile Deployment (Önerilen - ÜCRETSİZ)

Vercel, Next.js projelerini ücretsiz ve çok kolay bir şekilde yayınlamanızı sağlar.

### 1. GitHub'a Yükleme

```bash
# Git başlat
git init

# Dosyaları ekle
git add .

# Commit yap
git commit -m "Initial commit - Tuğcu İnşaat website"

# GitHub'da yeni bir repository oluşturun ve bağlayın
git remote add origin https://github.com/kullaniciadi/tugcu-insaat.git
git push -u origin main
```

### 2. Vercel Hesabı Oluşturma

1. [Vercel.com](https://vercel.com) adresine gidin
2. "Sign Up" butonuna tıklayın
3. GitHub hesabınızla giriş yapın

### 3. Projeyi Deploy Etme

1. Vercel dashboard'da "Add New Project" butonuna tıklayın
2. GitHub repository'nizi seçin (tugcu-insaat)
3. Framework preset'i otomatik olarak "Next.js" seçilecektir
4. "Deploy" butonuna tıklayın

**5 dakika içinde siteniz canlıda olacak!**

### 4. Özel Domain Bağlama

1. Vercel dashboard'da projenize tıklayın
2. "Settings" -> "Domains" bölümüne gidin
3. Domain adınızı ekleyin (örn: tugcuinsaat.com)
4. Domain sağlayıcınızın (GoDaddy, Hostinger vb.) DNS ayarlarına gidin
5. Vercel'in verdiği DNS kayıtlarını ekleyin

**DNS Kayıtları (örnek):**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## Netlify ile Deployment (Alternatif - ÜCRETSİZ)

### 1. Netlify Hesabı

1. [Netlify.com](https://netlify.com) adresine gidin
2. GitHub ile giriş yapın

### 2. Deploy Etme

1. "Add new site" -> "Import an existing project"
2. GitHub repository'nizi seçin
3. Build ayarları:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. "Deploy site" butonuna tıklayın

---

## SEO Optimizasyonları

### Google Search Console Kurulumu

1. [Google Search Console](https://search.google.com/search-console) adresine gidin
2. "Add Property" butonuna tıklayın
3. Domain adınızı ekleyin (tugcuinsaat.com)
4. Verification kodunu alın

**Verification Kodu Ekleme:**
`app/layout.tsx` dosyasında:
```typescript
verification: {
  google: 'buraya-verification-kodunuzu-yapistirin',
}
```

5. "Verify" butonuna tıklayın
6. Sitemap gönderme: `https://tugcuinsaat.com/sitemap.xml`

### Google Analytics Kurulumu (Opsiyonel)

1. [Google Analytics](https://analytics.google.com) hesabı oluşturun
2. Measurement ID'nizi alın (G-XXXXXXXXXX)
3. Projenize ekleyin:

`app/layout.tsx` dosyasına ekleyin:
```typescript
// Google Analytics
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### Meta Pixel (Facebook/Instagram Ads) - Opsiyonel

Instagram reklamları için Facebook Pixel ekleyin:
```typescript
<Script id="facebook-pixel">
  {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', 'YOUR_PIXEL_ID');
    fbq('track', 'PageView');
  `}
</Script>
```

---

## Önemli SEO İpuçları

### 1. Google My Business
- [Google My Business](https://www.google.com/business/) hesabı oluşturun
- İşletme adı: Tuğcu İnşaat
- Kategori: İnşaat Firması, Tadilat Firması
- Adres: Beylikdüzü, İstanbul
- Fotoğraflar: Tamamlanan projelerinizi ekleyin

### 2. Yerel SEO
Web sitenizde aşağıdaki kelimeleri kullanın:
- İstanbul inşaat
- İstanbul tadilat
- Beylikdüzü tadilat
- Esenyurt tadilat
- Tugcu inşaat

### 3. Backlink Stratejisi
- Yerel dizinlere kayıt olun (sahibinden.com, yandex.com.tr vb.)
- İnşaat bloglarında misafir yazılar yazın
- Müşteri yorumlarını toplayın

### 4. İçerik Stratejisi
Blog yazıları ekleyin:
- "Ev Tadilatı Yaparken Dikkat Edilmesi Gerekenler"
- "Beylikdüzü'nde Tadilat Maliyetleri 2024"
- "İnşaat İzni Nasıl Alınır?"

---

## Performans Optimizasyonu

### 1. Görsel Optimizasyonu
- Tüm görselleri WebP formatına çevirin
- Görselleri 800KB altında tutun

### 2. Lighthouse Skoru
Chrome DevTools'da Lighthouse çalıştırın:
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 100

---

## Yedekleme ve Güvenlik

### 1. GitHub Yedekleme
```bash
# Düzenli olarak güncellemeleri push edin
git add .
git commit -m "Update content"
git push
```

### 2. SSL Sertifikası
- Vercel ve Netlify otomatik olarak SSL sertifikası sağlar
- Siteniz https:// ile çalışacaktır

---

## Destek ve Güncellemeler

### Güncellemeler
```bash
# Bağımlılıkları güncelleyin
npm update

# Next.js güncellemesi
npm install next@latest react@latest react-dom@latest
```

### Sorun Giderme

**Build hatası alıyorsanız:**
```bash
# Cache'i temizleyin
rm -rf .next
npm run build
```

**Deployment sonrası değişiklikler görünmüyorsa:**
- Tarayıcı cache'ini temizleyin
- Vercel/Netlify'da manuel olarak redeploy yapın

---

## Müşteri Kazanma Stratejileri

### 1. WhatsApp Business
- WhatsApp Business hesabı açın
- Otomatik mesajlar ayarlayın
- Hızlı yanıtlar oluşturun

### 2. Instagram Stratejisi
- Günlük proje fotoğrafları paylaşın
- Hashtag kullanın: #istanbulinşaat #beylikdüzütadilat #esenyurttadilat
- Instagram reklamları verin (Beylikdüzü, Esenyurt bölgesi)

### 3. Google Ads
- "istanbul tadilat" anahtar kelimesi için reklam verin
- Yerel reklamlar kullanın
- Budget: Günlük 50-100 TL başlayın

### 4. Müşteri Referansları
- Tamamlanan her projeden fotoğraf alın
- Müşteri testimonial'ları toplayın
- Google yorumları isteyin

---

## Sonuç

Tebrikler! Web siteniz artık canlıda.

**Sıradaki adımlar:**
1. ✅ Domain satın alın (tugcuinsaat.com)
2. ✅ Google Search Console'a ekleyin
3. ✅ Google My Business oluşturun
4. ✅ Instagram hesabını aktif kullanın
5. ✅ İlk müşterilerinizden yorumlar toplayın

**Sorularınız için:**
- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs

---

**NOT:** Telefon numaralarını, e-posta adreslerini ve sosyal medya linklerini güncelledikten sonra web siteniz kullanıma hazır olacaktır!
