// break

console.log (`Exemplo da utilização de break`);

var index = 0;

while (true) {
    index++;

    if(index > 2){
        break; // sai do laço.
    }
    console.log(index);
}

//continue
console.log(`\n Exemplo da utilização de continue`);
const array = [1,2,3,4,5,6];

for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (element % 2 === 0) {
        continue; // pula uma interação.
    }
    console.log(element); // 1, 3 e 5.
}