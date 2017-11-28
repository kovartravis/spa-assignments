import templateUrl from 'app/users/users.template'

const controller = class FtUsers{

    constructor($log, userService){
        'ngInject'
        this.service = userService
        $log.log("users constructed")
    }
}

export const ftUsers = {
    controller,
    templateUrl,
    controllerAs: 'users',
}