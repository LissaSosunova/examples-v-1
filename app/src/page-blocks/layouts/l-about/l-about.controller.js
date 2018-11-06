app.controller("l-flow.about", function ($scope, $state, $flowDataAbout) {
    $scope.about = {};

    function init() {
        $scope.getInfoAbout = function () {
            $flowDataAbout.getData()
                .then(response => {
                        $scope.about = response.paragraph;
                    },
                    error => $scope.errorMessage = error);
        } ;
        $scope.getInfoAbout();
    }
    init();

});