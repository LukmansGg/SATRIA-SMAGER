const selectJenis = document.getElementById("jenis");
const inputSkor = document.getElementById("skor");

// 1. Isi dropdown otomatis
pelanggaran.forEach((item) => {
	const option = document.createElement("option");
	option.value = item.code; // simpan code
	option.textContent = item.jenis; // tampilkan nama pelanggaran
	option.dataset.poin = item.poin; // simpan poin di data attribute
	selectJenis.appendChild(option);
});

// 2. Saat dropdown berubah → isi skor otomatis
selectJenis.addEventListener("change", function () {
	const selected = this.options[this.selectedIndex];

	if (!selected.dataset.poin) {
		inputSkor.value = "";
		return;
	}

	inputSkor.value = selected.dataset.poin;
});
