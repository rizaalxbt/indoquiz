// Quiz data
const indonesiaQuestions = [
    {
        question: "Apakah makanan khas dari Yogyakarta yang terbuat dari nasi dengan kuah santan dan lauk yang beragam?",
        choices: ["Rawon", "Gudeg", "Soto", "Rendang"],
        answer: 1,
        explanation: "Gudeg adalah makanan khas Yogyakarta yang terbuat dari nangka muda yang dimasak dengan santan dan gula merah hingga berwarna kecoklatan, disajikan dengan nasi dan beragam lauk seperti ayam, telur, dan areh (kuah santan kental)."
    },
    {
        question: "Makanan berbahan dasar daging sapi dengan kuah hitam kental yang merupakan masakan khas Jawa Timur adalah:",
        choices: ["Rawon", "Soto Betawi", "Konro", "Coto Makassar"],
        answer: 0,
        explanation: "Rawon adalah masakan khas Jawa Timur berupa sup daging sapi dengan kuah berwarna hitam kental karena penggunaan kluwek sebagai bumbu utama, memberikan warna hitam yang khas."
    },
    {
        "question": "Pahlawan nasional yang dikenal dengan julukan \"Si Jalak Harupat\" adalah",
        "choices": ["Jenderal Sudirman", "Otto Iskandar Dinata", "Kapitan Pattimura", "Teuku Umar"],
        "answer": 1,
        "explanation": "Otto Iskandar Dinata adalah tokoh pergerakan nasional dari Jawa Barat yang dijuluki \"Si Jalak Harupat\" (burung jalak yang berani). Beliau aktif dalam Partai Indonesia (Partindo) dan dihukum buang ke Boven Digoel karena aktivitas politiknya."
    },
    {
        question: "Makanan khas Padang yang terbuat dari daging sapi yang dimasak dengan rempah-rempah hingga kering adalah:",
        choices: ["Gulai", "Sate Padang", "Rendang", "Dendeng"],
        answer: 2,
        explanation: "Rendang adalah masakan khas Minangkabau (Padang) yang terbuat dari daging sapi yang dimasak dengan aneka rempah dan santan hingga kering dan berwarna kehitaman. Rendang telah diakui UNESCO sebagai Warisan Budaya Tak Benda pada tahun 2011."
    },
    {
        question: "Jajanan tradisional berbentuk bulat dengan isian gula merah dan dibalut tepung beras yang digoreng adalah:",
        choices: ["Klepon", "Onde-onde", "Lemper", "Arem-arem"],
        answer: 1,
        explanation: "Onde-onde adalah kue tradisional berbentuk bulat yang digoreng, dengan isian gula merah di dalamnya dan dibalut dengan tepung beras serta taburan wijen di bagian luarnya."
    },
    {
        question: "Minuman tradisional Indonesia yang terbuat dari cincau, kelapa muda, alpukat, dan susu adalah:",
        choices: ["Es Teler", "Es Campur", "Es Doger", "Es Cendol"],
        answer: 0,
        explanation: "Es Teler adalah minuman segar khas Indonesia yang terdiri dari campuran kelapa muda, alpukat, dan cincau yang disajikan dengan es serut, susu, dan sirup manis. Minuman ini diciptakan oleh Murniati Widjaja pada tahun 1980-an."
    },
    {
        question: "Candi Buddha terbesar di dunia yang terletak di Jawa Tengah adalah:",
        choices: ["Candi Prambanan", "Candi Mendut", "Candi Borobudur", "Candi Sewu"],
        answer: 2,
        explanation: "Candi Borobudur adalah candi Buddha terbesar di dunia yang dibangun pada abad ke-8 dan ke-9 Masehi pada masa kerajaan Mataram Kuno. Terletak di Magelang, Jawa Tengah, dan telah ditetapkan sebagai Warisan Dunia UNESCO pada tahun 1991."
    },
    {
        question: "Taman Nasional dengan spesies komodo yang terletak di Nusa Tenggara Timur adalah:",
        choices: ["Taman Nasional Ujung Kulon", "Taman Nasional Komodo", "Taman Nasional Wakatobi", "Taman Nasional Bunaken"],
        answer: 1,
        explanation: "Taman Nasional Komodo terletak di Nusa Tenggara Timur dan merupakan habitat asli komodo (Varanus komodoensis), kadal terbesar di dunia. Taman ini ditetapkan sebagai Warisan Dunia UNESCO pada tahun 1991."
    },
    {
        question: "Danau terbesar di Indonesia yang terletak di Sumatera Utara adalah:",
        choices: ["Danau Toba", "Danau Maninjau", "Danau Sentani", "Danau Kelimutu"],
        answer: 0,
        explanation: "Danau Toba adalah danau vulkanik terbesar di Indonesia dan Asia Tenggara, serta merupakan danau kaldera terbesar di dunia. Terbentuk dari letusan super gunung berapi sekitar 74.000 tahun lalu dan di tengahnya terdapat Pulau Samosir."
    },
    {
        question: "Taman Nasional yang terkenal dengan orangutan dan terletak di Kalimantan adalah:",
        choices: ["Taman Nasional Gunung Leuser", "Taman Nasional Tanjung Puting", "Taman Nasional Kerinci Seblat", "Taman Nasional Bukit Barisan"],
        answer: 1,
        explanation: "Taman Nasional Tanjung Puting terletak di Kalimantan Tengah dan merupakan kawasan konservasi orangutan yang terkenal dengan Camp Leakey, pusat rehabilitasi orangutan yang didirikan oleh Dr. Biruté Galdikas."
    },
    {
        question: "Tempat wisata di Bali yang terkenal dengan Pura di atas tebing yang menghadap laut adalah:",
        choices: ["Tanah Lot", "Uluwatu", "Besakih", "Ulun Danu Beratan"],
        answer: 1,
        explanation: "Pura Uluwatu (Pura Luhur Uluwatu) adalah pura yang terletak di atas tebing setinggi sekitar 70 meter di atas permukaan laut di ujung barat daya pulau Bali. Tempat ini terkenal dengan pemandangan matahari terbenam yang indah dan pertunjukan tari Kecak."
    },
    {
        question: "Kerajaan Hindu-Buddha terbesar di Nusantara yang berpusat di Jawa Timur adalah",
        choices: ["Kerajaan Sriwijaya", "Kerajaan Majapahit", "Kerajaan Mataram", "Kerajaan Singhasari"],
        answer: 1,
        explanation: "Kerajaan Majapahit adalah kerajaan Hindu-Buddha terbesar di Nusantara yang berdiri dari tahun 1293 hingga awal abad ke-16. Pada masa kejayaannya di bawah Hayam Wuruk dan Patih Gajah Mada, wilayah kekuasaannya mencakup sebagian besar wilayah Asia Tenggara."
    },
    {
        question: "Pada tahun berapa Indonesia memproklamasikan kemerdekaannya?",
        choices: ["1945", "1942", "1949", "1950"],
        answer: 0,
        explanation: "Indonesia memproklamasikan kemerdekaannya pada tanggal 17 Agustus 1945, dibacakan oleh Soekarno didampingi Mohammad Hatta di Jalan Pegangsaan Timur 56 (sekarang Jalan Proklamasi), Jakarta."
    },
    {
        question: "Perjanjian yang mengakui kedaulatan Indonesia oleh Belanda adalah",
        choices: ["Perjanjian Linggarjati", "Perjanjian Renville", "Konferensi Meja Bundar", "Perjanjian Roem-Royen"],
        answer: 2,
        explanation: "Konferensi Meja Bundar diselenggarakan di Den Haag, Belanda pada 23 Agustus - 2 November 1949. Hasilnya adalah pengakuan kedaulatan Indonesia oleh Belanda pada 27 Desember 1949, mengakhiri perjuangan diplomasi Indonesia."
    },
    {
        question: "Kerajaan maritim besar yang menguasai perdagangan di Asia Tenggara pada abad ke-7 hingga ke-13 adalah",
        choices: ["Kerajaan Sriwijaya", "Kerajaan Majapahit", "Kerajaan Tarumanegara", "Kerajaan Mataram"],
        answer: 0,
        explanation: "Kerajaan Sriwijaya adalah kerajaan maritim Buddha yang berpengaruh di Sumatera pada abad ke-7 hingga ke-13. Sriwijaya menguasai jalur perdagangan di Selat Malaka dan menjadi pusat pembelajaran agama Buddha di Asia Tenggara."
    },
    {
        question: "Peristiwa bersejarah pembantaian massal di Indonesia yang terjadi pada tahun 1965 dikenal sebagai",
        choices: ["Gerakan 30 September", "Peristiwa Madiun", "Peristiwa Malari", "Tragedi Trisakti"],
        answer: 0,
        explanation: "Gerakan 30 September 1965 (G30S) adalah peristiwa penculikan dan pembunuhan enam jenderal TNI Angkatan Darat. Peristiwa ini diikuti dengan pembantaian massal terhadap orang-orang yang dituduh terlibat PKI di berbagai daerah di Indonesia."
    },
    {
        question: "Pulau terbesar di Indonesia adalah",
        choices: ["Jawa", "Sumatera", "Kalimantan", "Papua"],
        answer: 2,
        explanation: "Kalimantan adalah pulau terbesar di Indonesia dengan luas sekitar 743,330 km². Pulau ini juga merupakan pulau terbesar ketiga di dunia setelah Greenland dan Papua."
    },
    {
        question: "Batik Indonesia telah diakui UNESCO sebagai",
        choices: ["Warisan Budaya Tak Benda", "Situs Warisan Dunia", "Cagar Biosfer", "Geopark Global"],
        answer: 0,
        explanation: "Batik Indonesia telah diakui oleh UNESCO sebagai Warisan Kemanusiaan untuk Budaya Tak Benda (Intangible Cultural Heritage) pada tanggal 2 Oktober 2009."
    },
    {
        question: "Suku terbesar di Indonesia adalah",
        choices: ["Jawa", "Sunda", "Batak", "Minangkabau"],
        answer: 0,
        explanation: "Suku Jawa adalah suku terbesar di Indonesia dengan populasi sekitar 95 juta jiwa atau sekitar 40% dari total penduduk Indonesia. Mereka terutama tinggal di Pulau Jawa."
    },
    {
        question: "Tari Saman berasal dari provinsi",
        choices: ["Aceh", "Sumatera Utara", "Bali", "Jawa Barat"],
        answer: 0,
        explanation: "Tari Saman berasal dari Gayo, Aceh. Tarian ini dikenal dengan gerakan tepuk tangan yang cepat dan harmonis, serta telah diakui UNESCO sebagai Warisan Budaya Tak Benda."
    },
    {
        question: "Gunung tertinggi di Indonesia adalah",
        choices: ["Gunung Kerinci", "Gunung Rinjani", "Puncak Jaya", "Gunung Semeru"],
        answer: 2,
        explanation: "Puncak Jaya atau Cartensz Pyramid yang terletak di Papua adalah gunung tertinggi di Indonesia dengan ketinggian 4.884 meter di atas permukaan laut."
    },
    {
        question: "Bahasa daerah dengan penutur terbanyak di Indonesia adalah",
        choices: ["Bahasa Jawa", "Bahasa Sunda", "Bahasa Batak", "Bahasa Minangkabau"],
        answer: 0,
        explanation: "Bahasa Jawa adalah bahasa daerah dengan jumlah penutur terbanyak di Indonesia, yaitu sekitar 84 juta orang, terutama di Jawa Tengah, Yogyakarta, dan Jawa Timur."
    },
    {
        question: "Alat musik tradisional Angklung berasal dari",
        choices: ["Jawa Barat", "Bali", "Sumatera Utara", "Sulawesi Selatan"],
        answer: 0,
        explanation: "Angklung adalah alat musik tradisional yang berasal dari Jawa Barat, terbuat dari bambu dan dimainkan dengan cara digoyangkan. Angklung telah diakui UNESCO sebagai Warisan Budaya Tak Benda."
    },
    {
        question: "Wayang Kulit merupakan kesenian tradisional dari daerah",
        choices: ["Jawa", "Bali", "Sumatera", "Kalimantan"],
        answer: 0,
        explanation: "Wayang Kulit merupakan kesenian tradisional dari Jawa yang berupa pertunjukan bayang-bayang boneka yang terbuat dari kulit. UNESCO telah mengakuinya sebagai Warisan Budaya Tak Benda pada tahun 2003."
    },
    {
        question: "Festival Danau Toba adalah acara tahunan yang diselenggarakan di provinsi",
        choices: ["Sumatera Utara", "Sumatera Barat", "Sumatera Selatan", "Aceh"],
        answer: 0,
        explanation: "Festival Danau Toba adalah acara tahunan yang diselenggarakan di provinsi Sumatera Utara, tepatnya di sekitar Danau Toba, untuk mempromosikan pariwisata dan budaya Batak."
    },
    {
        question: "Taman Nasional Lorentz yang terletak di Papua merupakan",
        choices: ["Taman nasional terbesar di Asia Tenggara", "Satu-satunya taman nasional di Indonesia yang memiliki gletser", "Taman nasional dengan biodiversitas tertinggi", "Semua jawaban benar"],
        answer: 3,
        explanation: "Taman Nasional Lorentz adalah taman nasional terbesar di Asia Tenggara, satu-satunya di Indonesia yang memiliki gletser (di Puncak Jaya), dan memiliki biodiversitas yang sangat tinggi karena mencakup ekosistem dari laut hingga pegunungan alpine."
    },
    {
        question: "Raja Ampat terkenal karena",
        choices: ["Terumbu karang dan biodiversitas laut", "Budaya tradisional yang kuat", "Gunung berapi aktif", "Festival musik internasional"],
        answer: 0,
        explanation: "Raja Ampat di Papua Barat terkenal karena keindahan bawah lautnya dengan terumbu karang dan biodiversitas laut yang luar biasa. Wilayah ini merupakan bagian dari Segitiga Terumbu Karang yang dianggap sebagai pusat keanekaragaman hayati laut dunia."
    },
    {
        question: "Monumen Nasional (Monas) di Jakarta dibangun untuk memperingati",
        choices: ["Kemerdekaan Indonesia", "Pahlawan nasional", "Pertempuran Surabaya", "Konferensi Asia Afrika"],
        answer: 0,
        explanation: "Monumen Nasional (Monas) dibangun untuk memperingati perjuangan kemerdekaan Indonesia. Pembangunannya dimulai pada tahun 1961 di bawah pemerintahan Presiden Soekarno dan diresmikan pada tahun 1975."
    },
    {
        question: "Borobudur dibangun pada masa kerajaan",
        choices: ["Sriwijaya", "Mataram Kuno", "Majapahit", "Singhasari"],
        answer: 1,
        explanation: "Candi Borobudur dibangun pada masa Kerajaan Mataram Kuno sekitar abad ke-8 dan ke-9 Masehi, di bawah pemerintahan Dinasti Sailendra yang beragama Buddha."
    },
    {
        question: "Tokoh pahlawan yang dijuluki 'Singa dari Aceh' adalah",
        choices: ["Cut Nyak Dien", "Teuku Umar", "Sultan Iskandar Muda", "Teuku Cik Di Tiro"],
        answer: 1,
        explanation: "Teuku Umar (1854-1899) adalah pahlawan nasional dari Aceh yang dijuluki 'Singa dari Aceh' karena keberaniannya melawan penjajahan Belanda. Ia terkenal dengan strategi berpura-pura bekerja sama dengan Belanda untuk mendapatkan senjata."
    }
];

