import { GerenteProcessos } from "./GerenteProcessos";

const processos = new GerenteProcessos();
processos.criar_processo('P1', 12); // Quarto
processos.criar_processo('P2', 2); // Primeiro
processos.criar_processo('P3', 4); // Segundo

processos.ordenar_processos();
processos.verificar_processos(processos.calcular_turnaround());