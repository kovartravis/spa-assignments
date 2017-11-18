let count = 0
let multiplier = 1
let multiplierCost = 10
let auto = 0
let autoCost = 100

let countOnClick = () => {
    count = round(count + multiplier, 2)
    $('.header').text('Total: ' + count)
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

let multiplierOnClick = () =>{
    if(count >= multiplierCost){
        count = round(count - multiplierCost, 2)
        multiplier = round(multiplier * 1.2, 2)
        multiplierCost = Math.floor(multiplierCost * 1.5)
        $('.costLabel').text('Cost: ' + multiplierCost)
        $('.countButton').text('+' + multiplier)
        $('.costButton').text('x' + multiplier)
        $('.header').text('Total: ' + count)
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
}

let autoOnClick = () =>{
    if(count >= autoCost){
        count = round(count - autoCost, 2)
        auto++
        autoCost += 100
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
}

let round = (value, decimals) => {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }

$(document).ready( () => {
    setInterval( () =>{
        count = round(count + auto, 2)
        $('.header').text('Total: ' + count)
    }, 1000)
})