const solanaQuestions = [
    {
        question: "Siapa pendiri Solana?",
        choices: ["Vitalik Buterin", "Anatoly Yakovenko", "Charles Hoskinson", "Gavin Wood"],
        answer: 1,
        explanation: "Anatoly Yakovenko adalah pendiri Solana. Ia merilis whitepaper Solana pada tahun 2017, yang memperkenalkan Proof of History sebagai solusi untuk masalah sinkronisasi waktu pada blockchain."
    },
    {
        question: "Kapan Solana diluncurkan ke mainnet?",
        choices: ["Maret 2018", "Januari 2019", "Maret 2020", "Januari 2021"],
        answer: 2,
        explanation: "Solana meluncurkan mainnet beta-nya pada Maret 2020, menandai awal dari jaringan Solana yang dapat digunakan secara publik meskipun masih dalam tahap beta."
    },
    {
        question: "Apa nama token asli Solana?",
        choices: ["SOL", "SLN", "SLNA", "SOLAR"],
        answer: 0,
        explanation: "SOL adalah token asli dari blockchain Solana yang digunakan untuk membayar biaya transaksi, staking, dan sebagai token governance dalam ekosistem Solana."
    },
    {
        question: "Apa mekanisme konsensus utama yang digunakan Solana?",
        choices: ["Proof of Work", "Proof of Stake", "Delegated Proof of Stake", "Proof of History"],
        answer: 1,
        explanation: "Solana menggunakan mekanisme konsensus Proof of Stake (PoS), dikombinasikan dengan inovasi Proof of History (PoH) untuk meningkatkan kinerja dan skalabilitas."
    },
    {
        question: "Inovasi utama Solana yang membantu mengatasi masalah timestamp dalam jaringan terdistribusi adalah?",
        choices: ["Sealevel", "Tower BFT", "Turbine", "Proof of History"],
        answer: 3,
        explanation: "Proof of History (PoH) adalah inovasi utama Solana yang menciptakan catatan historis kriptografis untuk membuktikan bahwa suatu peristiwa terjadi pada waktu tertentu. Ini membantu mengatasi masalah penentuan urutan waktu dalam jaringan terdistribusi."
    },
    {
        question: "Berapa kecepatan transaksi teoritis maksimum Solana?",
        choices: ["1,000 TPS", "10,000 TPS", "65,000 TPS", "710,000 TPS"],
        answer: 2,
        explanation: "Solana mengklaim mampu memproses hingga 65,000 transaksi per detik (TPS) pada hardware standar, menjadikannya salah satu blockchain tercepat yang ada saat ini."
    },
    {
        question: "Apa yang memungkinkan Solana mencapai throughput tinggi dan biaya transaksi rendah?",
        choices: ["Jaringan layer-2", "Sharding", "Arsitektur paralel", "Semua jawaban benar"],
        answer: 2,
        explanation: "Arsitektur paralel Solana, terutama melalui teknologi Sealevel, memungkinkan pemrosesan transaksi secara paralel di berbagai core CPU, yang sangat meningkatkan throughput jaringan dan menurunkan biaya transaksi."
    },
    {
        question: "Protokol apa yang digunakan Solana untuk propagasi blok yang efisien?",
        choices: ["Turbine", "Gulf Stream", "Cloudbreak", "Archivers"],
        answer: 0,
        explanation: "Turbine adalah protokol propagasi blok Solana yang terinspirasi oleh BitTorrent, memecah data menjadi paket yang lebih kecil untuk transmisi jaringan yang efisien, yang memungkinkan skalabilitas dan kecepatan yang lebih baik."
    },
    {
    question: "Apa nama struktur data unik dalam Solana?",
    choices: ["Merkle Tree", "State Hashes", "Accounts Model", "Banking Model"],
    answer: 2,
    explanation: "Solana menggunakan sistem Accounts Model, di mana setiap akun menyimpan data dan status, memungkinkan interaksi kompleks antar program."
    },
    {
        question: "Apa istilah untuk validator dalam ekosistem Solana?",
        choices: ["Miners", "Stakers", "Validators", "Nodes"],
        answer: 2,
        explanation: "Dalam ekosistem Solana, node yang berpartisipasi dalam konsensus jaringan dan memvalidasi transaksi disebut sebagai 'Validators' (Validator)."
    },
    {
        question: "Program smart contract di Solana biasanya ditulis dalam bahasa pemrograman apa?",
        choices: ["Solidity", "JavaScript", "Rust", "C++"],
        answer: 2,
        explanation: "Rust adalah bahasa pemrograman utama yang digunakan untuk mengembangkan program smart contract di Solana, dipilih karena keamanan memori dan kinerja tingginya."
    },
    {
        question: "Apa itu Solana Program Library (SPL)?",
        choices: ["Kumpulan token pada blockchain Solana", "Kumpulan program smart contract standard", "Framework untuk mengembangkan dApps", "Sistem file terdistribusi Solana"],
        answer: 1,
        explanation: "Solana Program Library (SPL) adalah kumpulan program smart contract standar pada blockchain Solana, termasuk standar token, sistem nama, dan fungsionalitas lainnya yang memfasilitasi pengembangan dApp."
    },
    {
        question: "Metode apa yang digunakan Solana untuk membiayai pengembangan ekosistemnya?",
        choices: ["ICO", "Presale Token", "Venture Capital", "Semua di atas"],
        answer: 3,
        explanation: "Solana menggunakan berbagai metode pendanaan termasuk ICO awal, presale token privat, dan pendanaan dari berbagai perusahaan venture capital untuk mendukung pengembangan ekosistemnya."
    },
    {
        question: "Apa itu Solana Breakpoint?",
        choices: ["Alat debugging", "Konferensi tahunan Solana", "Hard fork Solana", "Teknologi skalabilitas"],
        answer: 1,
        explanation: "Solana Breakpoint adalah konferensi tahunan utama ekosistem Solana yang menghubungkan pengembang, pendiri, dan investor untuk berbagi pengetahuan dan membangun jaringan dalam komunitas Solana."
    },
    {
        question: "Apa yang membedakan Solana dari blockchain lain dalam hal data akun?",
        choices: ["Data akun disimpan di blockchain", "Data akun disimpan terpisah dari blockchain", "Data akun disimpan di IPFS", "Data akun disimpan di layer-2"],
        answer: 0,
        explanation: "Berbeda dengan beberapa blockchain lain, Solana menyimpan data akun langsung di blockchain itu sendiri, bukan di penyimpanan terpisah, yang memungkinkan akses dan modifikasi data yang lebih cepat."
    },
    {
        question: "Fenomena apa yang kadang terjadi pada jaringan Solana saat beban jaringan tinggi?",
        choices: ["Hard fork", "Congestion", "51% attack", "Dust storm"],
        answer: 1,
        explanation: "Congestion (kemacetan) adalah fenomena yang kadang terjadi pada jaringan Solana saat volume transaksi sangat tinggi, yang dapat menyebabkan pelambatan dan kegagalan transaksi."
    },
    {
        question: "Apa nama wallet Solana yang dikembangkan oleh Solana Labs?",
        choices: ["MetaMask", "Sollet", "Phantom", "Solflare"],
        answer: 2,
        explanation: "Phantom adalah wallet populer untuk Solana yang dikembangkan oleh Solana Labs. Phantom menyediakan antarmuka yang mudah digunakan untuk menyimpan, mengirim, menerima, dan staking SOL serta token SPL lainnya."
    },
    {
        question: "Berapa biaya rata-rata per transaksi di jaringan Solana?",
        choices: ["$1-5", "$0.1-0.5", "$0.01-0.05", "$0.001-0.01"],
        answer: 3,
        explanation: "Biaya transaksi di jaringan Solana sangat rendah, biasanya berkisar antara $0.001 hingga $0.01 per transaksi, yang menjadikannya salah satu blockchain dengan biaya terendah untuk transaksi."
    },
    {
        question: "Apa nama bursa terdesentralisasi (DEX) terbesar di ekosistem Solana?",
        choices: ["Uniswap", "Raydium", "PancakeSwap", "SushiSwap"],
        answer: 1,
        explanation: "Raydium adalah bursa terdesentralisasi (DEX) terbesar yang dibangun di atas Solana, menawarkan swap token, penyediaan likuiditas, dan yield farming dengan biaya rendah dan kecepatan tinggi."
    },
    {
        question: "Apa standar token pada blockchain Solana?",
        choices: ["ERC-20", "ERC-721", "SPL", "BEP-20"],
        answer: 2,
        explanation: "SPL (Solana Program Library) Token adalah standar token pada blockchain Solana, setara dengan ERC-20 di Ethereum. SPL Token memungkinkan pembuatan berbagai jenis token fungible dan non-fungible."
    },
    {
        question: "Apa nama protokol Oracle utama di ekosistem Solana?",
        choices: ["Chainlink", "Pyth Network", "Band Protocol", "API3"],
        answer: 1,
        explanation: "Pyth Network adalah protokol Oracle utama di ekosistem Solana yang menyediakan data harga real-time dari berbagai penyedia data institusional dan pertukaran crypto terkemuka."
    },
    {
        question: "Apa nama program yang digunakan untuk staking SOL?",
        choices: ["Stake Program", "Validation Program", "SOL Staker", "Solana Validator"],
        answer: 0,
        explanation: "Stake Program adalah program bawaan Solana yang memungkinkan pengguna untuk melakukan staking SOL mereka ke validator untuk mendapatkan rewards dan berpartisipasi dalam keamanan jaringan."
    },
    {
        question: "Apa fungsi dari Solana Pay?",
        choices: ["Sistem pembayaran crypto-to-fiat", "Framework untuk transaksi merchant", "Sistem staking otomatis", "DEX terintegrasi"],
        answer: 1,
        explanation: "Solana Pay adalah framework pembayaran yang memungkinkan merchant menerima pembayaran langsung dalam SOL atau token SPL lainnya dengan biaya yang sangat rendah dan penyelesaian instan."
    },
    {
        question: "Apa nama teknologi Solana yang menangani pembuatan akun baru?",
        choices: ["Account Manager", "Solana Allocator", "Rent System", "Cloudbreak"],
        answer: 3,
        explanation: "Cloudbreak adalah teknologi Solana yang menangani penyimpanan dan pembuatan akun secara terdesentralisasi, memungkinkan pembuatan jutaan akun dengan efisien."
    },
    {
        question: "Project NFT terkenal yang dibangun di atas Solana adalah",
        choices: ["CryptoPunks", "Bored Ape Yacht Club", "Degenerate Ape Academy", "CryptoKitties"],
        answer: 2,
        explanation: "Degenerate Ape Academy adalah salah satu project NFT paling terkenal yang dibangun di atas Solana, dengan koleksi 10,000 ape yang unik dan menjadi salah satu pionir NFT di ekosistem Solana."
    },
    {
        question: "Apa nama mekanisme anti-bottleneck pada Solana yang memprediksi transaksi?",
        choices: ["Turbine", "Gulf Stream", "Cloudbreak", "Archivers"],
        answer: 1,
        explanation: "Gulf Stream adalah mekanisme mempool Solana yang memungkinkan validator untuk meneruskan transaksi ke validator lain sebelum blok selesai, sehingga mengurangi bottleneck dan meningkatkan throughput."
    },
    {
        question: "Apa itu Solana Foundation?",
        choices: ["Perusahaan pengembang Solana", "Organisasi nirlaba yang mendukung ekosistem Solana", "DAO yang mengatur Solana", "Konsorsium validator Solana"],
        answer: 1,
        explanation: "Solana Foundation adalah organisasi nirlaba yang bertujuan untuk mendukung pertumbuhan dan keamanan ekosistem Solana melalui pendanaan, edukasi, dan inisiatif komunitas."
    },
    {
        question: "Berapa lama waktu blok rata-rata di Solana?",
        choices: ["10 menit", "15 detik", "400 milidetik", "2 detik"],
        answer: 2,
        explanation: "Solana memiliki waktu blok rata-rata sekitar 400 milidetik, menjadikannya salah satu blockchain tercepat dalam hal finalisasi blok dan konfirmasi transaksi."
    },
    {
        question: "Apa nama program manajemen identitas terdesentralisasi di Solana?",
        choices: ["SolID", "Civic", "Identity.sol", "Solana Identity Framework"],
        answer: 1,
        explanation: "Civic adalah salah satu program manajemen identitas terdesentralisasi utama yang dibangun di atas Solana, menyediakan solusi KYC dan verifikasi identitas yang aman dan privat."
    },
    {
        question: "Apa nama mesin virtual Solana?",
        choices: ["SVM", "Solana VM", "SolVM", "Solana tidak memiliki VM"],
        answer: 3,
        explanation: "Berbeda dengan blockchain seperti Ethereum dengan EVM-nya, Solana tidak menggunakan mesin virtual tradisional. Sebagai gantinya, program Solana dieksekusi langsung oleh runtime BPF (Berkeley Packet Filter) yang sangat efisien."
    }
];

