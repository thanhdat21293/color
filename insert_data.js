const moment = require("moment");
const shortid = require("shortid");
const data = require("./data/data.json");
const async = require("async");
const { db, } = require('./pgp');

let log = console.log;

//log(data);
let colors = [];
for(i in data){
    /*
    delete data[i].key;
    delete data[i].key1;

    data[i].id = shortid.generate();
    data[i].name = data[i]['string'];

    delete data[i]['string'];

    let color1 = data[i]['array'][0].replace('#', '');
    let color2 = data[i]['array'][1].replace('#', '');
    let color3 = data[i]['array'][2].replace('#', '');
    let color4 = data[i]['array'][3].replace('#', '');
    let color5 = data[i]['array'][4].replace('#', '');
    data[i].color1 = color1;
    data[i].color2 = color2;
    data[i].color3 = color3;
    data[i].color4 = color4;
    data[i].color5 = color5;

    delete data[i]['array'];

    data[i].author = 'Thanh Dat';
    data[i].author_email = 'thanhdat21293@gmail.com';
    data[i].date = moment().format("DD/MM/YYYY");
    data[i].description = 'Test colors';
    data[i].like = 0;
    data[i].dislike = 0;
    data[i].share = 0;

    colors.push(data[i]);
    */
    let name = data[i]['string'];
    let color1 = data[i]['array'][0].replace('#', '');
    let color2 = data[i]['array'][1].replace('#', '');
    let color3 = data[i]['array'][2].replace('#', '');
    let color4 = data[i]['array'][3].replace('#', '');
    let color5 = data[i]['array'][4].replace('#', '');


    let arr = {
        id: shortid.generate(),
        name: name,
        color1: color1,
        color2: color2,
        color3: color3,
        color4: color4,
        color5: color5,
        id_user: '1',
        date: moment().format("YYYY-MM-YY H:m:s"),
        description: 'Color Description for ' + name,
        share: 0
    };
    /*
    db.many('INSERT INTO collection VALUES(${id}, ${name}, ${color1}, ${color2}, ${color3}, ${color4}, ${color5}, ${id_user}, ${date}, ${description}, ${share})', arr)
        .then((data) => {
            console.log('ok')
        })
        .catch((error) => {
            console.log(error)
        })
*/
}

// INSERT to DATABASE elasticsearch
/*
let merge = (item) => {
    elas.insertDocument('tbl_color', 'collection', item, (err, stt) => {
        log(stt)
    })
};

async.mapSeries(colors, merge, (err, rs) => {
    console.log("completed");
});
*/
/*
colors.forEach((color)=>{
    elas.insertDocument("tbl_color","collection",color,(err,stt)=>{
        console.log(stt);
    });
});
*/
// elas.delelteDataTable('tbl_color',(data)=>{
//     log(data);
// });

// elas.searchAll('tbl_color', 'collection')
//     .then(data => {
//         log('Result: \n')
//         log(data);
//     })
