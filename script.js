// State & Storage
let currentLang = 'id';
let generatedData = null;

// Mock Data Generator
function generateOutlineData(genre, chaptersCount) {
  const titles = {
    'Fantasi': ['Awal Gerbang Dimensi', 'Legenda Pedang Kuno', 'Bisikan Hutan Larangan', 'Penyegelan Roh', 'Takdir Pahlawan'],
    'Romance': ['Pertemuan Tak Terduga', 'Rasa yang Tersembunyi', 'Konflik Kesalahpahaman', 'Keputusan Hati', 'Awal yang Baru'],
    'Thriller': ['Jejak Misterius', 'Teka-Teki Rahasia', 'Ancaman Dalam Bayangan', 'Terjebak di Ruang Gelap', 'Kebenaran Terungkap'],
    'Sci-Fi': ['Sinyal dari Luar Angkasa', 'Kecerdasan Buatan', 'Eksplorasi Galaksi', 'Krisis Realitas', 'Masa Depan Manusia'],
    'Drama': ['Bayang Masa Lalu', 'Rahasia Keluarga', 'Titik Balik Hidup', 'Ujian Persahabatan', 'Kedamaian Hati'],
    'Horor': ['Rumah Tua Berhantu', 'Suara di Kegelapan', 'Ritual Terlarang', 'Teror Tanpa Henti', 'Malam Terakhir'],
    'Petualangan': ['Peta Harta Karun', 'Menyeberangi Samudra', 'Tantangan di Puncak', 'Sahabat Baru', 'Puncak Ekspedisi'],
    'Slice of Life': ['Pagi yang Tenang', 'Cerita di Warung Kopi', 'Hobi Baru', 'Hari Bersama Teman', 'Kenangan Kecil']
  };

  const currentTitles = titles[genre] || titles['Fantasi'];
  const chapters = [];

  for (let i = 1; i <= chaptersCount; i++) {
    const titleBase = currentTitles[(i - 1) % currentTitles.length];
    chapters.push({
      number: i,
      title: `${titleBase} (Bagian ${Math.ceil(i / currentTitles.length)})`,
      summary: `Pada Bab ${i}, fokus cerita berpusat pada dinamika alur ${genre.toLowerCase()} di mana konflik utama mulai berkembang dan memicu aksi karakter.`,
      conflict: `Tantangan eksternal dan keputusan sulit yang harus dihadapi di Bab ${i}.`,
      goal: `Mencapai titik balik cerita dan mempersiapkan klimaks bab berikutnya.`
    });
  }

  const characters = [
    { name: 'Karakter Utama', role: 'Protagonis', desc: 'Sosok pemberani dengan latar belakang kompleks yang mencari jawaban atas tujuan hidupnya.' },
    { name: 'Karakter Pendukung', role: 'Deuteragonis', desc: 'Setia mendampingi protagonis, memberikan sudut pandang dan kekuatan tambahan.' },
    { name: 'Tokoh Antagonis', role: 'Antagonis', desc: 'Penyebab utama timbulnya konflik dan rintangan terbesar dalam cerita.' }
  ];

  return { genre, chaptersCount, chapters, characters };
}

// UI Render Functions
function renderResults(data) {
  const outlineList = document.getElementById('outlineList');
  const characterList = document.getElementById('characterList');
  const resultMeta = document.getElementById('resultMeta');

  resultMeta.textContent = `${data.genre} • ${data.chaptersCount} Bab`;
  resultMeta.classList.remove('hidden');

  // Render Outline Chapters (Accordion)
  outlineList.innerHTML = data.chapters.map((ch, idx) => `
    <div class="bg-white rounded-2xl border-2 border-purple-100 overflow-hidden transition shadow-card">
      <button onclick="toggleAccordion(${idx})" class="w-full text-left px-5 py-4 flex items-center justify-between font-display font-semibold text-ink hover:bg-purple-50/50">
        <span>Bab ${ch.number}: ${ch.title}</span>
        <span id="chevron-${idx}" class="chevron text-purple-700">▼</span>
      </button>
      <div id="acc-body-${idx}" class="acc-body">
        <div class="acc-inner px-5 pb-5 text-sm text-inksoft space-y-2 border-t border-purple-50 pt-3">
          <p><strong>Ringkasan:</strong> ${ch.summary}</p>
          <p><strong>Konflik:</strong> ${ch.conflict}</p>
          <p><strong>Tujuan:</strong> ${ch.goal}</p>
        </div>
      </div>
    </div>
  `).join('');

  // Render Character Bible
  characterList.innerHTML = data.characters.map(c => `
    <div class="bg-white rounded-2xl p-5 border-2 border-purple-100 shadow-card">
      <div class="flex items-center justify-between mb-2">
        <h4 class="font-display font-semibold text-ink">${c.name}</h4>
        <span class="text-xs font-bold px-3 py-1 rounded-full bg-purple-100 text-purple-700">${c.role}</span>
      </div>
      <p class="text-xs text-inksoft leading-relaxed">${c.desc}</p>
    </div>
  `).join('');

  document.getElementById('idleState').classList.add('hidden');
  document.getElementById('loadingState').classList.add('hidden');
  document.getElementById('resultsState').classList.remove('hidden');
}

function toggleAccordion(idx) {
  const body = document.getElementById(`acc-body-${idx}`);
  const chevron = document.getElementById(`chevron-${idx}`);
  if (body && chevron) {
    body.classList.toggle('open');
    chevron.classList.toggle('rotate-open');
  }
}

