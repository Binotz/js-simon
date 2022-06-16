// Visualizzare in un alert 5 numeri casuali.
// 30 secondi dopo la chiusura dell'alert, l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

const NumofElements = 5;
const maxElementValue = 100;
//variabile time giusto per provare l'arrow function :)
const time = () => 30*1000;
//Genero l'array con i valori random
const simonArray = randomArrayGenerator(NumofElements, maxElementValue);
alert(`Simons numbers: ${simonArray}`);

setTimeout(startGame, time());


//---------------------------------------------------------------------------------------------------------
//Function
function startGame(){
    const userInputHistory = [];
    let userInput = '';
    const guessedNumber = [];
    //prendo l'input dall'utente per 5 volte
    do{
        userInput = parseInt(prompt('inserisci un numero compreso tra 1 e 100'));
        //verifico che l'input sia coerente
        if( !isNaN(userInput) && (userInput >= 1 && userInput <= 100) && !userInputHistory.includes(userInput)){
            userInputHistory.push(userInput);
        }
    }while(userInputHistory.length < 5);

    //controllo i valori inseriti con i valori nell'array contenente i valori da indovinare
    for(let i = 0; i < userInputHistory.length; i++){
        let currentValue = userInputHistory[i];
        //se il numero è stato indovinato...
        if(simonArray.includes(currentValue)){
            //.. lo pusho nell'apposito array
            guessedNumber.push(currentValue);
        }
    }

    //output per l'utente
    if(guessedNumber.length >= 1){
        alert(`Hai indovinato ${guessedNumber.length} numeri, di seguito riportati:\n ${guessedNumber}`);
    } else{
        alert(`Non ci siamo proprio, non ne hai azzeccato manco uno!`);
    }
}

function randomArrayGenerator(numberOfElements, MaxValue){
    const randomArray = [];
    let randomNumber = 0;
    //finché la lista non è completa, ciclo la lista delle bombe
    while(randomArray.length < numberOfElements){
        randomNumber = getRndInteger(1, MaxValue);
        //se la bomba non è presente nella lista, la inserisco, altrimenti riciclo generando una nuova bomba
        if( !randomArray.includes(randomNumber)){
            randomArray.push(randomNumber);
        }
    }

    return randomArray
}


// TY w3school :)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
