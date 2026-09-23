/* =========================================================
   PENGAJIAN PERNIAGAAN SEM 1 — APPLICATION LOGIC
   ========================================================= */

// ──────────────────────────────────────────────
// 1. NOTA DATA (Extracted from PDFs)
// ──────────────────────────────────────────────
const notaData = {
  tajuk1: {
    title: "Perniagaan dan Persekitaran",
    icon: "briefcase",
    sections: {
      "1.1": {
        title: "Perniagaan",
        subsections: {
          "1.1.1": {
            title: "Maksud Perniagaan",
            content: `Perniagaan ialah aktiviti yang melibatkan pembelian dan penjualan barang serta perkhidmatan dengan tujuan memperoleh keuntungan. Ia merangkumi semua aktiviti yang dijalankan oleh individu atau organisasi dalam mengeluarkan, mengedar, dan memasarkan barang serta perkhidmatan untuk memenuhi keperluan dan kehendak pengguna.`
          },
          "1.1.2": {
            title: "Faktor Pengeluaran",
            content: `Faktor pengeluaran merujuk kepada sumber-sumber yang diperlukan untuk mengeluarkan barang dan perkhidmatan. Ia merupakan asas kepada setiap aktiviti perniagaan kerana tanpa faktor-faktor ini, tiada barangan atau perkhidmatan dapat dihasilkan. Terdapat lima faktor pengeluaran utama yang perlu digabungkan secara berkesan oleh usahawan.`,
            faktaKhusus: ["Bahan mentah", "Modal", "Modal insan", "Teknologi", "Keusahawanan"],
            details: [
              { term: "Bahan mentah", desc: "Sumber asli yang diperoleh daripada alam semula jadi seperti tanah, air, mineral, dan hasil hutan yang digunakan sebagai input dalam proses pengeluaran. Bahan mentah terbahagi kepada dua jenis iaitu: (a) Bahan mentah semula jadi — sumber yang wujud secara semula jadi tanpa campur tangan manusia seperti kayu balak, petroleum, bijih timah, getah asli, dan hasil laut. Contoh: Kilang perabot menggunakan kayu balak sebagai bahan mentah utama. (b) Bahan mentah separuh siap — bahan yang telah melalui proses awal tetapi masih memerlukan pemprosesan lanjut sebelum menjadi produk akhir. Contoh: Tepung gandum yang diproses daripada gandum untuk digunakan oleh kilang roti. Kepentingan bahan mentah: Menentukan kualiti produk akhir, mempengaruhi kos pengeluaran, dan memastikan kesinambungan pengeluaran. Kekurangan bahan mentah boleh menyebabkan kenaikan harga dan gangguan pengeluaran." },
              { term: "Modal", desc: "Wang tunai, peralatan, mesin, dan kemudahan yang digunakan untuk mengeluarkan barangan dan perkhidmatan. Modal terbahagi kepada dua jenis: (a) Modal tetap — aset yang digunakan berulang kali dalam proses pengeluaran dan tidak habis digunakan dalam satu kitaran. Contoh: bangunan kilang, mesin, kenderaan, komputer, dan peralatan berat. (b) Modal kerja — wang tunai dan sumber yang digunakan untuk menampung operasi harian perniagaan. Contoh: wang tunai untuk membeli bahan mentah, membayar gaji pekerja, dan membayar bil utiliti. Kepentingan modal: Membolehkan perniagaan memulakan dan mengembangkan operasi, membeli peralatan moden untuk meningkatkan kecekapan, dan menampung perbelanjaan operasi harian. Sumber modal termasuk simpanan sendiri, pinjaman bank, pelaburan, dan modal saham." },
              { term: "Modal insan", desc: "Tenaga kerja atau sumber manusia yang menyumbangkan tenaga fizikal dan mental dalam proses pengeluaran. Modal insan merangkumi: (a) Pekerja mahir — mempunyai kemahiran teknikal dan profesional yang diperoleh melalui pendidikan dan latihan. Contoh: jurutera, akauntan, doktor, pengaturcara. (b) Pekerja separuh mahir — mempunyai kemahiran asas yang diperoleh melalui latihan vokasional. Contoh: juruteknik, pemandu lori, tukang masak. (c) Pekerja tidak mahir — melakukan kerja fizikal yang tidak memerlukan kemahiran khusus. Contoh: buruh binaan, pekerja am kilang. Kepentingan modal insan: Menentukan produktiviti dan kualiti pengeluaran, membawa inovasi dan kreativiti, dan merupakan aset paling bernilai dalam organisasi. Pelaburan dalam modal insan melalui latihan dan pendidikan meningkatkan daya saing perniagaan." },
              { term: "Teknologi", desc: "Kaedah, peralatan, dan sistem yang digunakan untuk meningkatkan kecekapan dan produktiviti dalam pengeluaran. Teknologi merangkumi: (a) Teknologi pengeluaran — mesin dan peralatan automatik yang mempercepatkan proses pengeluaran. Contoh: mesin CNC, robot pemasangan, conveyor belt. (b) Teknologi maklumat — sistem komputer dan perisian yang digunakan untuk pengurusan data dan komunikasi. Contoh: sistem ERP, e-dagang, pengkomputeran awan. (c) Teknologi komunikasi — alat dan platform untuk berkomunikasi dengan pelanggan dan pembekal. Contoh: internet, media sosial, aplikasi mudah alih. Kepentingan teknologi: Meningkatkan kelajuan dan ketepatan pengeluaran, mengurangkan kos operasi jangka panjang, membolehkan inovasi produk baharu, dan meluaskan capaian pasaran melalui teknologi digital." },
              { term: "Keusahawanan", desc: "Keupayaan individu untuk mengenal pasti peluang perniagaan, mengambil risiko, dan menggabungkan faktor-faktor pengeluaran lain untuk menghasilkan barangan dan perkhidmatan. Ciri-ciri keusahawanan termasuk: (a) Kreatif dan inovatif — mampu mencipta produk atau perkhidmatan baharu yang memenuhi keperluan pasaran. (b) Berani mengambil risiko — sanggup menanggung kerugian dan ketidakpastian dalam perniagaan. (c) Berwawasan — mempunyai visi jangka panjang dan strategi untuk mengembangkan perniagaan. (d) Proaktif — sentiasa mencari peluang baharu dan bertindak pantas terhadap perubahan persekitaran. Kepentingan keusahawanan: Menjadi pemangkin kepada pertumbuhan ekonomi, mencipta peluang pekerjaan, mendorong inovasi dalam industri, dan menggabungkan semua faktor pengeluaran secara berkesan. Contoh usahawan berjaya Malaysia: Tan Sri Tony Fernandes (AirAsia), Tan Sri Syed Mokhtar Al-Bukhary." }
            ]
          },
          "1.1.3": {
            title: "Proses Perniagaan",
            content: `Proses perniagaan melibatkan langkah-langkah sistematik dalam mengubah input kepada output yang bernilai.`,
            faktaKhusus: ["Input", "Proses tambah nilai", "Output", "Pemasaran", "Untung atau rugi"],
            details: [
              { term: "Input", desc: "Bahan mentah, tenaga kerja, modal, dan teknologi yang digunakan dalam proses pengeluaran." },
              { term: "Proses tambah nilai", desc: "Aktiviti mengubah input kepada output yang mempunyai nilai lebih tinggi melalui pemprosesan, pemasangan, atau pembungkusan." },
              { term: "Output", desc: "Barang siap atau perkhidmatan yang dihasilkan daripada proses pengeluaran." },
              { term: "Pemasaran", desc: "Aktiviti mempromosikan dan menjual output kepada pengguna sasaran." },
              { term: "Untung atau rugi", desc: "Hasil akhir perniagaan - untung jika hasil jualan melebihi kos, rugi jika kos melebihi hasil jualan." }
            ]
          }
        }
      },
      "1.2": {
        title: "Aktiviti Perniagaan",
        subsections: {
          "1.2a": {
            title: "Aktiviti Perniagaan Berasaskan Pengeluaran",
            faktaKhusus: ["Ekstraktif", "Baranган pengguna", "Barangan industri", "Pembuatan", "Pemasangan"],
            details: [
              { term: "Ekstraktif", desc: "Aktiviti perniagaan yang mengeluarkan bahan mentah daripada sumber semula jadi seperti perlombongan, pembalakan, pertanian, dan perikanan." },
              { term: "Barangan pengguna", desc: "Aktiviti perniagaan yang mengeluarkan barangan untuk kegunaan harian pengguna akhir seperti makanan, pakaian, dan peralatan rumah." },
              { term: "Barangan industri", desc: "Aktiviti perniagaan yang mengeluarkan barangan untuk digunakan oleh perniagaan lain dalam proses pengeluaran seperti mesin, bahan mentah, dan komponen." },
              { term: "Pembuatan", desc: "Aktiviti perniagaan yang melibatkan proses mengubah bahan mentah kepada barang separuh siap atau barang siap melalui proses pengilangan." },
              { term: "Pemasangan", desc: "Aktiviti perniagaan yang menggabungkan bahagian-bahagian atau komponen-komponen untuk menghasilkan satu produk siap." }
            ]
          },
          "1.2b": {
            title: "Aktiviti Perniagaan Berasaskan Perkhidmatan",
            faktaKhusus: ["Peruncitan", "Pemborongan", "Kewangan", "Profesional", "Perhotelan", "Pendidikan", "Gig"],
            details: [
              { term: "Peruncitan", desc: "Aktiviti perniagaan yang menjual pelbagai jenis barang dalam kuantiti yang kecil kepada pengguna akhir. Melibatkan aktiviti peragaan barang, melayan pelanggan dan memberikan khidmat selepas jualan. Contoh: 99 Speedmart." },
              { term: "Pemborongan", desc: "Aktiviti perniagaan yang membeli barang dengan kuantiti yang banyak atau secara pukal daripada pengeluar dan menjual semula dalam kuantiti yang kecil kepada peruncit. Melibatkan aktiviti memecah pukal, membungkus, menjenama dan menghantar barang." },
              { term: "Kewangan", desc: "Aktiviti perniagaan yang menawarkan perkhidmatan kewangan seperti pengumpulan modal, pelaburan ekuiti, penyediaan kemudahan kredit, urus niaga pasaran wang, aktiviti perbankan dan insurans. Contoh: Maybank." },
              { term: "Profesional", desc: "Aktiviti perniagaan yang menawarkan perkhidmatan kepakaran atau kemahiran khusus seperti perakaunan, guaman dan perubatan. Contoh: Ernst & Young." },
              { term: "Perhotelan", desc: "Aktiviti perniagaan yang menawarkan kemudahan penginapan, makanan dan minuman serta kemudahan rekreasi untuk pelancong." },
              { term: "Pendidikan", desc: "Aktiviti perniagaan yang menawarkan perkhidmatan pengajian atau pendidikan dan latihan formal kepada masyarakat. Contoh: Little Caliphs, MC+." },
              { term: "Gig", desc: "Bentuk pekerjaan atau perniagaan di mana individu menawarkan perkhidmatan untuk tempoh masa yang pendek atau berdasarkan kontrak jangka pendek. Pekerja gig bebas dan bekerja mengikut fleksibiliti sendiri. Contoh: Food Panda, Grab, freelancer." }
            ]
          },
          "1.2d": {
            title: "Klasifikasi Perniagaan",
            faktaKhusus: ["Primer", "Sekunder", "Tertiar", "Huluan", "Aliran Pertengahan", "Hiliran", "Domestik", "Antarabangsa"],
            details: [
              { term: "Primer", desc: "Sektor yang terlibat dalam pengekstrakan bahan mentah daripada alam semula jadi seperti pertanian, perlombongan dan perikanan." },
              { term: "Sekunder", desc: "Sektor yang terlibat dalam pemprosesan bahan mentah kepada barang siap atau separuh siap melalui aktiviti pembuatan dan pembinaan." },
              { term: "Tertiar", desc: "Sektor yang terlibat dalam penyediaan perkhidmatan seperti pengangkutan, kewangan, pendidikan dan perubatan." },
              { term: "Huluan", desc: "Aktiviti perniagaan yang berada pada peringkat awal rantaian bekalan seperti pengekstrakan bahan mentah." },
              { term: "Aliran Pertengahan", desc: "Aktiviti perniagaan yang berada di tengah rantaian bekalan seperti pemprosesan dan pengilangan." },
              { term: "Hiliran", desc: "Aktiviti perniagaan yang berada pada peringkat akhir rantaian bekalan seperti pemasaran dan penjualan kepada pengguna." },
              { term: "Domestik", desc: "Perniagaan yang dijalankan di dalam sempadan negara sendiri." },
              { term: "Antarabangsa", desc: "Perniagaan yang dijalankan merentas sempadan negara melibatkan eksport dan import." }
            ]
          },
          "1.2e": {
            title: "Kepentingan Perniagaan Antarabangsa",
            faktaKhusus: ["Tukaran asing", "Pasaran luas", "Pemindahan teknologi", "Pemindahan kepakaran"],
            details: [
              { term: "Tukaran asing", desc: "Perniagaan antarabangsa membolehkan negara memperoleh tukaran asing yang penting untuk mengukuhkan kedudukan ekonomi negara." },
              { term: "Pasaran luas", desc: "Membuka peluang kepada perniagaan untuk memasarkan produk ke pasaran yang lebih luas di peringkat global." },
              { term: "Pemindahan teknologi", desc: "Membolehkan pemindahan teknologi canggih dari negara maju ke negara membangun." },
              { term: "Pemindahan kepakaran", desc: "Membolehkan pemindahan kemahiran dan pengetahuan pakar dari negara lain." }
            ]
          },
          "1.2c": {
            title: "Peranan Sektor dalam Perniagaan",
            details: [
              { term: "Sektor Swasta", desc: "Perniagaan yang dimiliki oleh individu atau sekumpulan individu secara peribadi untuk mendapat keuntungan. Peranan: Mengeluarkan barang dan perkhidmatan, menyumbang pendapatan kerajaan melalui cukai, menyediakan peluang pekerjaan, meneroka kawasan baharu." },
              { term: "Sektor Awam", desc: "Organisasi yang dimiliki, dibiayai dan diuruskan oleh kerajaan untuk kebajikan rakyat. Peranan: Menyediakan infrastruktur, kemudahan asas, menggubal dasar fiskal dan kewangan, menjaga kepentingan pengguna." },
              { term: "Badan Berkanun", desc: "Agensi kerajaan yang diperbadankan di bawah Akta Parlimen. Contoh: LHDN, MARA, FELDA. Peranan: Meningkatkan kecekapan perkhidmatan awam, melaksanakan dasar kerajaan." },
              { term: "GLC (Syarikat Berkaitan Kerajaan)", desc: "Syarikat di mana kerajaan mempunyai kepentingan saham atau kawalan. Contoh: Petronas, Tenaga Nasional. Peranan: Menjana pendapatan kerajaan, menyediakan perkhidmatan strategik." }
            ]
          }
        }
      },
      "1.3": {
        title: "Persekitaran Perniagaan",
        subsections: {
          "1.3.1": {
            title: "Faktor Persekitaran Umum",
            faktaKhusus: ["Ekonomi", "Persaingan dan jaringan", "Sosiobudaya", "Politik dan perundangan", "Teknologi", "Prasarana", "Antarabangsa"],
            details: [
              { term: "Ekonomi", desc: "Keadaan ekonomi seperti kadar inflasi, pertumbuhan KDNK, kadar pengangguran dan kadar faedah yang mempengaruhi aktiviti perniagaan. Contoh: Kemelesetan ekonomi mengurangkan kuasa beli pengguna." },
              { term: "Persaingan dan jaringan", desc: "Tahap persaingan dalam industri dan hubungan jaringan antara perniagaan. Persaingan yang sihat meningkatkan kecekapan dan memberi manfaat kepada pengguna." },
              { term: "Sosiobudaya", desc: "Nilai, kepercayaan, adat resam, gaya hidup dan demografi masyarakat yang mempengaruhi permintaan produk. Contoh: Peningkatan kesedaran kesihatan meningkatkan permintaan makanan organik." },
              { term: "Politik dan perundangan", desc: "Kestabilan politik, dasar kerajaan, dan undang-undang yang mempengaruhi operasi perniagaan. Contoh: Pengenaan cukai meningkatkan harga barangan." },
              { term: "Teknologi", desc: "Kaedah atau peralatan yang digunakan untuk melaksanakan aktiviti perniagaan. Perkembangan teknologi mempercepatkan pengeluaran dan menjimatkan kos." },
              { term: "Prasarana", desc: "Kemudahan infrastruktur asas seperti jalan raya, pelabuhan, lapangan terbang, bekalan elektrik dan telekomunikasi yang memudahkan aktiviti perniagaan." },
              { term: "Antarabangsa", desc: "Faktor global seperti perjanjian perdagangan, dasar perdagangan antara negara, dan mobiliti buruh asing yang mempengaruhi perniagaan." }
            ]
          },
          "1.3.2": {
            title: "Faktor Persekitaran Tugas",
            faktaKhusus: ["Pelanggan", "Pembekal", "Pembiaya", "Pemodal/pelabur", "Pesaing", "Kerajaan", "Pekerja", "Masyarakat"],
            details: [
              { term: "Pelanggan", desc: "Pihak yang membeli produk dan perkhidmatan. Pelanggan menentukan jenis produk yang perlu ditawarkan. Permintaan dan perubahan citarasa pelanggan mempengaruhi keupayaan syarikat beroperasi." },
              { term: "Pembekal", desc: "Pihak yang membekalkan input, bahan mentah, barang separuh siap dan barang siap. Penghantaran bekalan berterusan membolehkan operasi berjalan lancar." },
              { term: "Pembiaya", desc: "Pihak yang menyediakan sumber kewangan seperti bank dan institusi kewangan untuk membiayai operasi perniagaan." },
              { term: "Pemodal/pelabur", desc: "Pihak yang menyumbangkan modal ke dalam perniagaan dan mengharapkan pulangan yang baik daripada pelaburan." },
              { term: "Pesaing", desc: "Perniagaan lain dalam industri yang sama yang mengeluarkan barang atau perkhidmatan hampir sama. Persaingan yang sihat meningkatkan kecekapan pengeluaran." },
              { term: "Kerajaan", desc: "Pihak yang mentadbir negara, menggubal dan menguatkuasakan undang-undang perniagaan. Pengenaan cukai tinggi mengurangkan keuntungan perniagaan." },
              { term: "Pekerja", desc: "Individu atau tenaga kerja yang menyumbangkan tenaga dan kepakaran. Prestasi pekerja mempengaruhi kualiti pengeluaran." },
              { term: "Masyarakat", desc: "Penduduk setempat yang mempengaruhi perniagaan melalui kuasa beli, pandangan terhadap imej perniagaan dan tanggungjawab sosial." }
            ]
          },
          "1.3.3": {
            title: "Entiti Perniagaan",
            faktaKhusus: ["Milikan tunggal", "Perkongsian", "Syarikat", "Koperasi"],
            details: [
              {
                term: "Milikan Tunggal",
                desc: "Perniagaan yang ditubuhkan, dimiliki dan diuruskan oleh seorang individu sahaja. Ditubuhkan di bawah Akta Pendaftaran Perniagaan 1956 dan berdaftar dengan SSM.",
                ciri: { "Milikan": "Seorang individu", "Modal": "Tabungan sendiri atau pinjaman keluarga", "Pengurusan": "Pemilik sendiri", "Liabiliti": "Tidak terhad", "Agihan untung rugi": "Ditanggung sendiri", "Cukai": "Cukai pendapatan perseorangan" }
              },
              {
                term: "Perkongsian",
                desc: "Perniagaan yang ditubuhkan, dimiliki dan diuruskan oleh dua hingga dua puluh orang pekongsi (kecuali perkongsian profesional). Ditubuhkan di bawah Akta Perkongsian 1961.",
                ciri: { "Milikan": "2-20 orang rakan kongsi", "Modal": "Sumbangan rakan kongsi", "Pengurusan": "Rakan kongsi aktif", "Liabiliti": "Tidak terhad (kecuali rakan kongsi berhad)", "Agihan untung rugi": "Mengikut perjanjian perkongsian", "Cukai": "Cukai pendapatan perseorangan" }
              },
              {
                term: "Syarikat",
                desc: "Entiti perniagaan yang mempunyai identiti yang berasingan daripada pemiliknya (entiti undang-undang berasingan). Ditubuhkan di bawah Akta Syarikat 2016 dan berdaftar dengan SSM.",
                ciri: { "Milikan": "Pemegang saham", "Modal": "Jualan saham", "Pengurusan": "Lembaga pengarah", "Liabiliti": "Terhad kepada sumbangan modal", "Agihan untung rugi": "Dividen kepada pemegang saham", "Cukai": "Cukai korporat" }
              },
              {
                term: "Koperasi",
                desc: "Pertubuhan yang ditubuhkan secara sukarela oleh sekumpulan orang untuk memenuhi keperluan ekonomi, sosial dan budaya ahli-ahlinya. Ditubuhkan di bawah Akta Koperasi 1993.",
                ciri: { "Milikan": "Ahli-ahli koperasi", "Modal": "Yuran dan syer ahli", "Pengurusan": "Lembaga pengarah dipilih ahli", "Liabiliti": "Terhad kepada syer", "Agihan untung rugi": "Dividen mengikut syer", "Cukai": "Dikecualikan (pendapatan <RM300k)" }
              }
            ]
          }
        }
      }
    }
  },
  tajuk2: {
    title: "Pengurusan",
    icon: "users",
    sections: {
      "2.1": {
        title: "Pengurusan",
        subsections: {
          "2.1.1": {
            title: "Fungsi Pengurusan",
            faktaKhusus: ["Perancangan", "Pengorganisasian", "Kepimpinan", "Pengawalan"],
            details: [
              { term: "Perancangan", desc: "Proses menentukan matlamat organisasi dan memilih strategi yang paling sesuai untuk mencapai matlamat tersebut." },
              { term: "Pengorganisasian", desc: "Proses menyusun dan mengagihkan sumber-sumber organisasi mengikut rancangan yang telah ditetapkan." },
              { term: "Kepimpinan", desc: "Proses mempengaruhi dan memotivasikan pekerja supaya berusaha ke arah pencapaian matlamat organisasi." },
              { term: "Pengawalan", desc: "Proses memantau prestasi organisasi dan mengambil tindakan pembetulan untuk memastikan matlamat tercapai." }
            ]
          },
          "2.1.3": {
            title: "Peranan Pengurus",
            content: "Peranan pengurus boleh dilihat dari dua perspektif utama: Henry Mintzberg dan Peter Drucker.",
            details: [
              { term: "Peranan Mengikut Henry Mintzberg", desc: "1) Antara perorangan/interpersonal — sebagai ketua, pemimpin dan penghubung. 2) Peranan bermaklumat (informational) — sebagai pemantau, penyebar dan jurucakap. 3) Pembuat keputusan — sebagai usahawan, pengendali gangguan, pengagih sumber dan perunding." },
              { term: "Peranan Mengikut Peter Drucker", desc: "1) Menetapkan objektif. 2) Mengorganisasi. 3) Memotivasi dan berkomunikasi. 4) Mengukur prestasi. 5) Membangun sumber manusia." }
            ]
          }
        }
      },
      "2.2": {
        title: "Peringkat dan Kemahiran Pengurusan",
        subsections: {
          "2.2.1": {
            title: "Peringkat Pengurusan",
            faktaKhusus: ["Peringkat bawahan", "Peringkat pertengahan", "Peringkat atasan"],
            details: [
              { term: "Peringkat bawahan", desc: "Pengurus lini pertama yang menyelia pekerja operasi secara langsung. Contoh: penyelia, ketua kumpulan." },
              { term: "Peringkat pertengahan", desc: "Pengurus yang menterjemahkan strategi pengurusan atasan kepada tindakan operasi. Contoh: pengurus jabatan, pengurus cawangan." },
              { term: "Peringkat atasan", desc: "Pengurus yang bertanggungjawab terhadap keseluruhan organisasi dan membuat keputusan strategik. Contoh: CEO, Pengarah Urusan." }
            ]
          },
          "2.2.2": {
            title: "Jenis Kemahiran Pengurusan",
            faktaKhusus: ["Konseptual", "Antara perorangan atau kemanusiaan", "Teknikal", "Pengurusan masa", "Pembuatan keputusan"],
            details: [
              { term: "Konseptual", desc: "Keupayaan pengurus untuk melihat organisasi secara menyeluruh, memahami hubungan antara unit-unit dan merancang strategi jangka panjang." },
              { term: "Antara perorangan/kemanusiaan", desc: "Keupayaan pengurus untuk berkomunikasi, memimpin, memotivasi dan bekerja dengan orang lain secara berkesan." },
              { term: "Teknikal", desc: "Pengetahuan dan kemahiran khusus yang diperlukan untuk melaksanakan tugas-tugas tertentu dalam bidang kerja." },
              { term: "Pengurusan masa", desc: "Keupayaan mengurus dan memperuntukkan masa dengan berkesan untuk pelbagai tugas dan tanggungjawab." },
              { term: "Pembuatan keputusan", desc: "Keupayaan membuat keputusan yang tepat dan berkesan berdasarkan analisis situasi dan maklumat yang ada." }
            ]
          }
        }
      },
      "2.3": {
        title: "Perancangan",
        subsections: {
          "2.3.1": {
            title: "Proses Perancangan",
            faktaKhusus: ["Menentukan matlamat dan objektif", "Menganalisis persekitaran perniagaan", "Membentuk alternatif tindakan", "Menilai alternatif", "Memilih alternatif tindakan"],
            details: [
              { term: "Menentukan matlamat dan objektif", desc: "Pengurusan atasan menetapkan matlamat umum dan menyeluruh bagi organisasi yang melibatkan jangka masa panjang atau pendek." },
              { term: "Menganalisis persekitaran perniagaan", desc: "Pengurus mengkaji persekitaran dalaman dan luaran organisasi. Mengkaji kadar pertumbuhan ekonomi, trend permintaan, cita rasa pelanggan, bahan mentah, kadar inflasi dan perubahan teknologi." },
              { term: "Membentuk alternatif tindakan", desc: "Pengurus menyenaraikan beberapa alternatif tindakan dengan mengkaji kekuatan, kelemahan, peluang dan ancaman perniagaan." },
              { term: "Menilai alternatif", desc: "Menilai kelebihan dan kelemahan setiap alternatif, meneliti risiko pelaksanaan dan membuat analisis faedah-kos." },
              { term: "Memilih alternatif tindakan", desc: "Memilih satu alternatif yang terbaik dan paling sesuai untuk mencapai matlamat organisasi." }
            ]
          },
          "2.3.2": {
            title: "Perancangan Strategik",
            content: "Satu proses di mana organisasi menetapkan strategi atau hala tuju dan membuat keputusan tentang cara mengagihkan sumber untuk melaksanakan strategi tersebut.",
            subTopics: {
              "tahap": {
                title: "Tahap Perancangan Strategik",
                faktaKhusus: ["Perancangan Strategi Korporat", "Strategi perniagaan", "Strategi Operasi (fungsian)"],
                details: [
                  { term: "Strategi Korporat", desc: "Strategi keseluruhan yang memberi hala tuju umum organisasi. Dibentuk oleh lembaga pengarah untuk keseluruhan segmen perniagaan. Contoh: Petronas terlibat dalam minyak dan gas, automotif dan perkapalan." },
                  { term: "Strategi Perniagaan", desc: "Strategi yang meningkatkan kelebihan saingan dalam sesuatu pasaran. Setiap produk mempunyai strategi berbeza. Contoh: AirAsia menawarkan tambang murah." },
                  { term: "Strategi Operasi (fungsian)", desc: "Strategi terperinci pada peringkat jabatan untuk menyokong strategi perniagaan. Contoh: McDonald's menggunakan SOP seragam di semua cawangan." }
                ]
              },
              "unsur": {
                title: "Unsur-unsur Perancangan Strategik",
                faktaKhusus: ["Visi", "Misi", "Objektif (VMO)", "Strategi dan taktik", "Dasar/polisi", "Prosedur", "Standard"],
                details: [
                  { term: "Visi", desc: "Gambaran masa depan organisasi yang ingin dicapai." },
                  { term: "Misi", desc: "Pernyataan tujuan kewujudan organisasi dan aktiviti utama yang dijalankan." },
                  { term: "Objektif (VMO)", desc: "Sasaran khusus yang boleh diukur dalam tempoh masa tertentu." },
                  { term: "Strategi dan taktik", desc: "Pelan tindakan jangka panjang (strategi) dan tindakan jangka pendek (taktik) untuk mencapai objektif." },
                  { term: "Dasar/polisi", desc: "Garis panduan umum yang membantu pengurus membuat keputusan." },
                  { term: "Prosedur", desc: "Langkah-langkah terperinci untuk melaksanakan sesuatu aktiviti." },
                  { term: "Standard", desc: "Tahap prestasi minimum yang ditetapkan sebagai penanda aras." }
                ]
              },
              "teknik": {
                title: "Teknik Perancangan Strategik",
                subItems: [
                  {
                    name: "Analisis SWOT",
                    faktaKhusus: ["Kekuatan (Strengths)", "Kelemahan (Weaknesses)", "Peluang (Opportunities)", "Ancaman (Threats)"]
                  },
                  {
                    name: "Analisis TOWS",
                    faktaKhusus: ["Ancaman", "Peluang", "Kelemahan", "Kekuatan"]
                  },
                  {
                    name: "Analisis PESTEL",
                    faktaKhusus: ["Politik", "Ekonomi", "Sosial", "Teknologi", "Persekitaran (Environment)", "Undang-undang (Legal)"]
                  }
                ]
              },
              "strategi_perancangan": {
                title: "Strategi Perancangan Strategik",
                faktaKhusus: ["Strategi Lautan Biru (Blue Ocean Strategy)", "Strategi Lautan Merah (Red Ocean Strategy)"],
                details: [
                  { term: "Strategi Lautan Biru (Blue Ocean Strategy)", desc: "Strategi mencipta pasaran baharu yang belum diterokai dan tiada persaingan. Mewujudkan permintaan baharu dengan inovasi nilai. Ciri-ciri utama Strategi Lautan Biru: (a) Mencipta ruang pasaran baharu — syarikat tidak bersaing dalam pasaran sedia ada tetapi mencipta pasaran yang belum wujud. (b) Menjadikan persaingan tidak relevan — kerana tiada pesaing dalam pasaran baharu yang dicipta. (c) Mencipta dan menawan permintaan baharu — menarik pelanggan baharu yang sebelum ini bukan pengguna produk tersebut. (d) Inovasi nilai — memberikan nilai tinggi kepada pelanggan pada kos yang rendah secara serentak. Kelebihan: Tiada persaingan langsung, margin keuntungan tinggi, mencipta jenama unik, dan menarik pelanggan baharu. Kelemahan: Risiko tinggi kerana pasaran belum teruji, memerlukan pelaburan besar dalam R&D, dan pesaing boleh meniru jika berjaya. Contoh: AirAsia — mencipta pasaran penerbangan tambang rendah di Asia Tenggara yang sebelum ini tiada. Grab — mencipta platform perkhidmatan pengangkutan digital. Netflix — mengubah cara orang menonton filem daripada sewa DVD kepada penstriman dalam talian." },
                  { term: "Strategi Lautan Merah (Red Ocean Strategy)", desc: "Strategi bersaing dalam pasaran sedia ada yang penuh dengan persaingan sengit. 'Merah' merujuk kepada persaingan sengit yang menyebabkan 'pertumpahan darah' dalam industri. Ciri-ciri utama Strategi Lautan Merah: (a) Bersaing dalam pasaran sedia ada — syarikat bersaing dengan pesaing yang sudah wujud untuk bahagian pasaran yang sama. (b) Menewaskan pesaing — strategi tertumpu kepada memenangi persaingan melalui harga, kualiti, atau pemasaran. (c) Mengeksploitasi permintaan sedia ada — menumpukan kepada pelanggan sedia ada dalam pasaran yang sudah matang. (d) Pertukaran nilai-kos — memilih antara memberikan nilai tinggi pada kos tinggi, atau nilai rendah pada kos rendah. Kelebihan: Pasaran sudah terbukti wujud, risiko lebih rendah kerana permintaan sudah ada, dan strategi lebih mudah dirancang. Kelemahan: Persaingan sangat sengit, margin keuntungan rendah, perang harga, dan sukar untuk membezakan produk. Contoh: Maxis, Celcom, Digi — bersaing dalam pasaran telekomunikasi yang sama. Proton vs Perodua — bersaing dalam pasaran automotif tempatan. McDonald's vs KFC — bersaing dalam industri makanan segera. Perbezaan utama: Lautan Biru mencipta pasaran baharu manakala Lautan Merah bersaing dalam pasaran sedia ada. Lautan Biru menumpukan inovasi nilai manakala Lautan Merah menumpukan mengalahkan pesaing." }
                ]
              }
            }
          }
        }
      },
      "2.4": {
        title: "Pengorganisasian",
        subsections: {
          "2.4b": {
            title: "Terma Utama Pengorganisasian",
            faktaKhusus: ["Autoriti, tanggungjawab dan akauntabiliti", "Pemusatan autoriti dan pemencaran autoriti", "Penugasan dan pemerkasaan (empowerment)", "Autoriti lini dan autoriti staf", "Jangkauan kawalan dan rantaian arahan", "Pengkhususan kerja"],
            details: [
              { term: "Autoriti, tanggungjawab dan akauntabiliti", desc: "Autoriti ialah hak untuk memberi arahan. Tanggungjawab ialah kewajipan melaksanakan tugas. Akauntabiliti ialah kewajipan melaporkan hasil kerja." },
              { term: "Pemusatan dan pemencaran autoriti", desc: "Pemusatan: kuasa membuat keputusan tertumpu di peringkat atasan. Pemencaran: kuasa diagihkan ke peringkat bawahan." },
              { term: "Penugasan dan pemerkasaan", desc: "Penugasan: penyerahan tugas kepada subordinat. Pemerkasaan: pemberian kuasa dan autoriti untuk membuat keputusan." },
              { term: "Autoriti lini dan staf", desc: "Lini: autoriti formal untuk mengarah subordinat. Staf: autoriti kepakaran untuk menasihat pengurus lini." },
              { term: "Jangkauan kawalan", desc: "Bilangan pekerja yang melapor secara terus kepada pengurus. Luas = ramai pekerja. Sempit = sedikit pekerja." },
              { term: "Pengkhususan kerja", desc: "Pembahagian tugas berdasarkan kemahiran dan kepakaran pekerja untuk meningkatkan kecekapan." }
            ]
          },
          "2.4.1": {
            title: "Struktur Organisasi",
            faktaKhusus: ["Struktur mengikut fungsi", "Struktur mengikut divisyen (produk, pasaran, geografi)", "Struktur mengikut matriks", "Struktur mengikut pasukan", "Struktur mengikut rangkaian maya (virtual network)"],
            details: [
              { term: "Struktur mengikut fungsi", desc: "Pengelompokan aktiviti mengikut fungsi asas seperti pemasaran, kewangan, sumber manusia. Kelebihan: pengkhususan kerja. Kelemahan: konflik antara jabatan." },
              { term: "Struktur mengikut divisyen produk", desc: "Pengelompokan berdasarkan jenis barangan. Kelebihan: pengkhususan produk. Kelemahan: kos R&D tinggi." },
              { term: "Struktur mengikut divisyen pasaran", desc: "Pengelompokan berdasarkan jenis pengguna sasaran. Kelebihan: fokus keperluan pelanggan." },
              { term: "Struktur mengikut divisyen geografi", desc: "Pengelompokan berdasarkan kawasan pasaran. Kelebihan: memahami pasaran tempatan." },
              { term: "Struktur mengikut matriks", desc: "Gabungan dua jenis penjabatanan iaitu fungsi dan projek. Pekerja melapor kepada dua pengurus. Kelebihan: kerjasama antara jabatan." },
              { term: "Struktur mengikut pasukan", desc: "Pengelompokan pekerja dari pelbagai jabatan dalam pasukan kerja. Kelebihan: fleksibiliti tinggi." },
              { term: "Struktur rangkaian maya", desc: "Organisasi yang menggunakan rangkaian luar untuk menjalankan fungsi tertentu. Kelebihan: kos operasi rendah." }
            ]
          },
          "2.4.2": {
            title: "Proses Pengorganisasian",
            faktaKhusus: ["Penentuan objektif", "Pengenalpastian aktiviti", "Pengelasan aktiviti", "Pengelompokan aktiviti", "Pengagihan tugas, autoriti dan tanggungjawab"],
            details: [
              { term: "Penentuan objektif", desc: "Menentukan objektif yang ingin dicapai oleh organisasi sebagai panduan pengorganisasian." },
              { term: "Pengenalpastian aktiviti", desc: "Mengenal pasti semua aktiviti yang perlu dilaksanakan untuk mencapai objektif." },
              { term: "Pengelasan aktiviti", desc: "Mengkategorikan aktiviti-aktiviti mengikut fungsi atau bidang kerja." },
              { term: "Pengelompokan aktiviti", desc: "Mengelompokkan aktiviti ke dalam jabatan atau unit berdasarkan fungsi, produk, atau geografi." },
              { term: "Pengagihan tugas, autoriti dan tanggungjawab", desc: "Mengagihkan tugas, kuasa dan tanggungjawab kepada individu yang sesuai." }
            ]
          }
        }
      },
      "2.5": {
        title: "Kepimpinan",
        subsections: {
          "2.5.1": {
            title: "Jenis Kuasa Pemimpin",
            faktaKhusus: ["Kuasa sah", "Kuasa ganjaran", "Kuasa desakan", "Kuasa rujukan", "Kuasa kepakaran"],
            details: [
              { term: "Kuasa sah", desc: "Kuasa yang diperoleh melalui jawatan atau kedudukan rasmi dalam organisasi." },
              { term: "Kuasa ganjaran", desc: "Kuasa untuk memberi ganjaran seperti kenaikan gaji, bonus, atau kenaikan pangkat." },
              { term: "Kuasa desakan", desc: "Kuasa untuk mengenakan hukuman atau tindakan disiplin kepada pekerja." },
              { term: "Kuasa rujukan", desc: "Kuasa yang diperoleh kerana sifat peribadi pemimpin yang dikagumi oleh pengikut." },
              { term: "Kuasa kepakaran", desc: "Kuasa yang diperoleh kerana pengetahuan dan kemahiran khusus yang dimiliki." }
            ]
          },
          "2.5.2": {
            title: "Jenis Kepimpinan",
            faktaKhusus: ["Transaksional", "Transformasi", "Karismatik", "Berwawasan"],
            details: [
              { term: "Transaksional", desc: "Kepimpinan berdasarkan pertukaran — pemimpin memberi ganjaran kepada pekerja yang mencapai sasaran dan mengenakan hukuman kepada yang gagal." },
              { term: "Transformasi", desc: "Kepimpinan yang mengubah dan menginspirasi pekerja untuk mencapai prestasi luar biasa melalui motivasi, visi dan teladan." },
              { term: "Karismatik", desc: "Kepimpinan yang bergantung kepada daya tarikan peribadi pemimpin yang luar biasa untuk mempengaruhi pengikut." },
              { term: "Berwawasan", desc: "Kepimpinan yang berorientasikan masa depan dengan visi yang jelas dan mampu menggerakkan organisasi ke arah visi tersebut." }
            ]
          },
          "2.5.3": {
            title: "Gaya Kepimpinan",
            faktaKhusus: ["Autokratik", "Demokratik", "Laissez-faire", "Kontingensi", "Kepimpinan khidmat (servant leadership)"],
            details: [
              { term: "Autokratik", desc: "Pemimpin membuat keputusan sendiri tanpa melibatkan subordinat. Sesuai untuk situasi kecemasan." },
              { term: "Demokratik", desc: "Pemimpin melibatkan subordinat dalam proses pembuatan keputusan. Meningkatkan motivasi dan komitmen pekerja." },
              { term: "Laissez-faire", desc: "Pemimpin memberi kebebasan sepenuhnya kepada subordinat untuk membuat keputusan sendiri." },
              { term: "Kontingensi", desc: "Gaya kepimpinan yang bergantung kepada situasi. Pemimpin menyesuaikan gaya mengikut keadaan." },
              { term: "Kepimpinan khidmat", desc: "Pemimpin mengutamakan keperluan pengikut dan membantu mereka berkembang. Fokus kepada perkhidmatan dan kebajikan pekerja." }
            ]
          },
          "2.5.6": {
            title: "Teori Motivasi",
            faktaKhusus: ["Teori motivasi Maslow", "Teori motivasi Herzberg", "Teori motivasi McGregor", "Teori motivasi McClelland"],
            details: [
              { term: "Teori Maslow (Hierarki Keperluan)", desc: "Lima tahap keperluan: 1) Fisiologi (makanan, air) 2) Keselamatan 3) Sosial (kasih sayang) 4) Penghargaan (pengiktirafan) 5) Pencapaian hasrat diri. Keperluan asas perlu dipenuhi dahulu." },
              { term: "Teori Herzberg (Dua Faktor)", desc: "Faktor Motivasi (pencapaian, pengiktirafan, kerja itu sendiri) mendorong kepuasan. Faktor Hygiene (gaji, persekitaran kerja, dasar syarikat) mengelakkan ketidakpuasan." },
              { term: "Teori McGregor (Teori X dan Y)", desc: "Teori X: pekerja malas, perlu dikawal dan dipaksa. Teori Y: pekerja rajin, kreatif, dan boleh diberi tanggungjawab." },
              { term: "Teori McClelland (Keperluan Terperoleh)", desc: "Tiga keperluan utama: 1) Keperluan pencapaian 2) Keperluan kuasa 3) Keperluan perhubungan/afiliasi." }
            ]
          },
          "2.5.7": {
            title: "Proses Pembentukan Pasukan",
            faktaKhusus: ["Pembentukan (forming)", "Peributan (storming)", "Penyesuaian (norming)", "Pelaksanaan (performing)", "Penangguhan (adjourning)"],
            details: [
              { term: "Pembentukan (forming)", desc: "Ahli pasukan baru bertemu dan mengenali antara satu sama lain. Ketidakpastian tentang peranan dan matlamat." },
              { term: "Peributan (storming)", desc: "Berlaku konflik dan pergeseran antara ahli pasukan berkaitan peranan, kuasa dan pendekatan kerja." },
              { term: "Penyesuaian (norming)", desc: "Ahli pasukan mula menerima peranan masing-masing dan membangunkan norma kerja bersama." },
              { term: "Pelaksanaan (performing)", desc: "Pasukan berfungsi dengan efektif dan produktif. Fokus kepada pencapaian matlamat." },
              { term: "Penangguhan (adjourning)", desc: "Pasukan dibubarkan setelah matlamat tercapai atau projek selesai." }
            ]
          }
        }
      },
      "2.6": {
        title: "Pengawalan",
        subsections: {
          "2.6.1": {
            title: "Proses Kawalan",
            faktaKhusus: ["Menetapkan standard", "Mengukur pencapaian", "Membandingkan pencapaian dengan standard", "Membuat langkah pembetulan"],
            details: [
              { term: "Menetapkan standard", desc: "Menentukan tahap prestasi yang dijangkakan berdasarkan matlamat organisasi." },
              { term: "Mengukur pencapaian", desc: "Mengumpul data dan mengukur prestasi sebenar yang dicapai." },
              { term: "Membandingkan pencapaian dengan standard", desc: "Membandingkan prestasi sebenar dengan standard yang ditetapkan untuk mengenal pasti perbezaan (variance)." },
              { term: "Membuat langkah pembetulan", desc: "Mengambil tindakan pembetulan jika terdapat perbezaan antara prestasi sebenar dengan standard." }
            ]
          },
          "2.6.2": {
            title: "Kaedah Kawalan",
            faktaKhusus: ["Kawalan awalan", "Kawalan semasa", "Kawalan selepas"],
            details: [
              { term: "Kawalan awalan", desc: "Kawalan yang dilakukan sebelum aktiviti dimulakan untuk mengelakkan masalah. Contoh: pemeriksaan bahan mentah sebelum pengeluaran." },
              { term: "Kawalan semasa", desc: "Kawalan yang dilakukan semasa aktiviti sedang berjalan. Contoh: pemantauan kualiti semasa proses pengeluaran." },
              { term: "Kawalan selepas", desc: "Kawalan yang dilakukan selepas aktiviti selesai untuk menilai hasil. Contoh: penilaian kualiti produk siap." }
            ]
          },
          "2.6.3": {
            title: "Alat-alat Kawalan",
            faktaKhusus: ["Analisis Titik Pulangan Modal", "Bajet", "Carta Gantt"],
            details: [
              { term: "Analisis Titik Pulangan Modal", desc: "Alat kawalan kewangan yang menentukan tahap jualan minimum bagi menanggung semua kos. Titik di mana jumlah hasil = jumlah kos." },
              { term: "Bajet", desc: "Pernyataan kewangan yang terperinci tentang jangkaan pendapatan dan perbelanjaan bagi tempoh masa tertentu. Digunakan sebagai alat perancangan dan kawalan." },
              { term: "Carta Gantt", desc: "Carta bar mendatar yang menunjukkan jadual aktiviti projek mengikut masa. Membolehkan pengurus memantau kemajuan projek." }
            ]
          }
        }
      }
    }
  },
  tajuk3: {
    title: "Pembuatan Keputusan",
    icon: "git-branch",
    sections: {
      "3.1": {
        title: "Jenis Keputusan",
        subsections: {
          "3.1b": {
            title: "Jenis Keputusan",
            faktaKhusus: ["Keputusan rutin", "Keputusan tak rutin"],
            details: [
              { term: "Keputusan rutin", desc: "Keputusan yang dibuat berulang kali dan berpandukan prosedur atau peraturan yang telah ditetapkan. Keputusan ini mudah dan tidak memerlukan analisis mendalam. Contoh: Meluluskan cuti pekerja mengikut polisi syarikat." },
              { term: "Keputusan tak rutin", desc: "Keputusan yang jarang dibuat, unik dan memerlukan analisis mendalam. Tiada prosedur tetap dan memerlukan pertimbangan yang teliti. Contoh: Membuat keputusan untuk mengambil alih syarikat lain." }
            ]
          },
          "3.1c": {
            title: "Pengaruh Faktor Situasi",
            faktaKhusus: ["Kepastian", "Risiko", "Ketidakpastian", "Kesamaran"],
            details: [
              { term: "Kepastian", desc: "Situasi di mana pembuat keputusan mempunyai maklumat lengkap tentang semua alternatif dan hasil yang dijangka." },
              { term: "Risiko", desc: "Situasi di mana pembuat keputusan mengetahui alternatif tetapi tidak pasti tentang hasil. Kebarangkalian boleh dianggarkan." },
              { term: "Ketidakpastian", desc: "Situasi di mana pembuat keputusan kekurangan maklumat dan tidak dapat menganggarkan kebarangkalian hasil." },
              { term: "Kesamaran", desc: "Situasi di mana matlamat tidak jelas atau masalah sukar dikenal pasti. Pembuat keputusan tidak pasti apa soalan yang perlu dijawab." }
            ]
          }
        }
      },
      "3.2": {
        title: "Model Pembuatan Keputusan",
        subsections: {
          "3.2b": {
            title: "Model Pembuatan Keputusan",
            faktaKhusus: ["Model klasik", "Model pentadbiran", "Model politik"],
            details: [
              { term: "Model Klasik", desc: "Pendekatan rasional di mana pembuat keputusan mempunyai maklumat lengkap, menilai semua alternatif secara logik dan memilih alternatif yang memaksimumkan nilai. Kelebihan: keputusan optimum. Kelemahan: memerlukan masa lama. Contoh: Google membeli YouTube selepas analisis mendalam." },
              { term: "Model Pentadbiran", desc: "Pembuat keputusan tidak dapat memperoleh semua maklumat dan membuat keputusan berdasarkan maklumat sedia ada tetapi tidak sempurna. Kelemahan: keputusan kurang optimum, dipengaruhi emosi. Contoh: Starbucks memperkenalkan Paneer Roll di India." },
              { term: "Model Politik", desc: "Keputusan dipengaruhi kepentingan individu, kumpulan dan kuasa politik. Dihasilkan melalui rundingan dan kompromi. Kelemahan: keputusan lambat kerana banyak rundingan. Contoh: Pemilihan Satya Nadella sebagai CEO Microsoft." }
            ]
          }
        }
      },
      "3.3": {
        title: "Proses Pembuatan Keputusan Rasional",
        subsections: {
          "3.3": {
            title: "Proses Pembuatan Keputusan Rasional",
            faktaKhusus: ["Mengenal pasti masalah", "Mengutip data", "Menganalisis data", "Menjana alternatif", "Menilai alternatif", "Memilih alternatif"],
            details: [
              { term: "Mengenal pasti masalah", desc: "Pengurus mengetahui wujudnya masalah, mengenal pasti punca masalah sama ada dari persekitaran dalaman atau luaran, dan mendefinisikan masalah secara ringkas, jelas dan tepat." },
              { term: "Mengutip data", desc: "Pengurus mengumpulkan data dan maklumat dari sumber dalaman dan luaran yang berkaitan dengan masalah." },
              { term: "Menganalisis data", desc: "Membuat penilaian dan tafsiran terhadap data. Data boleh diproses menggunakan analisis kuantitatif atau kualitatif dan dipersembahkan dalam bentuk graf atau carta." },
              { term: "Menjana alternatif", desc: "Pengurus mencari beberapa alternatif penyelesaian melalui perbincangan, sumbang saran atau kumpulan fokus." },
              { term: "Menilai alternatif", desc: "Analisis teliti dan kritikal terhadap alternatif menggunakan SWOT, analisis tulang ikan atau pokok keputusan." },
              { term: "Memilih alternatif", desc: "Memilih satu alternatif terbaik yang sesuai dengan matlamat organisasi dan mampu menyelesaikan masalah." }
            ]
          }
        }
      },
      "3.4": {
        title: "Gaya Pembuatan Keputusan",
        subsections: {
          "3.4": {
            title: "Gaya Pembuatan Keputusan",
            faktaKhusus: ["Direktif", "Analitik", "Konseptual", "Tingkah laku"],
            details: [
              { term: "Direktif", desc: "Keputusan dibuat dengan cepat berdasarkan maklumat minimum oleh satu individu berkuasa. Kelebihan: cepat dan efisien. Kelemahan: kurang fleksibel, boleh abaikan maklumat penting. Contoh: CEO syarikat makanan segera mengarahkan promosi segera." },
              { term: "Analitik", desc: "Pengumpulan maklumat menyeluruh dan analisis data mendalam sebelum membuat keputusan. Kelebihan: keputusan berkualiti tinggi. Kelemahan: proses lambat. Contoh: Pengurus membuat analisis laporan kewangan sebelum pelaburan." },
              { term: "Konseptual", desc: "Pendekatan kreatif dan berwawasan yang meneroka idea-idea inovatif dan melihat gambaran besar. Kelebihan: menghasilkan idea kreatif. Kelemahan: memerlukan masa lama. Contoh: Steve Jobs mencipta iPhone dan iPad." },
              { term: "Tingkah laku", desc: "Menekankan kerjasama, komunikasi dan kesejahteraan individu. Keputusan mengambil kira keperluan pekerja dan pelanggan. Kelebihan: meningkatkan kepuasan pekerja. Kelemahan: proses lambat kerana banyak perbincangan. Contoh: Google menetapkan polisi kerja fleksibel." }
            ]
          }
        }
      }
    }
  }
};

