'use strict';

const passport = require('passport');
const login = require('connect-ensure-login');

module.exports.index = (request, response) => response.send('OAuth 2.0 Server');

module.exports.loginForm = (request, response) => {
  console.log('request----',request.session.returnTo)
  response.render('login')
}

module.exports.login = passport.authenticate('local', { successReturnToOrRedirect: '/', failureRedirect: '/login' });

module.exports.logout = (request, response) => {
  request.logout();
  response.redirect('/');
};

module.exports.account = [
  login.ensureLoggedIn(),
  (request, response) => response.render('account', { user: request.user }),
];
