myApp.controller('MainPageController', function($scope , categories){
    categories.getCategories().then(function(data){
        $scope.categories = data;
    })
    $scope.authorName = "Team Lime";
    $scope.linkedInLink = "https://www.linkedin.com/pub/teodor-tunev/58/586/63a";
});