// ──────────────────────────────────────────────
// 2. QUIZ DATA
// ──────────────────────────────────────────────
const quizData = [
  // TAJUK 1
  { bab: "1", soalan: "Manakah yang BUKAN faktor pengeluaran?", pilihan: ["Bahan mentah", "Modal", "Pemasaran", "Keusahawanan"], jawapan: 2 },
  { bab: "1", soalan: "Apakah yang dimaksudkan dengan proses tambah nilai?", pilihan: ["Menambah harga produk", "Mengubah input kepada output yang lebih bernilai", "Menambah bilangan pekerja", "Menambah cawangan perniagaan"], jawapan: 1 },
  { bab: "1", soalan: "Food Panda dan Grab adalah contoh aktiviti perniagaan jenis apa?", pilihan: ["Peruncitan", "Pemborongan", "Gig", "Profesional"], jawapan: 2 },
  { bab: "1", soalan: "Manakah yang tergolong dalam persekitaran tugas?", pilihan: ["Teknologi", "Prasarana", "Pelanggan", "Sosiobudaya"], jawapan: 2 },
  { bab: "1", soalan: "Apakah jenis liabiliti bagi milikan tunggal?", pilihan: ["Terhad", "Tidak terhad", "Separuh terhad", "Tiada liabiliti"], jawapan: 1 },
  { bab: "1", soalan: "Manakah yang BUKAN kepentingan perniagaan antarabangsa?", pilihan: ["Tukaran asing", "Pasaran luas", "Pengurangan pekerja", "Pemindahan teknologi"], jawapan: 2 },
  { bab: "1", soalan: "Ernst & Young merupakan contoh aktiviti perniagaan jenis apa?", pilihan: ["Kewangan", "Profesional", "Pendidikan", "Perhotelan"], jawapan: 1 },
  { bab: "1", soalan: "Sektor manakah yang dimiliki dan diuruskan oleh kerajaan?", pilihan: ["Sektor swasta", "Sektor awam", "Koperasi", "Perkongsian"], jawapan: 1 },
  { bab: "1", soalan: "LHDN dan MARA adalah contoh apa?", pilihan: ["Sektor swasta", "GLC", "Badan berkanun", "Koperasi"], jawapan: 2 },
  { bab: "1", soalan: "Aktiviti yang berada pada peringkat akhir rantaian bekalan disebut?", pilihan: ["Huluan", "Hiliran", "Primer", "Sekunder"], jawapan: 1 },

  // TAJUK 2
  { bab: "2", soalan: "Manakah yang BUKAN fungsi pengurusan?", pilihan: ["Perancangan", "Pengorganisasian", "Pemasaran", "Pengawalan"], jawapan: 2 },
  { bab: "2", soalan: "Siapakah yang memperkenalkan peranan pengurus antara perorangan, bermaklumat dan pembuat keputusan?", pilihan: ["Peter Drucker", "Henry Mintzberg", "Abraham Maslow", "Frederick Herzberg"], jawapan: 1 },
  { bab: "2", soalan: "CEO dan Pengarah Urusan berada pada peringkat pengurusan yang manakah?", pilihan: ["Bawahan", "Pertengahan", "Atasan", "Operasi"], jawapan: 2 },
  { bab: "2", soalan: "SWOT bermaksud apa?", pilihan: ["Strengths, Weaknesses, Opportunities, Threats", "Strategy, Work, Organization, Teamwork", "Systems, Workflow, Operations, Technology", "Skills, Wisdom, Outcomes, Tactics"], jawapan: 0 },
  { bab: "2", soalan: "Struktur organisasi yang menggabungkan fungsi dan projek dipanggil?", pilihan: ["Fungsi", "Divisyen", "Matriks", "Pasukan"], jawapan: 2 },
  { bab: "2", soalan: "Teori motivasi yang mempunyai 5 tahap keperluan adalah?", pilihan: ["Herzberg", "McGregor", "Maslow", "McClelland"], jawapan: 2 },
  { bab: "2", soalan: "Gaya kepimpinan yang memberi kebebasan sepenuhnya kepada subordinat ialah?", pilihan: ["Autokratik", "Demokratik", "Laissez-faire", "Kontingensi"], jawapan: 2 },
  { bab: "2", soalan: "Apakah peringkat pembentukan pasukan apabila berlaku konflik?", pilihan: ["Forming", "Storming", "Norming", "Performing"], jawapan: 1 },
  { bab: "2", soalan: "Carta Gantt digunakan sebagai alat kawalan untuk?", pilihan: ["Mengira untung rugi", "Memantau jadual projek", "Menentukan harga produk", "Mengagihkan bonus"], jawapan: 1 },
  { bab: "2", soalan: "Strategi Lautan Biru bermaksud?", pilihan: ["Bersaing dalam pasaran sedia ada", "Mencipta pasaran baharu tanpa persaingan", "Mengurangkan harga produk", "Menambah bilangan pekerja"], jawapan: 1 },

  // TAJUK 3
  { bab: "3", soalan: "Keputusan yang dibuat berulang kali mengikut prosedur tetap dipanggil?", pilihan: ["Keputusan tak rutin", "Keputusan rutin", "Keputusan strategik", "Keputusan kreatif"], jawapan: 1 },
  { bab: "3", soalan: "Dalam situasi manakah pembuat keputusan mempunyai maklumat lengkap?", pilihan: ["Risiko", "Ketidakpastian", "Kepastian", "Kesamaran"], jawapan: 2 },
  { bab: "3", soalan: "Model pembuatan keputusan yang dipengaruhi oleh kuasa politik ialah?", pilihan: ["Model klasik", "Model pentadbiran", "Model politik", "Model rasional"], jawapan: 2 },
  { bab: "3", soalan: "Langkah pertama dalam proses pembuatan keputusan rasional ialah?", pilihan: ["Mengutip data", "Mengenal pasti masalah", "Menjana alternatif", "Memilih alternatif"], jawapan: 1 },
  { bab: "3", soalan: "Gaya pembuatan keputusan yang mengutamakan kerjasama dan komunikasi ialah?", pilihan: ["Direktif", "Analitik", "Konseptual", "Tingkah laku"], jawapan: 3 },
  { bab: "3", soalan: "Steve Jobs mencipta iPhone dan iPad adalah contoh gaya pembuatan keputusan?", pilihan: ["Direktif", "Analitik", "Konseptual", "Tingkah laku"], jawapan: 2 },
  { bab: "3", soalan: "Model pembuatan keputusan yang memerlukan analisis mendalam dan maklumat lengkap ialah?", pilihan: ["Model klasik", "Model pentadbiran", "Model politik", "Model tingkah laku"], jawapan: 0 },
  { bab: "3", soalan: "Apakah kelemahan gaya pembuatan keputusan direktif?", pilihan: ["Terlalu lambat", "Kurang fleksibel", "Terlalu mahal", "Terlalu demokratik"], jawapan: 1 },
];

