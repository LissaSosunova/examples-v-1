app.service('$flowDataBooks', function($data, $q){
    this.getData = function(){
        let promise = $q((resolve, reject) =>{
            $data.books.action(resp =>  resp ? resolve(resp) : reject(resp));
        });

        return  promise;
    }
});