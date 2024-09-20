let serial = 0;
document.getElementById("triangle").addEventListener("click", function () {
  serial++;
  const inputB = getInputValue("traingle-b");
  const inputH = getInputValue("traingle-h");
  const traingle = getHtmlInnerText("traingle-title");

  const sum = 0.5 * inputB * inputH;
  const tableCantainer = document.getElementById("table-container");
  const tableRow = document.createElement("tr");
  tableRow.innerHTML = `
    <td>${serial}</td>
    <td>${traingle}</td>
    <td>${sum}cm <sup>2</sup></td>
    <td><button class="btn bg-lime-400">convert to cm</button></td>
  
  `;
  tableCantainer.appendChild(tableRow);
});

function getInputValue(id) {
  const value = Number(document.getElementById(id).value);
  return value;
}

function getHtmlInnerText(id) {
  const innerText = document.getElementById(id).innerText;
  return innerText;
}

let input = document.getElementById("userInput");
input.value.text = "New Text";
console.log(input.value.text = "New Text");

document.getElementById("nonExistentButton").addEventListener("click", function() {
    alert("Clicked");
  });