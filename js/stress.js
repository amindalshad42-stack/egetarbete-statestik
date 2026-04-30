import { students, initialComments } from './exports/initial-data.js';

addMdToPage(`## Studietryck`);

let pressureCount = {};

for (let s of students) {
  let key = s.academicPressure || "Unknown";
  pressureCount[key] = (pressureCount[key] || 0) + 1;
}

let pChart = [['Pressure', 'Count']];

for (let key in pressureCount) {
  pChart.push([Number(key), Number(pressureCount[key])]);
}

drawGoogleChart({
  type: 'ColumnChart',
  data: pChart
});

// FÖRKLARING
addMdToPage(`
Många studenter upplever olika nivåer av studietryck.

Vi ser att vissa nivåer (t.ex. 3–5) är vanligare,
vilket tyder på att många känner sig ganska eller mycket stressade.

Höga krav från studier kan leda till press och oro,
vilket är en viktig faktor bakom depression.

Skalan betyder:
1 = låg stress  
3 = medel  
5 = hög stress
`);

addMdToPage(`## Ekonomisk stress`);

let financialCount = {};

for (let s of students) {
  let key = s.financialStress || "Unknown";
  financialCount[key] = (financialCount[key] || 0) + 1;
}

let fChart = [['Stress', 'Count']];

for (let key in financialCount) {
  fChart.push([Number(key), Number(financialCount[key])]);
}

drawGoogleChart({
  type: 'ColumnChart',
  data: fChart
});

// FÖRKLARING
addMdToPage(`
Ekonomisk stress är vanligt bland studenter.

Vi ser att flera studenter ligger på högre nivåer av stress,
vilket visar att ekonomi är ett viktigt problem.

Problem med pengar kan skapa oro och påverka den mentala hälsan negativt.

Skalan betyder:
1 = låg stress  
3 = medel  
5 = hög stress
`);