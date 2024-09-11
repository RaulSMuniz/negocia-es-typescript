import { Negociacao } from './models/negociacao.js';
// Nota: o compilador apenas funciona se o código do arquivo TS não tiver erros;
// Para rodar o compilador: npm run start 
// (esse comando roda concorrentemente 'npm run server' e 'npm run watch);

const negociacao = new Negociacao(new Date(), 20, 100);
console.log(negociacao.volume);