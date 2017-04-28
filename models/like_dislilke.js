const { db, } = require('../pgp');

class likeDislike {
    constructor(){}

    getCountDislike(id){
        return db.any('SELECT count(*) as dislike FROM like_dislike WHERE status = \'dislike\' AND id_collection = $1', id);
    }

    getCountLike(id){
        return db.any('SELECT count(*) as like FROM like_dislike WHERE status = \'like\' AND id_collection = $1', id);
    }

    all(){
        return db.any('SELECT * FROM like_dislike');
    }
}

module.exports = new likeDislike();