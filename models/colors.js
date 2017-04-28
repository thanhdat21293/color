const elas = require("../elasticsearch/index");

class Color {
    constructor(){}

    all(){
        return elas.searchAll('tbl_color', 'collection');
    }
}

module.exports = new Color();