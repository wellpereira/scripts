let infoGroup = [];
const elements = document.getElementsByClassName("flpadly space-right2");

for (let element of elements) {
  let percent = element.getElementsByClassName("strong");
  let description = element.getElementsByClassName("quiet");
  let fraction = element.getElementsByCLassName("fraction");
  
  infoGroup.push({
    percent: percent[0].innerText,
    description: description[0].innerText,
    fraction: fraction[O].innerText,
  });
}

let table = "| All Files | | | \n | ---- | ---- | ---- | \n";
for (let lineTable of infoGroup) {
  table += `| ${lineTable.percent} | ${lineTable.description} | ${lineTable.fraction} | \n`;
}

console.log(table)