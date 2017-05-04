const { db, } = require('../pgp');
const color = require('../models/colors');
const user = require('../models/users');
const likedislike = require('../models/like_dislilke');
const related = require('../models/related');
const async = require("async");
const functions = require('../functions');

let log = console.log;

module.exports = (express) => {

    const router = express.Router();

    router.get('/', (req, res) => {
        color.all()
            .then(data1 => {
                async.map(data1, functions.merge, (err, rs) => {
                    //log(data);
                    res.render('index', {
                        data : {
                            dt: data1
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
        color.detail(id)
            .then(data1 => {
                async.map(data1, functions.merge, (err, rs) => {
                    res.render('detail', {
                        data : {
                            dt: data1
                        }
                    })
                });


            })
            .catch(error => {
                log(error);
            })
    });

    router.post('/searchcolor', (req, res) => {
        let arr = req.body['colorArr'];
        let idColor = req.body['idColor'];
        related.listColorRelated(arr)
            .then(data => {
                //log(data);
                // data.sort(function(a,b) {
                //     return a.score - b.score;
                // });
                let arrNew = [];
                let count = 0;
                data.forEach((i) => {
                    count++;
                    if(count < 13) {
                        if (i.id === arr[0]) {
                            arrNew.push(i.id_related)
                        } else {
                            arrNew.push(i.id)
                        }
                    }
                });
                //log(arrNew)
                db.task(t => {
                    return t.batch([
                        color.getPalletByMultiColor(arrNew)
                    ]);
                })
                    .then(data1 => {
                        async.map(data1[0], functions.merge, (err, rs) => {
                            res.json({data: data1[0]})

                        });

                    })
            })
            .catch(error => {
                console.log(error);
            });

    });

    return router;
};