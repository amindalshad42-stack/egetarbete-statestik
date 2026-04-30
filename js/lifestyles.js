import { students, initialComments } from './exports/initial-data.js';

addMdToPage(`## Sömn`);

let sleepCount = {};

for (let s of students) {
  let key = s.sleepDuration || "Unknown";
  sleepCount[key] = (sleepCount[key] || 0) + 1;
}

let sChart = [['Sleep', 'Count']];

for (let key in sleepCount) {
  sChart.push([String(key), Number(sleepCount[key])]);
}

drawGoogleChart({
  type: 'ColumnChart',
  data: sChart
});

// FÖRKLARING
addMdToPage(`
Många studenter sover relativt lite per natt.

Vi ser att vissa sömnnivåer är vanligare än andra,
vilket visar att många inte får tillräckligt med vila.

Sömn är en av de viktigaste faktorerna för psykisk hälsa.
För lite sömn kan leda till stress, sämre koncentration
och ökad risk för depression.
`);

addMdToPage(`## Studietimmar`);

let hoursCount = {};

for (let s of students) {
  let key = s.workStudyHours || "Unknown";
  hoursCount[key] = (hoursCount[key] || 0) + 1;
}

let hChart = [['Hours', 'Count']];

for (let key in hoursCount) {
  hChart.push([Number(key), Number(hoursCount[key])]);
}

drawGoogleChart({
  type: 'ColumnChart',
  data: hChart
});

// FÖRKLARING
addMdToPage(`
Många studenter studerar flera timmar varje dag.

Vi ser att vissa nivåer av studietid är vanligare,
vilket visar att många har hög arbetsbelastning.

Långa studietider kan leda till trötthet och stress,
vilket påverkar den mentala hälsan negativt över tid.
`);

addMdToPage(`## Kost`);

let dietCount = {};

for (let s of students) {
  let key = s.dietaryHabits || "Unknown";
  dietCount[key] = (dietCount[key] || 0) + 1;
}

let dChart = [['Diet', 'Count']];

for (let key in dietCount) {
  dChart.push([String(key), Number(dietCount[key])]);
}

drawGoogleChart({
  type: 'PieChart',
  data: dChart
});

// FÖRKLARING
addMdToPage(`
Studenters kostvanor varierar mellan olika grupper.

Vissa äter mer hälsosamt medan andra har sämre matvanor.

Kost påverkar både energi, koncentration och välmående.
En ohälsosam kost kan bidra till trötthet och sämre psykisk hälsa.
`);