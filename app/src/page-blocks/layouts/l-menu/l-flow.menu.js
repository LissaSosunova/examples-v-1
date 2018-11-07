app.controller('l-flow.menu', function($scope, $http, $state) {
    $scope.flow = $scope.flow || {};

    $scope.menu = {
        menu: []
    };
    function init() {
        // $http({
        //     method: 'GET',
        //     url: 'http://localhost:5005/menu'
        // })
        //     .then(function success(response) {
        //         $scope.menu = response.data.menu;
        //         for(let i=0; i<$scope.menu.length; i++){
        //             // console.log($scope.menu[i].name);
        //         }
        //     });

        $scope.menu = [
                {
                    name: "Книги",
                    section: "Рассказы",
                    img: "app/images/menu/menu_item_01.png",
                    alt: "Books",
                    ref: "books",
                    testArr: [
                        "001",
                        "005"
                    ]
                },
                {
                    name: "Media",
                    section: "Video",
                    img: "app/images/menu/menu_item_02.png",
                    alt: "Media",
                    ref: "media",
                    testArr: [
                        "001",
                        "005"
                    ]
                },
                {
                    name: "Контакты",
                    section: "",
                    img: "app/images/menu/menu_item_03.png",
                    alt: "Contacts",
                    ref: "contacts"
                },
                {
                    name: "О проекте",
                    section: "",
                    img: "app/images/menu/menu_item_04.png",
                    alt: "About us",
                    ref: "about",
                    testArr: [
                        "001",
                        "005"
                    ]
                },
                {
                    name: "Additionally",
                    section: "",
                    img: "app/images/menu/menu_item_05.png",
                    alt: "Templates",
                    ref: "templates",
                    testArr: [
                        "001",
                        "005"
                    ]
                },
                {
                    name: "JavaScript",
                    section: "",
                    img: "app/images/menu/menu_item_06.png",
                    alt: "JavaScript",
                    ref: "jscr",
                    testArr: [
                        "001",
                        "005"
                    ]
                }
            ]

    }

    init();
    $scope.goTo = function (info) {
        $state.go(info);
    }
});