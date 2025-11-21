const inputName = document.querySelector(".input-name");
const inputPoint = document.querySelector(".input-point");
const btnAdd = document.querySelector(".btn-add-icon");
const container = document.querySelector(".violation-scroll-list");

function addStudent() {
	const nama = document.getElementById("nama-siswa").value.trim();
	const nis = document.getElementById("nis-siswa").value.trim();
	const kelas = document.getElementById("kelas-siswa").value;

	if (!nama || !nis || !kelas) {
		alert("Harap isi semua data siswa!");
		return;
	}

	// Cek apakah NIS sudah dipakai
	const exists = accounts.some((acc) => acc.username === nis);

	if (exists) {
		alert("NIS sudah terdaftar!");
		return;
	}

	const newStudent = {
		username: nis,
		password: "smagerJaya", // default password
		clas: kelas.replace(/[A-Z]/, (match) => match + " "), // "XI7" -> "XI 7"
		name: nama,
		role: "siswa",
		skor: 0,
		pelanggaran: [],
	};

	accounts.push(newStudent);
	saveAccounts();

	alert("Siswa berhasil ditambahkan!");

	// Reset form
	document.getElementById("nama-siswa").value = "";
	document.getElementById("nis-siswa").value = "";
	document.getElementById("kelas-siswa").value = "";
}

document
	.querySelector(".btn-action.primary")
	.addEventListener("click", addStudent);

function renderList(list) {
	container.innerHTML = "";

	list.forEach((item) => {
		const row = document.createElement("div");
		row.className = "violation-item-row";
		row.dataset.code = item.code;

		row.innerHTML = `
            <div class="v-text">
                <span class="v-name">${item.jenis}</span>
                <span class="v-code">${item.code.toUpperCase()}</span>
            </div>
            <div class="v-actions">
                <span class="v-badge ${item.poin >= 50 ? "red" : ""}">-${
			item.poin
		} Poin</span>
                <button class="btn-delete-icon" title="Hapus Pelanggaran">🗑️</button>
            </div>
        `;

		row.querySelector(".btn-delete-icon").addEventListener("click", (e) => {
			const code = e.target.closest(".violation-item-row").dataset.code;

			pelanggaran = pelanggaran.filter((p) => p.code !== code);

			saveDB();
			renderList(pelanggaran);
		});

		container.appendChild(row);
	});
}

inputName.addEventListener("input", () => {
	const keyword = inputName.value.toLowerCase();

	const filtered = pelanggaran.filter((p) =>
		p.jenis.toLowerCase().includes(keyword)
	);

	renderList(filtered);
});

btnAdd.addEventListener("click", () => {
	const nama = inputName.value.trim();
	const poin = parseInt(inputPoint.value);

	if (!nama || !poin) {
		alert("Isi nama pelanggaran dan poin terlebih dahulu!");
		return;
	}

	const exists = pelanggaran.some(
		(p) => p.jenis.toLowerCase() === nama.toLowerCase()
	);

	if (exists) {
		alert("Pelanggaran sudah ada!");
		return;
	}

	const newItem = {
		code: "j" + (pelanggaran.length + 1),
		jenis: nama,
		poin: poin,
	};

	pelanggaran.push(newItem);

	saveDB(); // ← SAVE CHANGES
	reloadPage(); // ← RELOAD PAGE
});

renderList(pelanggaran);
