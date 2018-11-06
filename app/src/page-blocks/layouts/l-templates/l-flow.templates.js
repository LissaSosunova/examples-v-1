app.controller("l-flow.templates", function ($scope, $flowDataUser, $flowDataChat, $http, $postMes, $state) {
    $scope.templates = {
        templates: []
    };

    let inputText = document.getElementById('inputText'),
        divUser = document.getElementById('divUser'),
        chatBlock = document.getElementById('chatBlock');

    function init() {
        $scope.getUserDataById = params => $flowDataUser.getDataUser(params)
            .then(response => {
                    $scope.templates.user = response;
                    },
                error => $scope.errorMessage = error);

        $scope.getChat = function () {
            $flowDataChat.getData().then(function (response) {
                $scope.chat = response.messages;
            });
        };
        $scope.getChat();

    }
    $scope.data = {
        model: null,
        users: [
            {id: '001', name: 'Jane Doe'},
            {id: '002', name: 'Lumina Doe 2'},
            {id: '003', name: 'Samira Doe 3'},
            {id: '004', name: 'Marry Doe 4'}
        ]
    };


    init();

    $scope.selectUserId = function (id) {
        divUser.classList.remove('non-vis');
        $scope.getUserDataById({id: id});
    };

    $scope.startChat = function () {
        chatBlock.classList.remove('non-vis');
    };



    $scope.sendData = function(author, id, text) {
        var sender = {
            author: author,
            id: id,
            text: text
        };
        $http({
            method: 'POST',
            url: 'http://localhost:5005/postNew',
            data: sender
        })
        .then(function (response) {
            $scope.chat = response.data;
        });
        inputText.value = '';
    };

});