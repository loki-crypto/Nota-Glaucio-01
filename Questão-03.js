let nomes = ['Ana', 'Bruno', 'Carlos', 'Daniela', 'Eduardo'];
console.log("Terceiro nome:", nomes[2]);

nomes.push('Fernanda'); 
nomes.unshift('Zé');    
console.log("Array após adições:", nomes);

nomes.pop(); 
console.log("Array após remoção do último:", nomes);

let numeros = [2, 4, 6, 8];
let dobrados = numeros.map(num => num * 2);
console.log("Números dobrados:", dobrados);

let outrosNumeros = [1, 3, 5, 7, 9];
let maioresQue5 = outrosNumeros.filter(num => num > 5);
console.log("Números maiores que 5:", maioresQue5);
