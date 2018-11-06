var app = angular.module('paraApp', ['ui.router', 'ngResource']);
app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise("/flow");

    $stateProvider
        .state('flow', {
            url: '/flow',
            views: {
                '': { templateUrl: 'app/src/page-blocks/layouts/l-flow/l-flow.html' },
                'header@flow': {
                    templateUrl: 'app/src/page-blocks/layouts/l-header/l-header.html',
                    controller: 'l-header'
                },
                'menu@flow': {
                    templateUrl: 'app/src/page-blocks/layouts/l-menu/l-menu.html',
                    controller: 'l-flow.menu'
                },
                'about@flow': {
                    templateUrl: 'app/src/page-blocks/layouts/l-about/l-about.html',
                    controller: 'l-flow.about'
                },
                'footer@flow': {
                    templateUrl: 'app/src/page-blocks/layouts/l-footer/l-footer.html',
                    controller: 'l-footer'
                }
            },
            params: {
                data: {}
            }
        })
        .state('about', {
            url: '/about',
            views: {
                '': { templateUrl: 'app/src/page-blocks/layouts/l-about/l-flow-about.html' },
                'header@about': {
                    templateUrl: 'app/src/page-blocks/layouts/l-header/l-header.html',
                    controller: 'l-header'
                },
                'menu@about': {
                    templateUrl: 'app/src/page-blocks/layouts/l-menu/l-menu.html',
                    controller: 'l-flow.menu'
                },
                'about@about': {
                    templateUrl: 'app/src/page-blocks/layouts/l-about/l-about.html',
                    controller: 'l-flow.about'
                },
                'footer@about': {
                    templateUrl: 'app/src/page-blocks/layouts/l-footer/l-footer.html',
                    controller: 'l-footer'
                }
            },
            params: {
                data: {}
            }
        })
        .state('contacts', {
            url: '/contacts',
            views: {
                '': { templateUrl: 'app/src/page-blocks/layouts/l-contact/l-flow-contacts.html' },
                'header@contacts': {
                    templateUrl: 'app/src/page-blocks/layouts/l-header/l-header.html',
                    controller: 'l-header'
                },
                'menu@contacts': {
                    templateUrl: 'app/src/page-blocks/layouts/l-menu/l-menu.html',
                    controller: 'l-flow.menu'
                },
                'contacts@contacts': {
                    templateUrl: 'app/src/page-blocks/layouts/l-contact/l-contact.html',
                    controller: 'l-flow.contact'
                },
                'footer@contacts': {
                    templateUrl: 'app/src/page-blocks/layouts/l-footer/l-footer.html',
                    controller: 'l-footer'
                }
            },
            params: {
                data: {}
            }
        })
        .state('books', {
            url: '/books',
            views: {
                '': { templateUrl: 'app/src/page-blocks/layouts/l-books/l-books-all.html' },
                'header@books': {
                    templateUrl: 'app/src/page-blocks/layouts/l-header/l-header.html',
                    controller: 'l-header'
                },
                'menu@books': {
                    templateUrl: 'app/src/page-blocks/layouts/l-menu/l-menu.html',
                    controller: 'l-flow.menu'
                },
                'books@books': {
                    templateUrl: 'app/src/page-blocks/layouts/l-books/l-books.html',
                    controller: 'l-books'
                },
                'footer@books': {
                    templateUrl: 'app/src/page-blocks/layouts/l-footer/l-footer.html',
                    controller: 'l-footer'
                }
            },
            params: {
                data: {}
            }
        })
        .state('media', {
            url: '/media',
            views: {
                '': { templateUrl: 'app/src/page-blocks/layouts/l-media/l-flow-media.html' },
                'header@media': {
                    templateUrl: 'app/src/page-blocks/layouts/l-header/l-header.html',
                    controller: 'l-header'
                },
                'menu@media': {
                    templateUrl: 'app/src/page-blocks/layouts/l-menu/l-menu.html',
                    controller: 'l-flow.menu'
                },
                'media@media': {
                    templateUrl: 'app/src/page-blocks/layouts/l-media/l-media.html',
                    controller: 'l-media'
                },
                'footer@media': {
                    templateUrl: 'app/src/page-blocks/layouts/l-footer/l-footer.html',
                    controller: 'l-footer'
                }
            },
            params: {
                data: {}
            }
        })
        .state('templates', {
            url: '/templates',
            views: {
                '': { templateUrl: 'app/src/page-blocks/layouts/l-templates/l-flow-templates.html' },
                'header@templates': {
                    templateUrl: 'app/src/page-blocks/layouts/l-header/l-header.html',
                    controller: 'l-header'
                },
                'menu@templates': {
                    templateUrl: 'app/src/page-blocks/layouts/l-menu/l-menu.html',
                    controller: 'l-flow.menu'
                },
                'templates@templates': {
                    templateUrl: 'app/src/page-blocks/layouts/l-templates/l-templates.html',
                    controller: 'l-flow.templates'
                },
                'footer@templates': {
                    templateUrl: 'app/src/page-blocks/layouts/l-footer/l-footer.html',
                    controller: 'l-footer'
                }
            },
            params: {
                data: {}
            }
        })
        .state('jscr', {
            url: '/jscr',
            views: {
                '': { templateUrl: 'app/src/page-blocks/layouts/l-js/l-flow-jscr.html' },
                'header@jscr': {
                    templateUrl: 'app/src/page-blocks/layouts/l-header/l-header.html',
                    controller: 'l-header'
                },
                'menu@jscr': {
                    templateUrl: 'app/src/page-blocks/layouts/l-menu/l-menu.html',
                    controller: 'l-flow.menu'
                },
                'jscr@jscr': {
                    templateUrl: 'app/src/page-blocks/layouts/l-js/l-jscr.html',
                    controller: 'l-flow.jscr as ctrl'
                },
                'footer@jscr': {
                    templateUrl: 'app/src/page-blocks/layouts/l-footer/l-footer.html',
                    controller: 'l-footer'
                }
            },
            params: {
                data: {}
            }
        })
});
app.constant('$default', {
    protocol: "http",
    host: "localhost",
    port: "5005"
});
app.factory('$data', ['$resource', '$defaultService', '$q', function ($resource, $defaultService, $q) {
    let _$data = {},
        _url = $defaultService.getURI();

    _$data.auth = $resource(_url + '/signin/',{},{
        action:{
            method: "POST"
        }
    });

    _$data.about = $resource(_url + '/about', {}, {
        action: {
            method: "GET"
        }
    });

    _$data.books = $resource(_url + '/books', {}, {
        action: {
            method: "GET"
        }
    });

    _$data.main = $resource(_url + '/user/:id', {},{
        action:{
            method: "GET",
            params:{
                id:"@id"
            }
        }
    });

    _$data.chat = $resource(_url + '/chat', {}, {
        action: {
            method: "GET"
        }
    });

    _$data.sendMes = $resource(_url + '/postNew/',{},{
        action:{
            method: "POST"
        }
    });

    return _$data;
}]);

