import playingtemplateUrl from 'app/app/app.playingtemplate'
import logintemplateUrl from 'app/app/app.logintemplate'
import logtemplateUrl from 'app/app/app.logtemplate'
import loggedintemplateUrl from 'app/app/app.loggedintemplate'
import newusertemplateUrl from 'app/app/app.newusertemplate'

export const playing = {
    name: 'playing',
    url: '/clicker',
    templateUrl: playingtemplateUrl
}

export const login = {
    name: 'login',
    url: '/login',
    templateUrl: logtemplateUrl,
    controllerAs: 'app',
    onEnter: function(userService, $timeout){
        'ngInject'
        $timeout(function(){
            userService.enteredLogin()
        })
    }
}

export const loggingin = {
    name: 'loggingin',
    url: '/existinguser',
    templateUrl: logintemplateUrl
}

export const loggedin = {
    name: 'loggedin',
    url: '/loggedin',
    templateUrl: loggedintemplateUrl
}

export const newuser = {
    name: 'newuser',
    url: '/newuser',
    templateUrl: newusertemplateUrl
}