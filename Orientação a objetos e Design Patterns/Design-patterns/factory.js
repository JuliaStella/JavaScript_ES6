function FakeUser() {
    this.name = 'júlia';
    this.lastname = 'Stella';
}
const user = new FakeUser(); // Não é Factory
 
function FakeUser() {
    this.name = 'júlia';
    this.lastname = 'Stella';
}
const user = FakeUser(); // É Factory
 