app.service('$defaultService', function($default){
    this.getURI = getURI;
    function getURI(){
        return $default.protocol + "://" + $default.host + ":" + $default.port;
    }
});
app.service('$flowDataAbout', function($data, $q){
    this.getData = function(){
        let promise = $q((resolve, reject) =>{
            $data.about.action(resp =>  resp ? resolve(resp) : reject(resp));
        });

        return  promise;
    }
});
app.service('$flowDataBooks', function($data, $q){
    this.getData = function(){
        let promise = $q((resolve, reject) =>{
            $data.books.action(resp =>  resp ? resolve(resp) : reject(resp));
        });

        return  promise;
    }
});
app.service('$flowDataChat', function($data, $q){
    this.getData = function(){
        let promise = $q((resolve, reject) =>{
            $data.chat.action(resp =>  resp ? resolve(resp) : reject(resp));
        });

        return  promise;
    }
});
app.service('$flowDataUser', function($data, $q){
    this.getDataUser = function(param){
        let promise = $q((resolve, reject) =>{
            $data.main.action(param, resp =>  resp ? resolve(resp) : reject(resp));
        });

        return  promise;
    }
});

app.service('$postMes', function($data, $q){
    this.sendMes = function(param){
        let promise = $q((resolve, reject) =>{
            $data.sendMes.action(param, resp => resp? resolve(resp) : reject(resp));
        });
        return  promise;
    }
});
app.factory('$transferService', function(){
    let data = {}, obj = {};

    obj.setData = function(params){
        data[params.name] = params.data;
    };

    obj.getData = function(name) {
        return data[name]
    };

    return obj;
});
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
app.directive('vimeo', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            controlBoolean: '='
        },
        templateUrl: 'app/js/directives/vimeo/vimeo-player.html',
        link: function postLink(scope, element, attrs) {
            var url = "http://player.vimeo.com/video/" + attrs.vid + "?title=0&byline=0&portrait=0&api=1";
            element.attr('src', url);
        }
    };
});
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
app.controller("l-books", function ($scope, $flowDataBooks,  $state) {
    $scope.books = {
        books: []
    };
    function init() {
        $scope.getBooks = function () {
            $flowDataBooks.getData()
                .then(response => {
                        $scope.books = response.books;
                    },
                    error => $scope.errorMessage = error);
        } ;
        $scope.getBooks();
    }
    init();

    $scope.addFav = function (item) {
        $scope.favItem = {};
        $scope.favItem = item;
        let key = $scope.favItem.id;
        let descr = {
                    name: $scope.favItem.name,
                    author: $scope.favItem.author,
                    section: $scope.favItem.section
        };
        localStorage.setItem(key, JSON.stringify(descr));
        console.log(key, JSON.stringify(descr));

    };
    $scope.showDescr = function (id, pict) {
        let description = document.getElementById(id);
        let picture = document.getElementById(pict);
        description.classList.toggle('non-vis');
        picture.classList.toggle('non-vis');
    }
});
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
app.controller('l-flow', function($scope, $state) {
    $scope.flow = {
        name: "flow"
    };
});
app.controller('l-footer', function($scope, $state) {
    $scope.model = {
        content: {
            title: "Проект \"Параграф\" по курсу \"FrontendPRO 2017г.\""
        }
    };
});
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
app.controller("l-flow.jscr", function ($scope, $http,  $state, $window) {
    var ctrl = this;
    ctrl.$onInit = _init;

    function _init() {
        $scope.jscr = {
            name: "JavaScript"
        };
        $scope.load = function() {

            console.log("do it");
        };
        $scope.jscrFormRender = function () {
            let deletedItems = document.getElementById('place');
            deletedItems.classList.toggle('non-vis');
            getForm({
                target: document.querySelector('.place')
            });

            let buttonRend = document.getElementById('renderFormBilder');
            buttonRend.classList.toggle('non-vis');
            let btnCancel = document.getElementById('btnCancel');
            btnCancel.addEventListener('click', function (event) {
                buttonRend.classList.toggle('non-vis');
                buttonRend.value = 'done';
                deletedItems.classList.toggle('non-vis');
            })
        };


        //render keyboard
        let keyboard = new Keyboard({
            target: '.wrapper',
            keyboardClass: 'keyboard',
            keys: keys,
            lang: 'en'
        });

        let inputKeyboard = document.querySelector('.inputKeyboard');

        inputKeyboard.addEventListener('focus', function(){
            document.removeEventListener('click', clickHandler);
            keyboard.render(inputKeyboard);
        });

        inputKeyboard.addEventListener('blur', function(){
            document.addEventListener('click', clickHandler)
        });

        function clickHandler(event) {
            if (!(event.target.classList.contains('key') ||
                    event.target.classList.contains('keyboard') ||
                    event.target.classList.contains('row-keyboard') ||
                    event.target.id === 'switcher'
                )) {
                keyboard.remove();
            }
        }

    }
});
app.controller('l-media', function($scope, $state) {
    $scope.flow = $scope.flow || {};

    $scope.media = {
        video: []
    };

    $scope.isPlaying = false;

    $scope.pause = function(){
        $scope.isPlaying = false;
    };

    $scope.play = function(){
        $scope.isPlaying = true;
    };

    $scope.model = [
        {
            "title": "adidas Originals | Original Is Never Finished",
            "id": "253172563",
            "url": "https://vimeo.com/253172563",
            "authorName": "Jeph Burton",
            "authorLink": "https://vimeo.com"
        },
        {
            "title": "VIA",
            "id": "242073421",
            "url": "https://vimeo.com/242073421",
            "authorName": "Blue Zoo",
            "authorLink": "https://vimeo.com/bluezoo"
        },
        {
            "title": "r/hue",
            "id": "253057470",
            "url": "https://vimeo.com/253057470",
            "authorName": "Sean Green",
            "authorLink": "https://vimeo.com/user2498647"
        },
        {
            "title": "What is the Best that Can Happen?",
            "id": "200743450",
            "url": "https://vimeo.com/200743450",
            "authorName": "Jeph Burton",
            "authorLink": "https://vimeo.com/jephedrine"
        },
        {
            "title": "BBC WINTER OLYIMPICS 2018- The Fearless Are Here",
            "id": "254759762",
            "url": "https://vimeo.com/254759762",
            "authorName": "Bishoy Gendi",
            "authorLink": "https://vimeo.com/bishoygendi"
        },
        {
            "title": "Diamond Terrifier : Action Fortress",
            "id": "235672324",
            "url": "https://vimeo.com/235672324",
            "authorName": "A R T  C A M P",
            "authorLink": "https://vimeo.com/artcamp"
        }
    ];
    $scope.addFav = function (item) {
        $scope.favItem = {};
        $scope.favItem = item;
        let key = $scope.favItem.id;
        let descr = {
            name: $scope.favItem.title,
            author: $scope.favItem.authorName,
            link: $scope.favItem.authorLink
        };
        localStorage.setItem(key, JSON.stringify(descr));
    };

});
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
                    name: "AngularJS",
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
app.controller("l-flow.templates", function ($scope, $flowDataUser, $flowDataChat, $state, $interval) {
    $scope.templates = {
        templates: []
    };

    let stopHours,
        stopMinutes,
        stopSeconds;
    $scope.hours = 0;
    $scope.minuts = 0;
    $scope.seconds = 0;
    $scope.playBtn = angular.element(document.querySelector('#play'));
    $scope.pauseBtn = angular.element(document.querySelector('#pause'));
    $scope.end = angular.element(document.querySelector('#end'));
    $scope.pauseDiv = angular.element(document.querySelector('#pauseDiv'));
    $scope.playDiv = angular.element(document.querySelector('#playDiv'));
    $scope.flag1 = true;
    $scope.flag2 = false;

    function init() {

        function togglePause() {
            $scope.pauseBtn.toggleClass('fa-play');
            $scope.pauseBtn.toggleClass('fa-pause');
        }
        function resetPauseBtn() {
            $scope.pauseBtn.removeClass('fa-play');
            $scope.pauseBtn.addClass('fa-pause');
        }
        function togglePlay() {
            $scope.playBtn.toggleClass('fa-play');
            $scope.playBtn.toggleClass('fa-stop');
        }
        function setUndefHMS() {
            stopHours = undefined;
            stopMinutes = undefined;
            stopSeconds = undefined;
        }
        $scope.startCount = function() {
            if ($scope.flag1 === true){
                togglePlay();
                $scope.flag1 = false;
            }
            if ($scope.playBtn.hasClass('fa-stop')){
                $scope.stopCount();
            }
            if ( angular.isDefined(stopHours, stopMinutes, stopSeconds) ) return;

            if ($scope.flag2 === true){
                $scope.end.addClass('non-vis');
                $scope.pauseDiv.removeClass('non-vis');
                console.log('the end');
            }

            stopHours = $interval(function() {
                if ($scope.hours < 24) {
                    $scope.hours = $scope.hours + 1;
                } else {
                    $scope.pauseCount();
                }
            }, 1000*60*60);
            stopMinutes = $interval(function() {
                if ($scope.minuts < 59) {
                    $scope.minuts = $scope.minuts + 1;
                } else if ($scope.minuts === 59){
                    $scope.minuts = 0;
                } else {
                    $scope.pauseCount();
                }
            }, 1000*60);
            stopSeconds = $interval(function() {
                if ($scope.seconds < 59) {
                    $scope.seconds = $scope.seconds + 1;
                } else if ($scope.seconds === 59){
                    $scope.seconds = 0;
                } else {
                    $scope.pauseCount();
                }
            }, 1000);
            $scope.flag2 = true;
        };

        $scope.pauseCount = function() {
            if (angular.isDefined(stopHours, stopMinutes, stopSeconds)) {
                $interval.cancel(stopSeconds);
                $interval.cancel(stopMinutes);
                $interval.cancel(stopHours);
                $scope.flag2 = false;
                setUndefHMS();
                togglePause();
            } else if ($scope.flag2 === false){
                togglePause();
                $scope.startCount();
            } else {
                return;
            }
        };

        $scope.resetCount = function() {
            $scope.hours = 0;
            $scope.minuts = 0;
            $scope.seconds = 0;
            $scope.end.addClass('non-vis');
            togglePlay();
            setUndefHMS();
            $scope.flag1 = true;
            $scope.pauseDiv.removeClass('non-vis');
            $scope.playDiv.removeClass('non-vis');
            resetPauseBtn();
        };
        $scope.stopCount = function () {
            if ($scope.flag2 === true){
                $interval.cancel(stopSeconds);
                $interval.cancel(stopMinutes);
                $interval.cancel(stopHours);
                $scope.end.removeClass('non-vis');
                $scope.pauseDiv.addClass('non-vis');
                $scope.playDiv.addClass('non-vis');
                resetPauseBtn();
            }
        };
    };


    init();

});
var inputsData = {
    rows: [
        [
            {
                title: "Name",
                type: "text",
                placeholder: "Name",
                class: "inputs",
                id: "01",
                value: null,
                required: true,
                tagName: "input"
            },
            {
                title: "Email",
                type: "email",
                placeholder: "e-mail",
                class: "inputs",
                id: "02",
                value: null,
                required: true,
                tagName: "input"
            },
            {
                title: "Text",
                type: "text",
                placeholder: "Text",
                class: "textarea",
                id: "03",
                value: null,
                required: false,
                tagName: "input"
            },
            {
                title: "checkbox_1",
                type: "checkbox",
                placeholder: "select it",
                class: "input-checkbox",
                id: "04",
                value: "select it",
                required: false,
                tagName: "input"
            }
        ],
        [
            {
                title: "button1",
                type: "button",
                class: "submit",
                id: "btnOK",
                innerHTML: "OK",
                tagName: "button",
                action: {
                    event: 'click',
                    name: 'OK',
                    goAhead: function () {
                        var fields = document.querySelectorAll('input');
                        fields.forEach(function (item) {
                            if(item.value === ""){
                                console.log('Вы не заполнили поле: ' + item.placeholder + ' ему будет присвоено значение по умолчанию');
                                item.value = 'default';
                            }else if(!(item.type==='submit')){
                                localStorage.setItem(item.placeholder, item.value);
                            }

                        });
                    }
                }
            },
            {
                title: "button2",
                type: "button",
                class: "cancel",
                id: "btnCancel",
                innerHTML: "CANCEL",
                tagName: "button",
                action: {
                    event: 'click',
                    name: 'cancel'
                },
                goAhead: function () {
                    var fields = document.querySelectorAll('input');
                    fields.forEach(function (item) {
                        if(!(item.value === "DO it")){
                            item.value = '';
                        }

                    });
                    localStorage.clear();
                }
            }
        ]
    ],
    default: {
        text: {
            title: "default title",
            type: "text",
            class: "input-checkbox",
            value: "",
            tagName: "input"
        },
        button: {
            title: "default button",
            type: "button",
            class: "button-submit",
            innerHTML: "default",
            tagName: "button",
            action: {
                event: 'click',
                name: null
            }

        }
    }
};
function getForm(options) {
    inputsData.rows.forEach(row => {
        var section = document.createElement('div');
        row.forEach(element => {
            renderElement({
                elementSource: element,
                target: section,
                type: "input"
            })
        });
        var place = document.querySelector('#place');
        place.appendChild(section);
    });

}


