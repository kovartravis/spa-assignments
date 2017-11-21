import 'app/body/body.styles'
import templateUrl from 'app/body/body.template'

const controller =
  class FtBodyController {
    constructor ($log, appService) {
      'ngInject'
      this.service = appService
      $log.log('ft-body is a go')
    }

    get amount () {
      return this.service.amount
    }

    click () {
      this.service.increment()
    }
  }

export const ftBody = {
  controller,
  templateUrl,
  controllerAs: 'body'
}
