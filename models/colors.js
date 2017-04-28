const { db, } = require('../pgp');

class Color {
    constructor(){}
    detail (id){
        return db.oneOrNone('SELECT * FROM collection WHERE id = $1', id);
    }
    all(){
        return db.any('SELECT * FROM collection');
    }
}

module.exports = new Color();