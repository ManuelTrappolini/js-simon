console.log('it works');

//Visualizzare in pagina 5 numeri casuali.
//Da lì parte un timer di 30 secondi.
//Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
//NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
//BONUS:
//Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
//Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.


//0. Tools
// variables
// if/else
// math.random
//setInterval
//function
//for loop

//1. Preparazione dati (Creo variabili)
let randomNumbers = document.querySelector('.random_numbers')
let countDown = document.querySelector('.countdown')
let buttoncd = document.querySelector('.button')

let clock = setInterval(countdown, 1000)


//2 Raccoglimento dati( faccio eseguire math random sulla variabile random numbers e imposto il counddown di 30 secondi)

buttoncd.addEventListener('click', function(){
    countdown(); 
    randomNumbers5();
})


function randomNumber(n){
    let numX = Math.floor((Math.random(n) * 30) + 1)
    numX.innerHTML = numX
    return numX
}

function randomNumbers5(nx){
for(let i = 0; i < 5; i++){
    const randomNumberX = randomNumber();
    console.log(randomNumber())
    const displayedNumber = `<p>${randomNumbers5}</p>`
    document.body.innerHTML += `<p>${randomNumberX}</p>`
    
}
}

function countdown(){
    let seconds = 10;
    if(seconds === 0){
        clearInterval(clock)
    }
    else{
        countDown.innerHTML = seconds
        seconds --;
    }
}


 //3. aggiungo un bottone per visualizzare numeri e far partire il cd del tempo


 

/* function compareNumbers(array, number){
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (array[i].includes(number))
    }
} */


      
       