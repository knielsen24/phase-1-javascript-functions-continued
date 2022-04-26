// code your solution here
saturdayFun("bathe my dog");

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}


const mondayWork = function (workLocation = "go to the office") {
    return `This Monday, I will ${workLocation}.`;
}

console.log(mondayWork());



/*

function wrapAdjective(result = "*") {
    const msg = "You are";
    return function(str = "a hard worker") {
        return `${msg} ${result}${str}${result}!`;
    }
}
*/

function wrapAdjective(result = "*", msg = "You are") { 
    const innerFunction = function (str = "a hard worker") {
        return `${msg} ${result}${str}${result}!`;
    }
    return innerFunction;
}

wrapAdjective();
console.log(wrapAdjective("||")("a dedicated programmer"));
