let jogador = document.getElementById('jogador');
let tela = document.getElementById('board');

let xInicial = 0;
let yInicial = 0;
let tamanho = 20;


    function moverJogadorPara (x, y) {

        let posX = x + "px";
        let posY = y + "px";
    
        jogador.style.top = posX;
        jogador.style.left = posY
    
    }
    
    
    setInterval(function() {
        if(xInicial <= 500) {
            moverJogadorPara(xInicial++, yInicial++)
        }else{
            xInicial = -5;
            yInicial = -5;
            tamanho = tamanho + 20;
            let size = jogador.style.width =  tamanho +"px";
            size = jogador.style.height =  tamanho +"px";
        }
    }, 1);



