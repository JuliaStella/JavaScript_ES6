function Pessoa(name) { // função não explícita
    this.name = name;
}

const p = new Pessoa ('Júlia');

console.log(p);

function Pessoa(name) {
    this.name = name;

    return {
        name: 'Teste'
    }
}

const p2 = new Pessoa ('Júlia');

p2 // vai retorna o return, pois ele faz que objeto seja retornado explícitamente.

/* --EXPLICAÇÃO--

new Foo( ... );

O que ocorre?

1 - Um novo objeto é criado, herdando Foo.prototype.
2 - A função construtora Foo é chamada com os argumentos especificados e com o `this` vinculado ao novo objeto criado.
3 - Caso a função construtora tenha um retorno explícito, seá rspeitado o seu `return`. Será retornado o objeto criado no passo 1.
*/