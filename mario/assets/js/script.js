// elementos de jogo 
const mario = document.querySelector(".mario")
const pipe = document.querySelector(".pipe")
const gameTime = document.querySelector(".time-seconds")

// Animação de pulo no apertar de qualquer tecla
const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => mario.classList.remove('jump'), 500);
}



// Loop do jogo
const ticktime = 10 // tempo entre uma verificação e outra 
var gameticks = 0
const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft; 
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','') // pegar qualquer propriedade css computada no momento (n existe offsetBottom)
  
    gameticks += 1
    gameTime.innerHTML = parseInt(ticktime * gameticks / 1000 )

    if (pipePosition <= 120 && // tubo chegou no mario
         marioPosition < 75 && // mario não pulou (altura menor q 75px)
         pipePosition > 0 // tubo ainda não passou completamente pelo mario 
         ) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px `
        mario.src = "./assets/images/mario.png"
        document.addEventListener("keydown", () => window.location.reload());  
        clearInterval(loop) 
    };
     
}, ticktime)


document.addEventListener("keydown", jump); 