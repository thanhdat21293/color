/**
 * Created by thanhdat21293 on 4/25/17.
 */

const { db, } = require('./pgp');
const express = require('express');
const app = express();
const expressVue = require('express-vue');
const path = require('path');
const bodyParser = require('body-parser');
const color = require('./models/colors');
const user = require('./models/users');
const related = require('./models/related');
const async = require("async");
const likedislike = require('./models/like_dislilke');

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

app.use(bodyParser.json())

let log = console.log;

//require('./routes/routes')(express);

let merge = (data, cb) => {
	user.getNameEmail(data.id_user)
		.then((data1) => {
			data.author = data1.name;
			data.author_email = data1.email;

			likedislike.getCountLike(data.id)
				.then((data1) => {
					data.like = data1[0].like;

					likedislike.getCountDislike(data.id)
						.then((data1) => {
							data.dislike = data1[0].dislike;
							cb(null, data);
						})
				})
		})



}

app.get('/listcolor', (req, res) => {
	color.listColorLimit(20)
		.then(data => {
			res.json({data: data})
		})
		.catch(error => {
			console.log(error)
		})
});

app.get('/color/:id', (req, res) => {
	let id = req.params.id;
	color.detail(id)
		.then(data1 => {
			async.map([data1], merge, (err, rs) => {
				res.json({data: data1})
			});
		})
		.catch(error => {
			log(error);
		})
});

app.get('/colorrelated/', (req, res) => {
	let color1 = [req.query.color];
	let idColor = req.query.idColor;
	related.listColorRelated(color1)
		.then(data => {
			// data.sort(function(a,b) {
			//     return a.score - b.score;
			// });
			let arrNew = [];
			let count = 0;
			data.forEach((i) => {
				count++;
				if(count < 13) {
					if (i.id === color1[0]) {
						arrNew.push(i.id_related)
					} else {
						arrNew.push(i.id)
					}
				}
			});
			//log(arrNew)
			db.task(t => {
				return t.batch([
					color.getPalletByMultiColor(arrNew)
				]);
			})
				.then(data1 => {
						res.json({data: data1[0]})

				})
		})
		.catch(error => {
			console.log(error);
		});

});

const port = 3001;
app.listen(port, () => {
    console.log('Ready for GET requests on http://localhost:' + port);
});