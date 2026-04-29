import { students, initialComments } from './exports/initial-data.js';


// =======================
// Familjehistorik
// =======================

addMdToPage(`## Familjehistorik`);

let familyCount = {};

for (let s of students) {
  let key = s.family_history || s.familyHistory || "Unknown";
  familyCount[key] = (familyCount[key] || 0) + 1;
}

let famChart = [['Family History', 'Count']];

for (let key in familyCount) {
  famChart.push([String(key), Number(familyCount[key])]);
}

drawGoogleChart({
  type: 'PieChart',
  data: famChart
});

// FÖRKLARING
addMdToPage(`
En del studenter har en familjehistorik av psykisk ohälsa.

Detta kan öka risken för depression eftersom både arv och miljö påverkar.
`);


// =======================
// Suicidala tankar
// =======================

addMdToPage(`## Suicidala tankar`);

let suicideCount = {};

for (let s of students) {
  let key = s.suicidal_thoughts || s.suicidalThoughts || "Unknown";
  suicideCount[key] = (suicideCount[key] || 0) + 1;
}

let sChart = [['Thoughts', 'Count']];

for (let key in suicideCount) {
  sChart.push([String(key), Number(suicideCount[key])]);
}

drawGoogleChart({
  type: 'PieChart',
  data: sChart
});

// FÖRKLARING
addMdToPage(`
Vissa studenter rapporterar att de haft suicidala tankar.

Det visar att psykisk ohälsa är ett allvarligt problem i datasetet.
`);