app.controller("l-flow.contact", function ($scope, $http,  $state) {
    $scope.contacts = {
        contacts: []
    };

    function init() {
        $http({
            method: 'GET',
            url: 'http://localhost:5005/contacts'
        })
            .then(function success(response) {
                $scope.contact = response.data.data;
            });
    }
    init();

});