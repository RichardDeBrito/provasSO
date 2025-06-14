import { Processo } from "./Processo";

export class GerenteProcesso {
    protected lista_processos_aleatorio: Processo[] = [];
    public lista_processos_ordenado: Processo[] = [];
    public lista_processos: Processo[] = [];

    public ordenar_processos():void {
        this.lista_processos_ordenado = [...this.lista_processos].sort((a, b) => a.tempoProcessamento - b.tempoProcessamento);
    }

    public ordenar_processos_porOrdem():void {
        this.lista_processos = [...this.lista_processos_aleatorio].sort((a, b) => a.ordemProcesso - b.ordemProcesso);
    }

    public criar_processo(tempoProcessamento: number, num_processo: number, ordemProcesso: number) :void {
        let nomeProcesso = 'P' + String(num_processo); 
        let processo = new Processo(nomeProcesso, tempoProcessamento, ordemProcesso);
        this.lista_processos_aleatorio.push(processo)
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

    public calcular_turnaround_ordenado() :number[] {
        const lista_turnarounds_ordenado: number[] = [];
        for(let processo of this.lista_processos_ordenado) {
            if (this.lista_processos_ordenado.indexOf(processo) === 0){
                lista_turnarounds_ordenado.push(processo.tempoProcessamento);
            } else {
                let turnaround_soma: number = 0;
                for(let i = 0; i < this.lista_processos_ordenado.indexOf(processo); i++) {
                    turnaround_soma += this.lista_processos_ordenado[i].tempoProcessamento;
                }

                lista_turnarounds_ordenado.push(processo.tempoProcessamento + turnaround_soma)
            }
        }
        return lista_turnarounds_ordenado;
    } 

    public verificar_processos(lista_turnarounds: number[]) :void {
        let count: number = 0;
        let sum_turnaround: number = 0;

        for(let turnaround of lista_turnarounds) {
            sum_turnaround += turnaround;
        }

        let sum_tempoEspera: number = 0;

        for (let i = 0; i < this.lista_processos.length; i++) {
            sum_tempoEspera += (lista_turnarounds[i] - this.lista_processos[i].tempoProcessamento);
        }

        const media: number = sum_turnaround/this.lista_processos.length;
        const mediaEspera: number = sum_tempoEspera/this.lista_processos.length

        const formatado = media.toFixed(2);
        const formatadoEspera = mediaEspera.toFixed(2);

        for(let turnaround of lista_turnarounds) {
            console.log(`Processo: ${this.lista_processos[count].nomeProcesso} | Tempo de processamento: ${this.lista_processos[count].tempoProcessamento} | Tempo de espera: ${turnaround - this.lista_processos[count].tempoProcessamento} | Turnaround time: ${turnaround} | `);
            count++;
        }

        console.log(`Média do turnaround: ${formatado} | Média do tempo de espera: ${formatadoEspera}`)
        console.log('')
    }

    public verificar_processos_ordenados(lista_turnarounds_ordenado: number[]) :void {
        let count: number = 0;
        let sum_turnaround: number = 0;

        for(let turnaround of lista_turnarounds_ordenado) {
            sum_turnaround += turnaround;
        }

        let sum_tempoEspera: number = 0;

        for (let i = 0; i < this.lista_processos.length; i++) {
            sum_tempoEspera += (lista_turnarounds_ordenado[i] - this.lista_processos[i].tempoProcessamento);
        }

        const media: number = sum_turnaround/this.lista_processos_ordenado.length;
        const mediaEspera: number = sum_tempoEspera/this.lista_processos_ordenado.length;

        const formatado = media.toFixed(2);
        const formatadoEspera = mediaEspera.toFixed(2);


        for(let turnaround of lista_turnarounds_ordenado) {
            console.log(`Processo: ${this.lista_processos_ordenado[count].nomeProcesso} | Tempo de processamento: ${this.lista_processos_ordenado[count].tempoProcessamento} | Tempo de espera: ${turnaround - this.lista_processos_ordenado[count].tempoProcessamento} | Turnaround time: ${turnaround} | `);
            count++;
        }

        console.log(`Média do turnaround: ${formatado} | Média do tempo de espera: ${formatadoEspera}`)
    }
}

