myApp.controller('ByAuthorController' , function($scope , gamejamInfo , $routeParams){
    gamejamInfo.getInfo($routeParams.authorName).then(function(data){
        $scope.gamejamInfo = data.gamejamInfo;
        $scope.projectName = data.myProjectInfo.gameName;
        $scope.projectInfo = data.myProjectInfo.gameInfo;
        $scope.projectImage = data.myProjectInfo.image;
        $scope.screenshots = data.myProjectInfo.screenshots;
    })
    $scope.authorName = $routeParams.authorName;
})