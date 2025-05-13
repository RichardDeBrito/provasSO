import { Processo } from "./Processo";

export class GerenteProcesso {
    protected lista_processos: Processo[] = []

    public criar_processo(nomeProcesso: string, tempoProcessamento: number) :void {
        let processo = new Processo(nomeProcesso, tempoProcessamento);
        this.lista_processos.push(processo)
    }

    public calcular_turnaround() :number[] {
        const lista_turnarounds: number[] = [];
        for(let processo of this.lista_processos) {
            if (this.lista_processos.indexOf(processo) === 0){
                lista_turnarounds.push(processo.tempoProcessamento);
            } else {
                let turnaround_soma: number = 0;
                for(let i = 0; i < this.lista_processos.indexOf(processo); i++) {
                    turnaround_soma += this.lista_processos[i].tempoProcessamento;
                }

                lista_turnarounds.push(processo.tempoProcessamento + turnaround_soma)
            }
        }
        return lista_turnarounds;
    }  

    public verificar_processos(lista_turnarounds: number[]) :void {
        let count: number = 0;
        let sum_turnaround: number = 0;

        for(let turnaround of lista_turnarounds) {
            sum_turnaround += turnaround;
        }

        const media: number = sum_turnaround/this.lista_processos.length;

        const formatado = media.toFixed(2);

        for(let turnaround of lista_turnarounds) {
            console.log(`Processo: ${this.lista_processos[count].nomeProcesso} | Tempo de processamento: ${this.lista_processos[count].tempoProcessamento} | Tempo de espera: ${turnaround - this.lista_processos[count].tempoProcessamento} | Turnaround time: ${turnaround} | `);
            count++;
        }

        console.log(`Média: ${formatado}`)
    }
}