// Your code here)
function saturdayFun(activity="roller-skate" ){
  return (`This Saturday, I want to ${activity}!`);
};


function mondayWork(activity="go to the office"){
    return (`This Monday, I will ${activity}.`)
}

function wrapAdjective(highlight="*"){
 return function(adjective){
    return (`You are ${highlight}${adjective}${highlight}!`)
}   
}

const Calculator = {
    add: function addCalculator(y,x){
        return y + x 
    },
    subtract: function subtractCalculator(y,x){
        return y - x
    },

    multiply: function multiplyCal(y,x){
        return y * x
    },
    divide: function divideCal(y,x){
        return y / x 
    },
}

function actionApplyer(i,arr){
  arr.forEach(fn => {
      i = fn(i)
  });
  return i 
}
