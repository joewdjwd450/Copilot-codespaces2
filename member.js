function skillsMember() {
  return {
    restrict: 'E',
    scope: {
      member: '='
    },
    templateUrl: 'templates/member.html'
  };
}
function skillsMemberController($scope) {
  $scope.member = $scope.member || {};
}
method = skillsMember;
  