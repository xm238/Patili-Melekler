const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');
const siteHeader = document.querySelector('.site-header');
const langSwitchers = document.querySelectorAll('[data-lang-switcher]');
const langButtons = document.querySelectorAll('.lang-btn');
const metaDescription = document.getElementById('meta-description');

const LANGS = ['tr', 'en', 'ar'];

const translations = {
  tr: {
    'meta.title': 'Patili Melekler | Premium Pet Kuaför',
    'meta.description': 'Patili Melekler Pet Kuaför Beylikdüzü: premium pet grooming, spa bakım, stil kesim ve sevgi dolu dokunuş.',
    'brand.aria': 'Patili Melekler ana sayfa',
    'nav.aria': 'Ana menü',
    'menu.aria': 'Menüyü aç/kapat',
    'menu.toggleText': 'Menüyü aç/kapat',
    'nav.services': 'Hizmetler',
    'nav.gallery': 'Galeri',
    'nav.reviews': 'Yorumlar',
    'nav.contact': 'İletişim',
    'nav.callNow': 'Hemen Ara',
    'lang.mobileLabel': 'Dil',
    'hero.eyebrow': 'Beylikdüzü, İstanbul',
    'hero.titleTop': 'Patili Dostlarınız İçin',
    'hero.titleBottom': 'Premium Bakım + Stil',
    'hero.lead': 'Patili Melekler, hijyenik bakım alanı ve sevecen ekibiyle dostunuzu sadece temizlemez, karakterine uygun bir stil kazandırır. Hızlı randevu, net iletişim, mutlu patiler.',
    'hero.ctaPhone': 'Telefonla Randevu',
    'hero.ctaInstagram': 'Instagram DM',
    'hero.trustScore': 'Google puanı',
    'hero.trustReviews': 'yorum',
    'hero.trustHours': 'kapanış saati',
    'hero.pill': 'Aynı Gün İçinde Randevu İçin Ara',
    'proof.rating': 'Google Ortalaması',
    'proof.reviews': 'Müşteri Yorumu',
    'proof.shopValue': 'Pet Shop',
    'proof.shopLabel': 'Ürün & Aksesuar',
    'proof.locationValue': 'Beylikdüzü',
    'proof.locationLabel': 'Yakuplu Lokasyon',
    'services.eyebrow': 'Hizmetler',
    'services.title': 'Standart Tıraştan Premium Spa Paketine',
    'services.desc': 'Tüm süreç, tüy yapısına ve karaktere göre planlanır. Aşırı stres yaratmadan, güvenli ekipman ve sabırla çalışılır.',
    'services.card1.title': 'Full Grooming',
    'services.card1.desc': 'Kurutma, tüy açma, vücut/surat kesimi, pati bakımı, kulak-temizlik adımları.',
    'services.card1.li1': 'Irka göre kesim planı',
    'services.card1.li2': 'Temiz ve düzenli görünüm',
    'services.card1.li3': 'Konfor odaklı süreç',
    'services.featured': 'En Çok Tercih Edilen',
    'services.card2.title': 'Royal Spa Care',
    'services.card2.desc': 'Hassas ciltlere uygun banyo, kurutma, detoks dokunuş ve lüks son dokunuş.',
    'services.card2.li1': 'Yumuşak, parlak tüy etkisi',
    'services.card2.li2': 'Koku kontrolü + hijyen',
    'services.card2.li3': 'Fotojenik final',
    'services.card3.title': 'Style Touch',
    'services.card3.desc': 'Renkli kulak/tail dokunuşları, minik stil aksesuarları ve trend görünümler.',
    'services.card3.li1': 'Instagram-ready görünüş',
    'services.card3.li2': 'Güvenli boya seçenekleri',
    'services.card3.li3': 'Kısa süreli deneme stilleri',
    'gallery.eyebrow': 'Galeri',
    'gallery.title': 'Patili Melekler Dokunuşu',
    'gallery.desc': 'Seçili çekimler: gerçek müşteri petleri, gerçek sonuçlar.',
    'pricing.eyebrow': 'Paketler',
    'pricing.title': 'Net, Sade, Dönüşüm Odaklı Fiyatlama',
    'pricing.desc': 'Irk, tüy uzunluğu ve düğüm seviyesine göre fiyat değişebilir. Kesin tutar, kısa bir ön görüşme ile netleşir.',
    'pricing.card1.title': 'Basic Care',
    'pricing.card1.desc': 'Banyo + kurutma + temel tarama',
    'pricing.card2.title': 'Full Groom',
    'pricing.card2.desc': 'Kesim + banyo + kulak/pati bakımı',
    'pricing.card3.title': 'VIP Spa',
    'pricing.card3.desc': 'Full groom + premium spa dokunuşu',
    'reviews.eyebrow': 'Yorumlar',
    'reviews.title': 'Gerçek Deneyimler',
    'reviews.card1.text': '"Üçüncü ziyaretimizdi. Hizmetten çok memnun kaldık. Ekip nazik ve süreç profesyonel ilerliyor."',
    'reviews.card1.meta': 'Google Yorumu',
    'reviews.card2.text': '"Maltipoo\'muzu düzenli götürüyoruz. Hijyen, ilgi ve sonuç kalitesi çok iyi. Gönül rahatlığıyla öneririm."',
    'reviews.card2.meta': 'Google Yorumu',
    'reviews.card3.text': '"Profesyonel ekip, harika bir saç kesimi. Sonuç beklediğimizden de güzel oldu."',
    'reviews.card3.meta': 'Local Guide',
    'contact.eyebrow': 'İletişim',
    'contact.title': 'Randevu İçin Ulaşın',
    'contact.addressLabel': 'Adres:',
    'contact.addressValue': 'Yakuplu, Hürriyet Blv. 38-1 D:28, 34524 Beylikdüzü / İstanbul',
    'contact.phoneLabel': 'Telefon:',
    'contact.instagramLabel': 'Instagram:',
    'contact.hoursLabel': 'Çalışma:',
    'contact.hoursValue': 'Her gün açık, kapanış 22:00',
    'contact.mapCta': 'Yol Tarifi',
    'form.title': 'Hızlı Randevu Formu',
    'form.note': 'Not: Bu form şu an UI placeholder olarak bağlı.',
    'form.nameLabel': 'Ad Soyad',
    'form.petLabel': 'Pet Türü',
    'form.petPlaceholder': 'Örn: Pomeranian',
    'form.serviceLabel': 'Hizmet',
    'form.selectDefault': 'Seçiniz',
    'form.option1': 'Basic Care',
    'form.option2': 'Full Groom',
    'form.option3': 'VIP Spa',
    'form.option4': 'Style Touch',
    'form.messageLabel': 'Ek Not',
    'form.notePlaceholder': 'Saat tercihi, hassasiyet vb.',
    'form.submit': 'Talep Gönder',
    'footer.copy': 'Patili Melekler. Tüm hakları saklıdır.',
    'footer.instagram': 'Instagram',
    'toast.invalid': 'Lütfen zorunlu alanları doldurun.',
    'toast.placeholder': 'UI placeholder: Form backend bağlantısı yakında eklenecek.'
  },
  en: {
    'meta.title': 'Patili Melekler | Premium Pet Grooming',
    'meta.description': 'Patili Melekler Pet Grooming in Beylikduzu: premium grooming, spa care, style cuts, and loving service.',
    'brand.aria': 'Patili Melekler home page',
    'nav.aria': 'Main menu',
    'menu.aria': 'Open or close menu',
    'menu.toggleText': 'Open/close menu',
    'nav.services': 'Services',
    'nav.gallery': 'Gallery',
    'nav.reviews': 'Reviews',
    'nav.contact': 'Contact',
    'nav.callNow': 'Call Now',
    'lang.mobileLabel': 'Language',
    'hero.eyebrow': 'Beylikduzu, Istanbul',
    'hero.titleTop': 'Premium Care For',
    'hero.titleBottom': 'Your Paw Friends',
    'hero.lead': 'Patili Melekler combines hygienic grooming spaces with a caring team to deliver clean, stylish, and stress-aware grooming for every pet.',
    'hero.ctaPhone': 'Book By Phone',
    'hero.ctaInstagram': 'Instagram DM',
    'hero.trustScore': 'Google rating',
    'hero.trustReviews': 'reviews',
    'hero.trustHours': 'closing time',
    'hero.pill': 'Call For Same-Day Appointment',
    'proof.rating': 'Google Rating',
    'proof.reviews': 'Customer Reviews',
    'proof.shopValue': 'Pet Shop',
    'proof.shopLabel': 'Products & Accessories',
    'proof.locationValue': 'Beylikduzu',
    'proof.locationLabel': 'Yakuplu Location',
    'services.eyebrow': 'Services',
    'services.title': 'From Standard Grooming To Premium Spa',
    'services.desc': 'Every process is planned by coat type and pet temperament, using safe tools and a low-stress approach.',
    'services.card1.title': 'Full Grooming',
    'services.card1.desc': 'Drying, detangling, body/face trim, paw care, and ear-cleaning steps.',
    'services.card1.li1': 'Breed-based trim plan',
    'services.card1.li2': 'Clean and polished look',
    'services.card1.li3': 'Comfort-first process',
    'services.featured': 'Most Preferred',
    'services.card2.title': 'Royal Spa Care',
    'services.card2.desc': 'Skin-sensitive bath, drying, detox touch, and luxurious finishing.',
    'services.card2.li1': 'Soft, glossy coat effect',
    'services.card2.li2': 'Odor control + hygiene',
    'services.card2.li3': 'Photo-ready final look',
    'services.card3.title': 'Style Touch',
    'services.card3.desc': 'Creative ear/tail highlights, mini accessories, and trend-forward looks.',
    'services.card3.li1': 'Instagram-ready style',
    'services.card3.li2': 'Safe color options',
    'services.card3.li3': 'Short-term style trials',
    'gallery.eyebrow': 'Gallery',
    'gallery.title': 'Patili Melekler Touch',
    'gallery.desc': 'Selected shots: real customer pets, real results.',
    'pricing.eyebrow': 'Packages',
    'pricing.title': 'Simple, Clear, Conversion-Friendly Pricing',
    'pricing.desc': 'Final price depends on breed, coat length, and matting level. A quick pre-check gives exact pricing.',
    'pricing.card1.title': 'Basic Care',
    'pricing.card1.desc': 'Bath + drying + basic brushing',
    'pricing.card2.title': 'Full Groom',
    'pricing.card2.desc': 'Trim + bath + ear/paw care',
    'pricing.card3.title': 'VIP Spa',
    'pricing.card3.desc': 'Full groom + premium spa touch',
    'reviews.eyebrow': 'Reviews',
    'reviews.title': 'Real Experiences',
    'reviews.card1.text': '"This was our third visit. We were very happy with the service. The team is kind and professional."',
    'reviews.card1.meta': 'Google Review',
    'reviews.card2.text': '"We regularly bring our Maltipoo. Hygiene, attention, and result quality are excellent."',
    'reviews.card2.meta': 'Google Review',
    'reviews.card3.text': '"Professional team, great cut, and an even better result than expected."',
    'reviews.card3.meta': 'Local Guide',
    'contact.eyebrow': 'Contact',
    'contact.title': 'Reach Us For Appointment',
    'contact.addressLabel': 'Address:',
    'contact.addressValue': 'Yakuplu, Hurriyet Blvd. 38-1 D:28, 34524 Beylikduzu / Istanbul',
    'contact.phoneLabel': 'Phone:',
    'contact.instagramLabel': 'Instagram:',
    'contact.hoursLabel': 'Hours:',
    'contact.hoursValue': 'Open daily, closes at 22:00',
    'contact.mapCta': 'Get Directions',
    'form.title': 'Quick Appointment Form',
    'form.note': 'Note: This form is currently connected as a UI placeholder.',
    'form.nameLabel': 'Full Name',
    'form.petLabel': 'Pet Type',
    'form.petPlaceholder': 'Ex: Pomeranian',
    'form.serviceLabel': 'Service',
    'form.selectDefault': 'Select',
    'form.option1': 'Basic Care',
    'form.option2': 'Full Groom',
    'form.option3': 'VIP Spa',
    'form.option4': 'Style Touch',
    'form.messageLabel': 'Extra Note',
    'form.notePlaceholder': 'Preferred time, sensitivities, etc.',
    'form.submit': 'Send Request',
    'footer.copy': 'Patili Melekler. All rights reserved.',
    'footer.instagram': 'Instagram',
    'toast.invalid': 'Please fill in all required fields.',
    'toast.placeholder': 'UI placeholder: Backend form integration will be added soon.'
  },
  ar: {
    'meta.title': 'باتيلي ملكلر | عناية فاخرة للحيوانات الأليفة',
    'meta.description': 'باتيلي ملكلر في بيليك دوزو: عناية وتجميل فاخر، سبا للحيوانات الأليفة، وقصات أنيقة.',
    'brand.aria': 'الصفحة الرئيسية باتيلي ملكلر',
    'nav.aria': 'القائمة الرئيسية',
    'menu.aria': 'فتح أو إغلاق القائمة',
    'menu.toggleText': 'فتح/إغلاق القائمة',
    'nav.services': 'الخدمات',
    'nav.gallery': 'المعرض',
    'nav.reviews': 'التقييمات',
    'nav.contact': 'التواصل',
    'nav.callNow': 'اتصل الآن',
    'lang.mobileLabel': 'اللغة',
    'hero.eyebrow': 'بيليك دوزو، إسطنبول',
    'hero.titleTop': 'عناية فاخرة',
    'hero.titleBottom': 'لأصدقائكم ذوي الفراء',
    'hero.lead': 'باتيلي ملكلر يوفر مساحة نظيفة وفريقاً ودوداً ليمنح حيوانك الأليف مظهراً أنيقاً وعناية مريحة بأعلى جودة.',
    'hero.ctaPhone': 'احجز عبر الهاتف',
    'hero.ctaInstagram': 'رسالة إنستغرام',
    'hero.trustScore': 'تقييم غوغل',
    'hero.trustReviews': 'مراجعة',
    'hero.trustHours': 'وقت الإغلاق',
    'hero.pill': 'اتصل لحجز موعد في نفس اليوم',
    'proof.rating': 'متوسط غوغل',
    'proof.reviews': 'مراجعات العملاء',
    'proof.shopValue': 'متجر الحيوانات',
    'proof.shopLabel': 'منتجات وإكسسوارات',
    'proof.locationValue': 'بيليك دوزو',
    'proof.locationLabel': 'موقع ياكوبلو',
    'services.eyebrow': 'الخدمات',
    'services.title': 'من التجميل القياسي إلى سبا فاخر',
    'services.desc': 'يتم تخطيط كل جلسة حسب نوع الفرو وطبع الحيوان باستخدام أدوات آمنة وبأسلوب منخفض التوتر.',
    'services.card1.title': 'تجميل كامل',
    'services.card1.desc': 'تجفيف، فك التشابك، قص الجسم والوجه، عناية بالمخالب وتنظيف الأذن.',
    'services.card1.li1': 'خطة قص حسب السلالة',
    'services.card1.li2': 'مظهر نظيف وأنيق',
    'services.card1.li3': 'راحة الحيوان أولاً',
    'services.featured': 'الأكثر طلباً',
    'services.card2.title': 'Royal Spa Care',
    'services.card2.desc': 'حمام لطيف للبشرة الحساسة، تجفيف، لمسة ديتوكس وإنهاء فاخر.',
    'services.card2.li1': 'فرو ناعم ولامع',
    'services.card2.li2': 'تحكم بالرائحة + نظافة',
    'services.card2.li3': 'نتيجة جاهزة للصور',
    'services.card3.title': 'Style Touch',
    'services.card3.desc': 'لمسات لونية للأذن/الذيل مع إكسسوارات لطيفة وإطلالات عصرية.',
    'services.card3.li1': 'إطلالة مناسبة لإنستغرام',
    'services.card3.li2': 'خيارات ألوان آمنة',
    'services.card3.li3': 'تجارب ستايل قصيرة',
    'gallery.eyebrow': 'المعرض',
    'gallery.title': 'لمسة باتيلي ملكلر',
    'gallery.desc': 'صور مختارة: حيوانات عملاء حقيقيين ونتائج حقيقية.',
    'pricing.eyebrow': 'الباقات',
    'pricing.title': 'تسعير واضح وبسيط',
    'pricing.desc': 'السعر النهائي يعتمد على السلالة وطول الفرو ومستوى التشابك. يتم التأكيد بعد فحص سريع.',
    'pricing.card1.title': 'Basic Care',
    'pricing.card1.desc': 'حمام + تجفيف + تمشيط أساسي',
    'pricing.card2.title': 'Full Groom',
    'pricing.card2.desc': 'قص + حمام + عناية بالأذن والمخالب',
    'pricing.card3.title': 'VIP Spa',
    'pricing.card3.desc': 'تجميل كامل + لمسة سبا فاخرة',
    'reviews.eyebrow': 'التقييمات',
    'reviews.title': 'تجارب حقيقية',
    'reviews.card1.text': '"هذه زيارتنا الثالثة. الخدمة ممتازة والفريق محترف ولطيف جداً."',
    'reviews.card1.meta': 'مراجعة غوغل',
    'reviews.card2.text': '"نحضر كلبنا المالتيبو بشكل منتظم. النظافة والاهتمام والنتيجة ممتازة."',
    'reviews.card2.meta': 'مراجعة غوغل',
    'reviews.card3.text': '"فريق محترف وقصة رائعة والنتيجة أفضل من المتوقع."',
    'reviews.card3.meta': 'مرشد محلي',
    'contact.eyebrow': 'التواصل',
    'contact.title': 'تواصل معنا للحجز',
    'contact.addressLabel': 'العنوان:',
    'contact.addressValue': 'ياكوبلو، شارع حرّيت 38-1 D:28، 34524 بيليك دوزو / إسطنبول',
    'contact.phoneLabel': 'الهاتف:',
    'contact.instagramLabel': 'إنستغرام:',
    'contact.hoursLabel': 'ساعات العمل:',
    'contact.hoursValue': 'مفتوح يومياً، الإغلاق 22:00',
    'contact.mapCta': 'الاتجاهات',
    'form.title': 'نموذج حجز سريع',
    'form.note': 'ملاحظة: هذا النموذج حالياً واجهة فقط بدون ربط خلفي.',
    'form.nameLabel': 'الاسم الكامل',
    'form.petLabel': 'نوع الحيوان',
    'form.petPlaceholder': 'مثال: Pomeranian',
    'form.serviceLabel': 'الخدمة',
    'form.selectDefault': 'اختر',
    'form.option1': 'Basic Care',
    'form.option2': 'Full Groom',
    'form.option3': 'VIP Spa',
    'form.option4': 'Style Touch',
    'form.messageLabel': 'ملاحظة إضافية',
    'form.notePlaceholder': 'الوقت المفضل، الحساسية، إلخ.',
    'form.submit': 'إرسال الطلب',
    'footer.copy': 'باتيلي ملكلر. جميع الحقوق محفوظة.',
    'footer.instagram': 'إنستغرام',
    'toast.invalid': 'يرجى تعبئة جميع الحقول المطلوبة.',
    'toast.placeholder': 'واجهة فقط: سيتم ربط النموذج بالباك إند قريباً.'
  }
};

