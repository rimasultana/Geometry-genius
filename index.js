let serial = 0;
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

document.getElementById("parallelogram").addEventListener("click", function () {
  serial++;
  const parallelogramInputB = getInputValue("parallelogram-b");
  const parallelogramInputH = getInputValue("parallelogram-h");
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

document.getElementById("rhombus").addEventListener("click", function () {
  serial++;
  const rhombusInputd1 = getInputValue("rhombus-d1");
  const rhombusInputd2 = getInputValue("rhombus-d2");
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

function getInputValue(id) {
  const value = Number(document.getElementById(id).value);
  return value;
}

function getHtmlInnerText(id) {
  const innerText = document.getElementById(id).innerText;
  return innerText;
}
