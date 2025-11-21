let accounts = JSON.parse(localStorage.getItem("accountsDB")) || [];
if (accounts.length === 0) {
	accounts = [
		{
			username: "12345",
			password: "smagerJaya",
			clas: "XI 7",
			name: "Andi",
			role: "siswa",
			skor: 0,
			pelanggaran: [{ code: "j1", time: "21/11/2025" }],
		},
		{
			username: "67890",
			password: "smagerJaya",
			clas: "XI 6",
			name: "Budi",
			role: "siswa",
			skor: 1,
			pelanggaran: [],
		},

		//guru
		{
			username: "guru",
			password: "guruku",
			name: "Pak Joko",
			role: "guru",
		},
	];
	localStorage.setItem("accountsDB", JSON.stringify(accounts));
}

function saveAccounts() {
	localStorage.setItem("accountsDB", JSON.stringify(accounts));
}
