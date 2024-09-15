import { NegociacaoController } from "./controllers/negociacao-controller.js";
// Nota: o compilador apenas funciona se o código do arquivo TS não tiver erros;
// Para rodar o compilador: npm run start 
// (esse comando roda concorrentemente 'npm run server' e 'npm run watch);
const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
})
