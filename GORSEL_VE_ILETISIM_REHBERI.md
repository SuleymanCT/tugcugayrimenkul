# Görsel Güncelleme ve İletişim Formu Rehberi

## 📸 GÖRSELLERİ NASIL GÜNCELLERİM?

Web sitenizdeki görseller şu an **Unsplash** üzerinden çekiliyor (ücretsiz stok fotoğraflar).
Kendi proje fotoğraflarınızı eklemek için:

### YÖN TEM 1: Unsplash Fotoğraflarını Değiştirme (Kolay)

**Hero Bölümü (Ana Sayfa Arka Plan):**
- Dosya: `app/components/Hero.tsx`
- Satır 15:
```typescript
backgroundImage: 'url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070)',
```
- Bu URL'yi değiştirin. Yeni inşaat fotoğrafı için:
  1. [unsplash.com](https://unsplash.com) adresine gidin
  2. "construction site" veya "building construction" arayın
  3. Beğendiğiniz fotoğrafa tıklayın
  4. Sağ tıklayıp "Copy Image Address" deyin
  5. URL'yi yukarıdaki yere yapıştırın

**Projeler Bölümü:**
- Dosya: `app/components/Projects.tsx`
- Satır 8-38 arasında her proje için `image: 'https://...'` satırlarını bulun
- Aynı yöntemle değiştirin

**Hakkımızda Bölümü:**
- Dosya: `app/components/About.tsx`
- Satır 42-48 arasında fotoğraf URL'si var

---

### YÖNTEM 2: Kendi Fotoğraflarınızı Kullanma (Önerilen)

#### 1. Fotoğrafları Hazırlayın

**Önerilen Boyutlar:**
- Hero arka plan: 1920x1080 px (landscape)
- Proje fotoğrafları: 800x600 px
- Hakkımızda: 600x800 px (portrait)

**Format:** JPG veya PNG (WebP daha iyi ama JPG yeterli)

**Boyutlar:** Her fotoğraf 500KB altında olmalı

#### 2. Fotoğrafları Projeye Ekleyin

```bash
# public/images klasörü oluşturun
mkdir public/images
mkdir public/images/projects

# Fotoğrafları buraya kopyalayın:
# public/images/hero-bg.jpg
# public/images/about-team.jpg
# public/images/projects/project-1.jpg
# public/images/projects/project-2.jpg
# vs...
```

#### 3. Kodda Güncelleyin

**Hero Bölümü:**
```typescript
// app/components/Hero.tsx - Satır 15
backgroundImage: 'url(/images/hero-bg.jpg)',
```

**Projeler:**
```typescript
// app/components/Projects.tsx
const projects = [
  {
    title: 'Modern Villa İnşaatı',
    image: '/images/projects/villa-beylikduzu.jpg',  // Kendi fotoğrafınız
    ...
  },
]
```

---

## 📧 İLETİŞİM FORMU NASIL ÇALIŞIYOR?

### Şu Anki Durum: **ÇALIŞMIYOR** ❌

İletişim formu şu an **simülasyon modunda**. Yani:
- Kullanıcı formu doldurduğunda
- "Mesajınız başarıyla gönderildi" mesajı çıkıyor
- **AMA mesaj size ulaşmıyor!**

### Neden Böyle?

Backend (sunucu tarafı) kodu yok. Sadece frontend (tarayıcı tarafı) var.

---

## ✅ İLETİŞİM FORMUNU ÇALIŞIR HALE GETİRME

### YÖNTEM 1: Web3Forms (En Kolay - ÜCRETSİZ)

**1. Web3Forms Hesabı Açın:**
- [web3forms.com](https://web3forms.com) adresine gidin
- "Get Started" tıklayın
- E-posta ile kaydolun
- **Access Key** alacaksınız (örn: `a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6`)

**2. Kodu Güncelleyin:**

`app/components/Contact.tsx` dosyasında satır 18-30:

**Şu anki kod:**
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  // Simulate form submission
  setTimeout(() => {
    setSubmitMessage('Mesajınız başarıyla gönderildi!')
    setIsSubmitting(false)
    setFormData({ name: '', phone: '', email: '', service: '', message: '' })
    setTimeout(() => setSubmitMessage(''), 5000)
  }, 1000)
}
```

**Yeni kod:**
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: 'BURAYA-WEB3FORMS-ACCESS-KEY-YAPIŞTIRIN',
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        service: formData.service,
        message: formData.message,
        subject: `Yeni İletişim: ${formData.name} - ${formData.service}`,
      }),
    })

    if (response.ok) {
      setSubmitMessage('✅ Mesajınız başarıyla gönderildi! 24 saat içinde size dönüş yapacağız.')
      setFormData({ name: '', phone: '', email: '', service: '', message: '' })
    } else {
      setSubmitMessage('❌ Bir hata oluştu. Lütfen telefonla ulaşın: 0533 258 24 68')
    }
  } catch (error) {
    setSubmitMessage('❌ Bir hata oluştu. Lütfen telefonla ulaşın: 0533 258 24 68')
  }

  setIsSubmitting(false)
  setTimeout(() => setSubmitMessage(''), 7000)
}
```

**3. Kaydet ve Test Et:**
```bash
npm run dev
```

Artık form çalışıyor! Mesajlar e-postanıza gelecek! 🎉

---

### YÖNTEM 2: EmailJS (Alternatif - ÜCRETSİZ)

**1. EmailJS Hesabı:**
- [emailjs.com](https://emailjs.com) → Kaydolun
- Gmail ile bağlayın
- Service ID, Template ID ve Public Key alın

**2. Kütüphane Yükleyin:**
```bash
npm install @emailjs/browser
```

**3. Kodu Güncelleyin:**
```typescript
import emailjs from '@emailjs/browser'

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',     // EmailJS'ten alın
      'YOUR_TEMPLATE_ID',    // EmailJS'ten alın
      {
        from_name: formData.name,
        phone: formData.phone,
        email: formData.email,
        service: formData.service,
        message: formData.message,
      },
      'YOUR_PUBLIC_KEY'      // EmailJS'ten alın
    )

    setSubmitMessage('✅ Mesajınız gönderildi!')
    setFormData({ name: '', phone: '', email: '', service: '', message: '' })
  } catch (error) {
    setSubmitMessage('❌ Hata oluştu. Lütfen arayın: 0533 258 24 68')
  }

  setIsSubmitting(false)
}
```

---

### YÖNTEM 3: Resend (Profesyonel - İlk 3000 Email Ücretsiz)

**1. Resend Hesabı:**
- [resend.com](https://resend.com) → Kaydolun
- API Key alın
- Domain doğrulaması yapın (tugcuinsaat.com)

**2. API Route Oluşturun:**

`app/api/contact/route.ts` dosyası oluşturun:
```typescript
import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { name, phone, email, service, message } = await request.json()

  try {
    await resend.emails.send({
      from: 'İletişim Formu <noreply@tugcuinsaat.com>',
      to: 'info@tugcuinsaat.com',
      subject: `Yeni İletişim: ${name} - ${service}`,
      html: `
        <h2>Yeni İletişim Talebi</h2>
        <p><strong>Ad Soyad:</strong> ${name}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Hizmet:</strong> ${service}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
```

**3. Contact.tsx'i Güncelleyin:**
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      setSubmitMessage('✅ Mesajınız gönderildi!')
      setFormData({ name: '', phone: '', email: '', service: '', message: '' })
    } else {
      setSubmitMessage('❌ Hata oluştu.')
    }
  } catch (error) {
    setSubmitMessage('❌ Hata oluştu.')
  }

  setIsSubmitting(false)
}
```

**4. .env.local dosyası oluşturun:**
```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
```

**5. Resend Kütüphanesini Yükleyin:**
```bash
npm install resend
```

---

## 📊 HANGİ YÖNTEMI SEÇMELİYİM?

### Web3Forms ⭐⭐⭐⭐⭐
- **Avantajlar:** En kolay, 5 dakikada hazır, güvenilir
- **Dezavantajlar:** Özelleştirme sınırlı
- **Ücretsiz:** Aylık 250 mesaj
- **ÖNERİLİR:** Başlangıç için mükemmel!

### EmailJS ⭐⭐⭐⭐
- **Avantajlar:** Kolay kurulum, Gmail entegrasyonu
- **Dezavantajlar:** Bazen spam'e düşebilir
- **Ücretsiz:** Aylık 200 mesaj

### Resend ⭐⭐⭐
- **Avantajlar:** Profesyonel, domain'den gönderim
- **Dezavantajlar:** Domain doğrulama gerekli, backend kodu
- **Ücretsiz:** Aylık 3000 mesaj
- **ÖNERİLİR:** Domain aldıktan sonra

---

## 🎨 BRAND RENK KODU

Web sitenizdeki turuncu renk: **#ff9e57**

Diğer renkler:
- Siyah: #000000
- Beyaz: #ffffff
- Açık Turuncu: #ffb074
- Koyu Turuncu: #f05c0a

---

## 🔤 FONTLAR

- **TUĞCU (Logo):** Orbitron (Google Fonts)
- **İnşaat ve Tadilat:** Raleway (Google Fonts)
- **Genel Metin:** Raleway (Google Fonts)

Font değiştirmek isterseniz:
1. [fonts.google.com](https://fonts.google.com) adresine gidin
2. Font seçin
3. `app/layout.tsx` dosyasında import edin

---

## 📱 TELEFON NUMARALARI

Web sitesinde şu numaralar var:
- **Ana:** 0533 258 24 68
- **Yedek:** 0533 235 68 24

Değiştirmek için tüm dosyalarda arayın:
```bash
# Visual Studio Code'da Ctrl+Shift+F
# "0533 258 24 68" arayın ve değiştirin
```

---

## 🚀 SONRAKI ADIMLAR

1. ✅ Görselleri kendi projelerinizle değiştirin
2. ✅ İletişim formunu Web3Forms ile aktif edin
3. ✅ Test edin - kendinize mesaj gönderin
4. ✅ Deploy edin (Vercel'e yükleyin)
5. ✅ Google Search Console'a ekleyin
6. ✅ İlk müşterinizi bekleyin! 🎉

---

## ⚠️ SORUN GİDERME

**"Form gönderilmiyor":**
- Web3Forms Access Key'i doğru mu?
- İnternet bağlantınız var mı?
- Console'da (F12) hata var mı?

**"Görseller yüklenmiyor":**
- Dosya yolu doğru mu? (`/images/...`)
- Dosya adında Türkçe karakter var mı? (olmamalı)
- Dosya boyutu çok büyük mü? (500KB altı olmalı)

**"Renkler değişmiyor":**
- Değişiklikten sonra `npm run dev` yeniden çalıştırdınız mı?
- Tarayıcı cache'ini temizledin mi? (Ctrl+F5)

---

## 📞 YARDIM

Bu rehberi izlediyseniz web siteniz tam çalışır durumda!

Sorun yaşarsanız:
1. Console'u açın (F12 → Console)
2. Hata mesajını okuyun
3. Google'da aratın
4. ChatGPT'ye sorun

**Başarılar! 🎊**
