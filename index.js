let increasebtn = document.getElementById("increasebtn");
let numberofpeople = document.getElementById("numberofpeople");
let billtotal = document.getElementById("bill-total");
let tippercentage = document.getElementById("tip-percentage");
let totalbill = document.getElementById("output");
let decreasebtncreasebtn = document.getElementById("decreasebtn");
tippercentage.value = 0.0;
function calculatebill() {
  let bill = parseFloat(billtotal.value) || 0;
  let tip = (bill * parseFloat(tippercentage.value)) / 100 || 0;
  let people = parseInt(numberofpeople.textContent) || 1;
  let total = (bill + tip) / people;
  totalbill.textContent = total.toLocaleString("en-US");
}
increasebtn.onclick = () => {
  let people = parseInt(numberofpeople.textContent);
  numberofpeople.textContent = people + 1;
  calculatebill();
};
decreasebtn.onclick = () => {
  let people = parseInt(numberofpeople.textContent);
  if (people > 1) numberofpeople.textContent = people - 1;
  calculatebill();
};
billtotal.oninput = () => {
  calculatebill();
  console.log(billtotal.value, totalbill.value, tippercentage.value);
};
tippercentage.oninput = calculatebill;
