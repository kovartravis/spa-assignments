export class AppService {

  constructor(userService, $cookies, $location){
    'ngInject'
    this.cookies = $cookies
    this.service = userService
    this.amount = 1
    this.total = 0
    this.multiplier = 1
    this.multiplierCost = 10
    this.auto = 0
    this.autoCost = 100
    this.autoColor = 'danger'
    this.multColor = 'danger'
    
    if(this.service.loggedIn){
      let mycookie = $cookies.getObject(this.service.currentUser)
      if(mycookie !== undefined){
        this.amount = mycookie.amount
        this.total = mycookie.total
        this.multiplier = mycookie.multiplier
        this.multiplierCost = mycookie.multiplierCost
        this.auto = mycookie.auto
        this.autoCost = mycookie.autoCost
        this.updateColor()
      }
    }
  }

  round = (value, decimals) => {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals)
  }

  newUser(){
    if(this.service.loggedIn){
      let mycookie = this.cookies.getObject(this.service.currentUser)
      if(mycookie !== undefined){
        this.amount = mycookie.amount
        this.total = mycookie.total
        this.multiplier = mycookie.multiplier
        this.multiplierCost = mycookie.multiplierCost
        this.auto = mycookie.auto
        this.autoCost = mycookie.autoCost
        this.updateColor()
      }
    }
  }

  noUser(){
    this.reset()
  }

  switchUser(){
    if(this.service.loggedIn){
      let mycookie = this.cookies.getObject(this.service.currentUser)
      if(mycookie !== undefined){
        this.amount = mycookie.amount
        this.total = mycookie.total
        this.multiplier = mycookie.multiplier
        this.multiplierCost = mycookie.multiplierCost
        this.auto = mycookie.auto
        this.autoCost = mycookie.autoCost
        this.updateColor()
      }
    }
  }

  increment(mult = 1) {
    this.total = this.round((this.amount * mult) + this.total, 2)
    this.updateColor()
    this.saveCookies()
  }

  nextMultiplier(){
    if(this.total >= this.multiplierCost){
        this.total = this.round(this.total - this.multiplierCost, 2)
        this.multiplier = this.round(this.multiplier * 1.2, 2)
        this.multiplierCost = Math.floor(this.multiplierCost * 1.5)
        this.amount = this.multiplier
    }
    this.updateColor()
    this.saveCookies()
  }

  nextAuto(){
    if(this.total >= this.autoCost){
      this.total = this.round(this.total - this.autoCost, 2)
      this.auto++
      this.autoCost += 100
    }
    this.updateColor()
    this.saveCookies()
  }

  getUserData(username){
    let cookie = this.cookies.getObject(username)
    return cookie
  }

  reset(){
    this.amount = 1
    this.total = 0
    this.multiplier = 1
    this.multiplierCost = 10
    this.auto = 0
    this.autoCost = 100
    this.autoColor = 'danger'
    this.multColor = 'danger'
    this.saveCookies()
  }

  updateColor(){
    if(this.total >= this.autoCost){
      this.autoColor = 'primary'
    }else{
      this.autoColor = 'danger'
    }
    if(this.total >= this.multiplierCost){
      this.multColor = 'primary'
    }else{
      this.multColor = 'danger'
    }
  }

  saveCookies(){
    this.cookies.putObject(this.service.currentUser, {
      total: this.total,
      amount: this.amount,
      multiplier: this.multiplier,
      multiplierCost: this.multiplierCost,
      auto: this.auto,
      autoCost: this.autoCost
    })
  }
}