// Global variables
let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;
let answeredQuestions = 0;
let quizType = '';

// DOM Elements
const menuElement = document.getElementById('menu');
const quizElement = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const feedbackElement = document.getElementById('feedback');
const resultsElement = document.getElementById('results');
const finalScoreElement = document.getElementById('final-score');
const scoreMessageElement = document.getElementById('score-message');
const questionCounterElement = document.getElementById('question-counter');
const scoreDisplayElement = document.getElementById('score-display');
const progressBarElement = document.getElementById('progress-bar');
const nextButtonElement = document.getElementById('next-button');

// Start the quiz
function startQuiz(type) {
    quizType = type;
    currentQuiz = type === 'indonesia' ? indonesiaQuestions : solanaQuestions;
    
    // Shuffle all questions
    currentQuiz = shuffleArray(currentQuiz);
    
    currentQuestionIndex = 0;
    score = 0;
    answeredQuestions = 0;
    
    menuElement.classList.add('hidden');
    quizElement.classList.remove('hidden');
    resultsElement.classList.add('hidden');
    
    displayQuestion();
    updateProgressBar();
}

// Display current question
function displayQuestion() {
    const currentQuestion = currentQuiz[currentQuestionIndex];
    
    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = '';
    
    currentQuestion.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.addEventListener('click', () => selectAnswer(index));
        choicesElement.appendChild(button);
    });
    
    feedbackElement.classList.add('hidden');
    nextButtonElement.classList.add('hidden');
    
    // Update question counter
    questionCounterElement.textContent = `Pertanyaan ${currentQuestionIndex + 1}/${currentQuiz.length}`;
    scoreDisplayElement.textContent = `Skor: ${score}`;
}

