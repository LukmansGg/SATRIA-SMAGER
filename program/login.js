function login(username, password) {
	const user = accounts.find(
		(acc) => acc.username === username && acc.password === password
	);

	if (user) {
		return { success: true, user };
	} else {
		return { success: false, message: "NIS atau Password salah" };
	}
}

document.addEventListener("DOMContentLoaded", () => {
	const form = document.querySelector(".login-form");

	form.addEventListener("submit", (e) => {
		e.preventDefault();

		const username = document.getElementById("username").value.trim();
		const password = document.getElementById("password").value.trim();

		const result = login(username, password);

		if (result.success) {
			const user = result.user;

			sessionStorage.setItem(
				"loggedUser",
				JSON.stringify({
					username: user.username,
					name: user.name,
					clas: user.clas,
					role: user.role,
					skor: user.skor,
					pelanggaran: user.pelanggaran,
				})
			);

			if (user.role === "siswa") {
				location.assign("./dashboard-siswa.html");
			} else if (user.role === "guru") {
				location.assign("./dashboard-guru.html");
			} else {
				alert("Role tidak dikenal!");
			}
		} else {
			alert(result.message);
		}
	});
});