class SpecKey{
    constructor(inner){
        var keyOne = document.createElement('div');
        keyOne.classList.add('key');
        this.innerHTML = inner;
    }
}
var keys = [
    [1,2,3,4,5,6,7,8,9,0],
    [
        {en: 'q', ru: 'й', ua: 'й'},
        {en: 'w', ru: 'ц', ua: 'ц'},
        {en: 'e', ru: 'у', ua: 'у'},
        {en: 'r', ru: 'к', ua: 'к'},
        {en: 't', ru: 'е', ua: 'е'},
        {en: 'y', ru: 'н', ua: 'н'},
        {en: 'u', ru: 'г', ua: 'г'},
        {en: 'i', ru: 'ш', ua: 'ш'},
        {en: 'o', ru: 'щ', ua: 'щ'},
        {en: 'p', ru: 'з', ua: 'з'},
        {en: '[', ru: 'х', ua: 'х'},
        {en: ']', ru: 'ъ', ua: 'ї'}
    ],
    [
        {en: 'a', ru: 'ф', ua: 'ф'},
        {en: 's', ru: 'ы', ua: 'і'},
        {en: 'd', ru: 'в', ua: 'в'},
        {en: 'f', ru: 'а', ua: 'а'},
        {en: 'g', ru: 'п', ua: 'п'},
        {en: 'h', ru: 'р', ua: 'р'},
        {en: 'j', ru: 'о', ua: 'о'},
        {en: 'k', ru: 'л', ua: 'л'},
        {en: 'l', ru: 'д', ua: 'д'},
        {en: ';', ru: 'ж', ua: 'ж'},
        {en: '"', ru: 'э', ua: 'є'}
    ],
    [
        {en: 'z', ru: 'я', ua: 'ф'},
        {en: 'x', ru: 'ч', ua: 'і'},
        {en: 'c', ru: 'с', ua: 'в'},
        {en: 'v', ru: 'м', ua: 'а'},
        {en: 'b', ru: 'и', ua: 'п'},
        {en: 'n', ru: 'т', ua: 'р'},
        {en: 'm', ru: 'ь', ua: 'о'},
        {en: ',', ru: 'б', ua: 'л'},
        {en: '.', ru: 'ю', ua: 'д'},
        {en: '\/', ru: '\/', ua: '\/'}
    ],
    [new SpecKey('space').innerHTML, new SpecKey('clear').innerHTML, new SpecKey('esc').innerHTML, new SpecKey('backspace').innerHTML, { type: 'switcher' }]
];

