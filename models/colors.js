const { db, } = require('../pgp');

class Color {
    constructor(){}

    listColorLimit(number){
        return db.many("SELECT * FROM collection LIMIT $1", number);
    }
    listById (arr){
        return db.any("SELECT * FROM collection WHERE id IN ('" + arr.join("','") + "')");
    }
    getPalletByMultiColor (arr){
        return db.any("SELECT * FROM collection WHERE color1 IN ('" + arr.join("','") + "') OR color2 IN ('" + arr.join("','") + "') OR color3 IN ('" + arr.join("','") + "') OR color4 IN ('" + arr.join("','") + "') OR color5 IN ('" + arr.join("','") + "') LIMIT 12");
    }
    getPalletByColor (id){
        return db.any("SELECT * FROM collection WHERE color1 = $1 OR color2 = $1 OR color3 = $1 OR color4 = $1 OR color5 = $1", id);
    }
    detail (id){
        return db.query('SELECT * FROM collection WHERE id = $1', id);
    }

    all(){
        return db.any('SELECT * FROM collection');
    }
}

module.exports = new Color();