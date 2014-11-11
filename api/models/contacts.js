/**
 * Created by arobles on 11/10/14.
 */
'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    contact = new Schema({
        modified: {
            type    : Date,
            default : Date.now
        }
    });

module.exports = mongoose.model('contact', contact);