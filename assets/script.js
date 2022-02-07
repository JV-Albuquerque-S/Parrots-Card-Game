let arrayDeGifs = ["<img src='/gifs and images/metalparrot.gif' alt='Papagaio'>", 
"<img src='/gifs and images/metalparrot.gif' alt='Papagaio'>", 
"<img src='/gifs and images/bobrossparrot.gif' alt='Papagaio'>", 
"<img src='/gifs and images/bobrossparrot.gif' alt='Papagaio'>", 
"<img src='/gifs and images/explodyparrot.gif' alt='Papagaio'>", 
"<img src='/gifs and images/explodyparrot.gif' alt='Papagaio'>", 
"<img src='/gifs and images/fiestaparrot.gif' alt='Papagaio'>", 
"<img src='/gifs and images/fiestaparrot.gif' alt='Papagaio'>", 
"<img src='/gifs and images/revertitparrot.gif' alt='Papagaio'>", 
"<img src='/gifs and images/revertitparrot.gif' alt='Papagaio'>", 
"<img src='/gifs and images/tripletsparrot.gif' alt='Papagaio'>", 
"<img src='/gifs and images/tripletsparrot.gif' alt='Papagaio'>", 
"<img src='/gifs and images/unicornparrot.gif' alt='Papagaio'>", 
"<img src='/gifs and images/unicornparrot.gif' alt='Papagaio'>", ];

//Escolha de quantidade de cartas

let qtdCartas = 0;
let count = 0;

while(qtdCartas > 14 || qtdCartas < 4 || qtdCartas%2 != 0) {
    qtdCartas = parseInt(prompt("Quantas cartas você deseja? (números pares de 4 a 14)"));
}


//Preenchimento da array

let cartaFrente = [];

for(let i = 0; i < qtdCartas; i++){
    cartaFrente[i] = i;
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
        <div class="face front" onclick="girarCartaFront(this)">
            ${arrayDeGifs[cartaFrente[count]]}
        </div>

        <div class="face back" onclick="girarCartaBack(this)">
            <img src="/gifs and images/front.png" alt="Papagaio">
        </div>
    </div>
    `
}

function girarCartaFront(carta) {
    //const lado = document.querySelector(carta);
    carta.classList.add("front-face");
    if(carta.classList.contains("front-face-return")) {
        carta.classList.remove("front-face-return");
    }
    setTimeout(retornarCartaFront, 3000);
}

function girarCartaBack(carta) {
    //const lado = document.querySelector(carta);
    carta.classList.add("back-face");
    if(carta.classList.contains("back-face-return")) {
        carta.classList.remove("back-face-return");
    }
    setTimeout(retornarCartaBack, 3000);
}

function retornarCartaFront() {
    const carta = document.querySelector(".front-face");
    carta.classList.add("front-face-return");
    carta.classList.remove("front-face");
}

function retornarCartaBack() {
    const carta = document.querySelector(".back-face");
    carta.classList.add("back-face-return");
    carta.classList.remove("back-face");
}