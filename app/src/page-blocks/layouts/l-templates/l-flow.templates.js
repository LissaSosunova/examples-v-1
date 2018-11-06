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