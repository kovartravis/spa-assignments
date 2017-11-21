export class AppService {

  constructor(){
    this.amount = 1
    this.total = 0
    this.multiplier = 1
    this.multiplierCost = 10
    this.auto = 0
    this.autoCost = 100
    this.autoColor = 'danger'
    this.multColor = 'danger'
    
    if(document.cookie){
      this.total = document.cookie.replace(/(?:(?:^|.*;\s*)total\s*\=\s*([^;]*).*$)|^.*$/, "$1") / 1
      this.amount = document.cookie.replace(/(?:(?:^|.*;\s*)amount\s*\=\s*([^;]*).*$)|^.*$/, "$1") / 1
      this.multiplier = document.cookie.replace(/(?:(?:^|.*;\s*)multiplier\s*\=\s*([^;]*).*$)|^.*$/, "$1") / 1
      this.multiplierCost = document.cookie.replace(/(?:(?:^|.*;\s*)multiplierCost\s*\=\s*([^;]*).*$)|^.*$/, "$1") / 1
      this.auto = document.cookie.replace(/(?:(?:^|.*;\s*)auto\s*\=\s*([^;]*).*$)|^.*$/, "$1") / 1
      this.autoCost = document.cookie.replace(/(?:(?:^|.*;\s*)autoCost\s*\=\s*([^;]*).*$)|^.*$/, "$1") / 1
      this.updateColor()
    }
    
  }

  round = (value, decimals) => {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals)
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
    document.cookie = "total=" + this.total
    document.cookie = "amount=" + this.amount
    document.cookie = "multiplier=" + this.multiplier
    document.cookie = "multiplierCost=" + this.multiplierCost
    document.cookie = "auto=" + this.auto
    document.cookie = "autoCost=" + this.autoCost
  }
}
