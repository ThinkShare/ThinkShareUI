var myApp = angular.module('myApp', ['ngResource' , 'ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "../partials/articles.html",
            controller: 'AllArticlesController'
        })
        .when('/byauthor/:authorName', {
            templateUrl: 'partials/articles.html',
            controller: 'ByAuthorController'
        })
        .when('/article/:articleId', {
            templateUrl: 'partials/article.html',
            controller: 'ArticleController'
        })
        .when('/category/:categoryId', {
            templateUrl: 'partials/articles.html',
            controller: 'CategoryController'
        })
        .when('/newpost' , {
            templateUrl: 'partials/createPost.html',
            controller: 'NewPostController'
        })
        .otherwise({ redirectTo: '/'});
});