class Keyboard {
    constructor(options) {
        this.options = options;

        this.options.lang = this.options.lang || 'en';
        this.options.keyboardClass = this.options.keyboardClass || 'keyboard';
    }
    rerender() {
        if (document.querySelector('.' + this.options.keyboardClass)){
            document.querySelector('.' + this.options.keyboardClass).remove();
        }
        this.render();
    }
    render(targetInput) {
        var options = this.options;
        var self = this;
        if(document.querySelector('.' + options.keyboardClass)){
            return;
        }

        this.keyboard = document.createElement('div');
        var line;
        this.keyboard.classList.add(options.keyboardClass);

        options.keys.forEach(function(row) {
            //do rows
            line = document.createElement('div');
            line.classList.add('row-keyboard');
            row.forEach(function(key){
                if(key.type) {
                    var switcher = new LangSwticher(['en','ru', 'ua'], self);
                    switcher.render(line);
                } else {
                    new Key({
                        target: line,
                        symbol: key,
                        lang: options.lang
                    });
                }
            });
            self.keyboard.appendChild(line);
        });

        this.keyboard.addEventListener('click', function(event) {
            if(event.target.innerHTML === 'backspace'){
                var content = inputKeyboard.value;
                content.split('');
                var contentNew = '';
                for(var i=0; i<content.length-1; i++){
                    contentNew += content[i];
                }
                inputKeyboard.value = contentNew;
            }else if (event.target.innerHTML === 'space'){
                inputKeyboard.value += ' ';
            }else if(event.target.innerHTML === 'clear'){
                inputKeyboard.value = '';
                inputKeyboard.placeholder = "начните вводить текст";
            }else if(event.target.innerHTML === 'esc'){
                this.remove();
                inputKeyboard.value = '';
            }else if(event.target.classList.contains('key')&&
                !(event.target.innerHTML === 'backspace')&&
                !(event.target.innerHTML === 'space')&&
                !(event.target.innerHTML === 'esc')&&
                !(event.target.innerHTML === 'clear')&&
                !(event.target.innerHTML === 'cups')){
                inputKeyboard.value += event.target.innerHTML;
            }
        });

        document.querySelector(options.target).appendChild(this.keyboard);
    }

