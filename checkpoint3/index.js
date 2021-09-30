let estudantes = require("./alunos");
let estudos = require("./curso");
//console.log(estudantes);

let aluno001 = new estudantes.AddAluno("Maria", 2, [1, 7, 9]);
let aluno002 = new estudantes.AddAluno("Thiago", 0, [3, 6, 8]);
let aluno003 = new estudantes.AddAluno("José", 7, [5, 7, 8]);
let aluno004 = new estudantes.AddAluno("Otavio", 3, [4.3, 9, 6]);
let aluno005 = new estudantes.AddAluno("Piva", 2, [10, 7, 8]);

console.log(aluno001);
console.log(aluno001.calcularMedia());
console.log(aluno001.calcularFaltas());



// let curso001 = new estudos.Curso("Programação Imperativa", 7, 4);
// let curso002 = new estudos.Curso("Front End I", 6, 5);
// let curso003 = new estudos.Curso("Metodologias Ágeis", 8, 2);


// console.log(estudantes.calcularMedia(aluno001));
// console.log(estudantes.faltou(aluno001));
// console.log(estudantes.calcularMedia(aluno002));
// console.log(estudantes.faltou(aluno002));
// console.log(estudantes.calcularMedia(aluno003));
// console.log(estudantes.faltou(aluno003));
// console.log(estudantes.calcularMedia(aluno004));
// console.log(estudantes.faltou(aluno004));
// console.log(estudantes.calcularMedia(aluno005));
// console.log(estudantes.faltou(aluno005));

// console.log(estudantes.faltou(aluno005)); // O número de faltas aumenta mais 1
// console.log(estudantes.faltou(aluno005)); // O número de faltas aumenta mais 1

// let listaEstudantes2 = []; // Outro jeito de resolver
// listaEstudantes.push(aluno001);
// listaEstudantes.push(aluno002);
// listaEstudantes.push(aluno003);
// listaEstudantes.push(aluno004);
// listaEstudantes.push(aluno005);
// console.log(listaEstudantes2);

let listaEstudantes = [aluno001, aluno002, aluno003, aluno004, aluno005];
//console.log(listaEstudantes);

module.exports = listaEstudantes;

//console.log(curso001);