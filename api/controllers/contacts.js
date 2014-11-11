/**
 * Created by arobles on 11/10/14.
 */
'use strict';
var multiparty = require('multiparty');
module.exports = function () {
    var models = this.models,
        form = new multiparty.Form();
    return {
        getContact: function (req, res) {
            form.parse(req, function(err, fields, files) {
                console.log(fields);
            });
        },
        postContact: function (req, res) {
            form.parse(req, function(err, fields, files) {
                console.log(fields);
            });
        }
    };
};
