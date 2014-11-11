/**
 * Created by arobles on 11/10/14.
 */
module.exports = function (app) {
    app.route('/contact')
    .get(this.controllers.getContact)
    .post(this.controllers.postContact);
};