let activeLang = 'tr';

const getText = (lang, key) => {
  if (translations[lang] && key in translations[lang]) return translations[lang][key];
  if (key in translations.tr) return translations.tr[key];
  return key;
};

const syncLanguageSwitcher = (lang) => {
  const langIndex = Math.max(0, LANGS.indexOf(lang));

  langSwitchers.forEach((switcher) => {
    switcher.style.setProperty('--lang-index', String(langIndex));
  });

  langButtons.forEach((button) => {
    button.classList.toggle('is-active', button.dataset.lang === lang);
  });
};

const applyTranslations = (lang) => {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = getText(lang, el.dataset.i18n);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    el.setAttribute('placeholder', getText(lang, el.dataset.i18nPlaceholder));
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
    el.setAttribute('aria-label', getText(lang, el.dataset.i18nAriaLabel));
  });

  document.title = getText(lang, 'meta.title');
  if (metaDescription) {
    metaDescription.setAttribute('content', getText(lang, 'meta.description'));
  }
};

const saveLang = (lang) => {
  try {
    localStorage.setItem('patili_lang', lang);
  } catch {
    // no-op
  }
};

const loadLang = () => {
  try {
    return localStorage.getItem('patili_lang');
  } catch {
    return null;
  }
};

const setLanguage = (lang, shouldPersist = true) => {
  if (!LANGS.includes(lang)) return;

  activeLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('rtl', lang === 'ar');

  applyTranslations(lang);
  syncLanguageSwitcher(lang);

  if (shouldPersist) {
    saveLang(lang);
  }
};

langButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setLanguage(button.dataset.lang);
  });
});

const initialLang = loadLang();
setLanguage(LANGS.includes(initialLang) ? initialLang : 'tr', false);

const syncHeaderScrollState = () => {
  if (!siteHeader) return;
  siteHeader.classList.toggle('scrolled', window.scrollY > 6);
};

syncHeaderScrollState();

let headerTicking = false;
window.addEventListener(
  'scroll',
  () => {
    if (headerTicking) return;
    headerTicking = true;

    window.requestAnimationFrame(() => {
      syncHeaderScrollState();
      headerTicking = false;
    });
  },
  { passive: true }
);

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.classList.toggle('is-open', isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.classList.remove('is-open');
    });
  });
}

const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('in-view'));
}

const leadForm = document.getElementById('lead-form');
const toast = document.getElementById('toast');

const showToast = (message) => {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => {
    toast.classList.remove('show');
  }, 2400);
};

if (leadForm) {
  leadForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!leadForm.reportValidity()) {
      showToast(getText(activeLang, 'toast.invalid'));
      return;
    }

    showToast(getText(activeLang, 'toast.placeholder'));
    leadForm.reset();
  });
}

const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}
