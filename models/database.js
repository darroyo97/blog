let promise = require('bluebird');

let initOptions = {
    promiseLib: promise
}

let config = {
    host: 'local host',
    port: 5432,
    database: 'blog',
    user: 'postgres'
}

let pgp = require('pg-promise')(initOptions);
let db = pgp(config)

module.exports = db; 
