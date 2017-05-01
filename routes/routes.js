const { db, } = require('../pgp');
const color = require('../models/colors');
const user = require('../models/users');
const likedislike = require('../models/like_dislilke');

const async = require("async");

let log = console.log;

let merge = (data, cb) => {
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

let arrInArr = (arr1, arr2) => {
    let arrCheck = [];
    arr1.forEach((i) => {
        let check = arr2.indexOf(i);
        arrCheck.push(check)
    })
    let check = arrCheck.indexOf(-1);
    if(check >= 0 ){
        return '1'; //False
    }else{
        return '2'; //True
    }
}

module.exports = (express) => {

    const router = express.Router();

    router.get('/', (req, res) => {
        color.all()
            .then(data1 => {

                async.map(data1, merge, (err, rs) => {
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
                async.map(data1, merge, (err, rs) => {
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
        log(req.body)
        color.all()
            .then(data1 => {

                let data2 = [];
                data1.forEach((i) => {
                    let data3 = [];
                    data3.push(i.color1);
                    data3.push(i.color2);
                    data3.push(i.color3);
                    data3.push(i.color4);
                    data3.push(i.color5);

                    let check = arrInArr(arr, data3);
                    if(check === '2'){
                        data2.push(i);
                    }

                    if(i.color1 === '69D2E7'){
//                        log(arr);
//                        log(data3);
//                        log(check);
//                        log(data2);
//                        log(i);
                    }

                })

                //log(data2)


                async.map(data2, merge, (err, rs) => {
                    //log(data1);
                    res.json({data: data2})
                });


            })
            .catch(error => {
                console.log(error);
            })

    })

    return router;
};