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

    router.get('/:id', (req, res) => {
        let id = req.params.id;
        color.detail(id)
            .then(data1 => {
                async.map([data1], functions.merge, (err, rs) => {
                    res.render('detail', {
                        data : {
                            dt: [data1]
                        },
                        vue: {
                            components: ['headers']
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