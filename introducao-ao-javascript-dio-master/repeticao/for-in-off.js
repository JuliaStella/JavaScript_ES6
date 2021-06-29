let arr = [3,5,7];

arr.foo ="Hello";

for (let i in arr) { // vai fazer para cada propriedade do objeto, que seria o 3, 5 e 7.
    console.log(i);  // log  "0", "1","2",|"foo"
}

for (let i of arr) { // só execulta as propriedades numeradas.
    console.log(i); // log "3", "5", "7"
}