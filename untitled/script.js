/**
 * Created by NguyenQuangSang on 26/04/2016.
 */


var app = angular.module('myCV', ["xeditable"]);
app.controller('Controller', function($scope, $http) {
    $http.get('tsconfig.json').success(function(response)
    {
        $scope.myData=response;
    });
    $scope.AS=function()
    {
        var x = $scope.summary;
        if(x)
        {
            $scope.myData.summary.push({info: $scope.summary});
            $scope.summary ='';
           
        }
        else
        {
            window.alert('Bạn chưa nhập thông tin để thêm!!!');
        }
    };
    $scope.AEXP=function()
    {
        var x = $scope.exp;
        if(x)
        {
            $scope.myData.exp.push({info: $scope.exp});
            $scope.exp ='';

        }
        else
        {
            window.alert('Bạn chưa nhập thông tin để thêm!!!');
        }
    };
    $scope.APROJ=function()
    {
        var x = $scope.proj;
        if(x)
        {
            $scope.myData.proj.push({info: $scope.proj});
            $scope.proj ='';

        }
        else
        {
            window.alert('Bạn chưa nhập thông tin để thêm!!!');
        }
    };
    $scope.AEDU=function()
    {
        var x = $scope.edu;
        if(x)
        {
            $scope.myData.edu.push({info: $scope.edu});
            $scope.edu ='';

        }
        else
        {
            window.alert('Bạn chưa nhập thông tin để thêm!!!');
        }
    };



});
app.run(function (editableOptions) {
    editableOptions.theme='bs3';
});


