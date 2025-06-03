// Pokémon
const pokeName = "PikaPika"
let pokemon = "Pikachu"
let level = 25
let hp = 50
const sex = 1 // 0 = Female, 1 = Male
let gender
let alive
let active
const stone = false
const type = "Elétrico"
const eggGroup = "Rato"
const desc = "Quando fica irritado, descarrega imediatamente a energia armazenada nas bolsas de suas bochechas.";

// Detecta o sexo do Pokémon
if (sex === 1) {
    gender = "Male"
}
else if (sex === 0) {
    gender = "Female"
}

// Checa se o Pokémon se mantém como Pichu
if (level <= 15) {
    pokemon = "Pichu"
}

// Checa se o Pokémon atente aos requisitos para evoluir para Raichu
if (level > 15 && stone == true) {
    pokemon = "Raichu"
}

// Verifica se o Pokémon está vivo com base no HP
if (hp === 0) {
    alive = false
    active = false
    console.log(`${pokeName} está Desmaiado!`)
} 
else {
    alive = true
    active = true

    // Exibe os dados do Pokémon
    console.log(`Nome: ${pokeName}`)
    console.log(pokemon)
    console.log(`Lvl: ${level}`)
    console.log(`Gênero: ${gender}`)
    console.log(`HP: ${hp}`)
    console.log(`Tipo Pokémon: ${type}`)
    console.log(`Egg Group: ${eggGroup}`)
    console.log(`Descrição: ${desc}`)
}