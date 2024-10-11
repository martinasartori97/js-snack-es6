console.log("hello");


//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore

const biciDaCorsa = [
    {
        nome: "Bici A",
        peso: 7.5,
    },
    {
        nome: "Bici B",
        peso: 6.8
    },
    {
        nome: "Bici C",
        peso: 8.2
    },
    {
        nome: "Bici D",
        peso: 7.0
    }
];
console.log(biciDaCorsa);

const biciLeggera = biciDaCorsa.reduce((min, corrente) => {
    return (corrente.peso < min.peso) ? corrente : min;
});

console.log(biciLeggera);


//Creare un array di oggetti di squadre di calcio.
//Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
//Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadreDiCalcio = [
    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Napoli",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Roma",
        puntiFatti: 0,
        falliSubiti: 0
    }
];

console.log(squadreDiCalcio);