// ──────────────────────────────────────────────
// 3. EXAM (FAKTA KHUSUS) DATA — PILIHAN (MCQ checkboxes)
// ──────────────────────────────────────────────
const examData = [
  // BAB 1
  { bab: "1", soalan: "Nyatakan 5 faktor pengeluaran.", jawapan: ["Bahan mentah", "Modal", "Modal insan", "Teknologi", "Keusahawanan"], section: "1.1.2" },
  { bab: "1", soalan: "Nyatakan 5 langkah dalam proses perniagaan.", jawapan: ["Input", "Proses tambah nilai", "Output", "Pemasaran", "Untung atau rugi"], section: "1.1.3" },
  { bab: "1", soalan: "Nyatakan 5 aktiviti perniagaan berasaskan pengeluaran.", jawapan: ["Ekstraktif", "Barangan pengguna", "Barangan industri", "Pembuatan", "Pemasangan"], section: "1.2a" },
  { bab: "1", soalan: "Nyatakan 7 aktiviti perniagaan berasaskan perkhidmatan.", jawapan: ["Peruncitan", "Pemborongan", "Kewangan", "Profesional", "Perhotelan", "Pendidikan", "Gig"], section: "1.2b" },
  { bab: "1", soalan: "Nyatakan 8 klasifikasi perniagaan.", jawapan: ["Primer", "Sekunder", "Tertiar", "Huluan", "Aliran Pertengahan", "Hiliran", "Domestik", "Antarabangsa"], section: "1.2d" },
  { bab: "1", soalan: "Nyatakan 4 kepentingan perniagaan antarabangsa.", jawapan: ["Tukaran asing", "Pasaran luas", "Pemindahan teknologi", "Pemindahan kepakaran"], section: "1.2e" },
  { bab: "1", soalan: "Nyatakan 7 faktor persekitaran umum.", jawapan: ["Ekonomi", "Persaingan dan jaringan", "Sosiobudaya", "Politik dan perundangan", "Teknologi", "Prasarana", "Antarabangsa"], section: "1.3.1" },
  { bab: "1", soalan: "Nyatakan 8 faktor persekitaran tugas.", jawapan: ["Pelanggan", "Pembekal", "Pembiaya", "Pemodal/pelabur", "Pesaing", "Kerajaan", "Pekerja", "Masyarakat"], section: "1.3.2" },
  { bab: "1", soalan: "Nyatakan 4 ciri entiti perniagaan.", jawapan: ["Milikan tunggal", "Perkongsian", "Syarikat", "Koperasi"], section: "1.3.3" },

  // BAB 2
  { bab: "2", soalan: "Nyatakan 4 fungsi pengurusan.", jawapan: ["Perancangan", "Pengorganisasian", "Kepimpinan", "Pengawalan"], section: "2.1.1" },
  { bab: "2", soalan: "Nyatakan 3 peringkat pengurusan.", jawapan: ["Peringkat bawahan", "Peringkat pertengahan", "Peringkat atasan"], section: "2.2.1" },
  { bab: "2", soalan: "Nyatakan 5 jenis kemahiran pengurusan.", jawapan: ["Konseptual", "Antara perorangan atau kemanusiaan", "Teknikal", "Pengurusan masa", "Pembuatan keputusan"], section: "2.2.2" },
  { bab: "2", soalan: "Nyatakan 5 langkah proses perancangan.", jawapan: ["Menentukan matlamat dan objektif", "Menganalisis persekitaran perniagaan", "Membentuk alternatif tindakan", "Menilai alternatif", "Memilih alternatif tindakan"], section: "2.3.1" },
  { bab: "2", soalan: "Nyatakan 3 tahap perancangan strategik.", jawapan: ["Perancangan Strategi Korporat", "Strategi perniagaan", "Strategi Operasi (fungsian)"], section: "2.3.2" },
  { bab: "2", soalan: "Nyatakan 7 unsur perancangan strategik.", jawapan: ["Visi", "Misi", "Objektif (VMO)", "Strategi dan taktik", "Dasar/polisi", "Prosedur", "Standard"], section: "2.3.2" },
  { bab: "2", soalan: "Nyatakan 4 elemen dalam analisis SWOT.", jawapan: ["Kekuatan (Strengths)", "Kelemahan (Weaknesses)", "Peluang (Opportunities)", "Ancaman (Threats)"], section: "2.3.2" },
  { bab: "2", soalan: "Nyatakan 6 elemen dalam analisis PESTEL.", jawapan: ["Politik", "Ekonomi", "Sosial", "Teknologi", "Persekitaran (Environment)", "Undang-undang (Legal)"], section: "2.3.2" },
  { bab: "2", soalan: "Nyatakan 5 struktur organisasi.", jawapan: ["Struktur mengikut fungsi", "Struktur mengikut divisyen (produk, pasaran, geografi)", "Struktur mengikut matriks", "Struktur mengikut pasukan", "Struktur mengikut rangkaian maya (virtual network)"], section: "2.4.1" },
  { bab: "2", soalan: "Nyatakan 5 langkah proses pengorganisasian.", jawapan: ["Penentuan objektif", "Pengenalpastian aktiviti", "Pengelasan aktiviti", "Pengelompokan aktiviti", "Pengagihan tugas, autoriti dan tanggungjawab"], section: "2.4.2" },
  { bab: "2", soalan: "Nyatakan 5 jenis kuasa pemimpin.", jawapan: ["Kuasa sah", "Kuasa ganjaran", "Kuasa desakan", "Kuasa rujukan", "Kuasa kepakaran"], section: "2.5.1" },
  { bab: "2", soalan: "Nyatakan 4 jenis kepimpinan.", jawapan: ["Transaksional", "Transformasi", "Karismatik", "Berwawasan"], section: "2.5.2" },
  { bab: "2", soalan: "Nyatakan 5 gaya kepimpinan.", jawapan: ["Autokratik", "Demokratik", "Laissez-faire", "Kontingensi", "Kepimpinan khidmat (servant leadership)"], section: "2.5.3" },
  { bab: "2", soalan: "Nyatakan 4 teori motivasi.", jawapan: ["Teori motivasi Maslow", "Teori motivasi Herzberg", "Teori motivasi McGregor", "Teori motivasi McClelland"], section: "2.5.6" },
  { bab: "2", soalan: "Nyatakan 5 peringkat pembentukan pasukan.", jawapan: ["Pembentukan (forming)", "Peributan (storming)", "Penyesuaian (norming)", "Pelaksanaan (performing)", "Penangguhan (adjourning)"], section: "2.5.7" },
  { bab: "2", soalan: "Nyatakan 4 langkah proses kawalan.", jawapan: ["Menetapkan standard", "Mengukur pencapaian", "Membandingkan pencapaian dengan standard", "Membuat langkah pembetulan"], section: "2.6.1" },
  { bab: "2", soalan: "Nyatakan 3 kaedah kawalan.", jawapan: ["Kawalan awalan", "Kawalan semasa", "Kawalan selepas"], section: "2.6.2" },
  { bab: "2", soalan: "Nyatakan 3 alat kawalan.", jawapan: ["Analisis Titik Pulangan Modal", "Bajet", "Carta Gantt"], section: "2.6.3" },

  // BAB 3
  { bab: "3", soalan: "Nyatakan 2 jenis keputusan.", jawapan: ["Keputusan rutin", "Keputusan tak rutin"], section: "3.1b" },
  { bab: "3", soalan: "Nyatakan 4 faktor situasi dalam pembuatan keputusan.", jawapan: ["Kepastian", "Risiko", "Ketidakpastian", "Kesamaran"], section: "3.1c" },
  { bab: "3", soalan: "Nyatakan 3 model pembuatan keputusan.", jawapan: ["Model klasik", "Model pentadbiran", "Model politik"], section: "3.2b" },
  { bab: "3", soalan: "Nyatakan 6 langkah proses pembuatan keputusan rasional.", jawapan: ["Mengenal pasti masalah", "Mengutip data", "Menganalisis data", "Menjana alternatif", "Menilai alternatif", "Memilih alternatif"], section: "3.3" },
  { bab: "3", soalan: "Nyatakan 4 gaya pembuatan keputusan.", jawapan: ["Direktif", "Analitik", "Konseptual", "Tingkah laku"], section: "3.4" },
];

