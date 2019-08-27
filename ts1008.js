// let dept;
module.exports.dept = function (x) {
    for (var _i = 0, arguments_1 = arguments; _i < arguments_1.length; _i++) {
        var i = arguments_1[_i];
        console.log("I am in old file" + "\t" + x + "\t" + i);
    }
    console.log(arguments);
    console.log(typeof (arguments));
};
module.exports.balance = 5000;
// dept('vinay',1,3,1,2);
(function () {
    console.log("\n\t---I am from IIFE---");
})();
