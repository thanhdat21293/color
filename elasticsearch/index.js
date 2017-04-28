const cn = require ('./connection');
const analyse_setting = require ("./analyse_setting");
const mapping_setting = require ("./mapping_setting");
const Promise = require('bluebird');

class elastic {
	constructor () {
		this.elas = cn;
	}

	insertDocument (index, type, doc, cb) {
		this.elas.index ({
			index : index,
			type  : type,
			body : doc
		}, ( err, resp, status ) => {
			if (err) {
				cb (err.message);
			} else{
				cb (null, resp)
			}
		});
	}


	searchAll ( index, type ) {
		return new Promise( ( resolve, reject ) => {
			this.elas.search ({
				index : index,
				type : type,
				body : {
					"from"  : 0,
					"size"  : 30,
					"query" : {
						"match_all" : {}
					}
				}
			} , ( err, res, stt) => {
				if (err) {
					reject (err.message);
				} else {
					let products = [];
					res.hits.hits.forEach ( (product) => {
						products.push ( product["_source"] );
					});
					resolve ( products );
				}
			});
		})
	}

	delelteDataTable(database, cb){
		this.elas.indices.delete({
			index: database
		}, (err, res, stt) => {
			if (err) {
				cb (err.message);
			} else {
				cb (null, `deleted ${result}`);
			}
		});
	}

}

module.exports = new elastic();