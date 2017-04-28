/**
 * Created by thanhdat21293 on 4/25/17.
 */

const express = require('express');
const app = express();
const expressVue = require('express-vue');
const path = require('path');
const bodyParser = require('body-parser');

app.use ('/public', express.static ('public'));


app.engine ('vue', expressVue);
app.set ('view engine', 'vue');
app.set ('views', path.join (__dirname, '/views'));
app.set ('vue', {
	componentsDir: path.join (__dirname, 'views', 'components'),
	defaultLayout : 'layout'
});

app.use (bodyParser.urlencoded ({
	extended: true
}));

let log = console.log;

require('./routes/routes')(express);

const routes = require('./routes/routes')(express)
app.use('/', routes)

const port = 3000;
app.listen(port, () => {
    console.log('Ready for GET requests on http://localhost:' + port);
});