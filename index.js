// code your solution here
// // code your solution here
function saturdayFun(message="roller-skate") {
    if (message) {
        return `This Saturday, I want to ${message}!`
    } else {
        return 'This Saturday, I want to roller-skate!'
    }
}

function mondayWork(message) {
    if (message) {
        return `This Monday, I will ${message}.`;
    } else {
        return 'This Monday, I will go to the office.';
    }
}

let wrapAdjective = function(check="*") {
    return function(task="special") {
        return `You are ${check}${task}${check}!`;
    }
}
// function saturdayFun(message='roller-skate') {
//     if (message) {
//         return `This Saturday, I want to ${message}!`
//     } else {
//      return 'This Saturday, I want to bathe my dog!'
//     }
//   }
//   saturdayFun(message);
//   //=> "This saturday , I want to haf Fun!!"
//   function mondayWork(message='go to the office') {
//     if (message) {
//         return `This Monday, I will ${message}.`
        
//     } else {
//       return 'This Monday, I will work from home.'  
//     }
//   }

//   let wrapAdjective = function(pick="*"){
// return function(task="special"){
//     return `You are ${pick}${task}${pick}!`

// }
//   }

// let wrapAdjective = function(check="*") {
//     return function(task="special") {
//         return `You are ${check}${task}${check}!`;
//     }
// }
