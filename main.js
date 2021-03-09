// silence
document.addEventListener("DOMContentLoaded", function () {
	const select_menu = document.querySelector(".filter");
	select_menu.addEventListener("change", function (e) {
		const grocery_price_class = e.target.value;
		const active_items = document.querySelectorAll(".active");
		//clear the board
		active_items.forEach(function (item) {
			item.classList.remove("active");
		});
		const grocery_items = document.querySelectorAll(`.${grocery_price_class}`);
		grocery_items.forEach(function (item) {
			item.classList.add("active");
		});
	});
});