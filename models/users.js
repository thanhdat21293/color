const { db, } = require('../pgp');

class Users {
    constructor(){}

    insert(data) {
        return db.none('INSERT INTO users VALUES($1, $2, $3, $4, $5)', data);
    }

    CheckNameEmail(data) {
        return db.oneOrNone('SELECT * FROM users WHERE username = $1 OR email = $2 LIMIT 1', data);
    }

    checkNameEmailLogin(name){
        return db.oneOrNone('SELECT * FROM users WHERE username = $1 OR email = $1 LIMIT 1', name);
    }

    getNameEmail(id){
        return db.oneOrNone('SELECT username, email FROM users WHERE id = $1 LIMIT 1', id);
    }

    all(){
        return db.any('SELECT * FROM users');
    }
}

module.exports = new Users();