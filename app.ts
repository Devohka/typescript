const input1 = document.querySelector(".inputnumber1")! as HTMLInputElement;
const input2 = document.querySelector(".inputnumber2")! as HTMLInputElement;
const button = document.querySelector("button")! as HTMLButtonElement;

console.log(input2);

const countText = (num1: string, num2: string, messeg: string): string => {
  return messeg + " " + num1 + num2;
  // console.log(messeg + " " + num); void
};

// console.log(input1Value, input2Value);

button?.addEventListener("click", () => {
  const input1Value = input1.value;
  const input2Value = input2.value;
  console.log(countText(input1Value, input2Value, "Повідомлення номер -"));
});
