let arrayDeGifs = [1,
"<img src='/gifs and images/metalparrot.gif' alt='Papagaio'>", 
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
"<img src='/gifs and images/unicornparrot.gif' alt='Papagaio'>"];

let jogadas = 0;
let cartasViradas = 0;
let compararCartas = 0;

//Escolha de quantidade de cartas

let qtdCartas = 0;
let count = 0;

while(qtdCartas > 14 || qtdCartas < 4 || qtdCartas%2 != 0) {
    qtdCartas = parseInt(prompt("Quantas cartas você deseja? (números pares de 4 a 14)"));
}


//Preenchimento da array

let cartaFrente = [];

for(let i = 0; i < qtdCartas; i++){
    cartaFrente[i] = (i + 1);
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
    <div class="umaCarta" data-identifier="card">
        <div class="face front a${cartaFrente[count]}" data-identifier="front-face">
            ${arrayDeGifs[cartaFrente[count]]}
        </div>

        <div class="face back" onclick="girarCartaBack(this)" data-identifier="back-face">
            <img src="/gifs and images/front.png" alt="Papagaio">
        </div>
    </div>
    `
}

function girarCartaBack(carta) {
    if(cartasViradas<2){
        if(carta.classList.contains("back-face-return")) {
            carta.classList.remove("back-face-return");
        }
        carta.classList.add("back-face");
        carta.classList.add("virada");
        jogadas++;
        cartasViradas++;


        if(cartasViradas==2){
            setTimeout(retornarCartaBack, 1000);
        }

        
        

        console.log("cartasViradas: " + cartasViradas);
    }
}


function retornarCartaBack() {
    const carta = document.querySelectorAll(".virada");
    for(let pos = 0; pos < carta.length; pos++){
        carta[pos].classList.add("back-face-return");
        carta[pos].classList.remove("back-face");
        carta[pos].classList.remove("virada");
        cartasViradas = 0;
    }
}