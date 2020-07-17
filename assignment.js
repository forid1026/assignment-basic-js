// feet to mile
function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}
var feet = 1000;
var result = feetToMile(feet);

if(0 <= feet){
    console.log("The converting value is : ", result.toFixed(6) + " " + "Mile");

}
else{
    console.log("Negative value cann't be converted.");
}

//Wood Caltulator

function woodCalculator(chair, table, bed){
    var chairCount = chair * 1 ;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalWood = chairCount + tableCount + bedCount;
    return totalWood;
}
var result = woodCalculator(12, 10, 1);
console.log("Total Wood Needed is : ", result + " Cubic Feet");

// Brick Calculator

function brickCalculator(floor){
    var sumFirstPortion = 0, sumSecondPortion = 0, sumThirdPortion = 0;
    for(var i = 1; i <= floor; i++){
        if(i <= 10){
            var firstPortion = 15 * 1000;
            sumFirstPortion = sumFirstPortion + firstPortion;
            
        }
        if(i >= 11 && i <= 20){
            var secondtPortion = 12 * 1000;
            sumSecondPortion = sumSecondPortion + secondtPortion;
            

        }
        if(i >= 21){
            var thirdPortion = 10 * 1000;
            sumThirdPortion = sumThirdPortion + thirdPortion;
        }
    }
    var total = sumFirstPortion + sumSecondPortion + sumThirdPortion;
    return total;
    
}
var totalBrick = brickCalculator(30);
console.log("Total Brick needed : ", totalBrick);


// Tiny Friends 

function tinyFriend(friends){
    var min = friends[0].length;
    var shortenName = friends[0];
    for (var i = 0; i < friends.length; i++) {
        if (min > friends[i].length) {
            min = friends[i].length;
        }
    }
    for (var j = 0; j < friends.length; j++) {
        if (friends[j].length === min) {
            shortenName = friends[j];
        }
    }
    return shortenName;

}
const friends = ['Udhas', 'Shaba', 'Limu', 'Forid', 'Niloy', 'Nilima', 'Sak', 'Mahbub'];
var result = tinyFriend(friends);
console.log("The Shorten Element is : ", result);

