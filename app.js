let btn = document.querySelector("#btn");
let sideways = document.querySelector(".sideways");
let search = document.querySelector(".bx-search");
let add = document.querySelector(".bx-plus");
let add_ctn = document.querySelector(".ctn_name");
const form = document.querySelector('form-container form');
const input = document


btn.onclick = function () {
	sideways.classList.toggle("active");
}

search.onclick = function () {
	sideways.classList.toggle("active");
}

add.onclick = function () {
	sideways.classList.toggle("active");
}

add_ctn.onclick = function (){
	alert('Add contact');
}