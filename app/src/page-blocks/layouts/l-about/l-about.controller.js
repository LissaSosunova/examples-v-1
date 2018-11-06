app.controller("l-flow.about", function ($scope, $state, $flowDataAbout) {
    $scope.about = {};

    function init() {
        // $scope.getInfoAbout = function () {
        //     $flowDataAbout.getData()
        //         .then(response => {
        //                 $scope.about = response.paragraph;
        //             },
        //             error => $scope.errorMessage = error);
        // } ;

        var a = {
            title: "Идея проекта.",
            description: "Этот ресурс предназначен для людей, которые не любят скучать. Если вы едете в транспорте, сидите в очереди или просто ненавидите скуку, то вам достаточно иметь устройство с доступом в Интернет и наушники. Наушники скорее для того, что бы не смущать людей, которые вместе с вами коротают это время. Откройте нужный раздел, выберите интересующую вас аудио-книгу или веселое видео и просто нажмите \"play\".",
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
                        title: "MOCK",
                        descr: "Server"
                    },
                    {
                        title: "npm",
                        descr: "node-static, express, fs, body-parser"
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
                        descr: "Variables, mixins, functions, type-default, styles"
                    }
                ]
        }
        $scope.about = a;
    }
    init();

});