const color = require('./models/colors');
const user = require('./models/users');
const likedislike = require('./models/like_dislilke');
const convert = require('color-convert');

module.exports = {
    merge: (data, cb) => {
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

    },

    arrInArr: (arr1, arr2) => {
        let arrCheck = [];
        arr1.forEach((i) => {
            let check = arr2.indexOf(i);
            arrCheck.push(check)
        })
        let check = arrCheck.indexOf(-1);
        if (check >= 0) {
            return '1'; //False
        } else {
            return '2'; //True
        }
    },

    arrSameColor: (arr1, arr2) => {
        let n1 = arr1.length;
        let n2 = arr2.length;

        /*
         //if(n === 1){
         let min = 1000;
         arr2.forEach((i) => {
         let number1 = 0;
         arr1.forEach((j) => {
         number1 += sameColor(j, i)
         });
         number1 = number1/n;
         log(number1)
         if(number1 < min) {
         min = number1;
         }
         });
         log('Min = ' + min)
         //return min;
         //}
         */
        if (n1 === 1) {
            let min = 100;
            arr2.forEach((i) => {
                let number1 = sameColor(arr1[0], i);

                if (number1 < min) {
                    min = number1;
                }
            });
            //log(min)
            return min;
        } else if (n1 === 2) {
            let min = 100;

            for (let i = 0; i < n2; i++) {
                for (let j = 0; j < n2; j++) {
                    if (i != j) {
                        let number1 = sameColor(arr1[0], arr2[i]);
                        let number2 = sameColor(arr1[1], arr2[j]);
                        let number = (number1 + number2) / n1;
                        //log(number);
                        if (number < min) {
                            min = number;
                        }
                    }
                }
            }

            //log('KQ : ' + min);
            return min;
        } else if (n1 === 3) {
            let min = 100;

            for (let i = 0; i < n2; i++) {
                for (let j = 0; j < n2; j++) {
                    for (let u = 0; u < n2; u++) {
                        if (i != j && j != u && u != i) {
                            let number1 = sameColor(arr1[0], arr2[i]);
                            let number2 = sameColor(arr1[1], arr2[j]);
                            let number3 = sameColor(arr1[2], arr2[u]);
                            let number = (number1 + number2 + number3) / n1;
                            //log(number);
                            if (number < min) {
                                min = number;
                            }
                        }
                    }
                }
            }

            //log('KQ : ' + min);
            return min;
        } else if (n1 === 4) {
            let min = 100;

            for (let i = 0; i < n2; i++) {
                for (let j = 0; j < n2; j++) {
                    for (let u = 0; u < n2; u++) {
                        for (let v = 0; v < n2; v++) {
                            if (i != j && i != u && i != v && j != u && j != v && u != v) {
                                let number1 = sameColor(arr1[0], arr2[i]);
                                let number2 = sameColor(arr1[1], arr2[j]);
                                let number3 = sameColor(arr1[2], arr2[u]);
                                let number4 = sameColor(arr1[3], arr2[v]);
                                let number = (number1 + number2 + number3 + number4) / n1;
                                //log(number);
                                if (number < min) {
                                    min = number;
                                }
                            }
                        }
                    }
                }
            }

            //log('KQ : ' + min);
            return min;
        } else if (n1 === 5) {
            let min = 100;

            for (let i = 0; i < n2; i++) {
                for (let j = 0; j < n2; j++) {
                    for (let u = 0; u < n2; u++) {
                        for (let v = 0; v < n2; v++) {
                            for (let w = 0; w < n2; w++) {
                                if (i != j && i != u && i != v && i != w && j != u && j != v && j != w && u != v && u != w && v != w) {
                                    let number1 = sameColor(arr1[0], arr2[i]);
                                    let number2 = sameColor(arr1[1], arr2[j]);
                                    let number3 = sameColor(arr1[2], arr2[u]);
                                    let number4 = sameColor(arr1[3], arr2[v]);
                                    let number5 = sameColor(arr1[4], arr2[w]);
                                    let number = (number1 + number2 + number3 + number4 + number5) / n1;
                                    //log(number);
                                    if (number < min) {
                                        min = number;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            //log('KQ : ' + min);
            return min;
        }
    },

    // let arr1 = ['691111','A7D344','E0E4CC','F38630','FA6900'];
    // let arr2 = ['69D4sd','A7DBD8','E0E4CC','F38630','FA6900'];
    //
    // arrSameColor(arr1, arr2);
    /*
     let n1 = 5;
     let n2 = 2;
     let n = 1;
     for(let i = (n1 - n2 + 1); i <= n1; i++){
     n = n * i;
     }
     //log(n)

     for(let i = 0; i < n; i++){
     //log(i + ' ' + (i+1) + ' ' + (i+2))
     }
     */
};

//Từ 2 mã màu sẽ tính ra 1 số, số càng nhỏ thì mã màu càng giống nhau
    //Trả về 1 mảng: Ví dụ: [ 76, 21, -2 ]
    // let hexToNumber = (color) => {
    //     return convert.hex.lab(color);
    // };
    //hexToNumber('DEADBF');

    let sameColor = (color1, color2) => {
        let arr1 = convert.hex.lab(color1);
        let arr2 = convert.hex.lab(color2);
        let number = Math.sqrt(Math.pow((arr1[0] - arr2[0]), 2) + Math.pow((arr1[1] - arr2[1]), 2) + Math.pow((arr1[2] - arr2[2]), 2));
        return number;
    };

