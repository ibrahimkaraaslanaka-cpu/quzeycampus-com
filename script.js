/* === QUZEY CAMPUS — Script === */

// Country data
const countries = {
  uk: {
    name: "İngiltere", flag: "🇬🇧", image: "assets/uk.png",
    intro: "İngiltere, İngilizce'nin ana dili olarak konuşulduğu ülkelerden biri olduğu için dil öğrenmek isteyenler için en ideal destinasyonlardan biridir. Günlük hayatın her alanında İngilizceye maruz kalmak, öğrenme sürecini hızlandırır ve kalıcı hale getirir.",
    sections: [
      { title: "İngilizce Öğrenebilir Miyim?", content: `<p>İngiltere'de dil eğitimi genellikle Genel İngilizce, Yoğun İngilizce ve Akademik İngilizce programları üzerinden verilir. Ayrıca IELTS ve TOEFL gibi uluslararası sınavlara hazırlık kursları da oldukça yaygındır.</p><p>Dil eğitimi sürecinde öğrenciler:</p><ul><li>Konuşma (Speaking)</li><li>Dinleme (Listening)</li><li>Okuma (Reading)</li><li>Yazma (Writing) becerilerini dengeli şekilde geliştirir.</li></ul>` },
      { title: "Dil Eğitimi Seçenekleri", content: `<ul><li><strong>Üniversite ve Akademik Programlar:</strong> Uzun dönemli, akademik odaklı ve genellikle sertifika veya diploma ile sonuçlanan programlardır.</li><li><strong>Dil Okulları:</strong> En yaygın tercih edilen seçenektir. Esnek başlangıç tarihleri, farklı süre seçenekleri ve pratik konuşma odaklı eğitim sunar.</li><li><strong>Yaz Okulları:</strong> Özellikle 12–23 yaş arası öğrenciler için uygundur.</li><li><strong>Özel Dersler:</strong> Kişiye özel programlarla hızlı ilerleme imkânı sağlar.</li></ul>` },
      { title: "Süre ve Ücretler", content: `<p><strong>Dil Okulları:</strong> Haftalık ortalama 200 – 450 GBP</p><p><strong>Üniversite Programları:</strong></p><ul><li>Lisans: 3 yıl (bazı bölümlerde 4 yıl)</li><li>Yüksek lisans: 1 yıl</li><li>Yıllık ücretler: 10.000 – 25.000 GBP</li></ul><p>Quzeycampus ile burs ve indirimli program seçenekleri mevcuttur.</p>` },
      { title: "Konaklama Seçenekleri", content: `<ul><li>Öğrenci yurtları</li><li>Aile yanı konaklama (İngilizce pratiği için ideal)</li><li>Paylaşımlı öğrenci evleri</li><li>Stüdyo daireler</li><li>Oteller (kısa süreli konaklama)</li></ul><p>Aylık konaklama maliyetleri ortalama <strong>500 – 1.200 GBP</strong> arasında değişebilir.</p>` },
      { title: "Yaşam Giderleri", content: `<ul><li>Yemek: Günlük 10 – 25 GBP</li><li>Ulaşım: Günlük 3 – 10 GBP</li><li>Sosyal aktiviteler: Orta seviyede</li></ul><p>Ortalama aylık yaşam giderleri: <strong>800 – 1.500 GBP</strong></p>` },
      { title: "Eğitim Almanın Avantajları", content: `<ul><li>İngilizceyi ana dilinde öğrenme fırsatı</li><li>Dünyaca tanınan üniversiteler ve diplomalar</li><li>Kısa sürede tamamlanan yüksek lisans programları</li><li>Uluslararası öğrenci ağı ve global çevre</li><li>Kariyer ve iş fırsatlarına erişim</li></ul>` },
      { title: "Ulaşım", content: `<ul><li>Metro (özellikle Londra'da yaygın)</li><li>Otobüs ve tren ağları</li><li>Öğrenci indirimli ulaşım kartları</li></ul><p>Toplu taşıma düzenli, güvenli ve kolay erişilebilirdir.</p>` },
      { title: "Vize ve Sigorta", content: `<p>Gerekli belgeler:</p><ul><li>Okul kabul belgesi (CAS)</li><li>Geçerli pasaport</li><li>Finansal yeterlilik belgeleri</li><li>İngilizce yeterlilik (gerektiğinde)</li></ul><p>Öğrenciler IHS (Immigration Health Surcharge) ödemesi yapar.</p>` },
      { title: "Çalışma İzni", content: `<p>Üniversite öğrencileri dönem içinde haftada <strong>20 saat</strong> part-time, tatillerde full-time çalışabilir. 6 aydan kısa süreli dil okulu öğrencileri çalışamaz.</p><p>Mezuniyet sonrası Graduate Route vizesi ile İngiltere'de çalışma fırsatı bulunmaktadır.</p><p><strong>Not:</strong> Çalışmak için National Insurance Number almanız gerekmektedir.</p>` }
    ]
  },
  ireland: {
    name: "İrlanda", flag: "🇮🇪", image: "assets/ireland.png",
    intro: "İrlanda, İngilizce'nin resmi dil olarak konuşulduğu ve uluslararası öğrenciler için giderek daha popüler hale gelen bir eğitim rotasıdır. Samimi kültürü ve öğrenci dostu yapısı sayesinde dil öğrenme süreci daha rahat ve hızlı ilerler.",
    sections: [
      { title: "İngilizce Öğrenebilir Miyim?", content: `<p>İrlanda'da dil eğitimi genellikle Genel İngilizce, Yoğun İngilizce, Akademik İngilizce ve IELTS hazırlık programları üzerinden verilir.</p><p>Günlük hayatta sürekli İngilizceye maruz kalmak, öğrencilerin özellikle konuşma becerilerini hızlı şekilde geliştirmesini sağlar.</p>` },
      { title: "Dil Eğitimi Seçenekleri", content: `<ul><li><strong>Üniversite ve Akademik Programlar:</strong> Uzun dönemli, akademik odaklı programlar.</li><li><strong>Dil Okulları:</strong> Esnek başlangıç tarihleri ve pratik konuşma odaklı.</li><li><strong>Yaz Okulları:</strong> Genç öğrenciler için eğitim + kültürel aktiviteler.</li><li><strong>Özel Dersler:</strong> Kişiye özel planlama ile hızlı ilerleme.</li></ul>` },
      { title: "Süre ve Ücretler", content: `<p><strong>Dil Okulları:</strong> Haftalık 150 – 300 EUR</p><p><strong>Üniversite:</strong></p><ul><li>Lisans: 3 – 4 yıl</li><li>Yüksek lisans: 1 – 2 yıl</li><li>Yıllık: 9.000 – 20.000 EUR</li></ul><p>Quzeycampus ile burs ve indirimli seçenekler mevcuttur.</p>` },
      { title: "Konaklama", content: `<ul><li>Öğrenci yurtları</li><li>Aile yanı konaklama</li><li>Paylaşımlı öğrenci evleri</li><li>Stüdyo daireler</li></ul><p>Aylık: <strong>400 – 1.000 EUR</strong></p>` },
      { title: "Yaşam Giderleri", content: `<ul><li>Yemek: Günlük 8 – 20 EUR</li><li>Ulaşım: Günlük 2 – 6 EUR</li></ul><p>Aylık yaşam giderleri: <strong>700 – 1.200 EUR</strong></p>` },
      { title: "Avantajlar", content: `<ul><li>İngilizceyi ana dilinde öğrenme</li><li>Öğrencilere çalışma izni</li><li>Avrupa'da eğitim ve yaşam deneyimi</li><li>Samimi ve güvenli yaşam ortamı</li><li>Uluslararası kariyer fırsatları</li></ul>` },
      { title: "Vize ve Sigorta", content: `<ul><li>Okul kabul belgesi</li><li>Geçerli pasaport</li><li>Finansal yeterlilik</li><li>Sağlık sigortası</li></ul><p>Uzun dönem öğrenciler için oturum izni gereklidir.</p>` },
      { title: "Çalışma İzni", content: `<p>İrlanda bu konuda en avantajlı ülkelerden biridir:</p><ul><li>Haftada <strong>20 saat</strong> part-time çalışma</li><li>Tatil dönemlerinde <strong>40 saat</strong> çalışma hakkı</li><li>Mezuniyet sonrası çalışma ve oturum imkanları</li></ul>` }
    ]
  },
  italy: {
    name: "İtalya", flag: "🇮🇹", image: "assets/italy.png",
    intro: "İtalya, hem dili hem de kültürüyle dünyanın en etkileyici eğitim destinasyonlarından biridir. İtalyanca, özellikle sanat, moda, tasarım, gastronomi ve mimarlık alanlarında büyük öneme sahiptir.",
    sections: [
      { title: "İtalyanca Öğrenebilir Miyim?", content: `<p>İtalya'da dil eğitimi genellikle Genel İtalyanca, Yoğun İtalyanca, Akademik İtalyanca ve CILS / CELI sınav hazırlık programları üzerinden verilir.</p><p>Günlük hayatta İtalyanca konuşulan bir ortamda bulunmak, öğrencilerin dili hızlı ve doğal şekilde öğrenmesini sağlar.</p>` },
      { title: "Dil Eğitimi Seçenekleri", content: `<ul><li><strong>Üniversite ve Akademik Programlar:</strong> Sertifika veya diploma ile sonuçlanan programlar.</li><li><strong>Dil Okulları:</strong> Esnek başlangıç ve konuşma odaklı.</li><li><strong>Yaz Okulları:</strong> Kültürel aktiviteler ve şehir gezileri içerir.</li><li><strong>Özel Dersler:</strong> Kişiye özel hızlı öğrenme.</li></ul>` },
      { title: "Süre ve Ücretler", content: `<p><strong>Dil Okulları:</strong> Haftalık 150 – 300 EUR</p><p><strong>Üniversite:</strong></p><ul><li>Lisans: 3 yıl / Yüksek lisans: 2 yıl</li><li>Yıllık: <strong>1.000 – 4.000 EUR</strong> (devlet üniversitelerinde oldukça uygun)</li></ul><p>Quzeycampus ile burs ve düşük maliyetli fırsatlar mevcuttur.</p>` },
      { title: "Konaklama", content: `<ul><li>Öğrenci yurtları</li><li>Paylaşımlı öğrenci evleri</li><li>Aile yanı konaklama</li><li>Stüdyo daireler</li></ul><p>Aylık: <strong>300 – 800 EUR</strong></p>` },
      { title: "Yaşam Giderleri", content: `<ul><li>Yemek: Günlük 8 – 20 EUR</li><li>Ulaşım: Günlük 1.5 – 5 EUR</li></ul><p>Aylık: <strong>600 – 1.200 EUR</strong></p>` },
      { title: "Avantajlar", content: `<ul><li>Avrupa'nın köklü üniversitelerinde eğitim</li><li>Uygun maliyetli üniversite seçenekleri</li><li>Sanat, moda, tasarım ve mimarlıkta dünya lideri</li><li>Zengin tarih ve kültürel deneyim</li><li>Schengen serbest dolaşım avantajı</li></ul>` },
      { title: "Vize ve Sigorta", content: `<ul><li>Okul kabul belgesi</li><li>Geçerli pasaport</li><li>Finansal yeterlilik</li><li>Sağlık sigortası</li></ul><p>Uzun dönem eğitimlerde oturum izni zorunludur.</p>` },
      { title: "Çalışma İzni", content: `<ul><li>Haftada <strong>20 saat</strong> part-time çalışma izni</li><li>Tatil dönemlerinde tam zamanlı çalışma imkanı</li></ul>` }
    ]
  },
  china: {
    name: "Çin", flag: "🇨🇳", image: "assets/china.png",
    intro: "Çin'de dil eğitimi almak isteyenler için oldukça geniş ve esnek seçenekler bulunmaktadır. Resmi dil Mandarin olup, eğitimler genellikle bu dil üzerinden yürütülür. Pinyin Sistemi ile Latin harfleriyle okuma kolaylaşır.",
    sections: [
      { title: "Çince Öğrenebilir Miyim?", content: `<p>Çince öğreniminde telaffuzu kolaylaştırmak amacıyla "Pinyin Sistemi" aktif olarak kullanılır. Yazı sistemi geleneksel ve sadeleştirilmiş (modern) karakterlerden oluşur.</p>` },
      { title: "Dil Eğitimi Seçenekleri", content: `<ul><li><strong>Üniversite Programları:</strong> Akademik ağırlıklı, sertifika/diploma ile sonuçlanır.</li><li><strong>Dil Okulları:</strong> Kısa süreli, pratik konuşma odaklı.</li><li><strong>Özel Dersler:</strong> Kişiye özel hızlı ilerleme.</li></ul>` },
      { title: "Süre ve Ücretler", content: `<p><strong>Dil Okulları:</strong> Haftalık 200 – 350 USD</p><p><strong>Üniversite:</strong></p><ul><li>Lisans: 4 yıl (hazırlıkla 5 yıl)</li><li>Yüksek lisans: 2-3 yıl</li><li>Yıllık: 2.000 – 10.000 USD</li></ul><p><strong>Quzeycampus ile tam burs imkanları bulunmaktadır.</strong></p>` },
      { title: "Konaklama", content: `<ul><li>Öğrenci yurtları</li><li>Aile yanı konaklama</li><li>Kiralık daireler</li><li>Oteller (kısa süreli)</li></ul><p>Aylık: <strong>200 – 500 USD</strong></p>` },
      { title: "Yaşam Giderleri", content: `<ul><li>Yemek: Günlük 5 – 15 USD</li><li>Ulaşım: 0.5 – 2 USD</li><li>Sosyal aktiviteler: Düşük maliyetli</li></ul>` },
      { title: "Avantajlar", content: `<ul><li>Hızla büyüyen ekonomide kariyer fırsatları</li><li>Dünyanın en çok konuşulan dillerinden birini öğrenme</li><li>Zengin kültür ve tarih</li><li>Uluslararası iş ve ticaret ağlarına erişim</li></ul>` },
      { title: "Vize ve Sigorta", content: `<ul><li>Okul kabul belgesi</li><li>Geçerli pasaport</li><li>Finansal yeterlilik</li><li>Sağlık sigortası (zorunlu)</li></ul>` },
      { title: "Çalışma İzni", content: `<p>Öğrenciler belirli şartlar altında ve resmi izinle yarı zamanlı çalışabilir. Üniversite ve resmi kurum onayı gereklidir.</p>` }
    ]
  },
  korea: {
    name: "Güney Kore", flag: "🇰🇷", image: "assets/korea.png",
    intro: "Güney Kore, eğitim, teknoloji ve popüler kültür alanlarında yükselişiyle uluslararası öğrenciler için oldukça cazip bir ülkedir. Korece öğreniminde kullanılan Hangul alfabesi, öğrenmesi en kolay alfabelerden biridir.",
    sections: [
      { title: "Korece Öğrenebilir Miyim?", content: `<p>Güney Kore'de dil eğitimi genellikle Genel Korece, Yoğun Korece, Akademik Korece ve TOPIK hazırlık programları şeklinde sunulmaktadır.</p><p>Hangul sayesinde kısa sürede okuma ve yazmaya başlayabilirsiniz.</p>` },
      { title: "Dil Eğitimi Seçenekleri", content: `<ul><li><strong>Üniversite Dil Programları:</strong> 3 aylık dönemler halinde, akademik ve disiplinli.</li><li><strong>Dil Okulları:</strong> Esnek ve pratik konuşma odaklı.</li><li><strong>Yaz Okulları:</strong> Kısa süreli + kültürel aktiviteler.</li><li><strong>Özel Dersler:</strong> Kişiye özel hızlı öğrenme.</li></ul>` },
      { title: "Süre ve Ücretler", content: `<p><strong>Dil Programları:</strong> 3 aylık dönem: 1.200 – 2.000 USD</p><p><strong>Üniversite:</strong></p><ul><li>Lisans: 4 yıl / Yüksek lisans: 2 yıl</li><li>Yıllık: 3.000 – 8.000 USD</li></ul><p>Quzeycampus ile burs ve devlet üniversitesi seçenekleri mevcuttur.</p>` },
      { title: "Konaklama", content: `<ul><li>Üniversite yurtları</li><li>Goshiwon (öğrencilere özel küçük odalar)</li><li>Paylaşımlı öğrenci evleri</li><li>Stüdyo daireler</li></ul><p>Aylık: <strong>300 – 700 USD</strong></p>` },
      { title: "Yaşam Giderleri", content: `<ul><li>Yemek: Günlük 5 – 15 USD</li><li>Ulaşım: Günlük 1 – 3 USD</li></ul><p>Aylık: <strong>600 – 1.200 USD</strong></p>` },
      { title: "Avantajlar", content: `<ul><li>Teknoloji ve inovasyonun merkezinde eğitim</li><li>Korece gibi stratejik bir dili öğrenme</li><li>K-pop ve Kore kültürü ile iç içe yaşam</li><li>Uygun maliyetli eğitim</li><li>Uluslararası kariyer fırsatları</li></ul>` },
      { title: "Vize ve Sigorta", content: `<ul><li>Okul kabul belgesi</li><li>Geçerli pasaport</li><li>Finansal yeterlilik</li><li>Sağlık sigortası</li></ul><p>D-4 veya D-2 öğrenci vizesi gereklidir.</p>` },
      { title: "Çalışma İzni", content: `<ul><li>Dil eğitimi öğrencileri belirli süre sonrası part-time çalışabilir</li><li>Üniversite öğrencileri haftada <strong>20 saat</strong> çalışabilir</li><li>Resmi izin gereklidir</li></ul>` }
    ]
  }
};

