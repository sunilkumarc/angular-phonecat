var phonecatApp = angular.module('phonecatApp', []);

function PhoneListCtrl($scope, $http) {
  $http.get('phones/phones.json').success(function(data) {
  	$scope.phones = data;
  });
}

// PhoneListCtrl.$inject = ['$scope', '$http'];

phonecatApp.controller('PhoneListCtrl', ['$scope', '$http', PhoneListCtrl]);

