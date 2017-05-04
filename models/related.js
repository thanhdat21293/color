const { db, } = require('../pgp');

class Related {
    constructor(){}

    insert (id, id_related, score){
        return db.any("INSERT INTO related VALUES ($1, $2, $3) ", [id, id_related, score]);
    }

    checkId (id){
        return db.any("SELECT * FROM related WHERE id = $1 OR id_related = $1", id);
    }
    listColorRelated(id){
        return db.query("SELECT * FROM related WHERE id = $1 OR id_related = $1", id);
    }

    detail (id){
        return db.query('SELECT * FROM related WHERE id = $1', id);
    }

    all(){
        return db.any('SELECT * FROM related');
    }
}

module.exports = new Related();