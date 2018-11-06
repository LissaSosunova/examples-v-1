app.service('$flowDataChat', function($data, $q){
    this.getData = function(){
        let promise = $q((resolve, reject) =>{
            $data.chat.action(resp =>  resp ? resolve(resp) : reject(resp));
        });

        return  promise;
    }
});