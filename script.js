const plus = document.querySelector(".plus");
const minus = document.querySelector('.minus');
const num = document.querySelector(".num");

let value = 1;

plus.addEventListener("click", ()=>{
	value++;
	value = (value < 10) ? "0" + value : value;
	num.innerText = value;
});

minus.addEventListener("click", ()=>{
	if (value > 1) {
		value--;
		value = (value < 10) ? "0" + value : value;
		num.innerText = value;
	}
});

plus.onmousedown = plus.onselectstart = () => { return false };

minus.onmousedown = minus.onselectstart = ()=> { return false };
