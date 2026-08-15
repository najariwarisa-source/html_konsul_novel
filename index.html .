<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NovelConsult — Deep Narrative Architect</title>
<script src="https://cdn.tailwindcss.com"></script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<script>
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          display: ['Fredoka', 'system-ui', 'sans-serif'],
          body: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        },
        colors: {
          cream: '#f6f5f0',
          ink: '#231a3a',
          inksoft: '#4a3f66',
          purple: {
            900: '#3d1a78',
            800: '#4c1d95',
            700: '#5b21b6',
            600: '#6d28d9',
            500: '#7c3aed',
            100: '#e7deff',
          },
          lime: {
            600: '#6fb015',
            500: '#8fce1e',
            400: '#a6dc3f',
            300: '#c3ea78',
            100: '#eaf7d2',
          },
        },
        borderRadius: {
          blob: '42px',
          'blob-lg': '54px',
        },
        boxShadow: {
          soft: '0 20px 45px -20px rgba(61,26,120,0.35)',
          card: '0 18px 34px -26px rgba(35,26,58,0.35)',
        },
      }
    }
  }
</script>
<style>
  body{ font-family:'Plus Jakarta Sans', system-ui, sans-serif; background:#f6f5f0; }
  .font-display{ font-family:'Fredoka', system-ui, sans-serif; }
  ::-webkit-scrollbar{ width:8px; height:8px; }
  ::-webkit-scrollbar-track{ background:transparent; }
  ::-webkit-scrollbar-thumb{ background:#d8d0f0; border-radius:8px; }

  .bg-dots{
    background-image: radial-gradient(rgba(255,255,255,0.4) 1.5px, transparent 1.5px);
    background-size: 24px 24px;
  }
  .bg-dots-purple{
    background-image: radial-gradient(rgba(255,255,255,0.18) 1.4px, transparent 1.4px);
    background-size: 24px 24px;
  }

  @keyframes float{ 0%,100%{ transform:translateY(0);} 50%{ transform:translateY(-12px);} }
  .float{ animation: float 5.5s ease-in-out infinite; }
  @media (prefers-reduced-motion: reduce){ *{ animation-duration:0.001ms !important; transition-duration:0.001ms !important; } }

  .chevron{ transition: transform .25s ease; }
  .rotate-open{ transform: rotate(180deg); }
  .acc-body{ display:grid; grid-template-rows: 0fr; transition: grid-template-rows .35s ease; }
  .acc-body.open{ grid-template-rows: 1fr; }
  .acc-inner{ overflow:hidden; }

  .spinner{
    border: 4px solid rgba(124,58,237,0.15);
    border-top-color: #7c3aed;
    border-radius: 50%;
    animation: spin 0.9s linear infinite;
  }
  @keyframes spin{ to{ transform: rotate(360deg); } }
  .fade-in{ animation: fadein .5s ease both; }
  @keyframes fadein{ from{ opacity:0; transform:translateY(10px);} to{ opacity:1; transform:translateY(0);} }

  select{ color-scheme: light; }
</style>
</head>
<body class="text-ink min-h-screen">

<!-- ================= TOP BAR ================= -->
<div class="max-w-6xl mx-auto px-5 sm:px-8 pt-7">
  <div class="flex items-start justify-between gap-4 flex-wrap-reverse sm:flex-nowrap">

    <!-- lang + profile -->
    <div class="flex items-center gap-3">
      <div id="langSwitch" class="relative flex items-center bg-white rounded-full p-1 text-xs font-bold select-none shadow-card">
        <button data-lang="id" class="lang-btn relative z-10 px-4 py-2 rounded-full transition-colors text-white">ID</button>
        <button data-lang="en" class="lang-btn relative z-10 px-4 py-2 rounded-full transition-colors text-inksoft">EN</button>
        <span id="langPill" class="absolute top-1 left-1 h-[calc(100%-8px)] w-[42px] rounded-full bg-purple-700 transition-transform duration-300"></span>
      </div>
      <button class="w-11 h-11 rounded-full bg-gradient-to-br from-purple-600 to-purple-900 flex items-center justify-center text-sm font-bold text-white shadow-card ring-2 ring-white" title="Profil pengguna">
        NC
      </button>
    </div>

    <!-- brand badge -->
    <div class="flex items-center gap-3 bg-gradient-to-br from-purple-600 to-purple-900 text-white pl-4 pr-6 py-3.5 rounded-b-[26px] rounded-t-2xl shadow-soft">
      <div class="w-11 h-11 rounded-full bg-white/15 border-2 border-white/50 flex items-center justify-center text-xl flex-shrink-0">
        ✍️
      </div>
      <div class="leading-tight">
        <div class="font-display font-semibold text-lg tracking-wide">NOVELCONSULT</div>
        <div class="text-[0.62rem] font-bold tracking-[0.14em] uppercase opacity-85">Deep Narrative Architect</div>
      </div>
    </div>
  </div>

  <!-- nav pill -->
  <nav class="mt-6 bg-white rounded-full p-1.5 flex gap-1 w-fit shadow-card overflow-x-auto max-w-full" aria-label="Navigasi utama">
    <a href="#buat" class="nav-link px-5 py-2.5 rounded-full font-semibold text-sm text-white bg-purple-700 whitespace-nowrap">Buat Outline</a>
    <a href="#hasil" class="nav-link px-5 py-2.5 rounded-full font-semibold text-sm text-inksoft whitespace-nowrap hover:text-purple-700 transition">Hasil</a>
    <a href="#histori" class="nav-link px-5 py-2.5 rounded-full font-semibold text-sm text-inksoft whitespace-nowrap hover:text-purple-700 transition">Histori Ide</a>
  </nav>
</div>

<main class="max-w-6xl mx-auto px-5 sm:px-8 pb-24">

  <!-- ================= HERO + FORM ================= -->
  <section id="buat" class="mt-8 relative">
    <div class="relative bg-gradient-to-br from-lime-400 via-lime-500 to-lime-600 rounded-blob-lg overflow-hidden">
      <div class="absolute inset-0 bg-dots opacity-40 mix-blend-overlay pointer-events-none"></div>

      <div class="relative grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center px-6 sm:px-12 pt-12 pb-16">
        <div>
          <span class="inline-flex items-center gap-2 bg-purple-900 text-white text-xs font-bold tracking-wide px-4 py-2 rounded-full mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse"></span>
            AI OUTLINE BUILDER
          </span>
          <h1 class="font-display font-semibold text-4xl sm:text-5xl leading-[1.05] text-white">
            Novel Consult
            <span class="block text-purple-900">Deep Narrative Architect</span>
          </h1>
          <p class="mt-5 max-w-md text-[#233a06] font-semibold leading-relaxed">
            Susun master plot dan character bible novelmu dalam hitungan detik. Pilih genre dan jumlah bab, biar strukturnya kami rangkai untukmu.
          </p>
        </div>

        <div class="relative justify-self-center lg:justify-self-end w-full max-w-[300px] float">
          <svg viewBox="0 0 420 460" width="100%">
            <ellipse cx="210" cy="430" rx="150" ry="18" fill="rgba(30,20,60,0.12)"/>
            <path d="M132 96c-10-30 6-52 26-46-4 18-8 34-14 50" fill="#5b21b6"/>
            <path d="M280 92c14-28 0-52-20-48 2 18 4 34 8 52" fill="#5b21b6"/>
            <g fill="#9a6ffb">
              <circle cx="150" cy="120" r="10"/>
              <circle cx="270" cy="118" r="11"/>
              <circle cx="118" cy="180" r="9"/>
              <circle cx="305" cy="185" r="10"/>
              <circle cx="130" cy="240" r="9"/>
              <circle cx="298" cy="245" r="9"/>
            </g>
            <path d="M130 160c-26 30-24 90 6 120 10 66 24 118 78 118s70-52 80-118c30-30 32-90 6-120-40-38-130-38-170 0z" fill="#7c3aed"/>
            <path d="M164 210c-10 40 4 96 46 96s58-56 48-96c-20 16-72 16-94 0z" fill="#8a5cf6"/>
            <circle cx="176" cy="196" r="26" fill="#fff"/>
            <circle cx="248" cy="196" r="26" fill="#fff"/>
            <circle cx="182" cy="200" r="13" fill="#4b2e17"/>
            <circle cx="242" cy="200" r="13" fill="#4b2e17"/>
            <circle cx="186" cy="195" r="4" fill="#fff"/>
            <circle cx="246" cy="195" r="4" fill="#fff"/>
            <path d="M182 232c14 26 44 26 58 0 6 20-6 40-29 40s-35-20-29-40z" fill="#2a1740"/>
            <path d="M188 234c10 14 36 14 46 0" stroke="#fff" stroke-width="7" stroke-linecap="round" fill="none"/>
            <ellipse cx="211" cy="252" rx="10" ry="7" fill="#c084fc"/>
            <path d="M150 260c-30-4-46-40-34-64 8-16 30-16 34 6 10-4 20 6 16 20 10 6 8 24-4 30z" fill="#8a5cf6"/>
            <rect x="118" y="150" width="20" height="60" rx="10" fill="#8a5cf6"/>
            <path d="M300 300c30 4 44-20 40-40-4-14-22-16-28-2-12-6-24 4-22 18-10 4-12 18 10 24z" fill="#8a5cf6"/>
            <g transform="translate(150,300)">
              <path d="M0 0c30-14 60-14 90 0v70c-30-14-60-14-90 0z" fill="#4c1d95"/>
              <path d="M180 0c-30-14-60-14-90 0v70c30-14 60-14 90 0z" fill="#4c1d95"/>
              <path d="M2 4c26-10 52-10 86 2v62c-28-12-58-12-86-2z" fill="#f4ede2"/>
              <path d="M178 4c-26-10-52-10-86 2v62c28-12 58-12 86-2z" fill="#f4ede2"/>
              <line x1="90" y1="6" x2="90" y2="70" stroke="#4c1d95" stroke-width="3"/>
            </g>
            <ellipse cx="168" cy="392" rx="30" ry="16" fill="#5b21b6"/>
            <ellipse cx="256" cy="392" rx="30" ry="16" fill="#5b21b6"/>
          </svg>
          <div class="absolute -top-2 -left-4 bg-purple-900 text-white text-xs font-display font-semibold px-4 py-2.5 rounded-2xl rounded-bl-sm shadow-soft">
            Ceritamu dimulai di sini!
          </div>
        </div>
      </div>
    </div>

    <!-- form card floating -->
    <div class="relative -mt-12 mx-2 sm:mx-6 bg-white rounded-blob shadow-soft px-6 sm:px-10 py-8">
      <form id="outlineForm" class="grid sm:grid-cols-[1fr_1fr_auto] gap-4 items-end">
        <div>
          <label class="block text-xs font-bold text-inksoft mb-2 uppercase tracking-wide" for="genre">Genre</label>
          <select id="genre" class="w-full bg-cream border-2 border-purple-100 rounded-2xl px-4 py-3.5 text-sm font-semibold text-ink focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition">
            <option>Fantasi</option>
            <option>Romance</option>
            <option>Thriller</option>
            <option>Sci-Fi</option>
            <option>Drama</option>
            <option>Horor</option>
            <option>Petualangan</option>
            <option>Slice of Life</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-bold text-inksoft mb-2 uppercase tracking-wide" for="chapters">Jumlah Bab</label>
          <select id="chapters" class="w-full bg-cream border-2 border-purple-100 rounded-2xl px-4 py-3.5 text-sm font-semibold text-ink focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition">
            <option value="5">5 Bab</option>
            <option value="10" selected>10 Bab</option>
            <option value="20">20 Bab</option>
          </select>
        </div>
        <button type="submit" id="generateBtn" class="h-[52px] px-7 rounded-full bg-purple-900 hover:bg-purple-800 text-white font-display font-semibold text-sm transition active:scale-[0.98] shadow-soft whitespace-nowrap">
          ✨ Buat Outline
        </button>
      </form>
    </div>
  </section>

  <!-- ================= RESULTS ================= -->
  <section id="hasil" class="mt-20">
    <div class="flex items-center justify-between mb-6 flex-wrap gap-3">
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-purple-600"></span>
        <div>
          <h2 class="font-display text-2xl text-ink font-semibold">Hasil Outline</h2>
          <p class="text-sm text-inksoft mt-0.5">Klik tiap bab untuk lihat detail.</p>
        </div>
      </div>
      <span id="resultMeta" class="hidden text-xs font-bold px-4 py-2 rounded-full bg-purple-900 text-white"></span>
    </div>

    <!-- idle state -->
    <div id="idleState" class="bg-white rounded-blob shadow-card p-14 text-center">
      <div class="float text-5xl mb-4">🪄</div>
      <p class="text-inksoft text-sm max-w-sm mx-auto font-semibold">Belum ada outline. Isi genre dan jumlah bab di atas, lalu klik "Buat Outline" untuk memulai.</p>
    </div>

    <!-- loading state -->
    <div id="loadingState" class="hidden bg-white rounded-blob shadow-card p-14 text-center">
      <div class="spinner w-11 h-11 mx-auto mb-5"></div>
      <p class="font-display text-ink text-lg mb-1">Menyusun narasi<span id="loadingDots">...</span></p>
      <p class="text-inksoft text-sm font-semibold">Merangkai plot, konflik, dan karakter yang koheren.</p>
    </div>

    <!-- results -->
    <div id="resultsState" class="hidden fade-in">
      <div class="grid lg:grid-cols-5 gap-6">
        <!-- master plot -->
        <div class="lg:col-span-3">
          <div class="inline-flex items-center gap-2 bg-lime-400 text-purple-900 font-display font-semibold text-sm px-4 py-2 rounded-full mb-4">
            📖 Master Plot
          </div>
          <div id="outlineList" class="space-y-3"></div>
        </div>

        <!-- character bible -->
        <div class="lg:col-span-2">
          <div class="inline-flex items-center gap-2 bg-purple-100 text-purple-900 font-display font-semibold text-sm px-4 py-2 rounded-full mb-4">
            🎭 Character Bible
          </div>
          <div id="characterList" class="space-y-3"></div>
        </div>
      </div>

      <div class="mt-8 flex justify-center">
        <button id="saveIdeaBtn" class="px-7 py-3.5 rounded-full bg-white border-2 border-purple-100 shadow-card text-sm font-display font-semibold text-purple-900 hover:border-purple-400 hover:bg-purple-50 transition inline-flex items-center gap-2">
          💾 Simpan ke Histori Ide
        </button>
      </div>
    </div>
  </section>

  <!-- ================= HISTORY ================= -->
  <section id="histori" class="mt-20">
    <div class="flex items-center gap-2 mb-1">
      <span class="w-2 h-2 rounded-full bg-purple-600"></span>
      <h2 class="font-display text-2xl text-ink font-semibold">Histori Ide</h2>
    </div>
    <p class="text-sm text-inksoft mb-6 ml-4 font-semibold">Outline yang pernah kamu simpan akan muncul di sini.</p>

    <div id="historyEmpty" class="bg-white rounded-blob shadow-card p-14 text-center">
      <div class="text-5xl mb-4 opacity-90">🗂️</div>
      <p class="text-inksoft text-sm font-semibold">Belum ada ide yang tersimpan.</p>
      <p class="text-inksoft/60 text-xs mt-1">Buat outline lalu klik "Simpan ke Histori Ide" untuk menyimpannya di sini.</p>
    </div>

    <div id="historyList" class="hidden grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>
  </section>

  <!-- ================= SERVICES STRIP (brand touch) ================= -->
  <section class="mt-20 bg-gradient-to-br from-purple-600 to-purple-900 rounded-blob-lg px-6 sm:px-12 py-12 text-white relative overflow-hidden">
    <div class="absolute inset-0 bg-dots-purple pointer-events-none"></div>
    <div class="relative flex flex-col md:flex-row items-center justify-between gap-8">
      <div class="max-w-md text-center md:text-left">
        <h3 class="font-display text-2xl sm:text-3xl font-semibold mb-2">Butuh masukan manusia juga?</h3>
        <p class="text-white/80 leading-relaxed">Kombinasikan outline AI dengan konsultasi langsung bareng pembaca &amp; penulis berpengalaman di Novel Consult.</p>
        <button class="mt-6 inline-flex items-center gap-2 bg-lime-400 hover:bg-lime-300 text-purple-900 font-display font-semibold px-6 py-3 rounded-full transition">
          Mulai Konsultasi
          <span class="w-6 h-6 rounded-full bg-purple-900 flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#a6dc3f" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>
        </button>
      </div>
      <svg viewBox="0 0 300 340" width="180" class="flex-shrink-0">
        <ellipse cx="150" cy="322" rx="110" ry="14" fill="rgba(0,0,0,0.15)"/>
        <path d="M100 60c-6-18 8-32 22-24-2 8-4 16-6 26z" fill="#e6c419"/>
        <path d="M196 58c8-16-2-32-18-28 0 8 2 18 6 30z" fill="#e6c419"/>
        <path d="M90 120c-18 24-16 76 8 100 8 54 22 96 62 96s54-42 62-96c24-24 26-76 8-100-32-30-108-30-140 0z" fill="#8fce1e"/>
        <path d="M118 158c-8 32 4 78 40 78s48-46 40-78c-18 12-62 12-80 0z" fill="#a6dc3f"/>
        <circle cx="150" cy="160" r="34" fill="#fff"/>
        <circle cx="150" cy="165" r="19" fill="#155e63"/>
        <circle cx="157" cy="157" r="6" fill="#fff"/>
        <path d="M126 200c14 20 34 20 48 0 4 16-8 32-24 32s-28-16-24-32z" fill="#2a1740"/>
        <path d="M132 202c10 10 26 10 36 0" stroke="#fff" stroke-width="5" stroke-linecap="round" fill="none"/>
        <ellipse cx="128" cy="300" rx="24" ry="13" fill="#5f8f10"/>
        <ellipse cx="196" cy="300" rx="24" ry="13" fill="#5f8f10"/>
      </svg>
    </div>
  </section>

</main>

<footer class="text-center py-8 text-inksoft/70 text-xs font-semibold">
  &copy; 2026 NovelConsult — Tulisanmu, kita kembangkan.
</footer>

<!-- ================= PWA BANNER ================= -->
<div id="pwaBanner" class="hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-md">
  <div class="bg-white rounded-blob shadow-soft p-4 pr-3 flex items-start gap-3 border-2 border-purple-100">
    <div class="w-11 h-11 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-900 flex items-center justify-center text-lg flex-shrink-0">
      📲
    </div>
    <div class="flex-1 min-w-0">
      <p class="text-sm font-display font-semibold text-ink">Pasang NovelConsult di layar utama</p>
      <p class="text-xs text-inksoft mt-0.5 font-semibold">Akses lebih cepat, seperti aplikasi asli.</p>
    </div>
    <div class="flex items-center gap-1.5 flex-shrink-0">
      <button id="pwaOpenBtn" class="text-xs font-display font-semibold px-3.5 py-2.5 rounded-full bg-purple-900 text-white hover:bg-purple-800 transition">Cara pasang</button>
      <button id="pwaDismissBtn" class="text-xs px-2 py-2 rounded-full text-inksoft/60 hover:text-inksoft transition" aria-label="Tutup">✕</button>
    </div>
  </div>
</div>

<!-- ================= PWA MODAL ================= -->
<div id="pwaModal" class="hidden fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6">
  <div id="pwaOverlay" class="absolute inset-0 bg-purple-900/50 backdrop-blur-sm"></div>
  <div class="relative w-full sm:max-w-md bg-white rounded-t-blob-lg sm:rounded-blob-lg p-6 sm:p-9 shadow-soft fade-in">
    <div class="flex items-center justify-between mb-5">
      <h3 class="font-display text-xl text-ink font-semibold">Tambahkan ke Beranda</h3>
      <button id="pwaCloseBtn" class="w-9 h-9 rounded-full bg-cream hover:bg-purple-100 text-inksoft flex items-center justify-center transition" aria-label="Tutup">✕</button>
    </div>

    <div class="flex gap-2 mb-5 bg-cream rounded-full p-1.5">
      <button data-tab="ios" class="pwa-tab flex-1 text-sm font-display font-semibold py-2.5 rounded-full transition text-white bg-purple-700">🍎 Safari (iOS)</button>
      <button data-tab="android" class="pwa-tab flex-1 text-sm font-display font-semibold py-2.5 rounded-full transition text-inksoft">🤖 Chrome (Android)</button>
    </div>

    <ol id="pwaStepsIOS" class="space-y-3 text-sm text-inksoft font-semibold">
      <li class="flex gap-3"><span class="w-6 h-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>Buka NovelConsult lewat browser Safari.</li>
      <li class="flex gap-3"><span class="w-6 h-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>Ketuk ikon <b class="text-ink">Share</b> (kotak dengan panah ke atas) di bagian bawah layar.</li>
      <li class="flex gap-3"><span class="w-6 h-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>Pilih <b class="text-ink">"Tambah ke Layar Utama"</b>, lalu ketuk <b class="text-ink">Tambah</b>.</li>
    </ol>

    <ol id="pwaStepsAndroid" class="hidden space-y-3 text-sm text-inksoft font-semibold">
      <li class="flex gap-3"><span class="w-6 h-6 rounded-full bg-lime-100 text-lime-600 flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>Buka NovelConsult lewat browser Chrome.</li>
      <li class="flex gap-3"><span class="w-6 h-6 rounded-full bg-lime-100 text-lime-600 flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>Ketuk ikon <b class="text-ink">titik tiga (⋮)</b> di pojok kanan atas.</li>
      <li class="flex gap-3"><span class="w-6 h-6 rounded-full bg-lime-100 text-lime-600 flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>Pilih <b class="text-ink">"Tambahkan ke layar utama"</b>, lalu ketuk <b class="text-ink">Tambahkan</b>.</li>
    </ol>

    <button id="pwaGotItBtn" class="mt-6 w-full py-3.5 rounded-full bg-purple-900 hover:bg-purple-800 text-white text-sm font-display font-semibold transition">
      Mengerti
    </button>
  </div>
</div>

<script src="script.js"></script>
</body>
</html>