// ──────────────────────────────────────────────
// 3B. EXAM STRUKTUR DATA (Typed answer questions)
// ──────────────────────────────────────────────
const examStrukturData = [
  // BAB 1
  { bab: "1", soalan: "Huraikan maksud 'bahan mentah' sebagai faktor pengeluaran.", jawapanModel: "Bahan mentah ialah sumber asli yang diperoleh daripada alam semula jadi seperti tanah, air, mineral, dan hasil hutan yang digunakan sebagai input dalam proses pengeluaran. Bahan mentah terbahagi kepada bahan mentah semula jadi (contoh: kayu balak, petroleum) dan bahan mentah separuh siap (contoh: tepung gandum).", markahPenuh: 4, katakunci: ["sumber asli", "alam semula jadi", "input", "pengeluaran", "bahan mentah semula jadi", "separuh siap"], section: "1.1.2" },
  { bab: "1", soalan: "Bezakan antara modal tetap dan modal kerja.", jawapanModel: "Modal tetap ialah aset yang digunakan berulang kali dalam proses pengeluaran dan tidak habis digunakan dalam satu kitaran seperti bangunan kilang, mesin, dan kenderaan. Modal kerja ialah wang tunai dan sumber yang digunakan untuk menampung operasi harian perniagaan seperti membeli bahan mentah dan membayar gaji pekerja.", markahPenuh: 4, katakunci: ["modal tetap", "berulang kali", "aset", "modal kerja", "operasi harian", "wang tunai"], section: "1.1.2" },
  { bab: "1", soalan: "Huraikan 3 jenis modal insan dalam faktor pengeluaran.", jawapanModel: "Tiga jenis modal insan: (1) Pekerja mahir — mempunyai kemahiran teknikal dan profesional melalui pendidikan dan latihan. Contoh: jurutera, akauntan. (2) Pekerja separuh mahir — mempunyai kemahiran asas melalui latihan vokasional. Contoh: juruteknik, pemandu. (3) Pekerja tidak mahir — melakukan kerja fizikal tanpa kemahiran khusus. Contoh: buruh binaan.", markahPenuh: 6, katakunci: ["pekerja mahir", "separuh mahir", "tidak mahir", "kemahiran", "latihan", "teknikal"], section: "1.1.2" },
  { bab: "1", soalan: "Jelaskan maksud proses tambah nilai dalam proses perniagaan.", jawapanModel: "Proses tambah nilai ialah aktiviti mengubah input kepada output yang mempunyai nilai lebih tinggi melalui pemprosesan, pemasangan, atau pembungkusan. Ia menambah nilai kepada bahan mentah sehingga menjadi produk siap yang lebih bernilai dan berguna kepada pengguna.", markahPenuh: 4, katakunci: ["mengubah input", "output", "nilai lebih tinggi", "pemprosesan", "produk siap"], section: "1.1.3" },
  { bab: "1", soalan: "Huraikan perbezaan antara perniagaan domestik dan perniagaan antarabangsa.", jawapanModel: "Perniagaan domestik ialah perniagaan yang dijalankan di dalam sempadan negara sendiri, menggunakan mata wang tempatan dan tertakluk kepada undang-undang tempatan. Perniagaan antarabangsa ialah perniagaan yang dijalankan merentas sempadan negara, melibatkan eksport dan import, menggunakan tukaran asing dan tertakluk kepada peraturan perdagangan antarabangsa.", markahPenuh: 4, katakunci: ["domestik", "sempadan negara", "antarabangsa", "merentas", "eksport", "import"], section: "1.2d" },
  { bab: "1", soalan: "Huraikan perbezaan antara sektor awam dan sektor swasta.", jawapanModel: "Sektor awam dimiliki, dibiayai dan diuruskan oleh kerajaan untuk kebajikan rakyat. Peranannya termasuk menyediakan infrastruktur dan kemudahan asas. Sektor swasta dimiliki oleh individu atau sekumpulan individu secara peribadi untuk mendapat keuntungan. Peranannya termasuk mengeluarkan barang dan perkhidmatan serta menyumbang cukai kepada kerajaan.", markahPenuh: 4, katakunci: ["sektor awam", "kerajaan", "kebajikan", "sektor swasta", "keuntungan", "individu"], section: "1.2c" },

  // BAB 2
  { bab: "2", soalan: "Huraikan maksud Strategi Lautan Biru dan berikan satu contoh.", jawapanModel: "Strategi Lautan Biru ialah strategi mencipta pasaran baharu yang belum diterokai dan tiada persaingan. Ia mewujudkan permintaan baharu dengan inovasi nilai — memberikan nilai tinggi kepada pelanggan pada kos yang rendah secara serentak. Contoh: AirAsia mencipta pasaran penerbangan tambang rendah di Asia Tenggara.", markahPenuh: 4, katakunci: ["pasaran baharu", "tiada persaingan", "inovasi nilai", "permintaan baharu", "airasia", "tambang rendah"], section: "2.3.2" },
  { bab: "2", soalan: "Bezakan antara Strategi Lautan Biru dan Strategi Lautan Merah.", jawapanModel: "Strategi Lautan Biru mencipta pasaran baharu tanpa persaingan, menumpukan inovasi nilai dan menarik pelanggan baharu. Strategi Lautan Merah bersaing dalam pasaran sedia ada yang penuh persaingan sengit, menumpukan mengalahkan pesaing dan mengeksploitasi permintaan sedia ada.", markahPenuh: 4, katakunci: ["lautan biru", "lautan merah", "pasaran baharu", "pasaran sedia ada", "persaingan", "inovasi"], section: "2.3.2" },
  { bab: "2", soalan: "Huraikan Teori Motivasi Maslow.", jawapanModel: "Teori Maslow atau Hierarki Keperluan mempunyai lima tahap: (1) Fisiologi — keperluan asas seperti makanan dan air. (2) Keselamatan — keselamatan diri dan pekerjaan. (3) Sosial — kasih sayang dan kekitaan. (4) Penghargaan — pengiktirafan dan penghormatan. (5) Pencapaian hasrat diri — merealisasikan potensi penuh. Keperluan asas perlu dipenuhi dahulu sebelum keperluan tahap lebih tinggi.", markahPenuh: 5, katakunci: ["fisiologi", "keselamatan", "sosial", "penghargaan", "pencapaian hasrat diri", "hierarki", "lima tahap"], section: "2.5.6" },
  { bab: "2", soalan: "Bezakan antara gaya kepimpinan autokratik dan demokratik.", jawapanModel: "Gaya autokratik: Pemimpin membuat keputusan sendiri tanpa melibatkan subordinat. Sesuai untuk situasi kecemasan. Gaya demokratik: Pemimpin melibatkan subordinat dalam proses pembuatan keputusan. Meningkatkan motivasi dan komitmen pekerja.", markahPenuh: 4, katakunci: ["autokratik", "sendiri", "demokratik", "melibatkan", "subordinat", "keputusan"], section: "2.5.3" },
  { bab: "2", soalan: "Huraikan proses pengawalan dalam pengurusan.", jawapanModel: "Proses pengawalan mempunyai empat langkah: (1) Menetapkan standard — menentukan tahap prestasi yang dijangkakan. (2) Mengukur pencapaian — mengumpul data dan mengukur prestasi sebenar. (3) Membandingkan pencapaian dengan standard — mengenal pasti perbezaan (variance). (4) Membuat langkah pembetulan — mengambil tindakan pembetulan jika perlu.", markahPenuh: 4, katakunci: ["standard", "mengukur", "membandingkan", "pembetulan", "prestasi", "variance"], section: "2.6.1" },
  { bab: "2", soalan: "Huraikan 3 tahap perancangan strategik.", jawapanModel: "(1) Strategi Korporat — strategi keseluruhan yang memberi hala tuju umum organisasi, dibentuk oleh lembaga pengarah. Contoh: Petronas terlibat dalam minyak, gas dan automotif. (2) Strategi Perniagaan — strategi meningkatkan kelebihan saingan dalam pasaran tertentu. Contoh: AirAsia menawarkan tambang murah. (3) Strategi Operasi (fungsian) — strategi terperinci pada peringkat jabatan. Contoh: McDonald's menggunakan SOP seragam.", markahPenuh: 6, katakunci: ["korporat", "hala tuju", "strategi perniagaan", "kelebihan saingan", "operasi", "fungsian", "jabatan"], section: "2.3.2" },

  // BAB 3
  { bab: "3", soalan: "Bezakan antara keputusan rutin dan keputusan tak rutin.", jawapanModel: "Keputusan rutin dibuat berulang kali mengikut prosedur tetap, mudah dan tidak memerlukan analisis mendalam. Contoh: meluluskan cuti pekerja. Keputusan tak rutin jarang dibuat, unik dan memerlukan analisis mendalam. Tiada prosedur tetap. Contoh: mengambil alih syarikat lain.", markahPenuh: 4, katakunci: ["rutin", "berulang kali", "prosedur tetap", "tak rutin", "jarang", "analisis mendalam"], section: "3.1b" },
  { bab: "3", soalan: "Huraikan Model Klasik dalam pembuatan keputusan.", jawapanModel: "Model Klasik ialah pendekatan rasional di mana pembuat keputusan mempunyai maklumat lengkap, menilai semua alternatif secara logik dan memilih alternatif yang memaksimumkan nilai. Kelebihan: keputusan optimum. Kelemahan: memerlukan masa lama dan maklumat penuh sukar diperoleh.", markahPenuh: 4, katakunci: ["rasional", "maklumat lengkap", "logik", "memaksimumkan", "optimum", "alternatif"], section: "3.2b" },
  { bab: "3", soalan: "Jelaskan gaya pembuatan keputusan konseptual.", jawapanModel: "Gaya konseptual menggunakan pendekatan kreatif dan berwawasan yang meneroka idea-idea inovatif dan melihat gambaran besar. Kelebihan: menghasilkan idea kreatif dan inovatif. Kelemahan: memerlukan masa lama. Contoh: Steve Jobs mencipta iPhone dan iPad.", markahPenuh: 4, katakunci: ["kreatif", "berwawasan", "inovatif", "gambaran besar", "steve jobs", "iphone"], section: "3.4" },
];

