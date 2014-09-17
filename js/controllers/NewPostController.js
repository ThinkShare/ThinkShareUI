myApp.controller('NewPostController' , function($scope , posts , categories , $routeParams){
    categories.getCategories().then(function(data){
        $scope.categories = data;
    })
    //posts.createNewPost(post).then(function(data){
    //})
    $scope.submit = function(post){
        console.log(post.name);
    }
});