// Handle answer selection
function selectAnswer(choiceIndex) {
    const currentQuestion = currentQuiz[currentQuestionIndex];
    const isCorrect = choiceIndex === currentQuestion.answer;
    
    // Disable all buttons
    const choiceButtons = choicesElement.querySelectorAll('button');
    choiceButtons.forEach(button => {
        button.disabled = true;
        button.style.pointerEvents = 'none';
    });
    
    // Highlight correct and selected answers
    choiceButtons[currentQuestion.answer].classList.add('correct');
    if (!isCorrect) {
        choiceButtons[choiceIndex].classList.add('incorrect');
    }
    
    // Update score
    if (isCorrect) {
        score++;
        scoreDisplayElement.textContent = `Skor: ${score}`;
    }
    
    // Show feedback
    feedbackElement.textContent = currentQuestion.explanation;
    feedbackElement.classList.remove('hidden');
    
    // Show next button or finish quiz
    nextButtonElement.textContent = 
        currentQuestionIndex < currentQuiz.length - 1 ? 'Pertanyaan Berikutnya' : 'Lihat Hasil';
    nextButtonElement.classList.remove('hidden');
    nextButtonElement.onclick = () => {
        answeredQuestions++;
        
        if (currentQuestionIndex < currentQuiz.length - 1) {
            currentQuestionIndex++;
            displayQuestion();
            updateProgressBar();
        } else {
            finishQuiz();
        }
    };
}

