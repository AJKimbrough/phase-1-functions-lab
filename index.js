// Code your solution in this file!

function distanceFromHqInBlocks(n) {
    if(n > 42){
        n = n - 42
    }
    else if(n < 42) {
        n = 42 - n
    }
    return  n 
}

function distanceFromHqInFeet(n) {
   let distance = distanceFromHqInBlocks(n) * 264
    return distance

}

function distanceTravelledInFeet(s,e) {
let distance = (e - s) * 264
    if(distance < 0) {
        distance = distance * -1
    }
    return distance
}

function calculatesFarePrice(s,e) {
    let distance = distanceTravelledInFeet(s,e) 
    let price
    if(distance <= 400) {
        price = 0
    } 
    else if(distance > 400 && distance <= 2000) {
        price = (distance - 400) * 0.02
    } 
    else if(distance > 2000 && distance <= 2500) {
        price = 25
    }
    else {
        price = "cannot travel that far"
    }
    return price
}

console.log(distanceFromHqInBlocks(16))
console.log(distanceFromHqInFeet(16))