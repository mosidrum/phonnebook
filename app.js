let btn = document.querySelector("#btn");
let sideways = document.querySelector(".sideways");
let search = document.querySelector(".bx-search");
let add = document.querySelector(".bx-plus");

btn.onclick = function () {
	sideways.classList.toggle("active");
}

search.onclick = function () {
	sideways.classList.toggle("active");
}

add.onclick = function () {
	sideways.classList.toggle("active");
}