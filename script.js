let imgCelular = document.querySelector('.celular img');
let cartaoCelular = document.querySelector('.preco-area div h5');
let pixCelular = document.querySelector(".area-pix h3");

let imgRelogio = document.querySelector('.relogio--area img')
let cartaoRelogio = document.querySelector('.relogio--area .preco-area div h5');
let pixRelogio = document.querySelector(".relogio--area .area-pix h3");

let imgMac = document.querySelector('.mac--area img')
let cartaoMac = document.querySelector('.mac--area .preco-area div h5');
let pixMac = document.querySelector(".mac--area .area-pix h3");

function celVermelho() {
    imgCelular.setAttribute('src', 'images/jpg.1.webp');
    pixCelular.innerText = "R$ 4.498,99";
    cartaoCelular.innerText = "R$ 4.998,88 em 10x de R$ 499,89 sem juros ou"
}
function celPreto() {
    imgCelular.setAttribute('src', 'images/jpg.2.webp');
    pixCelular.innerText = "R$ 5.198,99";
    cartaoCelular.innerText = "R$ 5.698,88 em 10x de R$ 569,89 sem juros ou"

}
function celCinza() {
    imgCelular.setAttribute('src', 'images/jpg.3.webp');
    pixCelular.innerText = "R$ 4.498,99";
    cartaoCelular.innerText = "R$ 4.998,88 em 10x de R$ 499,89 sem juros ou"
}

function relPreto() {
    imgRelogio.setAttribute('src', 'images/jpg.4.webp');
    pixRelogio.innerText = "R$ 2.969,10";
    cartaoRelogio.innerText = " R$ 3.299,00 em 10x de R$ 329,90 sem juros ou"
} 
function relBeje() {
    imgRelogio.setAttribute('src', 'images/jpg.5.webp');
    pixRelogio.innerText = "R$ 2.969,10";
    cartaoRelogio.innerText = "R$ 3.299,00 em 10x de R$ 329,90 sem juros ou"

}
