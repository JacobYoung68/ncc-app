﻿angular.module("nccAuthentication").controller("authenticationController", function ($scope, $http) {

    $scope.APIUrl = "http://webteach_net.hallam.shu.ac.uk/acesjas/api/login"

    $scope.name, $scope.role, $scope.authenticated , $scope.apiErrorMessage, $scope.loginErrorMessage

    $scope.login = function () {

        let authDetails = {
            username: $scope.username,
            password: $scope.password,
        }

        $http.post($scope.APIUrl, authDetails)
            .success(function (res) {
                console.log(res)
                let { authenticated, role } = res
                $scope.authenticated = authenticated
                if ($scope.authenticated == false) {
                    $scope.loginErrorMessage = true
                } else if ($scope.authenticated == true) {
                    $scope.role = role
                    $scope.loginErrorMessage = false
                    console.log("Logged In!")
                }
            })
            .error(function (error) {
                console.log(error)
                $scope.apiErrorMessage = error
            })
    }
})