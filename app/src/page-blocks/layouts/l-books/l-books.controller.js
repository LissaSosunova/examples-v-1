app.controller("l-books", function ($scope, $flowDataBooks,  $state) {
    $scope.books = {
        books: []
    };
    function init() {
        $scope.getBooks = function () {
            $flowDataBooks.getData()
                .then(response => {
                        $scope.books = response.books;
                    },
                    error => $scope.errorMessage = error);
        } ;
        $scope.getBooks();
    }
    init();

    $scope.addFav = function (item) {
        $scope.favItem = {};
        $scope.favItem = item;
        let key = $scope.favItem.id;
        let descr = {
                    name: $scope.favItem.name,
                    author: $scope.favItem.author,
                    section: $scope.favItem.section
        };
        localStorage.setItem(key, JSON.stringify(descr));
        console.log(key, JSON.stringify(descr));

    };
    $scope.showDescr = function (id, pict) {
        let description = document.getElementById(id);
        let picture = document.getElementById(pict);
        description.classList.toggle('non-vis');
        picture.classList.toggle('non-vis');
    }
});