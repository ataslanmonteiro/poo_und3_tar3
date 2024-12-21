class Passageiro {
  constructor(cpf, nome) {
    this.cpf = cpf;
    this.nome = nome;
  }
}
class Voo {
  constructor(numeroVoo, data, horario) {
    this.numeroVoo = numeroVoo;
    this.data = data;
    this.horario = horario;
    this.assentos = new Array(100).fill(null);
  }

  registrarPassageiro(passageiro, assento) {
    if (this.assentos[assento] === null) {
      this.assentos[assento] = passageiro;
      console.log(
        `O passageiro ${passageiro.nome} está registrado no assento: ${assento}.`
      );
    } else {
      console.log(`O assento: ${assento} já está ocupado.`);
    }
  }
  assentoLivre(assento) {
    return this.assentos[assento] === null;
  }

  proximoAssentoLivre() {
    for (let i = 0; i < this.assentos.length; i++) {
      if (this.assentoLivre(i)) {
        return i;
      }
    }
    return -1;
  }

  totalVagasDisponiveis() {
    let vagas = 0;
    for (let i = 0; i < this.assentos.length; i++) {
      if (this.assentoLivre(i)) {
        vagas++;
      }
    }
    return vagas;
  }
}

const voo = new Voo("0001", "21-12-2024", "08:00");
const passageiro1 = new Passageiro("123.456.789-00", "Ana Luiza da Silva");
const passageiro2 = new Passageiro("987.654.321-00", "Antonia Maria da Silva");

voo.registrarPassageiro(passageiro1, 10);
voo.registrarPassageiro(passageiro2, 20);

console.log(`O assento 10 está livre? ${voo.assentoLivre(10)}`);
console.log(`O próximo assento livre é: ${voo.proximoAssentoLivre()}`);
console.log(`O total de vagas disponíveis é: ${voo.totalVagasDisponiveis()}`);

const passageiro3 = new Passageiro("111.222.333-44", "Ana Cecília de Oliveira");
voo.registrarPassageiro(passageiro3, voo.proximoAssentoLivre());
console.log(
  `O total de vagas disponíveis após registrar outro passageiro é: ${voo.totalVagasDisponiveis()}`
);