    remove() {
        this.keyboard.remove();
    }
}

class LangSwticher {
    constructor(arr, keyboard) {
        this.arr = arr;
        this.keyboard = keyboard
    }

    render(target) {
        var switcher = document.createElement('select');
        switcher.classList.add('select');
        var self = this;

        switcher.id = 'switcher';
        this.arr.forEach(function(lang){
            var option = document.createElement('option');
            option.innerHTML = lang;
            option.value = lang;
            if(self.keyboard.options.lang === lang) {
                option.selected = true;
            }

            switcher.appendChild(option);
        });

        switcher.addEventListener('change', function(event) {
            this.keyboard.options.lang = switcher.value;

            this.keyboard.rerender();
        }.bind(this));

        target.appendChild(switcher);
    }
}

class Key {
    constructor(options) {

        var key = document.createElement('div');
        key.classList.add('key');
        key.innerHTML = options.symbol[ options.lang ] || options.symbol;
        options.target.appendChild(key);
    }
}
function createInput(elementSource) {

    var input = document.createElement('input');

    if(elementSource.type === 'checkbox'){
        return createCheckbox(elementSource);
    }

    input.type = elementSource.type;
    input.value = elementSource.value;
    input.placeholder = elementSource.placeholder;
    input.id = elementSource.id;
    input.className = elementSource.class;
    input.required = elementSource.required;
    return input;
}

