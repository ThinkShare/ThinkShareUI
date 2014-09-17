myApp.factory('categories' , function($http , $q){
    return {
        getCategories: function(){
            var defer = $q.defer();
            $http.get('../../data/CategoriesList').
                success(function(data, status, headers, config) {
                    defer.resolve(data);
                }).
                error(function(data, status, headers, config) {
                    defer.reject(data);
                });

            return defer.promise;
        }
    }
})