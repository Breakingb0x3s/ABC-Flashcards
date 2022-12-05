let abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'];
const colors = ['red', 'blue', 'green', 'purple', 'pink', 'beige', 'yellow', 'orange'];
let letter = document.getElementById('alphabet');
let goodJob = document.getElementById('good');
let tryAgain = document.getElementById('try');


let getRandomABC = () =>{
    let b = document.createElement('li');
    b.innerHTML = letter.innerHTML;
    document.getElementById('goodWords').appendChild(b);
    alert('You got it, good job Ivory')
    let a = Math.floor(Math.random() * abc.length);
    letter.innerHTML = abc[a];
    abc.slice(a, 1);
    return abc
}

let change = () =>{
    let b = Math.floor(Math.random() * 8);
    if(b === 0){
        letter.style.backgroundColor = colors[b];
        letter.style.color = colors[b+1]
    }else{
        letter.style.backgroundColor = colors[b];
        letter.style.color = colors[b -1];
    }
}

goodJob.onclick = getRandomABC
tryAgain.onclick = change

