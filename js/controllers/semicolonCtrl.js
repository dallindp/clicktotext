angular.module('click').controller('semicolonCtrl',function($scope, $location){
  $scope.isLoading = true;

  getSMSUrl()
  .then(function(value) {
    $scope.isLoading = false;
    if (value) {
      document.getElementById('link').setAttribute("href", value);
      $scope.url = value;
      location.href = $scope.url;
    }
    $scope.$apply();
  }, function(reason) {
    console.error('getSMSUrl',reason);
  });

  function getSMSUrl() {
    return new Promise(function(resolve, reject) {
      var ua = navigator.userAgent.toLowerCase();
      var url;

      url = "sms:1-408-555-1212;body=" + encodeURIComponent("HELLO WORLD");

      setTimeout(setCountDown3,300);
      setTimeout(setCountDown2,600);
      setTimeout(setCountDown1,900);
      setTimeout(function(){
        resolve(url);
      },1000);
    });
  }

  function setCountDown3() {
    $scope.countDown3 = {'color': 'black'}
    $scope.$apply();
  }

  function setCountDown2() {
    $scope.countDown2 = {'color': 'black'}
    $scope.$apply();
  }

  function setCountDown1() {
    $scope.countDown1 = {'color': 'black'}
    $scope.$apply();
  }

});
