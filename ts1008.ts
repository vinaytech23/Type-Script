// let dept;
module.exports.dept = function (x){
    for(let i of arguments)
 console.log("I am in old file"+"\t"+x+"\t"+i);
 console.log(arguments);
 console.log(typeof(arguments));
}

module.exports.balance = 5000;

// dept('vinay',1,3,1,2);

(function(){
console.log("\n\t---I am from IIFE---");
})();