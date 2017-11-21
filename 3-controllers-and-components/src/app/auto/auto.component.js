import 'app/auto/auto.styles.less'
import templateUrl from 'app/auto/auto.template'

const controller = class FtAutoController{

    constructor ($log, appService, $interval) {
        'ngInject'
        this.service = appService
        this.log = $log
        this.autoIntverval = $interval( () =>{
            this.service.increment(this.service.auto)
          }, 1000)
        
        $log.log("auto contstructed")
    }

    get auto(){
        return this.service.auto
    }

    get autoCost(){
        return this.service.autoCost
    }

    click(){
        this.service.nextAuto()
    }
}

export const ftAuto = {
    controller, 
    templateUrl, 
    controllerAs: 'auto'
}