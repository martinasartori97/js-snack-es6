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




