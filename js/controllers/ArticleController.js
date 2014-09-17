myApp.controller('ArticleController' , function($scope , articleData , $routeParams){
    articleData.getArticleById($routeParams.articleId).then(function(data){
        data = data[0];
        $scope.articleId = data.articleId;
        $scope.articleHead = data.articleHead;
        $scope.articleAuthor = data.articleAuthor;
        $scope.articleText = data.articleText;
        $scope.date = data.date;
        $scope.category = data.category;
        $scope.comments = data.comments;
    })
    $scope.show = false;
    $scope.showCommentFrom = function(){
        $scope.show = true;
    }
})