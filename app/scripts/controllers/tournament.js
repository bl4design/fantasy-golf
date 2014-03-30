'use strict';

angular.module('fantasyGolfApp')
  .controller('TournamentCtrl', function ($scope, teamModel, pga, tournamentModel) {

    //1. Display Tournament info
    tournamentModel.tournamentInfo().then(function(data){
      $scope.tournament = data;
    });

    //2. Display Team Info
    if($scope.currentUser.teamId){
      teamModel.getTeam($scope.currentUser.teamId).then(function(data){
        $scope.team = data;
      });
    }

    //3.Display User Leagues
    $scope.userLeagues = $scope.currentUser.leagues;

  });
