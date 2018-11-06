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