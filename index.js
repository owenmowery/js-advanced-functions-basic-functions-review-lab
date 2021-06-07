function saturdayFun(activity) {
    if (activity == undefined) {
        return "This Saturday, I want to roller-skate!"
    } else {
        return `This Saturday, I want to ${activity}!`
    }
};

function mondayWork(activity) {
    if (activity == undefined) {
        return "This Monday, I will go to the office.";
    } else {
        return `This Monday, I will ${activity}.`;
    }
};

function wrapAdjective(flair="*") {
    return function(adj="special", ) {
        return `You are ${flair}${adj}${flair}!`;
    }
};

const Calculator = {
    add: function(num1, num2) {
        return num1 + num2;
    },
    subtract: function(num1, num2) {
        return num1 - num2;
    },
    multiply: function(num1, num2) {
        return num1 * num2;
    },
    divide: function(num1, num2) {
        return num1 / num2;
    }
};

function actionApplyer(integer, arrOfFunc) {
    if (arrOfFunc.length === 0) {
        return integer;
    } else {
        for (const func of arrOfFunc) {
            integer = func(integer);
        }
        return integer;
    }
};
