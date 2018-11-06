app.controller('l-header', function($scope, $state) {
    $scope.model = {
        images: {
            pict: "app/images/top_pict.png",
            logo: {
                src: "app/images/logo.png",
                alt: "Paragraph",
                href: "flow"
            }
        }
    };
    $scope.goTo = function (info) {
        $state.go(info);
    }

    $scope.openFav = function () {

        let divFav = document.getElementById('favorits');
        divFav.classList.toggle('non-vis');
    }
});