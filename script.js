let generatedData = null;

function scrollToConsult() {
  document.getElementById('konsultasi').scrollIntoView({ behavior: 'smooth' });
}

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
      summary: `Pada Bab ${i}, alur ${genre.toLowerCase()} mulai berkembang tajam memicu aksi utama karakter.`,
      conflict: `Konflik internal dan eksternal yang makin rumit pada Bab ${i}.`,
      goal: `Mencapai resolusi sementara dan mempersiapkan klimaks bab berikutnya.`
    });
  }

  const characters = [
    { name: 'Karakter Utama', role: 'Protagonis', desc: 'Sosok pemberani yang memperjuangkan kebenaran.' },
    { name: 'Karakter Pendukung', role: 'Deuteragonis', desc: 'Setia mendampingi dan memberi bantuan saat krisis.' },
    { name: 'Tokoh Antagonis', role: 'Antagonis', desc: 'Penyebab utama timbulnya konflik dalam cerita.' }
  ];

  return { genre, chaptersCount, chapters, characters };
}

function renderResults(data) {
  const outlineList = document.getElementById('outlineList');
  const characterList = document.getElementById('characterList');
  const resultMeta = document.getElementById('resultMeta');

  resultMeta.textContent = `${data.genre} • ${data.chaptersCount} Bab`;

  outlineList.innerHTML = data.chapters.map(ch => `
    <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
      <div class="font-bold text-sm text-brandPurple">Bab ${ch.number}: ${ch.title}</div>
      <p class="text-xs text-slate-600"><strong>Ringkasan:</strong> ${ch.summary}</p>
      <p class="text-xs text-slate-500"><strong>Konflik:</strong> ${ch.conflict}</p>
    </div>
  `).join('');

  characterList.innerHTML = data.characters.map(c => `
    <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
      <div class="flex items-center justify-between mb-1">
        <h4 class="font-bold text-sm text-slate-800">${c.name}</h4>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-100 text-brandPurple">${c.role}</span>
      </div>
      <p class="text-xs text-slate-500">${c.desc}</p>
    </div>
  `).join('');

  document.getElementById('idleState').classList.add('hidden');
  document.getElementById('loadingState').classList.add('hidden');
  document.getElementById('resultsState').classList.remove('hidden');
}

function getHistory() {
  return JSON.parse(localStorage.getItem('novel_consult_history') || '[]');
}

function saveToHistory(data) {
  const history = getHistory();
  history.unshift({ id: Date.now(), timestamp: new Date().toLocaleDateString('id-ID'), ...data });
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
    <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col justify-between space-y-2">
      <div>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-brandLime text-slate-900">${item.genre}</span>
        <h4 class="font-bold text-sm text-slate-800 mt-2">${item.chaptersCount} Bab Outline</h4>
      </div>
      <button onclick='renderResults(${JSON.stringify(item)})' class="w-full py-1.5 rounded-lg bg-brandPurple text-white text-xs font-bold transition">
        Buka
      </button>
    </div>
  `).join('');
}

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
      }, 800);
    });
  }

  const saveBtn = document.getElementById('saveIdeaBtn');
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      if (generatedData) {
        saveToHistory(generatedData);
        alert('Outline berhasil disimpan!');
      }
    });
  }
});
