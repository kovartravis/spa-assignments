import templateUrl from 'app/users/details.template'

const controller = class FtUserDetails{

    constructor($log, userService, appService){
        'ngInject'
        this.userService = userService
        this.appService = appService
        this.$onInit = () => {
            this.name = this.selected
            this.userData = appService.getUserData(this.name)
        }
    }
}

export const ftUserDetails = {
    controller,
    templateUrl,
    controllerAs: 'userdetails',
    bindings: {
        selected: '='
    }
}