import playingtemplateUrl from 'app/app/app.playingtemplate'
import logintemplateUrl from 'app/app/app.logintemplate'
import logtemplateUrl from 'app/app/app.logtemplate'
import loggedintemplateUrl from 'app/app/app.loggedintemplate'
import newusertemplateUrl from 'app/app/app.newusertemplate'
import userslisttemplateUrl from 'app/users/userslist.template'
import userdetailstemplateUrl from 'app/users/userdetails.template'

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

export const userslist = {
    name: 'userslist',
    url: '/users',
    templateUrl: userslisttemplateUrl
}

export const userdetails = {
    name: 'userdetails',
    url: '/users/{name}',
    component: 'ftUserDetails',
    resolve: {
        selected: function(userService, $transition$, $log){
            'ngInject'
            return($transition$.params().name)        
        }
    }
}