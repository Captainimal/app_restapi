'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/show')
        .get(jsonku.showingAllMahasiswa);

    app.route('/show/:id')
        .get(jsonku.showingAllMahasiswaByID);

    app.route('/add')
        .post(jsonku.addingMahasiswa);
}