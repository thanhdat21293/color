/**
 * Created by thanhdat21293 on 4/25/17.
 */

const express = require('express');
const app = express();
const fs = require('fs');
const xml2js = require('xml2js');

let log = console.log;

const parser = new xml2js.Parser();


fs.readFile(__dirname + '/colorData.plist', function(err, data) {
    let results = {};
    let count = 0;
    parser.parseString(data, function (err, result) {
        result.plist.dict.forEach((item) => {
            item.array.forEach((item1) => {
                //console.dir(item1.dict);
                item1.dict.forEach((item2) => {
                    //console.dir(item2);
                    let Obj = {};
                    let array = [];
                    item2.array.forEach((item3) => {
                        item3.string.forEach((item4) => {
                            array.push(item4);
                        });
                    });
                    Obj.key = item2.key[0];
                    Obj.array = array;
                    Obj.key1 = item2.key[1];
                    Obj.string = item2.string[0];
                    results[count] = Obj;

                    count++;
                });


            });
        });
    });
    let outputFilename = './data.json';
        //fs.writeFile(outputFilename, JSON.stringify(results), 'utf8', function(err) {
        fs.writeFile(outputFilename, JSON.stringify(results, null, 4), function(err) {
        if(err) {
          console.log(err);
        } else {
          console.log("JSON saved to " + outputFilename);
        }
    });
});






/*
var myData = {
    0: {
        name: 'test',
        version: '1.0'
    },
    1: {
        name: 'dat',
        version: '1.1'
    }
}

var outputFilename = './data.json';

fs.writeFile(outputFilename, JSON.stringify(myData, null, 4), function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("JSON saved to " + outputFilename);
    }
});
*/

const port = 3000;
app.listen(port, () => {
    console.log('Ready for GET requests on http://localhost:' + port);
});