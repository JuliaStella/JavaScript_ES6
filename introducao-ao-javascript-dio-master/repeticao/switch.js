const fruta = 'banana';

switch (fruta) {
    case 'banana' : 
    console.log ('R$: 3,00 /Kg'); // se for, vai cair aqui. Senão passa para o proxímo.
    break; // pausar
    case 'mamao': // se for, vai cair aqui. Senão passa para o proxímo.
    case 'pera': // se for, vai cair aqui. Senão passa para o proxímo.
    console.log ('R$: 2,00 /Kg');
    break; // para essas condições.
    default: // caso a fruta não exista, cai aqui.
    console.log ('Produto não existe no estoque');
    break;
}