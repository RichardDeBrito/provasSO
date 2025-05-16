import { GerenteProcesso } from "./GerenteProcessos";
import promptSync from 'prompt-sync';

const prompt = promptSync();
const quant_processos = Number(prompt('Digite quantos processos: '));
const gerenteProcessos = new GerenteProcesso();

for(let i = 0; i < quant_processos; i++) {
    let tamanhoProcesso = Number(prompt(`Digite o tamanho do processo P${i+1}: `));
    gerenteProcessos.criar_processo(tamanhoProcesso, i+1);
}
console.log()
console.log('FIFO (first in first out): ')
gerenteProcessos.verificar_processos(gerenteProcessos.calcular_turnaround());
console.log();
gerenteProcessos.ordenar_processos();
console.log('SJF (shortest job first): ');
gerenteProcessos.verificar_processos_ordenados(gerenteProcessos.calcular_turnaround_ordenado());

