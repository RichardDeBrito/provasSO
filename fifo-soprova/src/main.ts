import { GerenteProcesso } from "./GerenteProcessos";

const processos = new GerenteProcesso();
processos.criar_processo('P1', 12);
processos.criar_processo('P2', 2);
processos.criar_processo('P3', 4);

processos.verificar_processos(processos.calcular_turnaround());