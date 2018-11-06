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
