(function () {
    'use strict';

    angular
        .module('pcb.doctor')
        .factory('Doctor', Doctor);

    Doctor.$inject = ['$q', '$http', 'Dataservice'];

    function Doctor($q, $http, Dataservice) {

        var apiURL = '/doctors';
        var config = {};

        var doctor = {
            getAll: getAll,
            getBySpeciality: getBySpeciality
        };

        return doctor;

        ////////////////////////////////////////////////////////////////////////








        function getBySpeciality (id) {
            apiURL = '/specialities/' + id + '/doctors';
            return Dataservice.get(apiURL, config).then(function (data) {
                return data;
            });
        };

        function getAll () {
            return Dataservice.get(apiURL, config).then(function (data) {
                return data;
            });
        };

    }

})();
