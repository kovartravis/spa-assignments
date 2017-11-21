let count = 0
let multiplier = 1
let multiplierCost = 10
let auto = 0
let autoCost = 100

let countOnClick = () => {
    count = round(count + multiplier, 2)
    updateDisplay()
}

let multiplierOnClick = () =>{
    if(count >= multiplierCost){
        count = round(count - multiplierCost, 2)
        multiplier = round(multiplier * 1.2, 2)
        multiplierCost = Math.floor(multiplierCost * 1.5)
        updateDisplay()
    }
}

let autoOnClick = () =>{
    if(count >= autoCost){
        count = round(count - autoCost, 2)
        auto++
        autoCost += 100
        updateDisplay()
    }
}

let resetOnClick = () => {
    count = 0
    multiplier = 1
    multiplierCost = 10
    auto = 0
    autoCost = 100
    saveCookies()
    updateDisplay()
}

$(document).ready( () => {
    
    if(document.cookie){
        count = document.cookie.replace(/(?:(?:^|.*;\s*)count\s*\=\s*([^;]*).*$)|^.*$/, "$1") / 1
        multiplier = document.cookie.replace(/(?:(?:^|.*;\s*)multiplier\s*\=\s*([^;]*).*$)|^.*$/, "$1") / 1
        multiplierCost = document.cookie.replace(/(?:(?:^|.*;\s*)multiplierCost\s*\=\s*([^;]*).*$)|^.*$/, "$1") / 1
        auto = document.cookie.replace(/(?:(?:^|.*;\s*)auto\s*\=\s*([^;]*).*$)|^.*$/, "$1") / 1
        autoCost = document.cookie.replace(/(?:(?:^|.*;\s*)autoCost\s*\=\s*([^;]*).*$)|^.*$/, "$1") / 1
    }
    updateDisplay()

    setInterval( () =>{
        count = round(count + (auto*multiplier), 2)
        updateDisplay()
        saveCookies()
    }, 1000)
})

let round = (value, decimals) => {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

let updateDisplay = () => {
    $('.costLabel').text('Cost: ' + multiplierCost)
    $('.countButton').text('+' + multiplier)
    $('.costButton').text('x' + multiplier)
    $('.total').text('Total: ' + count)
    $('.autoLabel').text('Cost: ' + autoCost)
    $('.autoButton').text('+' + auto + ' per second')
    if(count >= multiplierCost){
        $('.costButton').css('background-color', 'white') 
    }else{
        $('.costButton').css('background-color', 'grey') 
    }
    if(count >= autoCost){
        $('.autoButton').css('background-color', 'white') 
    }else{
        $('.autoButton').css('background-color', 'grey') 
    }
}

let saveCookies = () => {
    document.cookie = "count=" + count
    document.cookie = "multiplier=" + multiplier
    document.cookie = "multiplierCost=" + multiplierCost
    document.cookie = "auto=" + auto
    document.cookie = "autoCost=" + autoCost
}
