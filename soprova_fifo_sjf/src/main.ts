import { GerenteProcesso } from "./GerenteProcessos";
import promptSync from 'prompt-sync';

const prompt = promptSync();
const quant_processos = Number(prompt('Digite quantos processos: '));
const gerenteProcessos = new GerenteProcesso();

const list_ordems_selecionadas: number[] = [];

for(let i = 0; i < quant_processos; i++) {
    let tamanhoProcesso = Number(prompt(`Digite o tamanho do processo P${i+1}: `));
    let ordemProcesso = Number(prompt(`Digite a ordem do processo: `));
    while(ordemProcesso > quant_processos || list_ordems_selecionadas.includes(ordemProcesso) || ordemProcesso === 0){
        console.log(`Valor invalido!`)
        ordemProcesso = Number(prompt(`Digite a ordem do processo: `));
    }
    list_ordems_selecionadas.push(ordemProcesso);

    gerenteProcessos.criar_processo(tamanhoProcesso, i+1, ordemProcesso);
    console.log()
}
gerenteProcessos.ordenar_processos_porOrdem();
console.log()
console.log('FIFO (first in first out): ')
gerenteProcessos.verificar_processos(gerenteProcessos.calcular_turnaround());
console.log();
gerenteProcessos.ordenar_processos();
console.log('SJF (shortest job first): ');
gerenteProcessos.verificar_processos_ordenados(gerenteProcessos.calcular_turnaround_ordenado());

