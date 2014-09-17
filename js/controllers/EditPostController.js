myApp.controller('EditPostController' , function($scope , posts , articleData, categories , $routeParams){
    var postId = $routeParams.articleId;
    categories.getCategories().then(function(data){
        $scope.categories = data;
    })
    //posts.createNewPost(post).then(function(data){
    //})
    articleData.getArticleById(postId).then(function(data){
        console.log(data.category);
        $scope.post = data;
    });
    $scope.submit = function(post){
        posts.editPost($routeParams.articleId , post).then(function(data){
            alert("edited");
        })
    }
    $scope.delete = function(post){
        posts.deletePost($routeParams.articleId , post).then(function(data){
            alert("deleted");
        })
    }
    $scope.pageInfo = "Edit Post";
    $scope.isNewPost = false;
});