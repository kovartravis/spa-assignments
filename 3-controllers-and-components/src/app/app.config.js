import { playing } from 'app/app.state'
import { login } from 'app/app.state'
import { loggingin } from 'app/app.state'
import { loggedin } from 'app/app.state'
import { newuser } from 'app/app.state'


export function config($logProvider, $stateProvider, $urlRouterProvider) {
  'ngInject'
  $urlRouterProvider.otherwise('/login')
  $stateProvider.state(login).state(loggingin).state(loggedin)
  $stateProvider.state(playing)
  $stateProvider.state(newuser)
  $logProvider.debugEnabled(true)
}
