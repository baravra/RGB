window.addEventListener('load', start);

var red = document.querySelector('#rangeRed');
var blue = document.querySelector('#rangeBlue');
var green = document.querySelector('#rangeGreen');

var redColor = document.querySelector('#textRed');
var blueColor = document.querySelector('#textBlue');
var greenColor = document.querySelector('#textGreen');

var vermelho = 0, verde = 0, azul = 0;

var div = document.querySelector('#color');

function start() {
    comecar();
}

function comecar() {
    function enviar(event) {
      event.preventDefault();
    }
  
    var item = document.querySelector('.item');
    item.addEventListener('submit', enviar);
    changeColor();
}


function changeColor() {
    function mudar(event) {
      switch (event.target.id) {
        case 'rangeRed':
            redColor.value = event.target.value;
            vermelho = event.target.value;
            break;
        case 'rangeBlue':
            blueColor.value = event.target.value;
            azul = event.target.value;
            break;
        default:
            greenColor.value = event.target.value;
            verde = event.target.value;
            break;;
        }
        div.style.backgroundColor = `rgb(${vermelho},${verde},${azul})`
    }
    function startValues() {
        red.value = 0;
        green.value = 0;
        blue.value = 0;
    
        redColor.value = 0;
        greenColor.value = 0;
        blueColor.value = 0;
    
        red.addEventListener('change', mudar);
        green.addEventListener('change', mudar);
        blue.addEventListener('change', mudar);
    
        div.style.backgroundColor = 'black'
    }
    
    startValues();
}