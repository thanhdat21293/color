const {db,} = require('../pgp');
const color = require('../models/colors');
const user = require('../models/users');
const likedislike = require('../models/like_dislilke');
const related = require('../models/related');
const async = require("async");
const functions = require('../functions');
const shortid = require('shortid');
const md5 = require('md5');
const dateFormat = require('dateformat');
const now = new Date();

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
            let userEmail = [username, email]
            user.CheckNameEmail(userEmail)
                .then(data => {
                    if(!data){

                        let wsdate = dateFormat(now, "yyyy-mm-dd HH:MM:ss");
                        let data1 = [
                            shortid.generate(),
                            username,
                            email,
                            md5(password),
                            wsdate
                        ];

                        user.insert(data1)
                            .then(data => {
                                res.json({
                                    registerSuccess: 'You have successfully registered and',
                                    textLink: 'logged in',
                                    href: '/user/login'
                                })
                            })
                            .catch(error => {
                                res.json({errUserRegister: 'Registration failed.'})
                            });

                    }else{
                        res.json({errUserRegister: 'Username or Email exists'})
                    }
                })
                .catch(error => {
                    log(error);
                })
        }else{
            res.json({errUserRegister: 'Password do not match'})
        }
    });

    router.post('/login', (req, res) => {
        let username = req.body['username'];
        let password = req.body['password'];
        log(username)
        user.checkNameEmailLogin(username)
            .then(data => {
                log(data);
            })
            .catch(error => {
                log(error);
            })
    });

    return router
};