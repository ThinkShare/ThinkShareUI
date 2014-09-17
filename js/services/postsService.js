myApp.factory('posts' , function($http , $q){
    return {
        createNewPost: function(post){
            var defer = $q.defer();
            $http({
                url: '/api/test',
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                data: {application: app, from: d1, to: d2}
            }).success(function(data, status, headers, config) {
                defer.resolve(data);
            }).
                error(function(data, status, headers, config) {
                    defer.reject(data);
                });

            return defer.promise;
        },
        editPost: function(post){
            var defer = $q.defer();
            $http({
                url: '/api/test',
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                data: {application: app, from: d1, to: d2}
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