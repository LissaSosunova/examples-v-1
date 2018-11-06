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