// ──────────────────────────────────────────────
// 4. AI CHATBOT KNOWLEDGE BASE
// ──────────────────────────────────────────────
const aiKnowledge = [];

function buildAIKnowledge() {
  for (const tajukKey in notaData) {
    const tajuk = notaData[tajukKey];
    for (const secKey in tajuk.sections) {
      const sec = tajuk.sections[secKey];
      for (const subKey in sec.subsections) {
        const sub = sec.subsections[subKey];
        const keywords = [sub.title.toLowerCase()];
        if (sub.faktaKhusus) {
          sub.faktaKhusus.forEach(f => keywords.push(f.toLowerCase()));
        }
        if (sub.details) {
          sub.details.forEach(d => {
            keywords.push(d.term.toLowerCase());
          });
        }
        aiKnowledge.push({
          title: sub.title,
          section: `${tajuk.title} > ${sec.title}`,
          keywords,
          faktaKhusus: sub.faktaKhusus || [],
          details: sub.details || [],
          content: sub.content || ""
        });
      }
      // Handle subTopics (nested in 2.3.2)
      for (const subKey in sec.subsections) {
        const sub = sec.subsections[subKey];
        if (sub.subTopics) {
          for (const stKey in sub.subTopics) {
            const st = sub.subTopics[stKey];
            const keywords = [st.title.toLowerCase()];
            if (st.faktaKhusus) st.faktaKhusus.forEach(f => keywords.push(f.toLowerCase()));
            if (st.details) st.details.forEach(d => keywords.push(d.term.toLowerCase()));
            if (st.subItems) st.subItems.forEach(si => {
              keywords.push(si.name.toLowerCase());
              if (si.faktaKhusus) si.faktaKhusus.forEach(f => keywords.push(f.toLowerCase()));
            });
            aiKnowledge.push({
              title: st.title,
              section: `${tajuk.title} > ${sec.title} > ${sub.title}`,
              keywords,
              faktaKhusus: st.faktaKhusus || [],
              details: st.details || [],
              subItems: st.subItems || []
            });
          }
        }
      }
    }
  }
}

// ──────────────────────────────────────────────
// 5. SEARCH ENGINE
// ──────────────────────────────────────────────
function buildSearchIndex() {
  const index = [];
  for (const tajukKey in notaData) {
    const tajuk = notaData[tajukKey];
    for (const secKey in tajuk.sections) {
      const sec = tajuk.sections[secKey];
      for (const subKey in sec.subsections) {
        const sub = sec.subsections[subKey];
        let searchText = sub.title + " ";
        if (sub.content) searchText += sub.content + " ";
        if (sub.faktaKhusus) searchText += sub.faktaKhusus.join(" ") + " ";
        if (sub.details) sub.details.forEach(d => { searchText += d.term + " " + d.desc + " "; });
        index.push({
          id: subKey,
          tajuk: tajuk.title,
          tajukKey,
          section: sec.title,
          sectionKey: secKey,
          title: sub.title,
          searchText: searchText.toLowerCase(),
          badge: `Tajuk ${tajukKey.replace('tajuk', '')}`,
          preview: sub.content || (sub.details ? sub.details.map(d => d.term).join(', ') : sub.faktaKhusus ? sub.faktaKhusus.join(', ') : '')
        });
        // Also add subTopics
        if (sub.subTopics) {
          for (const stKey in sub.subTopics) {
            const st = sub.subTopics[stKey];
            let stText = st.title + " ";
            if (st.faktaKhusus) stText += st.faktaKhusus.join(" ") + " ";
            if (st.details) st.details.forEach(d => { stText += d.term + " " + d.desc + " "; });
            if (st.subItems) st.subItems.forEach(si => { stText += si.name + " "; if (si.faktaKhusus) stText += si.faktaKhusus.join(" ") + " "; });
            index.push({
              id: stKey,
              tajuk: tajuk.title,
              tajukKey,
              section: sec.title,
              sectionKey: secKey,
              title: st.title,
              searchText: stText.toLowerCase(),
              badge: `Tajuk ${tajukKey.replace('tajuk', '')}`,
              preview: st.faktaKhusus ? st.faktaKhusus.join(', ') : ''
            });
          }
        }
      }
    }
  }
  return index;
}

let searchIndex = [];

function performSearch(query) {
  if (!query || query.length < 2) return [];
  const q = query.toLowerCase().trim();
  const terms = q.split(/\s+/);
  return searchIndex.filter(item => {
    return terms.every(term => item.searchText.includes(term));
  }).slice(0, 12);
}

function highlightText(text, query) {
  if (!query) return text;
  const terms = query.trim().split(/\s+/);
  let result = text;
  terms.forEach(term => {
    if (term.length >= 2) {
      const regex = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      result = result.replace(regex, '<mark>$1</mark>');
    }
  });
  return result;
}

// ──────────────────────────────────────────────
// 6. APPLICATION STATE & INIT
// ──────────────────────────────────────────────
let currentSection = 'home';
let currentTheme = localStorage.getItem('pp-theme') || 'light';
let currentColor = localStorage.getItem('pp-color') || 'emerald';
let chatOpen = false;

function init() {
  buildAIKnowledge();
  searchIndex = buildSearchIndex();

  // Apply saved theme
  document.documentElement.setAttribute('data-theme', currentTheme);
  document.documentElement.setAttribute('data-color', currentColor);

  // Set up event listeners
  setupNavigation();
  setupSearch();
  setupThemePicker();
  setupDarkModeToggle();
  setupChat();

  const savedName = localStorage.getItem('pp-username') || '';
  if (document.getElementById('quizNameInput')) document.getElementById('quizNameInput').value = savedName;
  if (document.getElementById('examNameInput')) document.getElementById('examNameInput').value = savedName;
  if (document.getElementById('hafalanNameInput')) document.getElementById('hafalanNameInput').value = savedName;

  // Show home
  showSection('home');
}

// ──────────────────────────────────────────────
// 7. NAVIGATION
// ──────────────────────────────────────────────
function setupNavigation() {
  document.querySelectorAll('.nav-item[data-section]').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const section = item.getAttribute('data-section');
      showSection(section);
      closeSidebar();
    });
  });

  // Mobile menu toggle
  const menuBtn = document.getElementById('menuToggle');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('sidebarOverlay');
      sidebar.classList.toggle('open');
      overlay.classList.toggle('active');
    });
  }

  const overlay = document.getElementById('sidebarOverlay');
  if (overlay) {
    overlay.addEventListener('click', closeSidebar);
  }
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('active');
}

function showSection(sectionId) {
  currentSection = sectionId;
  document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
  const target = document.getElementById('section-' + sectionId);
  if (target) {
    target.classList.add('active');
  }
  // Update nav active state
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const activeNav = document.querySelector(`.nav-item[data-section="${sectionId}"]`);
  if (activeNav) activeNav.classList.add('active');
  
  if (sectionId === 'rekod') {
    renderRekodSection();
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ──────────────────────────────────────────────
// 8. SEARCH
// ──────────────────────────────────────────────
function setupSearch() {
  const input = document.getElementById('searchInput');
  const dropdown = document.getElementById('searchDropdown');
  if (!input || !dropdown) return;

  let lastQuery = '';

  input.addEventListener('input', () => {
    const query = input.value;
    lastQuery = query;
    if (query.length < 2) {
      dropdown.classList.remove('active');
      dropdown.innerHTML = '';
      return;
    }
    const results = performSearch(query);
    if (results.length === 0) {
      dropdown.innerHTML = '<div class="search-result-item"><div class="result-title">Tiada hasil carian</div></div>';
      dropdown.classList.add('active');
      return;
    }
    const escapedQuery = query.replace(/'/g, "\\'");
    dropdown.innerHTML = results.map(r => `
      <div class="search-result-item" onclick="navigateToResult('${r.tajukKey}', '${r.sectionKey}', '${r.id}', '${escapedQuery}')">
        <span class="result-badge">${r.badge} — ${r.section}</span>
        <div class="result-title">${highlightText(r.title, query)}</div>
        <div class="result-preview">${highlightText(r.preview.substring(0, 120), query)}</div>
      </div>
    `).join('');
    dropdown.classList.add('active');
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const activeItem = dropdown.querySelector('.search-result-item');
      if (activeItem && lastQuery.length >= 2) {
        activeItem.click();
      }
    }
  });

  input.addEventListener('focus', () => {
    if (input.value.length >= 2) {
      dropdown.classList.add('active');
    }
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
      dropdown.classList.remove('active');
    }
  });
}

function navigateToResult(tajukKey, sectionKey, id, query) {
  const sectionMap = {
    'tajuk1': 'bab1',
    'tajuk2': 'bab2',
    'tajuk3': 'bab3'
  };
  showSection(sectionMap[tajukKey] || 'home');
  document.getElementById('searchDropdown').classList.remove('active');
  document.getElementById('searchInput').value = '';

  if (id) {
    setTimeout(() => {
      let target = document.getElementById(`nota-sec-${id}`);
      if (!target) return;

      // Step 1: Open parent accordion if this is a subTopic nested inside an accordion-body
      let parentBody = target.closest('.accordion-body');
      if (parentBody) {
        let parentTrigger = parentBody.previousElementSibling;
        if (parentTrigger && parentTrigger.classList.contains('accordion-trigger') && !parentTrigger.classList.contains('active')) {
          parentTrigger.classList.add('active');
          parentBody.classList.add('active');
        }
      }

      // Step 2: Open the target accordion itself (if it is an accordion)
      let trigger = target.querySelector('.accordion-trigger');
      if (trigger && !trigger.classList.contains('active')) {
        trigger.classList.add('active');
        let body = trigger.nextElementSibling;
        if (body) body.classList.add('active');
      }

      // Step 3: Scroll into view
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Step 4: Flash the target with a subtle pulse
        target.style.transition = 'box-shadow 0.4s ease';
        target.style.boxShadow = '0 0 0 3px var(--primary-glow)';
        target.style.borderRadius = '12px';
        setTimeout(() => { target.style.boxShadow = ''; }, 2500);
      }, 50);

      // Step 5: Highlight matching text
      if (query) {
        clearHighlights();
        const searchArea = target.querySelector('.accordion-body') || target;
        highlightInDOM(searchArea, query);

        // Remove highlight on click elsewhere
        setTimeout(() => {
          const removeHandler = (e) => {
            if (e.target.closest('.temp-highlight') || e.target.closest('.accordion-trigger')) return;
            clearHighlights();
            document.removeEventListener('click', removeHandler);
          };
          document.addEventListener('click', removeHandler);
        }, 200);
      }
    }, 150);
  }
}