// History Storage
function getHistory() {
  return JSON.parse(localStorage.getItem('novel_consult_history') || '[]');
}

function saveToHistory(data) {
  const history = getHistory();
  const newItem = { id: Date.now(), timestamp: new Date().toLocaleDateString('id-ID'), ...data };
  history.unshift(newItem);
  localStorage.setItem('novel_consult_history', JSON.stringify(history));
  renderHistory();
}

function renderHistory() {
  const history = getHistory();
  const historyEmpty = document.getElementById('historyEmpty');
  const historyList = document.getElementById('historyList');

  if (history.length === 0) {
    historyEmpty.classList.remove('hidden');
    historyList.classList.add('hidden');
    return;
  }

  historyEmpty.classList.add('hidden');
  historyList.classList.remove('hidden');

  historyList.innerHTML = history.map(item => `
    <div class="bg-white rounded-2xl p-5 border-2 border-purple-100 shadow-card flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-bold px-3 py-1 rounded-full bg-lime-100 text-purple-900">${item.genre}</span>
          <span class="text-xs text-inksoft/60 font-semibold">${item.timestamp}</span>
        </div>
        <h3 class="font-display font-semibold text-ink text-base mb-1">${item.chaptersCount} Bab Outline</h3>
        <p class="text-xs text-inksoft line-clamp-2 mb-4">${item.chapters[0]?.summary || ''}</p>
      </div>
      <button onclick='loadFromHistory(${JSON.stringify(item).replace(/'/g, "&apos;")})' class="w-full py-2 rounded-xl bg-purple-100 hover:bg-purple-200 text-purple-900 font-display text-xs font-semibold transition">
        Buka Outline
      </button>
    </div>
  `).join('');
}

function loadFromHistory(item) {
  generatedData = item;
  renderResults(item);
  document.getElementById('hasil').scrollIntoView({ behavior: 'smooth' });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  renderHistory();

  const form = document.getElementById('outlineForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const genre = document.getElementById('genre').value;
      const chapters = parseInt(document.getElementById('chapters').value, 10);

      document.getElementById('idleState').classList.add('hidden');
      document.getElementById('resultsState').classList.add('hidden');
      document.getElementById('loadingState').classList.remove('hidden');

      setTimeout(() => {
        generatedData = generateOutlineData(genre, chapters);
        renderResults(generatedData);
      }, 1200);
    });
  }

  const saveBtn = document.getElementById('saveIdeaBtn');
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      if (generatedData) {
        saveToHistory(generatedData);
        alert('Outline berhasil disimpan ke Histori Ide!');
      }
    });
  }

  // Language Switcher Logic
  const langBtns = document.querySelectorAll('.lang-btn');
  const langPill = document.getElementById('langPill');
  
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      currentLang = lang;
      
      langBtns.forEach(b => {
        if (b.dataset.lang === lang) {
          b.classList.remove('text-inksoft');
          b.classList.add('text-white');
        } else {
          b.classList.remove('text-white');
          b.classList.add('text-inksoft');
        }
      });

      if (langPill) {
        langPill.style.transform = lang === 'en' ? 'translateX(40px)' : 'translateX(0px)';
      }
    });
  });

  // PWA Banner & Modal Handlers
  const pwaBanner = document.getElementById('pwaBanner');
  const pwaModal = document.getElementById('pwaModal');
  const pwaOpenBtn = document.getElementById('pwaOpenBtn');
  const pwaCloseBtn = document.getElementById('pwaCloseBtn');
  const pwaDismissBtn = document.getElementById('pwaDismissBtn');
  const pwaOverlay = document.getElementById('pwaOverlay');
  const pwaGotItBtn = document.getElementById('pwaGotItBtn');
  const pwaTabs = document.querySelectorAll('.pwa-tab');
  const pwaIOS = document.getElementById('pwaStepsIOS');
  const pwaAndroid = document.getElementById('pwaStepsAndroid');

  if (pwaBanner) setTimeout(() => pwaBanner.classList.remove('hidden'), 2000);

  if (pwaOpenBtn && pwaModal) {
    pwaOpenBtn.addEventListener('click', () => pwaModal.classList.remove('hidden'));
  }

  const closeModal = () => { if (pwaModal) pwaModal.classList.add('hidden'); };
  if (pwaCloseBtn) pwaCloseBtn.addEventListener('click', closeModal);
  if (pwaOverlay) pwaOverlay.addEventListener('click', closeModal);
  if (pwaGotItBtn) pwaGotItBtn.addEventListener('click', closeModal);
  if (pwaDismissBtn && pwaBanner) {
    pwaDismissBtn.addEventListener('click', () => pwaBanner.classList.add('hidden'));
  }

  pwaTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const isIOS = tab.dataset.tab === 'ios';
      pwaTabs.forEach(t => {
        if (t === tab) {
          t.classList.add('bg-purple-700', 'text-white');
          t.classList.remove('text-inksoft');
        } else {
          t.classList.remove('bg-purple-700', 'text-white');
          t.classList.add('text-inksoft');
        }
      });
      if (isIOS) {
        pwaIOS.classList.remove('hidden');
        pwaAndroid.classList.add('hidden');
      } else {
        pwaIOS.classList.add('hidden');
        pwaAndroid.classList.remove('hidden');
      }
    });
  });
});
