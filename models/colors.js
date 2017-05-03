const { db, } = require('../pgp');

class Color {
    constructor(){}
/*
    findRelated (arr) {
        let count = arr.length;
        if(count === 1){
            return db.query("SELECT * FROM collection WHERE color1 IN ('" + arr.join("','") + "') OR " +
                                                            "color2 IN ('" + arr.join("','") + "') OR " +
                                                            "color3 IN ('" + arr.join("','") + "') OR " +
                                                            "color4 IN ('" + arr.join("','") + "') OR " +
                                                            "color5 IN ('" + arr.join("','") + "') " +
                                                            "");
        }else if(count === 2){
            return db.query("SELECT * FROM collection WHERE color1 IN ('" + arr.join("','") + "') OR " +
                                                            "color2 IN ('" + arr.join("','") + "') OR " +
                                                            "color3 IN ('" + arr.join("','") + "') OR " +
                                                            "color4 IN ('" + arr.join("','") + "') OR " +
                                                            "color5 IN ('" + arr.join("','") + "') " +
                                                            "");
        }
    }
*/
    listById (arr){
        console.log(arr);
        return db.any("SELECT * FROM collection WHERE id IN ('" + arr.join("','") + "')");
    }

    detail (id){
        return db.query('SELECT * FROM collection WHERE id = $1', id);
    }

    all(){
        return db.any('SELECT * FROM collection');
    }
}

module.exports = new Color();