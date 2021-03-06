'use strict';

var index = require('./controllers'),
    users = require('./controllers/users'),
    team = require('./controllers/team'),
    league = require('./controllers/league'),
    session = require('./controllers/session'),
    pga = require('./controllers/pga'),
    passport = require('passport');

var middleware = require('./middleware');

/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes
  
  app.post('/api/users', users.create);
  app.put('/api/users', users.changePassword);
  app.get('/api/users/me', users.me);
  app.get('/api/users/:id', users.show);
  app.param('userId', users.user);

  //app.get('/api/team', team.all);
  app.post('/api/team', middleware.auth, team.createTeam);
  app.get('/api/team/:teamId', team.showTeam);
  app.put('/api/team/:teamId', middleware.auth, team.updateTeam);
  app.del('/api/team/:teamId', middleware.auth, team.deleteTeam);
  app.param('teamId', team.getTeam);

  app.get('/api/league', league.allLeagues);
  app.post('/api/league', middleware.auth, league.createLeague);
  app.get('/api/league/:leagueId', league.showLeague);
  app.put('/api/league/join', middleware.auth, league.joinLeague);
  app.put('/api/league/leave', middleware.auth, league.leaveLeague);
  app.del('/api/league/:leagueId', middleware.auth, league.deleteLeague);
  app.param('leagueId', league.getLeague);

  app.get('/api/leaderboard', pga.leaderboard);

  app.get('/api/pga/setup',  middleware.auth, pga.tournamentSetup);
  app.get('/api/pga/:playerId',  middleware.auth, pga.getScorecard);


  app.post('/api/session', session.login);
  app.del('/api/session', session.logout);

  // All other routes to use Angular routing in app/scripts/app.js
  app.get('/partials/*', index.partials);
  app.get('/*', middleware.setUserCookie, index.index);
};