function processData(input) {
    let entradas = input.split("\n");
    let n = +entradas[0] + 1;
    let map = new Map();
    for (let i = 1; i < n; i++) {
        let [name, tel] = entradas[i].split(" ");
        map.set(name, tel);
    }

    let queries = entradas.slice(n);

    queries.forEach(name => {
        if (map.has(name)) {
            console.log(name + "=" + map.get(name));
        } else {
            console.log("Not found");
        }
    });
}

processData(`3
sam 99912222
tom 11122222
harry 12299933
sam
edward
harry`
)
