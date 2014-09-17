myApp.factory('posts' , function($http , $q , helper){
    return {
        createNewPost: function(post){
            var defer = $q.defer();
            $http({
                url: helper.baseUrl()+'api/Articles/PostArticle',
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                data: post
            }).success(function(data, status, headers, config) {
                defer.resolve(data);
            }).
                error(function(data, status, headers, config) {
                    defer.reject(data);
                });

            return defer.promise;
        },
        editPost: function(articleId , post){
            var defer = $q.defer();
            $http({
                url: helper.baseUrl()+'api/Articles/PutArticle/'+articleId,
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                data: post
            }).success(function(data, status, headers, config) {
                defer.resolve(data);
            }).
                error(function(data, status, headers, config) {
                    defer.reject(data);
                });

            return defer.promise;
        },
        deletePost: function(articleId , post){
            var defer = $q.defer();
            $http({
                url: helper.baseUrl()+'api/Articles/DeleteArticle/'+articleId,
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                data: {password : post.password}
            }).success(function(data, status, headers, config) {
                defer.resolve(data);
            }).
                error(function(data, status, headers, config) {
                    defer.reject(data);
                });

            return defer.promise;
        }
    }
})