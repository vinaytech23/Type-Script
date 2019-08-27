function displayAdd() {
    var sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log(sum);
}
displayAdd(12, 16, 18);
displayAdd(150, 122, 232);
