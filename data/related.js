/**
 * Created by thanhdat21293 on 4/25/17.
 */

const express = require('express');
const app = express();
const expressVue = require('express-vue');
const path = require('path');
const bodyParser = require('body-parser');

const color = require('../models/colors');
const user = require('../models/users');
const likedislike = require('../models/like_dislilke');
const related = require('../models/related');
const convert = require('color-convert');
const async = require("async");

app.use ('/public', express.static ('public'));

app.engine ('vue', expressVue);
app.set ('view engine', 'vue');
app.set ('views', path.join(__dirname, '/views'));
app.set ('vue', {
	componentsDir: path.join (__dirname, 'views', 'components'),
	defaultLayout : 'layout'
});

app.use (bodyParser.urlencoded ({
	extended: true
}));

app.use(bodyParser.json());

let log = console.log;

let sameColor = (color1, color2) => {
    let arr1 = convert.hex.lab(color1);
    let arr2 = convert.hex.lab(color2);
    let number = Math.sqrt(Math.pow((arr1[0] - arr2[0]), 2) + Math.pow((arr1[1] - arr2[1]), 2) + Math.pow((arr1[2] - arr2[2]), 2));
    return number;
};
let rela2 = (arrColor) => {

};
let rela1 = (data, cb) => {


};
//let related_color = () => {
    color.all()
        .then(data => {
            let arr = [];
            let count = 0;
            data.forEach((k) => {
                //log(k);
                //log('------------------');

                //Color 1
                let arrColor = [];
                arrColor.push(k.color1);
                arrColor.push(k.color2);
                arrColor.push(k.color3);
                arrColor.push(k.color4);
                arrColor.push(k.color5);
                arrColor.forEach((i) => {
                    let arrNow = [];
                    data.forEach((j) => {

                        let arrColor1 = [];
                        arrColor1.push(j.color1);
                        arrColor1.push(j.color2);
                        arrColor1.push(j.color3);
                        arrColor1.push(j.color4);
                        arrColor1.push(j.color5);
                        arrColor1.forEach((l) => {
                            if (i != l) {

                                if (arr.length > 0) {
                                    let check = 0;
                                    arr.forEach((v) => {
                                        if (v.id === i && v.id_related === l || v.id === l && v.id_related === i) {
                                            check = 1;
                                        }
                                    })
                                    if (check != 1) {
                                        //log('test: ' + i + ' ' + l);
                                        let number1 = sameColor(i, l);
                                        arrNow.push({id: i, id_related: l, score: number1});
                                        //log(arrNow);
                                    }
                                } else {
                                    //log('test 1: ' + i + ' ' + l);
                                    let number1 = sameColor(i, l);
                                    arrNow.push({id: i, id_related: l, score: number1});
                                    //log(arrNow);
                                }


                            }
                        });

                    });

                    //log('-------------------------')
                    //log(arrNow);
                    arrNow.sort(function(a,b) {
                        return a.score - b.score;
                    });
                    //log(arrNow);
                    //log('-------------------------')
                    let count1 = 0;
                    arrNow.forEach((item) => {
                        count1++;
                        if(count1 < 11) {
                            arr.push(item);
                        }
                    });

                });

                //log('------------------')
            });
            arr.forEach((i) => {
                let score = i.score.toFixed(2);
                related.insert(i.id, i.id_related, score)
                    .then(data => {
                        log('ok');
                    })
                    .catch(error => {
                        log('Error');
                    });
            });
            log(arr.length);
        })
        .catch(error => {
            log(error);
        })
//}
