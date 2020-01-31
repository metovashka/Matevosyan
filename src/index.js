import './index.css';

let str = '';
let name;
/*
document.getElementById('name').onkeypress = function (event) {
    str = str + this.value;
    name = str;
}

console.log(name);
*//*

let block = document.querySelectorAll('.child');
/*
for (let i = 0; i < 20; i++) {
    block[i].textContent =s;
}*/

let json;

let block = document.querySelectorAll('.child');

async function f() {
    let response = await fetch('./HP.json');

    if (response.ok) { // если HTTP-статус в диапазоне 200-299
        // получаем тело ответа (см. про этот метод ниже)
        json = await response.json();

        let i = 0;
        setTimeout(function () {
            setInterval(function () {
                block[i].textContent = json[i].magic;
                i++;
            },400)
        },2400)

    }
}




/*
for (let i = 0; i < 5; i++) {
    block[i].onclick = function () {
        if (!block[i].classList.contains(('red')))
            block[i].classList.add('red');

    }
};*/

let a = document.getElementById('button');

a.onclick = function () {
        f();
}


let c = document.getElementById('buttonTwo');

c.onclick = function () {

    document.location.href = "StepTwo.html";
}