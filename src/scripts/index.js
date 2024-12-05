import {getQuine, streamToString} from './quine';
import p5 from 'p5';

window.addEventListener('DOMContentLoaded', async() => {
    setInterval(blinking_underscore, 500);
    const stream = await getQuine();
    uq = await streamToString(stream);
});

function blinking_underscore(){
    const underscore = document.getElementById("underscore");
    if (underscore.innerText == "_"){
        underscore.innerHTML = '&nbsp;';
    }else{
        underscore.innerHTML = "_";
    }
}

var uq;
const lineLength = 248;
const lineCount = 65;

let font;
var drops = [];
const dropLength= 45;

let s = (sk) => {

    function generateDrop(){
        while(true){
            const index = Math.trunc(sk.random(0, 247));
            if (drops[index] == undefined){
                drops[index] = 0;
                break;
            }
        }
    }

    sk.windowResized = () => {
        let container = document.getElementById("p5container");
        sk.resizeCanvas(container.offsetWidth, container.offsetHeight);
    }
    sk.setup = () =>{
        font = sk.textFont('Roboto', 5);

        let container = document.getElementById("p5container");
        let canvas = sk.createCanvas(container.offsetWidth, container.offsetHeight);
        canvas.parent("p5container");
        sk.frameRate(30);
    }

    sk.draw = () =>{
        generateDrop();
        sk.background("#13151a");
        sk.strokeWeight(1);
        
        if (uq == undefined) return;
        for (let index = 0; index < uq.length; index++) {
            const x = index % lineLength;
            if (drops[x] == undefined)continue;
            const y = Math.trunc(index / lineLength) + 1;
            if (drops[x] < y || drops[x] - dropLength > y) continue;
            const green = sk.map(y, drops[x] - dropLength, drops[x], 32, 100);
            const blue = sk.map(y, drops[x] - dropLength, drops[x], 0, 32);
            sk.stroke(0, green, blue);
            sk.fill(0,green/2, blue);
            const letter = uq[index];
            sk.text(letter, x*5, y*14);
        }
        for(let index = 0; index < drops.length; index++){
            if (drops[index] ==undefined)continue;
            drops[index]++;
            if (drops[index] > lineCount + dropLength) drops[index] = undefined;
        }
    }
}
const P5 = new p5(s)