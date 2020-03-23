let http = require('http');
let lodash = require('lodash');

function random() {
    return Math.round(Math.random() * 100);
}
let server = http.createServer((req, res) => {
    let resultat = lodash.times(5, random);
    console.log(resultat);

    res.writeHead(200);
    res.end('Hello World!');
});

server.listen(8080);


