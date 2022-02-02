let qtdCartas = 0;
let count = 0;

while(qtdCartas > 14 || qtdCartas < 4 || qtdCartas%2 != 0) {
    qtdCartas = parseInt(prompt("Quantas cartas você deseja? (números pares de 4 a 14)"));
}

for(count = 0; count < qtdCartas; count++) {
    //console.log(count);
    const cards = document.querySelector(".cartas");
    cards.innerHTML +=`<div class="umaCarta"></div>`
}