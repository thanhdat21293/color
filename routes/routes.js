const color = require('../models/colors')

module.exports = (express) => {

    const router = express.Router();
    let log = console.log;
    router.get('/', (req, res) => {
        color.all()
            .then(data => {
                res.render('index', {
                    data : {
                        dt: data
                    }
                })
            })
            .catch(error => {
                log(error);
            })
    });

    return router;
};