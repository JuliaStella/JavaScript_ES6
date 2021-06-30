/* --Definição-- 
 É um pattern muito popular em aplicações js. A instância
 (subscriber) mantém uma coleção de objetos (observers) e notifica todos
 eles quando ocorrem mudanças no estado.
*/

// --Exemplo--

class Observable {
    
    constructor(){
        this.observers = [];
    }
    
    subscribe(f){
        this.observers.push = []; 
    }
    unsubscribe(f){
        this.observers = this.observers.filter(subscriber => subscriber !== f);
    }
    notify(data){
        this.observers.forEach(observer == observer(data));
    }
}
