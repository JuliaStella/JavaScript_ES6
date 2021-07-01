// --Resumão de todos os conteúdos do módulo de array--

// Criar um array

const arr = [1,2,3];
const arr2 = [5,6,7];
const arr = new array(1,2,3);

/* Array.of
Cria uma nova instância de array a partir
do número de parâmetros informados.
*/
const arr = array.of(1,2,3);

/* Outra forma de array
Cria uma nova instância de array de 
acordo com os parâmetros informados.
*/

const arr = Array(3); // vai criar um array com três posições vazias.
// [empty x 3]

const arr2 = Array(2,3); // vai ser parecido com o array.of.
// [3,2]

/* Array.from
Cria uma nova instância de array a partir
array-like ou iterable object.
*/

const divs = document.querySelectorAll('div'); // isso vai ser um nodeList. Mais sua funcionalidade vai pegar todas as divs que forem encontradas e irão ser armazenadas nesta var. 
const arr3 = Array.from(divs); // chamará a var acima e criarar um array.

/* Inserir e remover elementos

   --PUSH--
Adicionar um ou mais elementos no final do array e retorna o tamanhho
do novo array.
*/

arr.push('4');

/* --POP--
Remove elemento.
*/

arr.pop('4');


/* --UNSHIFT--
Adiciona no início novo elemento.
*/

arr.unshift('0');

/* --SHIFT--
Remove no início novo elemento.
*/

arr.shift('0');

/* --CONCAT--
Concatena um ou mais array retornando um novo array.
*/

const novoArr = arr.concat(arr2);
// [1,2,3,5,6,7]

/* --SLICE--
Retorna um novo array "fatiando" o array de acordo com ínicio
e fim*/

const arr3 = [1,2,3,4,5,];

arr3.slice(0,2);
// [1,2]

arr3.slice(2); // pega a partir da posição 2.
// [3,4,5]

arr3.slice(-1); // é voltando.
// [5]

/* --SPLICE--
Altera um array add. novos elemetos enquanto 
remove elemetos antigos*/

const arr3 = [1,2,3,4,5,];

arr3.splice(2); // vai remover esses itens.
// [3,4,5]

console.log(arr3); 
// [1,2]

arr3.splice(0,0,'first'); // vai add.. O primeiro zero seria aonde vai add.; zero 2, serão a quantidade de itens que irá remover; O terceiro parâmetro vai add. 
// []

console.log(arr3); // pega a partir da posição 2.
// ['first',1,2]

/* Iterar elementos

   --FOREACH--
interação de cada item dentro de um array.
*/

const arr3 = [1,2,3,4,5,];

arr3.forEach(value, index => { // value: vai ser o valor do item, index: a posição do array
    console.log(`${index}: ${value}`);
});