// Update progress bar
function updateProgressBar() {
    const progress = ((currentQuestionIndex) / currentQuiz.length) * 100;
    progressBarElement.style.width = `${progress}%`;
}

// Finish the quiz and show results
function finishQuiz() {
    quizElement.classList.add('hidden');
    resultsElement.classList.remove('hidden');
    
    const percentage = Math.round((score / currentQuiz.length) * 100);
    finalScoreElement.textContent = `${score}/${currentQuiz.length} (${percentage}%)`;
    
    // Provide feedback based on score
    let message = '';
    if (percentage >= 90) {
        message = quizType === 'indonesia' ? 
            'Luar biasa! Anda benar-benar paham tentang Indonesia!' : 
            'Luar biasa! Anda adalah seorang ahli Solana!';
    } else if (percentage >= 70) {
        message = quizType === 'indonesia' ? 
            'Bagus sekali! Pengetahuan Anda tentang Indonesia sangat baik.' : 
            'Bagus sekali! Anda memiliki pemahaman yang kuat tentang Solana.';
    } else if (percentage >= 50) {
        message = quizType === 'indonesia' ? 
            'Cukup baik! Anda memiliki pengetahuan dasar tentang Indonesia.' : 
            'Cukup baik! Anda memiliki pengetahuan dasar tentang Solana.';
    } else {
        message = quizType === 'indonesia' ? 
            'Teruslah belajar tentang Indonesia, negara yang kaya akan budaya dan sejarah!' : 
            'Teruslah belajar tentang Solana, blockchain dengan potensi yang luar biasa!';
    }
    
    scoreMessageElement.textContent = message;
}

// Utility function to shuffle array
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
