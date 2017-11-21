import 'app/app/app.styles'
import templateUrl from 'app/app/app.template'

const controller = class FtAppController {

  constructor($log, $state, userService, appService) {
    'ngInject'
    this.log = $log
    this.state = $state
    this.service = userService
    this.appService = appService
    $log.log('ft-app is a go')
  }

  clickLogInExistingUser(){
    this.service.logInExistingUser(this.username)
    this.appService.switchUser(this.username)
  }

  clickLogOut(){
    this.service.logOut()
    this.appService.noUser()
  }

  clickCreateNewUser(){
    this.service.createNewUser(this.username)
    this.appService.newUser()
  }
}


export const ftApp = {
  controller,
  templateUrl,
  controllerAs: 'app'
}
