myApp.controller('NewPostController' , function($scope , posts , categories,hash , $routeParams){
    categories.getCategories().then(function(data){
        $scope.categories = data;
        $scope.post = { category : $scope.categories[0].id};
    })
    //posts.createNewPost(post).then(function(data){
    //})
    $scope.submit = function(post){
        posts.createNewPost(post).then(function(data){
            alert("added");
        });
    }
    $scope.pageInfo = "Create New Post";
    $scope.isNewPost = true;

});