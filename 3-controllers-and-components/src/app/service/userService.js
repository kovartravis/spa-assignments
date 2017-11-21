export class UserService {

    constructor($log, $state, $location, $cookies){
        'ngInject'
        this.log = $log
        this.state = $state
        this.location = $location
        this.cookies = $cookies

        this.someoneLoggedIn = $cookies.get('loggedin')
        this.currentUser = $cookies.get('currentUser')
        this.users = $cookies.getObject('users')
        if(this.users === undefined){
            this.users = []
        }
    }

    get loggedIn(){
        return this.someoneLoggedIn
    }

    get userLoggedIn(){
        return this.currentUser
    }

    enteredLogin(){
        if(this.someoneLoggedIn){
            this.state.transitionTo('loggedin')
        }else{
            this.state.transitionTo('loggingin')
        }
    }

    logInExistingUser(username){
        if(this.users.includes(username)){
            this.someoneLoggedIn = true
            this.currentUser = this.users[this.users.indexOf(username)]
            this.cookies.put('loggedin', this.someoneLoggedIn)
            this.cookies.put('currentUser', this.currentUser)
            this.state.transitionTo('loggedin')
        }else{
            this.log.log("user does not exist")
        }
    }

    logOut(){
        this.someoneLoggedIn = false
        this.currentUser = undefined
        this.cookies.put('loggedin', false)
        this.cookies.put('currentUser', this.currentUser)
        this.state.transitionTo('loggingin')
    }

    createNewUser(username){
        this.users.push(username)
        this.cookies.putObject('users', this.users)
        this.logInExistingUser(username)
    }
}