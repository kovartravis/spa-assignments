import { playing, login, loggingin, loggedin, newuser, userslist, userdetails } from 'app/app.state'


export function config($logProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
  'ngInject'
  $locationProvider.html5Mode(true)
  $urlRouterProvider.otherwise('/login')
  $stateProvider.state(login).state(loggingin).state(loggedin)
  $stateProvider.state(playing)
  $stateProvider.state(newuser)
  $stateProvider.state(userslist)
  $stateProvider.state(userdetails)
  $logProvider.debugEnabled(true)
}
