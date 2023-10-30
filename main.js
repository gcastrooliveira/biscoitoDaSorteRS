const cookieClicker = document.querySelector("#screen1 img");
const btnResetCookie = document.querySelector("#btnResetCookie");

const screen1 = document.querySelector("#screen1");
const screen2 = document.querySelector("#screen2");

const messages = [
    "A vida trará coisas boas se tiver paciência.", 
    "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
    "Não há que ser forte. Há que ser flexível.",
    "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
    "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
    "A juventude não é uma época da vida, é um estado de espírito.",
    "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu."];

let luckyNumber;

cookieClicker.addEventListener('click', showLuckyMessage);
btnResetCookie.addEventListener('click', resetLuck);

function showLuckyMessage(e){
    luckyNumber = Math.round(Math.random(0, 10) * 10);
    screen2.querySelector("p").innerText = messages[luckyNumber];
    screen1.style.display = "none";
    screen2.style.display = "block";
}

function resetLuck(e){
    screen1.style.display = "block";
    screen2.style.display = "none";
}

