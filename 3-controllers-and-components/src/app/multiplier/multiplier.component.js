import 'app/multiplier/multiplier.styles'
import templateUrl from 'app/multiplier/multiplier.template'

const controller = class FtMultiplierController{

    constructor ($log, appService) {
        'ngInject'
        this.service = appService
        this.log = $log
        this.color = this.service.multColor
        $log.log("multiplier contstructed")
    }

    get multiplier(){
        this.color = this.service.multColor
        return this.service.multiplier
    }

    get multiplierCost(){
        return this.service.multiplierCost
    }

    click(){
        this.service.nextMultiplier()
    }
}

export const ftMultiplier = {
    controller, 
    templateUrl, 
    controllerAs: 'mult'
}