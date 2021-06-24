/**
 if (condition) { for vedadeira 
      // code execulta o código
 }
 */

 const array = [0, 1, 2, 3, 4, 5];

 array.forEach(item => {
     if (item % 2 === 0) {
         console.log(`O número ${item} é par.`);
     }else{
        console.log(`O número ${item} é impar.`);
     }
 });

 /**
 if (condition) { se não for verdadeira
      //  
 }else if (condition){  e se essa for
     code execulta o código
 }
 */

 
 const array = [2,3,4,5,6,8,10,15];

 console.log('\nelse if');
 array.forEach(item => {
     if (item % 2 ===0){
     console.log(`O numero ${item} é divisivel por 2`);
 } else if(item % 3 ===0){
     console.log(`O numero ${item} é divisivel por 3`);
 } else if (item % 5 ===0){
     console.log(`O numero ${item0} é divisivel por 5`);
 }
});

console.log('\nif');
array.forEach(item => {
 if(item % 2 ===0) {
     console.log(`O numero ${item} é divisivel por 2`);
 }
 if (item % 3 ===0){
     console.log(`O numero ${item} é divisivel por 3`);
 }
 if (item % 5 ===0){
     console.log(`O numero ${item} é divisivel por 5`);
 }
});

