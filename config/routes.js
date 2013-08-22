
/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
var passportOptions = {
  failureFlash: 'Invalid email or password.',
  failureRedirect: '/login'
}


// controllers
var users = require('../app/controllers/user');
var home = require('../app/controllers/home');
var clubs = require('../app/controllers/club')

/**
 * Expose
 */

module.exports = function (app, passport) {

  //home route
  app.get('/', home.index)

  //clubs routes
  app.get('/clubs', clubs.clubs);

  // user routes
  app.get('/login', users.login)
  app.get('/logout', users.logout)

  app.get('/users/:userId', users.show)

  app.get('/auth/google',
    passport.authenticate('google', {
      successRedirect: '/',
      failureRedirect: '/login',
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
      ]
    }), users.signin);
  app.get('/auth/google/callback',
    passport.authenticate('google', {
      failureRedirect: '/login'
    }), users.authCallback)

  app.param('userId', users.user)
}
