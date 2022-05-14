const plus = document.querySelector(".plus");
const num = document.querySelector(".num");

let value = 1;

plus.addEventListener("click", ()=>{
	value++;
	value = (value < 10) ? "0" + value : value;
	num.innerText = value;
});
