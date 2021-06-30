/* É um pattern que possibilidade 
organizarmos melhor o nosso código, 
sem a necessidade de expor variáveis
globais.
 */

// --Forma antiga--

(function($) {
})(jQuery);

// --Forma atual--

class Person {

    constructor(name){
        this.name = name;
    }
}

export default Person;

// utilixar Person

import Person from "./module";