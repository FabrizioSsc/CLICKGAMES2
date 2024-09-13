const mario = document.querySelector('.mario') //pegando minha classe no css
const pipe= document.querySelector('.pipe')


const jump = () => {

    mario.classList.add('jump') //adiciono minha função jump

    setTimeout(() =>{ //função anonima
    mario.classList.remove('jump') // removo minha função 
    },500) //recebe 2parametros 
}

const loop = setInterval( () => {

    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','')

    if(pipePosition <= 120 && pipePosition > 0      && marioPosition <80       ){  // quando o mario estiver a uma distancia de 120px do pipe a animação para
        pipe.style.animation = 'none'
        pipe.style.left= `${pipePosition}px`  
        
        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`  
        
        mario.src = 'game-over.png' //troca a imagem quando  perde
        mario.style.width = '60px'
        mario.style.left = '60px'

        clearInterval(loop)
    }
    

},10)

document.addEventListener('keydown',jump) // pula quando aperto qualquer tecla