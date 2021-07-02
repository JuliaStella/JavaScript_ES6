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

const arr3 = [1,2,3,4,5];

arr3.forEach(value, index => { // value: vai ser o valor do item, index: a posição do array e ele recebe ainda um terceiro parãmetro.
    console.log(`${index}: ${value}`);
});

/* --MAP--
Retorna um novo array, de mesmo tamanho, 
iterando cada item de um array.*/

const arr3 = [1,2,3,4,5];

arr3.map(value => value * 2);
// [2,4,6,8,10]

/* --FLAT--
Retorna um novo array com todos os elementos de um
sub-array concatenados de forma recursiva de acordo com a profundidade
especificada(depth).*/

const arr4 = [1,2,[3,4]]; // "Meio que vai tirar esse array dentro dessee outro e criar um novo a partir disso"

arr4.flat();
// [1,2,3,4]

/* --FLATMAP--
Retorna um novo array assim como a função map e executa
um fla de profundidade 1.*/

const arr3 = [1,2,3,4,5];

arr3.flatMap(value => [value *2]);
// [2,4,6,8]

arr3.flatMap(value => [[value *2]]);
// [[2],[4],[6],[8]]

/* --KEYS--
Retorna um Array iterator que contém as chaves 
para cada elemento do array.*/

const arr3 = [1,2,3,4,5];
const arrIterator = arr3.keys();

arr3Iterator.next();
// (value: 0, done: false)

arr3Iterator.next();
// (value: 1, done: false)

arr3Iterator.next();
// (value: 2, done: false)

arr3Iterator.next();
// (value: 3, done: true)

/* --VALUES--
Retorna um Array que contém os valores 
para cada elemento do array.*/

const arr3 = [1,2,3,4,5];
const arrIterator = arr3.values();

arr3Iterator.next();
// (value: 0, done: false)

arr3Iterator.next();
// (value: 1, done: false)

arr3Iterator.next();
// (value: 2, done: false)

arr3Iterator.next();
// (value: 3, done: false)

arr3Iterator.next();
// (value: 4, done: true)

/* --ENTRIES--
Retorna um Array que contém os pares chave/valor 
para cada elemento do array.*/

const arr3 = [1,2,3,4,5];
const arrIterator = arr3.entries();

arr3Iterator.next();
// (value: [0,1], done: false)

arr3Iterator.next();
// (value: [1,2], done: false)

arr3Iterator.next();
// (value: [2,3], done: false)

arr3Iterator.next();
// (value: [3,4], done: true)

/* Buscar elementos

   --FIND--
Retorna o primeiro item de um array que satisfaz
a condição.
*/

const arr3 = [1,2,3,4,5];
const firtGreaterThanTwo = arr3.find(value => value > 2); // O primeiro item maior que dois.

console.log(firtGreaterThanTwo);
// 3


/* --FINDINDEX--
Retorna o índice do primeiro item de um array que satisfaz
a condição.
*/

const arr3 = [1,2,3,4,5];
const firtGreaterThanTwo = arr3.findIndex(value => value > 2); // Vai mostrar o índece.

console.log(firtGreaterThanTwo); 
// 2

/* --FILTER--
Retorna um novo array com todos os elementos que satisfazem
a condição.
*/

const arr3 = [1,2,3,4,5];
const firtGreaterThanTwo = arr3.filter(value => value > 2); 

console.log(firtGreaterThanTwo); 
// [3,4]

/* --INDEXOF--
Retorna o primeiro índice em que um elemento 
pode ser encontrado no array.
*/

const arr5 = [1,3,3,4,3];
const firtIndexOfItem = arr5.indexOf(3); 

console.log(firtIndexOfItem); 
// 1


/* --LASTINDEXOF--
Retorna o último índice em que um elemento 
pode ser encontrado no array.
*/

const arr5 = [1,3,3,4,3];
const firtIndexOfItem = arr5.indexOf(3); 

console.log(firtIndexOfItem); 
// 4

/* --INCLUDES--
Retorna um booleano verificando se determinado elemento 
existe no array.
*/

const arr5 = [1,3,3,4,3];

const hasItemOne = arr5.includes(1); 
// true

const hasItemOne = arr5.includes(2);  
// false

/* --SOME--
Retorna um booleano verificando se pelo menos um item de um array 
satisfaz a condição.
*/

const arr3 = [1,2,3,4,5];

const hasSomeEvenNumber = arr3.some(value => value % 2 ===0); 
// true

/* --EVERY--
Retorna um booleano verificando se todos oscitem de um array 
satisfaz a condição.
*/

const arr3 = [1,2,3,4,5];

const hasSomeEvenNumber = arr3.every(value => value % 2 ===0); 
// false

/* --SORT--
Ordena os elementos de um array de acordo com a condição.
*/
const arr3 = [1,2,3,4,5];

arr3.sort();
// [1,2,3,4,5]


/* --REVERSE--
Inverte os elementos de um array.
*/

const arr3 = [1,2,3,4,5];

arr3.reverse();
// [5,4,3,2,1]


/* Transformar em outro tipo de dados

   --JOIN--
Junta todos os elementos de um array, separados por um delimitador
e retorna uma string.
*/

const arr3 = [1,2,3,4,5];

arr3.join('-');
// "1-2-3-4-5"

/* --REDUCE--
Retorna um novo tipo de dado iterando cada posição de um array.
*/


const arr3 = [1,2,3,4,5];

arr3.reduce((total, value) => total += value, 0);
// 15

/* --REDUCE--
Retorna um novo tipo de dado iterando cada posição de um array.
*/


