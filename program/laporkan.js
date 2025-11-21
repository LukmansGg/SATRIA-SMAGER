const inputNama = document.getElementById("laporkan-nama");

const suggestionBox = document.createElement("div");
suggestionBox.className = "autocomplete-box";
suggestionBox.style.cssText = `
    position: absolute;
    background: white;
    border: 1px solid #ccc;
    width: 100%;
    max-height: 150px;
    overflow-y: auto;
    z-index: 99;
    display:none;
`;
inputNama.parentNode.appendChild(suggestionBox);

inputNama.addEventListener("input", () => {
	const q = inputNama.value.toLowerCase();
	suggestionBox.innerHTML = "";

	if (q.length === 0) {
		suggestionBox.style.display = "none";
		return;
	}

	const matching = accounts.filter((acc) => acc.name.toLowerCase().includes(q));

	if (matching.length === 0) {
		suggestionBox.style.display = "none";
		return;
	}

	suggestionBox.style.display = "block";

	matching.forEach((acc) => {
		if (acc.role === "siswa") {
			const div = document.createElement("div");
			div.className = "suggest-item";
			div.style.cssText = `
            padding: 8px; cursor: pointer;
        `;
			div.innerText = `${acc.name} (${acc.clas})`;

			div.onclick = () => {
				inputNama.value = acc.name;
				suggestionBox.style.display = "none";
			};

			suggestionBox.appendChild(div);
		}
	});
});

// Klik di luar → close suggestion
document.addEventListener("click", (e) => {
	if (e.target !== inputNama) {
		suggestionBox.style.display = "none";
	}
});

// === HANDLE SUBMIT FORM TAMBAH PELANGGARAN ===
const form = document.querySelector("#laporan-section form");
const select_jenis = document.getElementById("jenis");
const input_skor = document.getElementById("skor");
const inputKet = document.getElementById("keterangan");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const nama = inputNama.value.trim();
	const jenis = select_jenis.value;
	const skor = parseInt(input_skor.value);
	const keterangan = inputKet.value.trim();

	// Cari akun berdasarkan nama
	const akun = accounts.find(
		(acc) => acc.name.toLowerCase() === nama.toLowerCase()
	);

	if (!akun) {
		alert("Nama siswa tidak ditemukan!");
		return;
	}

	// Buat waktu otomatis
	const now = new Date();
	const tanggal = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;

	// Masukkan pelanggaran baru
	akun.pelanggaran.push({
		code: jenis,
		time: tanggal,
		desc: keterangan,
	});

	// Update skor
	akun.skor += skor;

	alert("Pelanggaran berhasil ditambahkan!");

	form.reset();
});
