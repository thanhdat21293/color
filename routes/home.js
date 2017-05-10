const {db,} = require('../pgp');
const color = require('../models/colors');
const user = require('../models/users');
const likedislike = require('../models/like_dislilke');
const related = require('../models/related');
const async = require("async");
const functions = require('../functions');


let log = console.log;

module.exports = function (express) {

    const router = express.Router();

    router.get('/', (req, res) => {

        let q = req.body['page'];
        let n = 19;
        let pgfrom = 0;
        if (q != undefined && q > 0) {
            pgfrom = (pgfrom + q - 1) * n;
        } else {
            q = 1;
        }
        db.task(t => {
            return t.batch([
                color.getColorPage(pgfrom, n),
                color.count('')
            ]);
        })
            .then(data => {
                let allcolor = data[1][0].count;
                p = Math.ceil(allcolor / n, 0);
                async.map(data[0], functions.merge, (err, rs) => {
                    //log(data);
                    res.render('index', {
                        data : {
                            dt: data[0],
                            allpage: p,
                            page: q,
                            user: ''
                        },
                        vue: {
                            components: ['headers', 'boxcolor']
                        }
                    })
                });


            })
            .catch(error => {
                log(error);
            })
    });

    return router
};