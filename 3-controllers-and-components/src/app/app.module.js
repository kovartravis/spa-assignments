import { AppService } from 'app/service/app.service'
import { UserService } from 'app/service/userService'
import { ftApp } from 'app/app/app.component'
import { ftHeader } from 'app/header/header.component'
import { ftBody } from 'app/body/body.component'
import { ftMultiplier } from 'app/multiplier/multiplier.component'
import { ftAuto } from 'app/auto/auto.component'
import { ftReset } from 'app/reset/reset.component'
import { config } from 'app/app.config'

export default ng
  .module('ft.buttons', ['ui.router', 'ngCookies'])
  .service('appService', AppService)
  .service('userService', UserService)
  .component('ftApp', ftApp)
  .component('ftHeader', ftHeader)
  .component('ftBody', ftBody)
  .component('ftMultiplier', ftMultiplier)
  .component('ftAuto', ftAuto)
  .component('ftReset', ftReset)
  .config(config)
  .name
