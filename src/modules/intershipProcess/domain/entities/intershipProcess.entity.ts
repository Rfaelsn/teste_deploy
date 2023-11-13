import { InternshipEvaluation } from 'src/modules/IntershipEvaluation/domain/entities/internshipEvaluation.entity';
import { TermCommitment } from 'src/modules/termCommitment/domain/entities/termCommitment.entity';
import { User } from 'src/modules/user/domain/entities/user.entity';
import { v4 as uuidv4 } from 'uuid';

export enum IntershipProcessStatus {
  CONCLUIDO = 'CONCLUÍDO',
  EM_ANDAMENTO = 'EM ANDAMENTO',
  RECUSADO = 'RECUSADO',
}

export enum IntershipProcessMovement {
  INICIO_ESTAGIO = 'INÍCIO DE ESTAGIO',
  RENOVACAO = 'RENOVAÇÃO DE ESTÁGIO',
  FIM_ESTAGIO = 'FIM DE ESTÁGIO',
  CREDITACAO = 'CREDITAÇÃO',
}

export class IntershipProcess {
  id: string;

  movimentacao: string;

  status: string;

  dataInicioProcesso: Date;

  dataFimProcesso: Date;

  // termoCompromisso?: TermCommitment;

  id_aluno: string;

  // user: User;

  // avaliacaoEstagio: InternshipEvaluation[];

  constructor(props: Omit<IntershipProcess, 'id'>, id?: string) {
    Object.assign(this, props);
    if (!id) {
      this.id = uuidv4();
    } else {
      this.id = id;
    }
  }
}