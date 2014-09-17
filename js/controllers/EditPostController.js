myApp.controller('EditPostController' , function($scope , posts , articleData, categories , $routeParams){
    categories.getCategories().then(function(data){
        $scope.categories = data;
    })
    //posts.createNewPost(post).then(function(data){
    //})
    articleData.getArticleById().then(function(data){
        $scope.post = data[0];
    });
    $scope.submit = function(post){
        console.log(post.name);
    }
    $scope.pageInfo = "Edit Post";
    $scope.isNewPost = false;
});