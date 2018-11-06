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