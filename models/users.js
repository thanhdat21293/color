const { db, } = require('../pgp');

class Users {
    constructor(){}

    insert(data) {
        return db.one('INSERT INTO users', data);
    }

    CheckNameEmail(data) {
        return db.oneOrNone('SELECT * FROM users WHERE username = $1 OR email = $2 LIMIT 1', data);
    }

    getNameEmail(id){
        return db.oneOrNone('SELECT username, email FROM users WHERE id = $1 LIMIT 1', id);
    }

    all(){
        return db.any('SELECT * FROM users');
    }
}

module.exports = new Users();