function createButton(elementSource) {

    var button = document.createElement('button');
    button.type = elementSource.type;
    button.title = elementSource.title;
    button.innerHTML = elementSource.innerHTML;
    button.id = elementSource.id;
    button.className = elementSource.class;
    button.required = elementSource.required;

    button.addEventListener(elementSource.action.event, function(){
        // console.log(elementSource.action.name);
        elementSource.goAhead();
    });


    return button;
}


var createHandlers = {
    input: createInput,
    button: createButton,
    default: function () {
        
    }
};

function createCheckbox(elementSource) {
    var div = document.createElement('div');
    var input = document.createElement('input');
    var span = document.createElement('span');
    input.type = elementSource.type;
    input.id = elementSource.id;
    input.className = elementSource.class;
    input.required = elementSource.required;
    span.innerHTML += elementSource.value;

    div.appendChild(input);
    div.appendChild(span);
    return div;
}
function renderElement(options) {
    // var defaulElement = new defaulElementConstructor(options.elementSource.tagName, inputsData);
    var br = document.createElement('br');
    var element = createHandlers[options.elementSource.tagName](options.elementSource);

    options.target.appendChild(element);
    options.target.appendChild(br);
}

function defaulElementConstructor(source, data) {
    var element = document.createElement(source.tagName);
    console.log(data);

    return element;
}

