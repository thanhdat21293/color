const { db, } = require('../pgp');
const color = require('../models/colors');
const user = require('../models/users');
const likedislike = require('../models/like_dislilke');
const related = require('../models/related');
const async = require("async");
const functions = require('../functions');

let log = console.log;

module.exports = (app, express) => {

    const router = express.Router();

    const home = require('./home')(express);
    app.use('/', home);

    const r_color = require('./r_colors')(express);
    app.use('/color/', r_color);

    const r_user = require('./r_users')(express);
    app.use('/user/', r_user);

    router.post('/colorrelated', (req, res) => {
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

    router.post('/searchcolor', (req, res) => {
        let search = req.body['search'];
        let selected = req.body['selected'];
        let q = req.body['page'];
        let n = 19;
        let pgfrom = 0;
        if (q != undefined && q > 0) {
            pgfrom = (q - 1) * n;
        } else {
            q = 1;
        }

        db.task(t => {
            return t.batch([
                color.searchHome(search, selected, pgfrom, n),
                color.count(search)
            ]);
        })

            .then(data => {

                let allcolor = data[1][0].count;
                let p = Math.ceil(allcolor / n, 0);

                async.map(data[0], functions.merge, (err, rs) => {
                    if(selected !== 'like') {
                        res.json({
                            data: data[0],
                            allpage: p,
                            page: q
                        })
                    }else{
                        data[0].sort(function(a,b) {
                            return b.like - a.like;
                        });
                        res.json({
                            data: data[0],
                            allpage: p,
                            page: q
                        })
                    }
                });
            })
            .catch(error => {
                log(error)
            });
    });

    router.get('/addrelatedcolor', (req, res) => {
        let arrNew = ['69L1PB','BK39F7','LK0AF7','4LOSBF','9IKDD3']
        db.any('CREATE OR REPLACE FUNCTION findrelated() ' +
            'RETURNS TABLE(id text, name text, color1 text, color2 text, color3 text, color4 text, color5 text, id_user text, date timestamp, description text, share text) AS $$ ' +
            'SELECT * FROM collection ' +
            '$$ LANGUAGE SQL ; ' +
            'SELECT * FROM findrelated()')
            .then(data => {
                log(data);
                res.json({data: data});
            })
            .catch(error => {
                log(error);
            });
    });

    return router;
};