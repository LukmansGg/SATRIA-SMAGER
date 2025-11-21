let pelanggaran = JSON.parse(localStorage.getItem("pelanggaranDB")) || [];
if (pelanggaran.length === 0) {
	pelanggaran = [
		{
			code: "j1",
			jenis: "Terlambat Masuk Sekolah",
			poin: 2,
		},
		{
			code: "j2",
			jenis: "Tidak Melaksanakan Tugas Harian / Piket Kelas",
			poin: 2,
		},
		{
			code: "j3",
			jenis:
				"Tidak Mengikuti Upacara Bendera / Kegiatan Yang Ditentukan Sekolah",
			poin: 3,
		},
		{
			code: "j4",
			jenis: "Tidak Masuk Sekolah / Meninggalkan Sekolah Tanpa Izin",
			poin: 3,
		},
		{
			code: "p1",
			jenis: "Membuang Sampah Tidak Pada Tempatnya",
			poin: 2,
		},
		{
			code: "p2",
			jenis:
				"Mengikuti Mode Tidak Pada Tempatnya (Baik Busana, Ber kmake up, Rambut Maupun Aksesoris",
			poin: 2,
		},
		{
			code: "p3",
			jenis:
				"Tidak Berseragam Lengkap Sesuai Ketentuan (Badge, Sepatu, Jilbab, ID Card)",
			poin: 2,
		},
		{
			code: "p4",
			jenis: "Parkir Kendaraan Tidak Pada Tempatnya",
			poin: 2,
		},
		{
			code: "p5",
			jenis: "Coret-Coret / Mengotori Fasilitas Sekolah",
			poin: 3,
		},
		{
			code: "k1",
			jenis: "Mengganggu Proses Belajar Mengajar",
			poin: 3,
		},
		{
			code: "k2",
			jenis: "Bermain Di Tempat Parkir Sepeda",
			poin: 3,
		},
		{
			code: "k3",
			jenis: "Tidak Mengumpulkan HP Di Awal Pelajaran",
			poin: 3,
		},
		{
			code: "k4",
			jenis: "Bermain Gawai / HP Pada Saat Kegiatan Belajar Mengajar",
			poin: 3,
		},
		{
			code: "k5",
			jenis: "Kendaraan Bermotor Tidak Sesuai Standar",
			poin: 5,
		},
		{
			code: "k6",
			jenis: "Melompat Pagar Atau Jendela Sekolah",
			poin: 8,
		},
		{
			code: "k7",
			jenis:
				"Berbuat Tidak Sopan Terhadap Teman (Misal: Berkata Kotor, Mencolek, Bullying)",
			poin: 8,
		},
		{
			code: "k8",
			jenis:
				"Membawa Rokok Atau Vape Di Lingkungan Sekolah Baik Dalam Kegiatan Intra Maupun Ekstra",
			poin: 10,
		},
		{
			code: "k9",
			jenis:
				"Berperilaku Tidak Jujur Pada Saat Penilaian (Menyontek Dalam Bentuk Apapun)",
			poin: 16,
		},
		{
			code: "k10",
			jenis: "Merusak Fasilitas Sekolah / Milik Orang Lain",
			poin: 18,
		},
		{
			code: "k11",
			jenis:
				"Pemalsuan / Mengubah Nilai Rapor, Memalsu Tanda Tangan Kepala Sekolah / Wali Kelas / Guru / Wali Murid",
			poin: 18,
		},
		{
			code: "k12",
			jenis:
				"Bertindak Atau Bicara Tidak Sopan Kepada Kepala Sekolah, Guru, Atau Karyawan Sekolah",
			poin: 21,
		},
		{
			code: "k13",
			jenis:
				"Ancaman Terhadap Kepala Sekolah, Guru / Karyawan, Dan Sesama Siswa",
			poin: 21,
		},
		{
			code: "k14",
			jenis: "Menyimpan, Mengakses, Dan Menyebarkan Media Pornografi",
			poin: 21,
		},
		{
			code: "k15",
			jenis: "Bertindak Kriminal (Misal: Pencurian, Perjudian, Dan Pemerasan)",
			poin: 36,
		},
		{
			code: "k16",
			jenis:
				"Membawa Atau Menyimpan Senjata Tajam, Senjata Api, Bahan Peledak, Bahan Berbahaya, Dan Beracun",
			poin: 36,
		},
		{
			code: "k17",
			jenis:
				"Berkelahi / Menganiaya Sesama Teman Baik Di Dalam Maupun Di Luar Sekolah",
			poin: 36,
		},
		{
			code: "k18",
			jenis:
				"Penganiayaan Terhadap Kepala Sekolah, Guru, Atau Karyawan Sekolah Di Dalam Dan Di Luar Sekolah",
			poin: 36,
		},
		{
			code: "k19",
			jenis: "Pencemaran Nama Baik Sekolah",
			poin: 36,
		},
		{
			code: "k20",
			jenis:
				"Melakukan Tindakan Asusila Seperti Pemerkosaan / Hubungan Seksual, Hamil / Menghamili, Pelecehan Seksual",
			poin: 36,
		},
		{
			code: "k21",
			jenis: "Bersuami Atau Beristri",
			poin: 36,
		},
		{
			code: "k22",
			jenis: "Membawa, Menyimpan, Mengkonsumsi, Mengedarkan, Miras, NARKOBA",
			poin: 36,
		},
	];
	localStorage.setItem("pelanggaranDB", JSON.stringify(pelanggaran));
}

function saveDB() {
	localStorage.setItem("pelanggaranDB", JSON.stringify(pelanggaran));
}
