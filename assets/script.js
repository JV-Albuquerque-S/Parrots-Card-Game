//Escolha de quantidade de cartas

let qtdCartas = 0;
let count = 0;

while(qtdCartas > 14 || qtdCartas < 4 || qtdCartas%2 != 0) {
    qtdCartas = parseInt(prompt("Quantas cartas você deseja? (números pares de 4 a 14)"));
}


//Preenchimento da array

let cartaFrente = [];

for(let i = 0; i < qtdCartas; i++){
    cartaFrente[i] = (i+1);
}

//Embaralhamento da array

function comparador() { 
	return Math.random() - 0.5; 
}
cartaFrente.sort(comparador);
console.log(cartaFrente);

//Adicionando cartas na mesa

for(count = 0; count < qtdCartas; count++) {
    //console.log(count);
    const cards = document.querySelector(".cartas");
    cards.innerHTML +=`
    <div class="umaCarta">
        <img src="/gifs and images/front.png" alt="Papagaio">
        <p>${cartaFrente[count]}</p>
    </div>
    `
}