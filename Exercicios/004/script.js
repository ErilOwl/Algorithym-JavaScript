// Checagem de horario
let hour = 8

// Impede o jogador de sair antes de 6 horas da manhã e depois de 18 horas da noite
if (hour < 6 || hour > 18){
console.log("Está muito escuro, não posso sair")
}
else{


// Checa se o clima é chuvoso ou ele possui um guarda chuva

let climate = 2 // 1 = Sol, 2 = Chuva, 3 = Nublado
let equipedItem = "Guarda Chuva" // Número de identificação do SQL do item "Guarda Chuva"
let retorno = ""

if (climate !== 2 || equipedItem === "Guarda Chuva" && hour){
     retorno = true
}
else{
    retorno = "Aguarde a chuva passar ou equipe um guarda-chuva"
    }

// Checagem script da porta sobre clima

if (retorno === true) {
    "Personagem pode sair de casa"
}
console.log(retorno)
}