import './index.css';
import $ from "jquery";
import Typed from "typed.js";

let options = {
    strings: [
        'magic',
        'Hogwarts',
        'world of Harry Potter <3'
    ],
    typeSpeed: 60,
    backSpeed: 60,
    loop:true
};

let typed = new Typed('.type', options);


let block = document.querySelectorAll('.child');
let str = 'найден';

$("#my_image_Dobby").bind("click", function() {
    $("#my_image_Dobby").attr("src","./img/part One.jpg");
    block[0].textContent = str;
    block[0].classList.add('red');
});

$("#my_image").bind("click", function() {
    $("#my_image").attr("src","./img/partTwo.jpg");
    block[3].textContent = str;
    block[3].classList.add('red');

});

$("#my_image_Die").bind("click", function() {
    $("#my_image_Die").attr("src","./img/partThree.jpg");
    block[4].textContent = str;
    block[4].classList.add('red');
});

$("#my_image_Hat").bind("click", function() {
    $("#my_image_Hat").attr("src","./img/partFour.jpg");
    block[1].textContent = str;
    block[1].classList.add('red');

});

$("#my_image_Patronus").bind("click", function() {
    $("#my_image_Patronus").attr("src","./img/partFive.jpg");
    block[2].textContent = str;
    block[2].classList.add('red');

});

$("#my_imageGriff").bind("click", function() {
    $("#my_imageGriff").attr("src","./img/partSix.jpg");
    block[5].textContent = str;
    block[5].classList.add('red');

});

let name;
/*
document.getElementById('name').onkeypress = function (event) {
    str = str + this.value;
    name = str;
}

console.log(name);
*/

let json;
let counter = -1;

async function f() {
    let response = await fetch('./HP.json');

    if (response.ok) {
        json = await response.json();

        let i = 0;
        setTimeout(function () {
            setInterval(function () {
                block[i].textContent = json[i].magic;
                i++;
            },400)
        },2400)

        counter = 0;
    }
}

let a = document.getElementById('button');

a.onclick = function () {
    if (counter == -1)
        f();
}

document.getElementById('slide').onmousemove = function (event) {
    let x = event.offsetX;
    document.getElementById('adults').style.width = x + 'px';
}

document.getElementById('slide').onmouseleave = function (event) {
    document.getElementById('adults').style.width = '1200px';
}

let number = Math.floor(10*Math.random()) + 1;
let count = 3;

document.getElementById('check').onclick = function () {
    let usernum = document.getElementById('mynum').value;
    usernum = parseInt(usernum);

    let out = document.getElementById('out')

    if (count > 0) {
        if (usernum == number) {
            out.innerHTML = 'Ты угадал:^)';
        } else if (usernum > number) {
            out.innerHTML = 'Моё число меньше:с'
        } else if (usernum < number) {
            out.innerHTML = 'Моё число больше:с'
        }
        count--;
        document.getElementById('count').innerHTML = 'Осталось попыток: '+ count;
    } else
        alert('Попытки закончены, ты проиграл:с')
}

