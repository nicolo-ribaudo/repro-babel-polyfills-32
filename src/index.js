async function* f() {
    yield await 2;
}

console.log(f())
console.log(1);