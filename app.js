var input1 = document.querySelector(".inputnumber1");
var input2 = document.querySelector(".inputnumber2");
var button = document.querySelector("button");
console.log(input2);
var countText = function (num1, num2, messeg) {
    return messeg + " " + num1 + num2;
    // console.log(messeg + " " + num); void
};
// console.log(input1Value, input2Value);
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    var input1Value = input1.value;
    var input2Value = input2.value;
    console.log(countText(input1Value, input2Value, "Повідомлення номер -"));
});