// Render country content
function renderCountry(key) {
  const c = countries[key];
  const el = document.getElementById('countryContent');
  el.innerHTML = `
    <div class="country-hero"><img src="${c.image}" alt="${c.name}"><div class="country-hero-overlay"><h2>${c.flag} ${c.name}'de Eğitim</h2></div></div>
    <div class="country-body">
      <p class="country-intro">${c.intro}</p>
      <div class="accordion">${c.sections.map((s, i) => `
        <div class="accordion-item${i === 0 ? ' open' : ''}">
          <button class="accordion-header">${s.title}<span class="accordion-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></span></button>
          <div class="accordion-body" style="${i === 0 ? 'max-height:600px' : ''}"><div class="accordion-body-inner">${s.content}</div></div>
        </div>`).join('')}
      </div>
    </div>`;
  // Bind accordion
  el.querySelectorAll('.accordion-header').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const body = item.querySelector('.accordion-body');
      const isOpen = item.classList.contains('open');
      // Close all
      el.querySelectorAll('.accordion-item').forEach(ai => { ai.classList.remove('open'); ai.querySelector('.accordion-body').style.maxHeight = null; });
      if (!isOpen) { item.classList.add('open'); body.style.maxHeight = body.scrollHeight + 'px'; }
    });
  });
}

