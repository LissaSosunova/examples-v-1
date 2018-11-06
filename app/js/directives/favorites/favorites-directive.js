app.directive("favoritesList", function () {
    return {
        restrict: "A",
        scope: {
            model: '=',
            click: '&saveClick'
        },
        replace: true,
        templateUrl: 'app/js/directives/favorites/favorites-list.html',
        controller: function($scope, $element) {
            var ctrl = this;
            ctrl.$onInit = _init;
            $scope.favList = [];
            function _init() {
                for (let i = 0; i < localStorage.length; i++) {
                    $scope.id = localStorage.key(i);
                    $scope.descr = JSON.parse(localStorage.getItem(localStorage.key(i)));
                    $scope.descr.id = localStorage.key(i);
                    $scope.favList.push($scope.descr);

                }
                $scope.deleteItem = function (id) {
                    let deletedElem = document.getElementById(id);
                    localStorage.removeItem(id);
                    deletedElem.remove();
                };
                $scope.hideDiv = function () {
                    let list = document.getElementById('favorits');
                    list.classList.toggle('non-vis');
                };
            }
        }
    }
});