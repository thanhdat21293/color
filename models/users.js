const { db, } = require('../pgp');

class Users {
    constructor(){}

    getNameEmail(id){
        return db.oneOrNone('SELECT username, email FROM users WHERE id = $1 LIMIT 1', id);
    }

    all(){
        return db.any('SELECT * FROM users');
    }
}

module.exports = new Users();