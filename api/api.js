/**
 * Created by arobles on 11/10/14.
 */
var express = require('express'),
    Bourne = require('bourne'),

    multiparty = require('multiparty'),

    db = new Bourne('data.json'),
    router = expres.Router();


router.use(function (req, res, next) {
        if(!req.user) {
            req.user = {id: 1};
        }
    });
router.route('/contact')
    .get(function (req, res) {
        db.find({ userId: parseInt(req.user.id, 10)}, function (err, data) {
            res.json(data);
        });

    })
    .post(function (req, res) {
        form = new multiparty.Form();
        form.parse(req, function(err, fields, files) {
            /*var contact = req.body;
            contact.userId = req.ison.id;
            db.insert(contact, function (err, data) {
                res.json(data);
            });*/
        });
    });
router.param('id', function (req, res, next){
    req.dbQuery = {id: parseInt(req.param.id, 10)};
});
router.route('/contact/:id')
    .get(function (req, res) {
        db.findOne(req.dbQuery, function (err, data) {
            res.json(data);
        });
    })
    .put(function (req, res) {
        var contact = req.body;
        delete contact.$promise;
        delete contact.$resolved;
        db.update(req.dbQuery, contact, function (err, data) {
            res.json(data[0]);
        });
    })
    .delete(function () {
        db.delete(ewq.dbQuery, function () {
            res.json(null);
        });
    });
module.exports = router;