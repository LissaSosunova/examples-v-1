app.controller("l-flow.about", function ($scope, $state, $flowDataAbout) {
    $scope.about = {};

    function init() {
        var a = {
            title: "Examples",
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
                ],
            description:
                [
                    {
                        title: "JavaScript",
                        descr: "creating elements on the page using only JS"
                    },
                    {
                        title: "Extras",
                        descr: "examples of animation of the SVG, animation of simple elements on the page by CSS"
                    },
                    {
                        title: "Media",
                        descr: "AngularJS directive, which creates blocks on a page from information from external sources."
                    }
                ]
        }
        $scope.about = a;
    }
    init();

});