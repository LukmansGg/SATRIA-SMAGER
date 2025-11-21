// === Helper: waktu relatif ===
function timeAgo(dateStr) {
	const date = new Date(dateStr.split("/").reverse().join("-"));
	const now = new Date();
	const diff = (now - date) / 1000;

	if (diff < 3600) return Math.floor(diff / 60) + "m yang lalu";
	if (diff < 86400) return Math.floor(diff / 3600) + "j yang lalu";
	return Math.floor(diff / 86400) + "h yang lalu";
}


// === Ambil container ===
const activityContainer = document.querySelector(
	"#statik-section .violation-scroll-area"
);
const sortButtons = document.querySelectorAll(".sort-btn");

// === UBAH DATA AKUN MENJADI LIST AKTIVITAS ===
function getAllActivities() {
	const list = [];

	accounts.forEach((acc) => {
		if (acc.role !== "siswa") return;
		acc.pelanggaran.forEach((item) => {
			const detail = pelanggaran.find((x) => x.code === item.code);

			if (detail) {
				list.push({
					nama: acc.name,
					jenis: detail.jenis,
					poin: detail.poin,
					time: item.time,
				});
			}
		});
	});

	return list;
}

// === RENDER AKTIVITAS TERBARU ===
function renderActivities(data) {
	activityContainer.innerHTML = "";

	data.forEach((item) => {
		const avatarColor = "color-" + ((item.nama.charCodeAt(0) % 5) + 1);
		const row = document.createElement("div");
		row.className = "violation-item";

		row.innerHTML = `
            <div class="v-avatar ${avatarColor}">${item.nama[0]}</div>
            <div class="v-info">
                <span class="v-name">${item.nama}</span>
                <span class="v-desc">${item.jenis}</span>
            </div>
            <div class="v-meta">
                <span class="v-points ${
									item.poin >= 20 ? "high-alert" : ""
								}">-${item.poin} Poin</span>
                <span class="v-time">${timeAgo(item.time)}</span>
            </div>
        `;

		activityContainer.appendChild(row);
	});
}

// === SORT HANDLING ===
sortButtons.forEach((btn) => {
	btn.addEventListener("click", () => {
		sortButtons.forEach((b) => b.classList.remove("active"));
		btn.classList.add("active");

		let data = getAllActivities();

		if (btn.textContent.includes("Terbaru")) {
			renderActivities(
				data.sort((a, b) => new Date(b.time) - new Date(a.time))
			);
		} else {
			renderActivities(data.sort((a, b) => b.poin - a.poin));
		}
	});
});

// === PIE CHART: hitung total mingguan dari accounts ===
function calcWeeklyStats() {
    const week = [0, 0, 0, 0]; // Minggu 1-4
    const nowMonth = new Date().getMonth();

    accounts.forEach(acc => {
        // AMANKAN ketika tidak punya pelanggaran
        if (!acc.pelanggaran || acc.pelanggaran.length === 0) return;

        acc.pelanggaran.forEach(item => {
            if (!item.time) return;

            const date = new Date(item.time.split("/").reverse().join("-"));
            if (isNaN(date)) return;
            if (date.getMonth() !== nowMonth) return;

            const weekNumber = Math.floor((date.getDate() - 1) / 7);
            const detail = pelanggaran.find(x => x.code === item.code);

            week[weekNumber] += detail ? detail.poin : 0;
        });
    });

    // === FIX KOSONG ===
    // Jika semua minggu = 0, buat default agar chart muncul
    const allZero = week.every(x => x === 0);
    if (allZero) {
        return [1, 1, 1, 1];
    }

    return week;
}


// === Render Chart ===
const weekly = calcWeeklyStats();

new Chart(document.getElementById("pieChart"), {
	type: "pie",
	data: {
		labels: ["Minggu 1", "Minggu 2", "Minggu 3", "Minggu 4"],
		datasets: [
			{
				data: weekly,
				backgroundColor: ["#FFE5B4", "#A7E6FF", "#C9F4C4", "#FFF4A3"],
			},
		],
	},
	options: {
		responsive: false,
		maintainAspectRatio: false,
	},
});

// === FIRST RENDER ===
renderActivities(
	getAllActivities().sort((a, b) => new Date(b.time) - new Date(a.time))
);

document.addEventListener("DOMContentLoaded", () => {
    const weekly = calcWeeklyStats();

    new Chart(document.getElementById("pieChart"), {
        type: "pie",
        data: {
            labels: ["Minggu 1", "Minggu 2", "Minggu 3", "Minggu 4"],
            datasets: [{
                data: weekly,
                backgroundColor: ["#FFE5B4", "#A7E6FF", "#C9F4C4", "#FFF4A3"]
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false
        }
    });

    // langsung render aktivitas awal
    renderActivities(
        getAllActivities().sort((a, b) => new Date(b.time) - new Date(a.time))
    );
});
