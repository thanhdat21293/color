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

    router.post('/register', (req, res) => {
        let username = req.body['username'];
        let email = req.body['email'];
        let password = req.body['password'];
        let confirmpassword = req.body['confirmpassword'];

        let ckeckUer = username.trim().length;
        let checkEmail = email.trim().length;
        let checkPass = password.trim().length;

        if(password === confirmpassword){

        }else{
            res.json({errMsg: 'Passwords do not match'})
        }
    });

    return router
};