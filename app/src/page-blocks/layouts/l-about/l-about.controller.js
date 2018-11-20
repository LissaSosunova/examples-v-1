app.controller("l-flow.about", function ($scope, $state, $flowDataAbout) {
    $scope.about = {};

    function init() {
        var a = {
            title: "Examples",
            description: "This project presents examples of frontend skills. 'JavaScript': creating elements on the page using only JS.  'Extras': examples of animation of the SVG, animation of simple elements on the page by CSS. 'Media': AngularJS directive, which creates blocks on a page from information from external sources.",
            platform: "Angular JS",
            technologies:
                [
                    {
                        title: "AngularJS",
                        descr: "ui-router, resource"
                    },
                    {
                        title: "JavaScript",
                        descr: "ecmascript 6"
                    },
                    {
                        title: "Gulp",
                        descr: "Development"
                    },
                    {
                        title: "CSS",
                        descr: "Grids, Font Awesome"
                    },
                    {
                        title: "SASS",
                        descr: "Variables, mixins, functions, type-default, styles, animation"
                    }
                ]
        }
        $scope.about = a;
    }
    init();

});