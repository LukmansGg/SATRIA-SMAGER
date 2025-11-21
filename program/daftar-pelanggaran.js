document.addEventListener("DOMContentLoaded", function () {
	// Cek apakah tabel dan data tersedia
	const tableBody = document.querySelector("#violationTable tbody");

	// Pastikan variabel 'pelanggaran' dari pelanggaran.js sudah dimuat
	if (tableBody && typeof pelanggaran !== "undefined") {
		renderTable(pelanggaran, tableBody);
	}
});

function renderTable(data, container) {
	container.innerHTML = ""; // Bersihkan isi tabel hardcoded (jika ada)

	data.forEach((item) => {
		// 1. Tentukan Style & Kategori berdasarkan Kode/Poin
		const style = getStyleByCode(item.code, item.poin);

		// 2. Buat Elemen Baris (Row)
		const tr = document.createElement("tr");
		tr.className = "row-item";
		tr.setAttribute("data-category", style.filterKey); // Untuk fungsi filter

		// 3. Isi HTML Baris (Sesuai desain di dashboard_cek_pelanggaran.html)
		tr.innerHTML = `
            <td>
                <span class="badge ${
									style.badgeColor
								}">${item.code.toUpperCase()}</span>
            </td>
            <td class="violation-desc ${style.textAlert}">
                ${item.jenis}
            </td>
            <td>
                <span class="cat-pill ${style.pillColor}">${
			style.categoryName
		}</span>
            </td>
            <td class="text-center ${style.pointClass}">
                ${item.poin}
            </td>
        `;

		container.appendChild(tr);
	});
}

/**
 * Helper: Menentukan warna dan kategori berdasarkan kode
 */
function getStyleByCode(codeStr, poin) {
	const code = codeStr.toLowerCase();

	// Logika Khusus: Pelanggaran Berat (Poin >= 20)
	if (poin >= 20) {
		return {
			filterKey: "berat",
			categoryName: "Berat",
			badgeColor: "code-red", // CSS class dari file anda
			pillColor: "red", // CSS class
			pointClass: "point-alert",
			textAlert: "high-alert", // Membuat teks merah tebal
		};
	}

	// Logika Umum berdasarkan awalan kode
	if (code.startsWith("j")) {
		return {
			filterKey: "kedisiplinan",
			categoryName: "Kedisiplinan",
			badgeColor: "code-blue",
			pillColor: "blue",
			pointClass: "point-text",
			textAlert: "",
		};
	} else if (code.startsWith("p")) {
		return {
			filterKey: "kebersihan", // Atau kerapian sesuai kebutuhan
			categoryName: "Kerapian",
			badgeColor: "code-green",
			pillColor: "green",
			pointClass: "point-text",
			textAlert: "",
		};
	} else {
		// Default (K dan lainnya)
		return {
			filterKey: "ketertiban",
			categoryName: "Ketertiban",
			badgeColor: "code-orange",
			pillColor: "orange",
			pointClass: "point-text",
			textAlert: "",
		};
	}
}
