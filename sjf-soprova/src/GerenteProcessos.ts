import { Processo } from "./Processo";

export class GerenteProcessos {
    public lista_processos: Processo[] = [];
    public lista_processos_ordenado: Processo[] = [];

    public criar_processo(nomeProcesso: string, tempoProcessamento: number):void {
        let processo = new Processo(nomeProcesso, tempoProcessamento);
        this.lista_processos.push(processo);
    }

    public ordenar_processos():void {
        this.lista_processos_ordenado = [...this.lista_processos].sort((a, b) => a.tempoProcessamento - b.tempoProcessamento);
    }

    public calcular_turnaround() :number[] {
        const lista_turnarounds: number[] = [];
        for(let processo of this.lista_processos_ordenado) {
            if (this.lista_processos_ordenado.indexOf(processo) === 0){
                lista_turnarounds.push(processo.tempoProcessamento);
            } else {
                let turnaround_soma: number = 0;
                for(let i = 0; i < this.lista_processos_ordenado.indexOf(processo); i++) {
                    turnaround_soma += this.lista_processos_ordenado[i].tempoProcessamento;
                }

                lista_turnarounds.push(processo.tempoProcessamento + turnaround_soma)
            }
        }
        return lista_turnarounds;
    }

    public verificar_processos(lista_turnarounds: number[]):void {
        let count: number = 0;
        let sum_turnaround: number = 0;

        for(let turnaround of lista_turnarounds) {
            sum_turnaround += turnaround;
        }

        const media: number = sum_turnaround/this.lista_processos_ordenado.length

        const formatado = media.toFixed(2);

        for(let turnaround of lista_turnarounds) {
            console.log(`Processo: ${this.lista_processos_ordenado[count].nomeProcesso} | Tempo de processamento: ${this.lista_processos_ordenado[count].tempoProcessamento} | Tempo de espera: ${turnaround - this.lista_processos_ordenado[count].tempoProcessamento} | Turnaround time: ${turnaround} |`);
            count++;
        }
        console.log(`Média: ${formatado}`)
    }
}