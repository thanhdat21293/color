const { db, } = require('../pgp');
let log = console.log;
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

    searchHome(search, selected, pgfrom, n){

        if(selected === 'random'){
            return db.any("SELECT * FROM collection WHERE name like '%$1#%' ORDER BY RANDOM () LIMIT $4 OFFSET $3", [search, selected, pgfrom, n]);
        }else if(selected === 'all' || selected === 'latest'){
            return db.any("SELECT * FROM collection WHERE name like '%$1#%' ORDER BY date DESC LIMIT $4 OFFSET $3", [search, selected, pgfrom, n]);
        }else{
            return db.any("SELECT * FROM collection WHERE name like '%$1#%' LIMIT $4 OFFSET $3 ", [search, selected, pgfrom, n]);
        }

    }

    detail (id){
        return db.query('SELECT * FROM collection WHERE id = $1', id);
    }

    getColorPage(pgfrom, n){
        return db.any('SELECT * FROM collection ORDER BY date DESC LIMIT $2 OFFSET $1', [pgfrom, n]);
    }

    count(search){
        if(search.length > 0) {
            return db.any("SELECT count(*) as count FROM collection WHERE name like '%$1#%'", search);
        }else{
            return db.any('SELECT count(*) as count FROM collection');
        }
    }

    all(){
        return db.any('SELECT * FROM collection ORDER BY date DESC');
    }
}

module.exports = new Color();