function selectCountry(key) {
  document.querySelectorAll('.country-tab').forEach(t => t.classList.remove('active'));
  const tab = document.querySelector(`[data-country="${key}"]`);
  if (tab) tab.classList.add('active');
  renderCountry(key);
  document.getElementById('countries').scrollIntoView({ behavior: 'smooth' });
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  // Render default country
  renderCountry('uk');

  // Country tabs
  document.querySelectorAll('.country-tab').forEach(tab => {
    tab.addEventListener('click', () => selectCountry(tab.dataset.country));
  });

  // "Diğer" country checkbox — show/hide text input
  const digerCheckbox = document.querySelector('input[name="country"][value="diger"]');
  const otherRow = document.getElementById('countryOtherRow');
  if (digerCheckbox && otherRow) {
    digerCheckbox.addEventListener('change', () => {
      otherRow.style.display = digerCheckbox.checked ? 'block' : 'none';
      if (!digerCheckbox.checked) document.getElementById('otherCountry').value = '';
    });
  }

  // Navbar scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => { navToggle.classList.remove('active'); navLinks.classList.remove('active'); });
  });

  // Consultation form submit (inline on page)
  document.getElementById('consultForm').addEventListener('submit', e => {
    e.preventDefault();
    const data = {
      name: document.getElementById('fullName').value,
      phone: document.getElementById('phone').value,
      email: document.getElementById('email').value,
      city: document.getElementById('city').value,
      education: [...document.querySelectorAll('input[name="education"]:checked')].map(c => c.value),
      country: [...document.querySelectorAll('input[name="country"]:checked')].map(c => c.value),
      otherCountry: document.getElementById('otherCountry').value
    };
    const submissions = JSON.parse(localStorage.getItem('quzey_submissions') || '[]');
    submissions.push({ ...data, timestamp: new Date().toISOString() });
    localStorage.setItem('quzey_submissions', JSON.stringify(submissions));
    console.log('Form submitted:', data);
    e.target.reset();
    showToast();
  });

  // Contact form
  document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    showToast();
    e.target.reset();
  });

  // Toast
  function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  }

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  reveals.forEach(el => observer.observe(el));

  // WhatsApp float visibility
  const wpFloat = document.getElementById('whatsappFloat');
  window.addEventListener('scroll', () => {
    wpFloat.classList.toggle('visible', window.scrollY > 300);
  });
});
