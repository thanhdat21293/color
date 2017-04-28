const color = require('../models/colors');
const user = require('../models/users');
const likedislike = require('../models/like_dislilke');

const async = require("async");

function merge (data, cb){
    user.getNameEmail(data.id_user)
        .then((data1) => {
            data.author = data1.name;
            data.author_email = data1.email;
        })
    likedislike.getCountLike(data.id)
        .then((data1) => {
            data.like = data1[0].like;
        })

    likedislike.getCountDislike(data.id)
        .then((data1) => {
            data.dislike = data1[0].dislike;
            cb(null, data);
        })

}

module.exports = (express) => {

    const router = express.Router();
    let log = console.log;
    router.get('/', (req, res) => {
        color.all()
            .then(data => {

                async.map(data, merge, (err, rs) => {
                    //log(data);
                    res.render('index', {
                        data : {
                            dt: data
                        }
                    })
                });


            })
            .catch(error => {
                log(error);
            })
    });

    router.get('/:id', (req, res) => {
        let id = req.params.id;
        
        db.task(t => {
            return t.batch([
                color.detail(id)
            ]);
        })
            .then(data => {
                res.render('detail', {
                        data : {
                            dt: data
                        }
                    })
            })
            .catch(error => {
                log(error);
            })
    });

    return router;
};