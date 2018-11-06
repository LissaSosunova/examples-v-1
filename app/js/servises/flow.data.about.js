app.service('$flowDataAbout', function($data, $q){
    this.getData = function(){
        let promise = $q((resolve, reject) =>{
            $data.about.action(resp =>  resp ? resolve(resp) : reject(resp));
        });

        return  promise;
    }
});