app.service('$defaultService', function($default){
    this.getURI = getURI;
    function getURI(){
        return $default.protocol + "://" + $default.host + ":" + $default.port;
    }
});