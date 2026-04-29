import { students, initialComments } from './exports/initial-data.js';

// =======================
// Kön
// =======================

addMdToPage(`## Kön`);

let genderResult = await dbQuery(`
  SELECT gender, COUNT(*) as count
  FROM student_depression
  GROUP BY gender
`);

let gChart = [['Gender', 'Count']];

let genderRows = Array.isArray(genderResult)
  ? genderResult
  : genderResult.values;

for (let row of genderRows) {
  let g = row.gender ?? row[0];
  let c = row.count ?? row[1];

  gChart.push([String(g), Number(c)]);
}

drawGoogleChart({
  type: 'PieChart',
  data: gChart
});

// FÖRKLARING
addMdToPage(`
I datasetet finns både män och kvinnor representerade.

Vi ser att det finns något fler män än kvinnor.
Detta kan påverka analysen eftersom resultatet kan spegla mäns situation mer.

Viktigt: kön kan påverka hur stress och depression upplevs.
`);


// =======================
// Ålder
// =======================

addMdToPage(`## Ålder`);

let ageResult = await dbQuery(`
  SELECT age, COUNT(*) as count
  FROM student_depression
  GROUP BY age
  ORDER BY age
`);

let aChart = [['Age', 'Count']];

let ageRows = Array.isArray(ageResult)
  ? ageResult
  : ageResult.values;

for (let row of ageRows) {
  let a = row.age ?? row[0];
  let c = row.count ?? row[1];

  aChart.push([Number(a), Number(c)]);
}

drawGoogleChart({
  type: 'ColumnChart',
  data: aChart
});

// FÖRKLARING
addMdToPage(`
De flesta studenter är mellan 18 och 30 år.

Det betyder att analysen främst handlar om unga vuxna,
en grupp som ofta upplever stress från studier, framtid och ekonomi.

Detta är viktigt eftersom depression ofta är vanlig i denna ålder.
`);