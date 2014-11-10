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
        db.findAll({ userId: parseInt(req.user.id, 10)}, function (err, data) {
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
