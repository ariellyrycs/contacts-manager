/**
 * Created by arobles on 11/10/14.
 */
angular.module('ContactsApp')
    .factory('Contact', function ($resource) {
        return $resource('/api/contact/:id', {id: '@id'}, {
            'update': {method: 'PUT'}
        });
    });