class Disciplina {
  constructor(codigo, nome) {
    this.codigo = codigo;
    this.nome = nome;
  }
}

class Aluno {
  constructor(matricula, nome, nota1, nota2, notaTrabalho){
    this.matricula = matricula;
    this.nome = nome;
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.notaTranalho = notaTrabalho;
  }

  media(){
    return((this.nota1 * 3) + (this.nota2 * 3) + (this.notaTranalho * 4)) / 10;
  }

  final() {
    const mediaFinal = this.media();
    if (mediaFinal >= 6) {
      return 0;
    } else {
      return 6 - mediaFinal;
    }
  }
}

const Disciplina = new Disciplina('mat1', 'Matemática');
cosnt aluno = new Aluno('01','João', 7, 8, 9);

console.log(`Média do aluno é: ${aluno.media()}`);
console.log(`Pontos necessários para a prova final é: ${aluno.final()}`);
