myApp.factory('articleData', function($http , $q){
    return{
        getAllArticles: function(){
            var defer = $q.defer();
            $http.get('../../data/AllArticleInfo').
                success(function(data, status, headers, config) {
                    defer.resolve(data);
                }).
                error(function(data, status, headers, config) {
                    defer.reject(data);
                });

            return defer.promise;
        },
        getArticleById: function (articleId) {
            var defer = $q.defer();
            $http.get('../../data/ArticleInfo').
                success(function(data, status, headers, config) {
                    defer.resolve(data);
                }).
                error(function(data, status, headers, config) {
                    defer.reject(data);
                });

            return defer.promise;
        },
        getArticleCategoryId: function (categoryId) {
            var defer = $q.defer();
            $http.get('../../data/AllArticleInfo').
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