let serial = 0;
// card-1
document.getElementById("triangle").addEventListener("click", function () {
  serial++;
  const inputB = getInputValue("traingle-b");
  const inputH = getInputValue("traingle-h");
  const traingleTitle = getHtmlInnerText("traingle-title");

  const sum = 0.5 * inputB * inputH;
  const tableContainer = document.getElementById("table-container");
  const tableRow = document.createElement("tr");
  tableRow.innerHTML = `
    <td>${serial}</td>
    <td>${traingleTitle}</td>
    <td>${sum}cm<sup>2</sup></td>
    <td><button class="btn bg-lime-400">convert to m<sup>2</sup></button></td>
  
  `;
  tableContainer.appendChild(tableRow);
});
// card-2
document.getElementById("rectangle").addEventListener("click", function () {
  serial++;
  const inputW = getInputValue("rectangle-w");
  const inputI = getInputValue("rectangle-i");
  const rectangleTitle = getHtmlInnerText("rectangle-title");

  const sum = inputW * inputI;

  const tableContainer = document.getElementById("table-container");
  const tableRow = document.createElement("tr");
  tableRow.innerHTML = `
    <td>${serial}</td>
    <td>${rectangleTitle}</td>
    <td>${sum}cm<sup>2</sup></td>
    <td><button class="btn bg-lime-400">convert to m<sup>2</sup></button></td>
  `;
  tableContainer.appendChild(tableRow);
});
// card-3
document.getElementById("parallelogram").addEventListener("click", function () {
  serial++;
  const parallelogramInputB = getHtmlInnerText("parallelogram-b");
  const parallelogramInputH = getHtmlInnerText("parallelogram-h");
  const parallelogramTitle = getHtmlInnerText("parallelogram-title");
  const sum = parallelogramInputB * parallelogramInputH;

  const tableContainer = document.getElementById("table-container");
  const tableRow = document.createElement("tr");
  tableRow.innerHTML = `
  <td>${serial}</td>
  <td>${parallelogramTitle}</td>
  <td>${sum}cm<sup>2</sup></td>
      <td><button class="btn bg-lime-400">convert to m<sup>2</sup></button></td>`;
  tableContainer.appendChild(tableRow);
});
// card-4

document.getElementById("rhombus").addEventListener("click", function () {
  serial++;
  const rhombusInputd1 = getHtmlInnerText("rhombus-d1");
  const rhombusInputd2 = getHtmlInnerText("rhombus-d2");
  const rhombusTitile = getHtmlInnerText("rhombus-title");

  const sum = 0.5 * rhombusInputd1 * rhombusInputd2;
  const tableContainer = document.getElementById("table-container");
  const tableRow = document.createElement("tr");
  tableRow.innerHTML = `
  <td>${serial}</td>
  <td>${rhombusTitile}</td>
  <td>${sum}cm<sup>2</sup></td>
      <td><button class="btn bg-lime-400">convert to m<sup>2</sup></button></td>`;
  tableContainer.appendChild(tableRow);
});
// card-5
document.getElementById("pentagon").addEventListener("click", function () {
  serial++;
  const pentagonInputP = getHtmlInnerText("pentagon-p");
  const pentagonInputB = getHtmlInnerText("pentagon-b");
  const pentagonTitle = getHtmlInnerText("pentagon-title");
  const sum = 0.5 * pentagonInputP * pentagonInputB;

  const tableContainer = document.getElementById("table-container");
  const tableRow = document.createElement("tr");
  tableRow.innerHTML = `
  <td>${serial}</td>
  <td>${pentagonTitle}</td>
  <td>${sum}cm<sup>2</sup></td>
  <td><button class="btn bg-lime-400">convert to m<sup>2</sup></button></td>`;
  tableContainer.appendChild(tableRow);
});
// car-6
document.getElementById('ellipse').addEventListener('click', function(){
  serial++;
  const ellipseInputA = getHtmlInnerText('ellipse-a');
  const ellipseInputB = getHtmlInnerText('ellipse-b');
  const ellipseTitle = getHtmlInnerText('ellipse-title');
  const sum =  3.14159 * ellipseInputA * ellipseInputB;


  const tableContainer = document.getElementById("table-container");
  const tableRow = document.createElement("tr");
  tableRow.innerHTML = `
  <td>${serial}</td>
  <td>${ellipseTitle}</td>
  <td>${sum}cm<sup>2</sup></td>
  <td><button class="btn bg-lime-400">convert to m<sup>2</sup></button></td>`;
  tableContainer.appendChild(tableRow);
})

function getInputValue(id) {
  const value = Number(document.getElementById(id).value);
  return value;
}

function getHtmlInnerText(id) {
  const innerText = document.getElementById(id).innerText;
  return innerText;
}
