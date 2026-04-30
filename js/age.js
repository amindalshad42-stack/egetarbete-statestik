import { students } from './exports/initial-data.js';

addMdToPage(`## Kön`);

let genderCount = {};

for (let s of students) {
  let key = s.gender || "Unknown";
  genderCount[key] = (genderCount[key] || 0) + 1;
}

let gChart = [['Gender', 'Count']];

for (let key in genderCount) {
  gChart.push([String(key), Number(genderCount[key])]);
}

drawGoogleChart({
  type: 'PieChart',
  data: gChart
});

addMdToPage(`
I datasetet finns både män och kvinnor representerade.

Vi ser att det finns något fler män än kvinnor.
Detta kan påverka analysen eftersom resultatet kan spegla mäns situation mer.

Kön kan också påverka hur stress och depression upplevs.
`);

addMdToPage(`## Ålder`);

let ageCount = {};

for (let s of students) {
  let key = s.age || "Unknown";
  ageCount[key] = (ageCount[key] || 0) + 1;
}

let aChart = [['Age', 'Count']];

for (let key in ageCount) {
  aChart.push([Number(key), Number(ageCount[key])]);
}

drawGoogleChart({
  type: 'ColumnChart',
  data: aChart
});

addMdToPage(`
De flesta studenter är mellan 18 och 30 år.

Det betyder att analysen främst handlar om unga vuxna,
en grupp som ofta upplever stress från studier och framtid.

Det är också en ålder där depression är relativt vanlig.
`);