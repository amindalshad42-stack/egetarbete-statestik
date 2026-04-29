import { students, initialComments } from './exports/initial-data.js';


// =======================
// Academic Pressure
// =======================

addMdToPage(`## Studietryck`);

let pressureResult = await dbQuery(`
  SELECT academicPressure, COUNT(*) as count
  FROM student_depression
  GROUP BY academicPressure
`);

let pChart = [['Pressure', 'Count']];

let pressureRows = Array.isArray(pressureResult)
  ? pressureResult
  : pressureResult.values;

for (let row of pressureRows) {
  let p = row.academicPressure ?? row[0];
  let c = row.count ?? row[1];

  pChart.push([Number(p), Number(c)]);
}

drawGoogleChart({
  type: 'ColumnChart',
  data: pChart
});

// FÖRKLARING
addMdToPage(`
Många studenter upplever högt studietryck.

Höga krav och press från studier kan leda till stress,
vilket är en viktig faktor bakom depression.
1 betyder att man är lite orolig, 3 betyder att man är sisådär och 5 betyder att man är väldigt oroliogt.
`);


// =======================
// Financial Stress
// =======================

addMdToPage(`## Ekonomisk stress`);

let financialResult = await dbQuery(`
  SELECT financialStress, COUNT(*) as count
  FROM student_depression
  GROUP BY financialStress
`);

let fChart = [['Stress', 'Count']];

let financialRows = Array.isArray(financialResult)
  ? financialResult
  : financialResult.values;

for (let row of financialRows) {
  let f = row.financialStress ?? row[0];
  let c = row.count ?? row[1];

  fChart.push([Number(f), Number(c)]);
}

drawGoogleChart({
  type: 'ColumnChart',
  data: fChart
});

// FÖRKLARING
addMdToPage(`
Ekonomisk stress är vanligt bland studenter.

Problem med pengar kan skapa oro och påverka den mentala hälsan negativt.
1 betyder att man är lite orolig, 3 betyder att man är sisådär och 5 betyder att man är väldigt oroliogt.
`);