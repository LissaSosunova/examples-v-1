app.directive("mainMenu", function () {
    return {
        link: function ($scope, element, attrs) {
            console.log($scope, element, attrs);


            $scope.message += " Directive changes";

            // $scope.$parent.message += '_1'
        },
        restrict: "EA",
        templateUrl: 'app/js/directives/main-menu/main-menu.html',
        // replace: true,
        scope: true
    }
});