function highlightInDOM(root, query) {
  const terms = query.trim().split(/\s+/).filter(t => t.length >= 2);
  if (terms.length === 0) return;

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);

  const pattern = new RegExp(`(${terms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');

  textNodes.forEach(node => {
    if (!pattern.test(node.nodeValue)) return;
    pattern.lastIndex = 0; // reset regex
    const frag = document.createDocumentFragment();
    let lastIdx = 0;
    let match;
    while ((match = pattern.exec(node.nodeValue)) !== null) {
      if (match.index > lastIdx) {
        frag.appendChild(document.createTextNode(node.nodeValue.slice(lastIdx, match.index)));
      }
      const mark = document.createElement('mark');
      mark.className = 'temp-highlight';
      mark.textContent = match[0];
      frag.appendChild(mark);
      lastIdx = pattern.lastIndex;
    }
    if (lastIdx < node.nodeValue.length) {
      frag.appendChild(document.createTextNode(node.nodeValue.slice(lastIdx)));
    }
    node.parentNode.replaceChild(frag, node);
  });
}

function clearHighlights() {
  document.querySelectorAll('mark.temp-highlight').forEach(mark => {
    const parent = mark.parentNode;
    parent.replaceChild(document.createTextNode(mark.textContent), mark);
    parent.normalize();
  });
}


// ──────────────────────────────────────────────
// 9. THEME PICKER
// ──────────────────────────────────────────────
function setupThemePicker() {
  const btn = document.getElementById('themePickerBtn');
  const picker = document.getElementById('themePicker');
  if (!btn || !picker) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    picker.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('#themePicker') && !e.target.closest('#themePickerBtn')) {
      picker.classList.remove('active');
    }
  });

  // Color buttons
  document.querySelectorAll('.theme-color-btn').forEach(cb => {
    cb.addEventListener('click', () => {
      const color = cb.getAttribute('data-color');
      currentColor = color;
      document.documentElement.setAttribute('data-color', color);
      localStorage.setItem('pp-color', color);
      document.querySelectorAll('.theme-color-btn').forEach(b => b.classList.remove('active'));
      cb.classList.add('active');
    });
  });

  // Set initial active
  const activeColorBtn = document.querySelector(`.theme-color-btn[data-color="${currentColor}"]`);
  if (activeColorBtn) activeColorBtn.classList.add('active');
}

// ──────────────────────────────────────────────
// 10. DARK MODE TOGGLE
// ──────────────────────────────────────────────
function setupDarkModeToggle() {
  const toggle = document.getElementById('darkModeToggle');
  const headerToggle = document.getElementById('darkModeHeaderBtn');
  if (!toggle) return;

  if (currentTheme === 'dark') {
    toggle.classList.add('active');
    if (headerToggle) headerToggle.classList.add('active');
  }

  toggle.addEventListener('click', toggleDarkMode);
  if (headerToggle) headerToggle.addEventListener('click', toggleDarkMode);
}

function toggleDarkMode() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  localStorage.setItem('pp-theme', currentTheme);
  const toggle = document.getElementById('darkModeToggle');
  const headerToggle = document.getElementById('darkModeHeaderBtn');
  if (toggle) toggle.classList.toggle('active', currentTheme === 'dark');
  if (headerToggle) headerToggle.classList.toggle('active', currentTheme === 'dark');
}

// ──────────────────────────────────────────────
// 11. AI CHATBOT
// ──────────────────────────────────────────────
function setupChat() {
  const toggleBtn = document.getElementById('chatToggleBtn');
  const panel = document.getElementById('chatPanel');
  const closeBtn = document.getElementById('chatCloseBtn');
  const sendBtn = document.getElementById('chatSendBtn');
  const input = document.getElementById('chatInput');

  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    chatOpen = !chatOpen;
    panel.classList.toggle('active', chatOpen);
  });

  if (closeBtn) closeBtn.addEventListener('click', () => {
    chatOpen = false;
    panel.classList.remove('active');
  });

  if (sendBtn) sendBtn.addEventListener('click', sendChatMessage);
  if (input) input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendChatMessage();
  });

  // Suggestion buttons
  document.querySelectorAll('.chat-suggestion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('chatInput').value = btn.textContent;
      sendChatMessage();
    });
  });
}

function sendChatMessage() {
  const input = document.getElementById('chatInput');
  const msg = input.value.trim();
  if (!msg) return;

  addChatMessage(msg, 'user');
  input.value = '';

  // Add Thinking indicator
  const container = document.getElementById('chatMessages');
  const typingIndicator = document.createElement('div');
  typingIndicator.className = 'chat-msg bot typing-indicator';
  typingIndicator.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
  container.appendChild(typingIndicator);
  container.scrollTop = container.scrollHeight;

  // Process AI response with simulated delay
  setTimeout(() => {
    if (typingIndicator.parentNode) {
      typingIndicator.parentNode.removeChild(typingIndicator);
    }
    const response = generateAIResponse(msg);
    typeChatResponse(response);
  }, 1200);
}

function addChatMessage(text, type) {
  const container = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = `chat-msg ${type}`;
  div.innerHTML = text;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function typeChatResponse(html) {
  const container = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'chat-msg bot';
  container.appendChild(div);

  const tokens = [];
  let i = 0;
  while (i < html.length) {
    if (html[i] === '<') {
      let tag = '';
      while (i < html.length && html[i] !== '>') {
        tag += html[i];
        i++;
      }
      tag += '>';
      tokens.push(tag);
      i++;
    } else if (html[i] === '&') {
      let entity = '';
      while (i < html.length && html[i] !== ';') {
        entity += html[i];
        i++;
      }
      entity += ';';
      tokens.push(entity);
      i++;
    } else {
      tokens.push(html[i]);
      i++;
    }
  }

  let tokenIdx = 0;
  let currentHtml = '';
  
  function typeNext() {
    if (tokenIdx >= tokens.length) return;
    
    // Instantly append tags
    while (tokenIdx < tokens.length && tokens[tokenIdx].startsWith('<')) {
      currentHtml += tokens[tokenIdx];
      tokenIdx++;
    }
    
    if (tokenIdx < tokens.length) {
      currentHtml += tokens[tokenIdx];
      tokenIdx++;
    }
    
    div.innerHTML = currentHtml;
    container.scrollTop = container.scrollHeight;
    
    if (tokenIdx < tokens.length) {
      setTimeout(typeNext, 15);
    }
  }
  
  typeNext();
}

function generateAIResponse(query) {
  const q = query.toLowerCase();

  // Greeting
  if (q.match(/^(hi|hello|hai|assalamualaikum|salam)/)) {
    return "Waalaikumussalam! 👋 Saya adalah pembantu AI untuk SMART PP. Apa yang anda ingin tahu?";
  }

  // Find matching knowledge — improved to show definitions
  let bestMatch = null;
  let bestScore = 0;
  let specificTerm = null;

  aiKnowledge.forEach(item => {
    let score = 0;
    item.keywords.forEach(kw => {
      if (q.includes(kw)) score += kw.length;
      const kwWords = kw.split(/\s+/);
      kwWords.forEach(w => {
        if (w.length >= 3 && q.includes(w)) score += 1;
      });
    });
    if (score > bestScore) {
      bestScore = score;
      bestMatch = item;
    }
  });

  // Check if user asked about a specific term within a match
  if (bestMatch && bestMatch.details) {
    bestMatch.details.forEach(d => {
      if (q.includes(d.term.toLowerCase())) {
        specificTerm = d;
      }
    });
  }

  if (bestMatch && bestScore >= 3) {
    let response = `<strong>${bestMatch.title}</strong><br><small style="opacity:0.7">${bestMatch.section}</small><br><br>`;

    if (bestMatch.content) {
      response += bestMatch.content + '<br><br>';
    }

    // If user asked about a specific term, show its definition first
    if (specificTerm) {
      response += `<div style="padding:10px 14px;background:var(--primary-light);border-radius:8px;margin-bottom:12px"><strong style="color:var(--primary)">${specificTerm.term}</strong><br><span style="font-size:0.82rem">${specificTerm.desc}</span></div>`;
    }

    if (bestMatch.faktaKhusus && bestMatch.faktaKhusus.length > 0) {
      response += '<strong>Fakta Khusus:</strong><br>';
      bestMatch.faktaKhusus.forEach((f, i) => {
        response += `${i + 1}. ${f}`;
        // Show brief definition if available
        if (bestMatch.details) {
          const detail = bestMatch.details.find(d => d.term.toLowerCase() === f.toLowerCase() || f.toLowerCase().includes(d.term.toLowerCase()) || d.term.toLowerCase().includes(f.toLowerCase()));
          if (detail) {
            const shortDesc = detail.desc.length > 120 ? detail.desc.substring(0, 120) + '...' : detail.desc;
            response += ` — <em style="color:var(--text-secondary);font-size:0.8em">${shortDesc}</em>`;
          }
        }
        response += '<br>';
      });
    }

    if (bestMatch.details && bestMatch.details.length > 0 && (!bestMatch.faktaKhusus || bestMatch.faktaKhusus.length === 0) && !specificTerm) {
      bestMatch.details.slice(0, 4).forEach(d => {
        response += `• <strong>${d.term}</strong>: ${d.desc.substring(0, 150)}...<br>`;
      });
    }

    if (bestMatch.subItems && bestMatch.subItems.length > 0) {
      bestMatch.subItems.forEach(si => {
        response += `<br><strong>${si.name}:</strong><br>`;
        if (si.faktaKhusus) {
          si.faktaKhusus.forEach((f, i) => { response += `${i + 1}. ${f}<br>`; });
        }
      });
    }

    return response;
  }

  // Fallback responses
  const fallbacks = [
    "Maaf, saya tidak pasti tentang soalan itu. Cuba tanya tentang topik seperti <strong>faktor pengeluaran</strong>, <strong>fungsi pengurusan</strong>, atau <strong>gaya pembuatan keputusan</strong>.",
    "Saya boleh membantu anda dengan topik SMART PP seperti Perniagaan & Persekitaran, Pengurusan, dan Pembuatan Keputusan. Cuba soal semula!",
    "Hmm, cuba tanya soalan yang lebih spesifik. Contoh: 'Apakah bahan mentah?' atau 'Nyatakan fungsi pengurusan' atau 'Definisi keusahawanan'."
  ];
  return fallbacks[Math.floor(Math.random() * fallbacks.length)];
}

// ──────────────────────────────────────────────
// 12. UNIVERSAL TIMER SYSTEM
// ──────────────────────────────────────────────
let universalTimer = null;
let universalTimerInterval = null;

function startUniversalTimer(seconds, onTick, onExpire) {
  clearInterval(universalTimerInterval);
  universalTimer = { remaining: seconds, total: seconds };
  universalTimerInterval = setInterval(() => {
    universalTimer.remaining--;
    if (onTick) onTick(universalTimer.remaining);
    if (universalTimer.remaining <= 0) {
      clearInterval(universalTimerInterval);
      if (onExpire) onExpire();
    }
  }, 1000);
}

function stopUniversalTimer() {
  clearInterval(universalTimerInterval);
  universalTimerInterval = null;
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function updateTimerUI(remaining) {
  const el = document.getElementById('gformTimer');
  if (!el) return;
  el.textContent = formatTime(remaining);
  const bar = el.closest('.timer-display');
  if (bar) {
    bar.className = 'timer-display';
    if (remaining <= 60) bar.className = 'timer-display danger';
    else if (remaining <= 300) bar.className = 'timer-display warning';
  }
}

// ──────────────────────────────────────────────
// 13. QUIZ SYSTEM — Google Form Style
// ──────────────────────────────────────────────
let quizState = null;

function startQuiz() {
  const bab = document.getElementById('quizBabSelect').value;
  const timerMinutes = parseInt(document.getElementById('quizTimerSelect').value);
  const userNameInput = document.getElementById('quizNameInput');
  const userName = userNameInput ? userNameInput.value.trim() : '';

  if (!userName) {
    alert("Sila masukkan nama anda sebelum bermula.");
    return;
  }
  localStorage.setItem('pp-username', userName);

  const questions = quizData.filter(q => bab === 'all' || q.bab === bab);
  const shuffled = [...questions].sort(() => Math.random() - 0.5).slice(0, 10);

  quizState = {
    userName,
    questions: shuffled,
    selections: new Array(shuffled.length).fill(null),
    bab,
    timerMinutes,
    startTime: Date.now()
  };

  showSection('quiz-active');
  renderQuizForm();

  if (timerMinutes > 0) {
    startUniversalTimer(timerMinutes * 60, updateTimerUI, () => submitQuiz());
  }
}

function renderQuizForm() {
  const container = document.getElementById('quizActiveContent');
  if (!container || !quizState) return;
  const qs = quizState.questions;

  let timerHtml = '';
  if (quizState.timerMinutes > 0) {
    timerHtml = `<div class="gform-timer-bar">
      <div class="timer-display"><i data-lucide="clock"></i> <span id="gformTimer">${formatTime(quizState.timerMinutes * 60)}</span></div>
      <div class="gform-progress-info">${qs.length} soalan</div>
    </div>`;
  }

  let questionsHtml = qs.map((q, qi) => `
    <div class="gform-question" id="quiz-q-${qi}">
      <div class="gform-question-num">Soalan ${qi + 1}</div>
      <div class="gform-question-text">${q.soalan}</div>
      <div class="answer-options">
        ${q.pilihan.map((p, pi) => `
          <div class="answer-option" onclick="selectQuizOption(${qi}, ${pi})" id="quiz-opt-${qi}-${pi}">
            <div class="answer-radio"></div>
            <span>${p}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="gform-header">
      <div class="gform-header-content">
        <h1>Kuiz Interaktif</h1>
        <p>Jawab semua soalan di bawah dan tekan "Hantar" apabila selesai.</p>
        <div class="gform-meta">
          <div class="gform-meta-item"><i data-lucide="list"></i> ${qs.length} soalan</div>
          <div class="gform-meta-item"><i data-lucide="clock"></i> ${quizState.timerMinutes > 0 ? quizState.timerMinutes + ' minit' : 'Tiada had masa'}</div>
        </div>
      </div>
    </div>
    ${timerHtml}
    ${questionsHtml}
    <div class="gform-submit-area">
      <button class="btn btn-primary btn-lg" onclick="submitQuiz()"><i data-lucide="send"></i> Hantar Jawapan</button>
      <button class="btn btn-secondary btn-lg" onclick="if(confirm('Pasti mahu keluar?')){stopUniversalTimer();showSection('quiz')}"><i data-lucide="x"></i> Batal</button>
    </div>
  `;
  if (window.lucide) lucide.createIcons();
}

function selectQuizOption(qi, pi) {
  // Deselect previous
  const prev = quizState.selections[qi];
  if (prev !== null) {
    const prevEl = document.getElementById(`quiz-opt-${qi}-${prev}`);
    if (prevEl) prevEl.classList.remove('selected');
  }
  quizState.selections[qi] = pi;
  document.getElementById(`quiz-opt-${qi}-${pi}`).classList.add('selected');
  document.getElementById(`quiz-q-${qi}`).classList.add('answered');
}

function submitQuiz() {
  stopUniversalTimer();
  const qs = quizState.questions;
  const sels = quizState.selections;
  let score = 0;
  const reviewItems = [];

  qs.forEach((q, i) => {
    const selected = sels[i];
    const isCorrect = selected === q.jawapan;
    if (isCorrect) score++;
    reviewItems.push({
      soalan: q.soalan,
      isCorrect,
      userAnswer: selected !== null ? q.pilihan[selected] : '(Tidak dijawab)',
      correctAnswer: q.pilihan[q.jawapan]
    });
  });

  const elapsed = Math.floor((Date.now() - quizState.startTime) / 1000);
  showUniversalResult({
    userName: quizState.userName,
    title: 'Kuiz Interaktif',
    score,
    total: qs.length,
    elapsed,
    timerMinutes: quizState.timerMinutes,
    reviewItems,
    containerId: 'quizActiveContent',
    retryFn: `startQuiz()`,
    backSection: 'quiz',
    mode: 'quiz'
  });
}

// ──────────────────────────────────────────────
// 14. EXAM SYSTEM — Google Form Style
// ──────────────────────────────────────────────
let examState = null;

function startExam() {
  const bab = document.getElementById('examBabSelect').value;
  const timerMinutes = parseInt(document.getElementById('examTimerSelect').value);
  const examType = document.getElementById('examTypeSelect').value;
  const userNameInput = document.getElementById('examNameInput');
  const userName = userNameInput ? userNameInput.value.trim() : '';

  if (!userName) {
    alert("Sila masukkan nama anda sebelum bermula.");
    return;
  }
  localStorage.setItem('pp-username', userName);

  let pilihanQs = [];
  let strukturQs = [];

  if (examType === 'pilihan' || examType === 'kedua') {
    pilihanQs = examData.filter(q => bab === 'all' || q.bab === bab);
    pilihanQs = [...pilihanQs].sort(() => Math.random() - 0.5);
  }
  if (examType === 'struktur' || examType === 'kedua') {
    strukturQs = examStrukturData.filter(q => bab === 'all' || q.bab === bab);
    strukturQs = [...strukturQs].sort(() => Math.random() - 0.5);
  }

  let allQuestions = [];
  pilihanQs.forEach(q => allQuestions.push({ ...q, type: 'pilihan' }));
  strukturQs.forEach(q => allQuestions.push({ ...q, type: 'struktur' }));
  if (examType === 'kedua') allQuestions = allQuestions.sort(() => Math.random() - 0.5);

  // Build distractors for pilihan questions
  allQuestions.forEach((q, i) => {
    if (q.type === 'pilihan') {
      let opts = [...q.jawapan];
      const distractors = [];
      examData.forEach(oq => {
        oq.jawapan.forEach(a => {
          if (!opts.includes(a) && !distractors.includes(a)) distractors.push(a);
        });
      });
      const shuffledD = distractors.sort(() => Math.random() - 0.5).slice(0, Math.min(3, distractors.length));
      q.allOptions = [...opts, ...shuffledD].sort(() => Math.random() - 0.5);
    }
  });

  examState = {
    userName,
    questions: allQuestions,
    pilihanSelections: {},  // qi -> Set of selected strings
    strukturAnswers: {},    // qi -> string
    bab,
    timerMinutes,
    examType,
    startTime: Date.now()
  };

  showSection('exam-active');
  renderExamForm();

  if (timerMinutes > 0) {
    startUniversalTimer(timerMinutes * 60, updateTimerUI, () => submitExam());
  }
}

function renderExamForm() {
  const container = document.getElementById('examActiveContent');
  if (!container || !examState) return;
  const qs = examState.questions;

  let timerHtml = '';
  if (examState.timerMinutes > 0) {
    timerHtml = `<div class="gform-timer-bar">
      <div class="timer-display"><i data-lucide="clock"></i> <span id="gformTimer">${formatTime(examState.timerMinutes * 60)}</span></div>
      <div class="gform-progress-info">${qs.length} soalan</div>
    </div>`;
  }

  let questionsHtml = qs.map((q, qi) => {
    if (q.type === 'pilihan') {
      return `<div class="gform-question" id="exam-q-${qi}">
        <div class="gform-question-num"><span class="exam-type-badge badge-pilihan"><i data-lucide="check-square" style="width:12px;height:12px"></i> Pilihan</span> Soalan ${qi + 1} · Pilih ${q.jawapan.length} jawapan</div>
        <div class="gform-question-text">${q.soalan}</div>
        <div class="answer-options" id="exam-opts-${qi}">
          ${q.allOptions.map((opt, oi) => `
            <div class="answer-option" onclick="toggleExamOpt(${qi}, this, '${opt.replace(/'/g, "\\'")}')" id="exam-opt-${qi}-${oi}">
              <div class="answer-checkbox"></div>
              <span>${opt}</span>
            </div>
          `).join('')}
        </div>
      </div>`;
    } else {
      return `<div class="gform-question" id="exam-q-${qi}">
        <div class="gform-question-num"><span class="exam-type-badge badge-struktur"><i data-lucide="pen-line" style="width:12px;height:12px"></i> Struktur</span> Soalan ${qi + 1} · ${q.markahPenuh} markah</div>
        <div class="gform-question-text">${q.soalan}</div>
        <div class="struktur-answer-area">
          <textarea class="struktur-textarea" rows="5" placeholder="Taipkan jawapan anda di sini..." oninput="examState.strukturAnswers[${qi}]=this.value;document.getElementById('exam-q-${qi}').classList.add('answered')"></textarea>
          <div class="struktur-hints"><i data-lucide="lightbulb" style="width:14px;height:14px"></i> <span>Kata kunci: ${q.katakunci.length} kata kunci dinilai</span></div>
        </div>
      </div>`;
    }
  }).join('');

  container.innerHTML = `
    <div class="gform-header">
      <div class="gform-header-content">
        <h1>Peperiksaan Fakta Khusus</h1>
        <p>Jawab semua soalan di bawah dan tekan "Hantar" apabila selesai.</p>
        <div class="gform-meta">
          <div class="gform-meta-item"><i data-lucide="list"></i> ${qs.length} soalan</div>
          <div class="gform-meta-item"><i data-lucide="clock"></i> ${examState.timerMinutes > 0 ? examState.timerMinutes + ' minit' : 'Tiada had masa'}</div>
        </div>
      </div>
    </div>
    ${timerHtml}
    ${questionsHtml}
    <div class="gform-submit-area">
      <button class="btn btn-primary btn-lg" onclick="submitExam()"><i data-lucide="send"></i> Hantar Jawapan</button>
      <button class="btn btn-secondary btn-lg" onclick="if(confirm('Pasti mahu keluar?')){stopUniversalTimer();showSection('exam')}"><i data-lucide="x"></i> Batal</button>
    </div>
  `;
  if (window.lucide) lucide.createIcons();
}

function toggleExamOpt(qi, el, value) {
  if (!examState.pilihanSelections[qi]) examState.pilihanSelections[qi] = new Set();
  const set = examState.pilihanSelections[qi];
  if (set.has(value)) {
    set.delete(value);
    el.classList.remove('selected');
  } else {
    set.add(value);
    el.classList.add('selected');
  }
  if (set.size > 0) document.getElementById(`exam-q-${qi}`).classList.add('answered');
  else document.getElementById(`exam-q-${qi}`).classList.remove('answered');
}

function submitExam() {
  stopUniversalTimer();
  const qs = examState.questions;
  let score = 0;
  let totalPoints = 0;
  const reviewItems = [];

  qs.forEach((q, qi) => {
    if (q.type === 'pilihan') {
      const correct = q.jawapan;
      totalPoints += correct.length;
      const selected = examState.pilihanSelections[qi] ? [...examState.pilihanSelections[qi]] : [];
      let pts = 0;
      selected.forEach(s => { if (correct.includes(s)) pts++; });
      score += pts;
      const isFullCorrect = pts === correct.length && selected.length === correct.length;
      reviewItems.push({
        soalan: q.soalan,
        isCorrect: isFullCorrect,
        userAnswer: selected.length > 0 ? selected.join(', ') : '(Tidak dijawab)',
        correctAnswer: correct.join(', '),
        partialScore: `${pts}/${correct.length}`
      });
    } else {
      totalPoints += q.markahPenuh;
      const userText = (examState.strukturAnswers[qi] || '').toLowerCase();
      let matched = [];
      let missed = [];
      q.katakunci.forEach(kw => {
        if (userText.includes(kw.toLowerCase())) matched.push(kw);
        else missed.push(kw);
      });
      const pts = Math.round((matched.length / q.katakunci.length) * q.markahPenuh);
      score += pts;
      reviewItems.push({
        soalan: q.soalan,
        isCorrect: pts === q.markahPenuh,
        userAnswer: examState.strukturAnswers[qi] || '(Tidak dijawab)',
        correctAnswer: q.jawapanModel,
        partialScore: `${pts}/${q.markahPenuh}`,
        isStruktur: true,
        matched,
        missed
      });
    }
  });

  const elapsed = Math.floor((Date.now() - examState.startTime) / 1000);
  showUniversalResult({
    userName: examState.userName,
    title: 'Peperiksaan Fakta Khusus',
    score,
    total: totalPoints,
    elapsed,
    timerMinutes: examState.timerMinutes,
    reviewItems,
    containerId: 'examActiveContent',
    retryFn: `showSection('exam')`,
    backSection: 'exam',
    mode: 'exam',
    isPoints: true
  });
}

// ──────────────────────────────────────────────
// 15. HAFALAN FAKTA KHUSUS — Fill-in-the-blank
// ──────────────────────────────────────────────
let hafalanState = null;

function startHafalan() {
  const bab = document.getElementById('hafalanBabSelect').value;
  const timerMinutes = parseInt(document.getElementById('hafalanTimerSelect').value);
  const userNameInput = document.getElementById('hafalanNameInput');
  const userName = userNameInput ? userNameInput.value.trim() : '';

  if (!userName) {
    alert("Sila masukkan nama anda sebelum bermula.");
    return;
  }
  localStorage.setItem('pp-username', userName);

  let questions = examData.filter(q => bab === 'all' || q.bab === bab);
  questions = [...questions].sort(() => Math.random() - 0.5);

  hafalanState = {
    userName,
    questions,
    answers: {},  // qi -> [string, string, ...]
    bab,
    timerMinutes,
    startTime: Date.now()
  };

  showSection('hafalan-active');
  renderHafalanForm();

  if (timerMinutes > 0) {
    startUniversalTimer(timerMinutes * 60, updateTimerUI, () => submitHafalan());
  }
}

function renderHafalanForm() {
  const container = document.getElementById('hafalanActiveContent');
  if (!container || !hafalanState) return;
  const qs = hafalanState.questions;

  let timerHtml = '';
  if (hafalanState.timerMinutes > 0) {
    timerHtml = `<div class="gform-timer-bar">
      <div class="timer-display"><i data-lucide="clock"></i> <span id="gformTimer">${formatTime(hafalanState.timerMinutes * 60)}</span></div>
      <div class="gform-progress-info">${qs.length} soalan</div>
    </div>`;
  }

  let questionsHtml = qs.map((q, qi) => {
    const blanks = q.jawapan.map((_, bi) => `
      <div class="hafalan-blank-row">
        <div class="hafalan-blank-num">${bi + 1}</div>
        <input type="text" class="hafalan-blank-input" id="hafalan-${qi}-${bi}" placeholder="Isi jawapan ${bi + 1}..." oninput="updateHafalanAnswer(${qi})">
      </div>
    `).join('');

    return `<div class="gform-question" id="hafalan-q-${qi}">
      <div class="gform-question-num">Soalan ${qi + 1}</div>
      <div class="gform-question-text">${q.soalan}</div>
      ${blanks}
    </div>`;
  }).join('');

  container.innerHTML = `
    <div class="gform-header">
      <div class="gform-header-content">
        <h1>Hafalan Fakta Khusus</h1>
        <p>Isi tempat kosong untuk setiap fakta khusus. Hantar apabila selesai.</p>
        <div class="gform-meta">
          <div class="gform-meta-item"><i data-lucide="list"></i> ${qs.length} soalan</div>
          <div class="gform-meta-item"><i data-lucide="clock"></i> ${hafalanState.timerMinutes > 0 ? hafalanState.timerMinutes + ' minit' : 'Tiada had masa'}</div>
        </div>
      </div>
    </div>
    ${timerHtml}
    ${questionsHtml}
    <div class="gform-submit-area">
      <button class="btn btn-primary btn-lg" onclick="submitHafalan()"><i data-lucide="send"></i> Hantar Jawapan</button>
      <button class="btn btn-secondary btn-lg" onclick="if(confirm('Pasti mahu keluar?')){stopUniversalTimer();showSection('hafalan')}"><i data-lucide="x"></i> Batal</button>
    </div>
  `;
  if (window.lucide) lucide.createIcons();
}

function updateHafalanAnswer(qi) {
  const q = hafalanState.questions[qi];
  const answers = [];
  let hasAny = false;
  q.jawapan.forEach((_, bi) => {
    const val = document.getElementById(`hafalan-${qi}-${bi}`).value.trim();
    answers.push(val);
    if (val) hasAny = true;
  });
  hafalanState.answers[qi] = answers;
  if (hasAny) document.getElementById(`hafalan-q-${qi}`).classList.add('answered');
}

function submitHafalan() {
  stopUniversalTimer();
  const qs = hafalanState.questions;
  let score = 0;
  let totalPoints = 0;
  const reviewItems = [];

  qs.forEach((q, qi) => {
    const userAnswers = hafalanState.answers[qi] || new Array(q.jawapan.length).fill('');
    totalPoints += q.jawapan.length;
    let correctCount = 0;
    const details = [];

    const isProses = q.soalan.toLowerCase().includes('proses');
    let matchedCorrectIndices = new Set();
    
    // Pass 1: find matches
    let matchResults = [];
    q.jawapan.forEach((correct, bi) => {
      const user = (userAnswers[bi] || '').trim();
      let isMatch = false;
      let actualMatched = correct;
      
      if (isProses) {
        if (user.toLowerCase() === correct.toLowerCase()) {
          isMatch = true;
        }
      } else {
        if (user) {
          const foundIdx = q.jawapan.findIndex((ans, idx) => 
            ans.toLowerCase() === user.toLowerCase() && !matchedCorrectIndices.has(idx)
          );
          if (foundIdx !== -1) {
            isMatch = true;
            matchedCorrectIndices.add(foundIdx);
            actualMatched = q.jawapan[foundIdx];
          }
        }
      }
      
      if (isMatch) correctCount++;
      matchResults.push({ num: bi + 1, user, isMatch, actualMatched });
    });

    // Pass 2: assign unused correct answers to wrong answers
    let unusedCorrectAnswers = [];
    if (!isProses) {
      q.jawapan.forEach((ans, idx) => {
        if (!matchedCorrectIndices.has(idx)) {
          unusedCorrectAnswers.push(ans);
        }
      });
    }

    matchResults.forEach((res, bi) => {
      let correctToDisplay = res.actualMatched;
      if (!res.isMatch && !isProses) {
        correctToDisplay = unusedCorrectAnswers.shift() || q.jawapan[bi];
      } else if (!res.isMatch && isProses) {
        correctToDisplay = q.jawapan[bi];
      }
      
      details.push({
        num: res.num,
        user: res.user,
        correct: correctToDisplay,
        isMatch: res.isMatch,
        actualMatched: res.actualMatched
      });
    });

    score += correctCount;
    reviewItems.push({
      soalan: q.soalan,
      isCorrect: correctCount === q.jawapan.length,
      partialScore: `${correctCount}/${q.jawapan.length}`,
      correctAnswer: q.jawapan.join(', '),
      userAnswer: userAnswers.filter(a => a).join(', ') || '(Tidak dijawab)',
      hafalanDetails: details
    });
  });

  const elapsed = Math.floor((Date.now() - hafalanState.startTime) / 1000);
  showUniversalResult({
    userName: hafalanState.userName,
    title: 'Hafalan Fakta Khusus',
    score,
    total: totalPoints,
    elapsed,
    timerMinutes: hafalanState.timerMinutes,
    reviewItems,
    containerId: 'hafalanActiveContent',
    retryFn: `showSection('hafalan')`,
    backSection: 'hafalan',
    mode: 'hafalan',
    isPoints: true
  });
}

// ──────────────────────────────────────────────
// 16. UNIVERSAL RESULT SYSTEM
// ──────────────────────────────────────────────
function showUniversalResult(opts) {
  const container = document.getElementById(opts.containerId);
  if (!container) return;

  const pct = Math.round((opts.score / opts.total) * 100);
  let grade = 'Perlu Usaha Lagi 💪';
  if (pct >= 90) grade = 'Cemerlang! 🌟';
  else if (pct >= 80) grade = 'Sangat Baik! ⭐';
  else if (pct >= 60) grade = 'Baik! 👍';
  else if (pct >= 40) grade = 'Sederhana 📚';

  const minsUsed = Math.floor(opts.elapsed / 60);
  const secsUsed = opts.elapsed % 60;

  const userName = opts.userName || localStorage.getItem('pp-username') || 'Pelajar';

  saveResultToLocal({
    id: Date.now().toString(),
    date: new Date().toISOString(),
    userName,
    mode: opts.mode,
    score: opts.score,
    total: opts.total,
    elapsed: opts.elapsed,
    title: opts.title,
    reviewItems: opts.reviewItems
  });

  const unitLabel = opts.isPoints ? 'poin' : 'soalan betul';

  // Build review HTML
  let reviewHtml = opts.reviewItems.map((item, i) => {
    const icon = item.isCorrect
      ? '<div class="result-review-icon correct">✓</div>'
      : '<div class="result-review-icon wrong">✗</div>';

    let answerDetail = '';
    if (item.hafalanDetails) {
      // Hafalan: show each blank
      answerDetail = item.hafalanDetails.map(d => {
        if (d.isMatch) {
          return `<span class="correct-ans">${d.num}. ${d.actualMatched || d.correct} ✓</span>`;
        } else {
          return `<span>${d.num}. ${d.user ? `<span class="user-wrong">${d.user}</span>` : '<em>kosong</em>'} → <span class="correct-ans">${d.correct}</span></span>`;
        }
      }).join('<br>');
    } else if (item.isStruktur) {
      answerDetail = `Markah: <strong>${item.partialScore}</strong>`;
      if (item.matched && item.matched.length > 0) answerDetail += `<br><span class="correct-ans">✓ Dijumpai: ${item.matched.join(', ')}</span>`;
      if (item.missed && item.missed.length > 0) answerDetail += `<br><span class="user-wrong">✗ Tidak dijumpai: ${item.missed.join(', ')}</span>`;
    } else if (item.isCorrect) {
      answerDetail = `<span class="correct-ans">Jawapan: ${item.correctAnswer}</span>`;
    } else {
      answerDetail = `Jawapan anda: <span class="user-wrong">${item.userAnswer}</span><br>Jawapan betul: <span class="correct-ans">${item.correctAnswer}</span>`;
      if (item.partialScore) answerDetail += ` (${item.partialScore})`;
    }

    return `<div class="result-review-item">
      ${icon}
      <div class="result-review-content">
        <div class="result-review-question">${i + 1}. ${item.soalan}</div>
        <div class="result-review-answer">${answerDetail}</div>
      </div>
    </div>`;
  }).join('');

  container.innerHTML = `
    <div class="result-container">
      <div class="result-capture-area" id="resultCaptureArea">
        <div class="result-header-card">
          <h2>${opts.title}</h2>
          <div style="font-size:1.1rem; font-weight:600; color:var(--text-secondary); margin-bottom:12px;"><i data-lucide="user" style="width:16px;height:16px;vertical-align:-2px"></i> ${userName}</div>
          <div class="result-score-big">${opts.score} / ${opts.total}</div>
          <div class="result-score-label">${unitLabel} · ${pct}%</div>
          <div class="result-grade">${grade}</div>
          <div class="result-meta-row">
            <div class="result-meta-item"><i data-lucide="clock"></i> ${minsUsed}m ${secsUsed}s</div>
            <div class="result-meta-item"><i data-lucide="calendar"></i> ${new Date().toLocaleDateString('ms-MY')}</div>
          </div>
        </div>
        <div class="result-review-list">
          <div style="font-size:0.82rem;font-weight:700;color:var(--text-primary);margin-bottom:12px;display:flex;align-items:center;gap:6px">
            <i data-lucide="clipboard-check" style="width:16px;height:16px;color:var(--primary)"></i> Semakan Jawapan
          </div>
          ${reviewHtml}
        </div>
        <div class="result-watermark">
          <i data-lucide="graduation-cap" style="width:12px;height:12px"></i>
          SMART PP (Student Mastery And Revision Technology) — Developed by FizamCyberSec@Pizam Parker
        </div>
      </div>
      <div class="result-actions">
        <button class="btn btn-primary" onclick="downloadResultAsImage()"><i data-lucide="download"></i> Simpan Sebagai Gambar</button>
        <button class="btn btn-secondary" onclick="${opts.retryFn}"><i data-lucide="rotate-ccw"></i> Cuba Lagi</button>
        <button class="btn btn-ghost" onclick="showSection('home')"><i data-lucide="home"></i> Halaman Utama</button>
      </div>
    </div>
  `;
  if (window.lucide) lucide.createIcons();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function downloadResultAsImage() {
  const el = document.getElementById('resultCaptureArea');
  if (!el) return;

  const btn = event.target.closest('.btn');
  const originalText = btn.innerHTML;
  btn.innerHTML = '<i data-lucide="loader" style="width:18px;height:18px;animation:spin 1s linear infinite"></i> Menyimpan...';
  btn.disabled = true;

  html2canvas(el, {
    backgroundColor: null,
    scale: 2,
    useCORS: true,
    logging: false,
    onclone: (doc) => {
      // Force styles for capture
      const cloned = doc.getElementById('resultCaptureArea');
      if (cloned) {
        cloned.style.borderRadius = '16px';
        cloned.style.overflow = 'hidden';
      }
    }
  }).then(canvas => {
    const link = document.createElement('a');
    link.download = `keputusan_${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    btn.innerHTML = originalText;
    btn.disabled = false;
    if (window.lucide) lucide.createIcons();
  }).catch(err => {
    console.error('Download error:', err);
    btn.innerHTML = originalText;
    btn.disabled = false;
    if (window.lucide) lucide.createIcons();
    alert('Maaf, gagal menyimpan gambar. Cuba sekali lagi.');
  });
}

// ──────────────────────────────────────────────
// 17. ACCORDION TOGGLE
// ──────────────────────────────────────────────
function toggleAccordion(el) {
  const body = el.nextElementSibling;
  const isOpen = el.classList.contains('active');

  // Close all in same parent
  const parent = el.closest('.content-section') || document.body;
  parent.querySelectorAll('.accordion-trigger.active').forEach(t => {
    t.classList.remove('active');
    t.nextElementSibling.classList.remove('active');
  });

  if (!isOpen) {
    el.classList.add('active');
    body.classList.add('active');
  }
}

// ──────────────────────────────────────────────
// 18. RENDER NOTA CONTENT (Dynamic)
// ──────────────────────────────────────────────
function renderNotaSection(tajukKey) {
  const tajuk = notaData[tajukKey];
  if (!tajuk) return '';

  let html = '';
  for (const secKey in tajuk.sections) {
    const sec = tajuk.sections[secKey];
    html += `<h2 class="page-title" style="font-size:1.3rem;margin-top:32px;margin-bottom:16px">${secKey} ${sec.title}</h2>`;

    for (const subKey in sec.subsections) {
      const sub = sec.subsections[subKey];
      html += `<div class="accordion" id="nota-sec-${subKey}">
        <button class="accordion-trigger" onclick="toggleAccordion(this)">
          <span>${sub.title}</span>
          <i data-lucide="chevron-down"></i>
        </button>
        <div class="accordion-body">`;

      if (sub.content) {
        html += `<p style="margin-bottom:16px">${sub.content}</p>`;
      }

      if (sub.faktaKhusus) {
        html += `<div class="card card-accent" style="margin-bottom:16px;padding:16px 20px"><strong class="text-primary-color" style="display:block;margin-bottom:8px">Fakta Khusus:</strong><ol class="fakta-list">`;
        sub.faktaKhusus.forEach(f => { html += `<li>${f}</li>`; });
        html += `</ol></div>`;
      }

      if (sub.details) {
        html += `<div style="display:flex;flex-direction:column;gap:10px">`;
        sub.details.forEach(d => {
          html += `<div class="card" style="padding:16px 20px;margin-bottom:0">
            <strong style="color:var(--primary)">${d.term}</strong>
            <p style="margin-top:4px;font-size:0.85rem">${d.desc}</p>`;
          if (d.ciri) {
            html += `<table class="info-table" style="margin-top:12px">
              <thead><tr><th>Ciri</th><th>Penerangan</th></tr></thead><tbody>`;
            for (const key in d.ciri) {
              html += `<tr><td><strong>${key}</strong></td><td>${d.ciri[key]}</td></tr>`;
            }
            html += `</tbody></table>`;
          }
          html += `</div>`;
        });
        html += `</div>`;
      }

      // SubTopics (for 2.3.2)
      if (sub.subTopics) {
        for (const stKey in sub.subTopics) {
          const st = sub.subTopics[stKey];
          html += `<div style="margin-top:20px" id="nota-sec-${stKey}"><h3 style="font-size:1rem;font-weight:700;margin-bottom:12px;color:var(--text-primary)">${st.title}</h3>`;
          if (st.faktaKhusus) {
            html += `<div class="card card-accent" style="padding:14px 18px;margin-bottom:12px"><strong class="text-primary-color" style="display:block;margin-bottom:6px">Fakta Khusus:</strong><ol class="fakta-list">`;
            st.faktaKhusus.forEach(f => { html += `<li>${f}</li>`; });
            html += `</ol></div>`;
          }
          if (st.details) {
            st.details.forEach(d => {
              html += `<div class="card" style="padding:14px 18px;margin-bottom:8px"><strong style="color:var(--primary)">${d.term}</strong><p style="margin-top:4px;font-size:0.85rem">${d.desc}</p></div>`;
            });
          }
          if (st.subItems) {
            st.subItems.forEach(si => {
              html += `<div class="card" style="padding:14px 18px;margin-bottom:8px"><strong style="color:var(--primary)">${si.name}</strong>`;
              if (si.faktaKhusus) {
                html += `<ol class="fakta-list" style="margin-top:8px">`;
                si.faktaKhusus.forEach(f => { html += `<li>${f}</li>`; });
                html += `</ol>`;
              }
              html += `</div>`;
            });
          }
          html += `</div>`;
        }
      }

      html += `</div></div>`;
    }
  }
  return html;
}

// ──────────────────────────────────────────────
// 19. REKOD KEPUTUSAN (RESULT TRACKING)
// ──────────────────────────────────────────────
function getLocalResults() {
  const data = localStorage.getItem('pp-results');
  return data ? JSON.parse(data) : [];
}

function saveResultToLocal(result) {
  const results = getLocalResults();
  // Don't save if it's a review view
  if (result.title && result.title.includes('(Semakan Semula)')) return;
  
  results.unshift(result);
  localStorage.setItem('pp-results', JSON.stringify(results));
}

function renderRekodSection() {
  const container = document.getElementById('rekod-container');
  if (!container) return;

  const results = getLocalResults();
  if (results.length === 0) {
    container.innerHTML = `<div class="card" style="text-align:center;padding:40px"><div style="color:var(--text-tertiary)"><i data-lucide="bar-chart-2" style="width:48px;height:48px;margin-bottom:12px;opacity:0.5"></i></div><h3>Tiada Rekod Dijumpai</h3><p>Anda belum melengkapkan sebarang kuiz atau peperiksaan. Sila cuba mod interaktif untuk merekodkan markah pertama anda.</p></div>`;
    if (window.lucide) lucide.createIcons();
    return;
  }

  // Draw chart
  let chartHtml = `<div class="card" style="margin-bottom:20px;">
    <h3 style="margin-bottom:16px"><i data-lucide="trending-up" style="width:18px;height:18px;vertical-align:middle;margin-right:6px"></i> Trend Prestasi</h3>
    <div style="display:flex; align-items:flex-end; gap:10px; border-bottom: 2px solid var(--border-color); padding-bottom:8px; overflow-x:auto;">
  `;
  
  // Plot up to last 15 attempts in reverse (oldest first for left-to-right trend)
  const chartData = results.slice(0, 15).reverse();
  chartData.forEach(r => {
    const pct = Math.round((r.score / r.total) * 100);
    let barColor = 'var(--primary)';
    if (pct < 40) barColor = '#ef4444';
    else if (pct < 60) barColor = '#f59e0b';
    
    chartHtml += `<div style="flex:1; min-width:30px; max-width:60px; display:flex; flex-direction:column; align-items:center;">
      <div style="font-size:0.75rem; color:var(--text-secondary); margin-bottom:4px;">${pct}%</div>
      <div style="width:100%; height:150px; display:flex; align-items:flex-end;">
        <div style="width:100%; height:${pct}%; background-color:${barColor}; border-radius:4px 4px 0 0; transition: height 0.5s ease;"></div>
      </div>
      <div style="font-size:0.7rem; color:var(--text-tertiary); margin-top:4px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; width:100%; text-align:center;" title="${r.title}">${r.mode === 'quiz' ? 'QZ' : r.mode === 'exam' ? 'EX' : 'HF'}</div>
    </div>`;
  });
  chartHtml += `</div>
    <div style="margin-top:16px; font-size:0.8rem; color:var(--text-secondary); display:flex; gap:16px; justify-content:center; flex-wrap:wrap; background-color:var(--bg-secondary); padding:8px; border-radius:6px;">
      <span style="display:flex; align-items:center; gap:4px;"><i data-lucide="help-circle" style="width:14px;height:14px"></i> <strong>QZ</strong> = Kuiz Interaktif</span>
      <span style="display:flex; align-items:center; gap:4px;"><i data-lucide="file-text" style="width:14px;height:14px"></i> <strong>EX</strong> = Peperiksaan Fakta</span>
      <span style="display:flex; align-items:center; gap:4px;"><i data-lucide="brain" style="width:14px;height:14px"></i> <strong>HF</strong> = Hafalan Fakta</span>
    </div>
  </div>`;

  // Draw list
  let listHtml = `<div class="card"><h3 style="margin-bottom:16px"><i data-lucide="history" style="width:18px;height:18px;vertical-align:middle;margin-right:6px"></i> Sejarah Cubaan</h3><div style="display:flex; flex-direction:column; gap:12px;">`;
  
  results.forEach((r, idx) => {
    const dateObj = new Date(r.date);
    const dateStr = dateObj.toLocaleDateString('ms-MY') + ' ' + dateObj.toLocaleTimeString('ms-MY', {hour: '2-digit', minute:'2-digit'});
    const pct = Math.round((r.score / r.total) * 100);
    const minsUsed = Math.floor(r.elapsed / 60);
    const secsUsed = r.elapsed % 60;
    const timeStr = `${minsUsed}m ${secsUsed}s`;

    listHtml += `
    <div style="border: 1px solid var(--border-color); border-radius:8px; padding:12px; display:flex; justify-content:space-between; align-items:center; background-color:var(--bg-primary); flex-wrap:wrap; gap:12px;">
      <div>
        <div style="font-weight:600; font-size:1rem; color:var(--text-primary); margin-bottom:4px;">${r.title}</div>
        <div style="font-size:0.85rem; color:var(--text-secondary); display:flex; gap:12px; align-items:center; flex-wrap:wrap;">
          <span><i data-lucide="calendar" style="width:12px;height:12px;vertical-align:-2px"></i> ${dateStr}</span>
          <span><i data-lucide="clock" style="width:12px;height:12px;vertical-align:-2px"></i> ${timeStr}</span>
          <span><i data-lucide="user" style="width:12px;height:12px;vertical-align:-2px"></i> ${r.userName}</span>
        </div>
      </div>
      <div style="display:flex; align-items:center; gap:16px;">
        <div style="text-align:right;">
          <div style="font-weight:700; font-size:1.1rem; color:var(--primary);">${r.score}/${r.total} <span style="font-size:0.9rem;opacity:0.8">(${pct}%)</span></div>
        </div>
        <button class="btn btn-secondary btn-sm" onclick="showRekodDetails(${idx})">Semak</button>
      </div>
    </div>`;
  });
  listHtml += `</div></div>`;

  container.innerHTML = chartHtml + listHtml;
  if (window.lucide) lucide.createIcons();
}

function showRekodDetails(index) {
  const results = getLocalResults();
  const r = results[index];
  if (!r || !r.reviewItems) return;

  showUniversalResult({
    title: r.title + ' (Semakan Semula)',
    score: r.score,
    total: r.total,
    elapsed: r.elapsed,
    timerMinutes: 0,
    reviewItems: r.reviewItems,
    containerId: 'rekod-container',
    retryFn: `showSection('rekod')`,
    backSection: 'rekod',
    mode: r.mode,
    isPoints: r.mode === 'exam' || r.mode === 'hafalan',
    userName: r.userName
  });
}

// ──────────────────────────────────────────────
// 20. LOCKSCREEN
// ──────────────────────────────────────────────
function setupLockscreen() {
  const container = document.getElementById('lockscreen-container');
  const appContent = document.getElementById('app-content');
  const btn = document.getElementById('lockscreen-btn');
  const pwdInput = document.getElementById('lockscreen-pwd');
  const errorMsg = document.getElementById('lockscreen-error');

  // The base64 encoded password for 'Xy7$P@ssw0rd!99'
  const validHash = 'WHk3JFBAc3N3MHJkITk5';

  function checkPassword() {
    const input = pwdInput.value;
    if (btoa(input) === validHash) {
      container.classList.add('unlocked');
      setTimeout(() => {
        container.style.display = 'none';
        appContent.style.display = 'block';
      }, 400); // Wait for transition
    } else {
      errorMsg.textContent = 'Akses Ditolak. Sila cuba lagi.';
      errorMsg.classList.add('show');
      pwdInput.value = '';
      container.querySelector('.lockscreen-card').classList.add('shake');
      setTimeout(() => {
        container.querySelector('.lockscreen-card').classList.remove('shake');
      }, 300);
    }
  }

  if (btn && pwdInput) {
    btn.addEventListener('click', checkPassword);
    pwdInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') checkPassword();
    });
  }
}

// ──────────────────────────────────────────────
// 21. INIT ON LOAD
// ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  setupLockscreen();

  // Render dynamic nota sections
  ['tajuk1', 'tajuk2', 'tajuk3'].forEach((key, i) => {
    const container = document.getElementById(`nota-${key}`);
    if (container) container.innerHTML = renderNotaSection(key);
  });

  init();

  // Initialize Lucide icons
  if (window.lucide) lucide.createIcons();
});

