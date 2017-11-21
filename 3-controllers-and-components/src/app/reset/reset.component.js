import 'app/reset/reset.styles.less'
import templateUrl from 'app/reset/reset.template'

const controller = class FtReset{

    constructor($log, appService){
        'ngInject'
        this.service = appService
        $log.log("reset constructed")
    }

    click(){
        this.service.reset()
    }

}

export const ftReset = {
    controller, 
    templateUrl, 
    controllerAs: 'reset'
}