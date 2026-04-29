import { students, initialComments } from './exports/initial-data.js';


// =======================
// Sömn
// =======================

addMdToPage(`## Sömn`);

let sleepResult = await dbQuery(`
  SELECT sleepDuration, COUNT(*) as count
  FROM student_depression
  GROUP BY sleepDuration
`);

let sChart = [['Sleep', 'Count']];

let sleepRows = Array.isArray(sleepResult)
  ? sleepResult
  : sleepResult.values;

for (let row of sleepRows) {
  let s = row.sleepDuration ?? row[0];
  let c = row.count ?? row[1];

  sChart.push([String(s), Number(c)]);
}

drawGoogleChart({
  type: 'ColumnChart',
  data: sChart
});

// FÖRKLARING
addMdToPage(`
Många studenter sover relativt lite per natt.

Sömn är en viktig faktor för mental hälsa,
och för lite sömn kan öka risken för stress och depression.
`);


// =======================
// ⏱Studietimmar
// =======================

addMdToPage(`##  Studietimmar`);

let hoursResult = await dbQuery(`
  SELECT workStudyHours, COUNT(*) as count
  FROM student_depression
  GROUP BY workStudyHours
`);

let hChart = [['Hours', 'Count']];

let hoursRows = Array.isArray(hoursResult)
  ? hoursResult
  : hoursResult.values;

for (let row of hoursRows) {
  let h = row.workStudyHours ?? row[0];
  let c = row.count ?? row[1];

  hChart.push([Number(h), Number(c)]);
}

drawGoogleChart({
  type: 'ColumnChart',
  data: hChart
});

// FÖRKLARING
addMdToPage(`
Många studenter studerar många timmar varje dag.

Långa studietider kan leda till stress och trötthet,
vilket i sin tur kan påverka den psykiska hälsan negativt.
`);


// =======================
// Kost
// =======================

addMdToPage(`## Kost`);

let dietResult = await dbQuery(`
  SELECT dietaryHabits, COUNT(*) as count
  FROM student_depression
  GROUP BY dietaryHabits
`);

let dChart = [['Diet', 'Count']];

let dietRows = Array.isArray(dietResult)
  ? dietResult
  : dietResult.values;

for (let row of dietRows) {
  let d = row.dietaryHabits ?? row[0];
  let c = row.count ?? row[1];

  dChart.push([String(d), Number(c)]);
}

drawGoogleChart({
  type: 'PieChart',
  data: dChart
});

// FÖRKLARING
addMdToPage(`
Kostvanor varierar mellan studenter.

Ohälsosam kost kan påverka energinivåer och koncentration,
vilket kan bidra till sämre mental hälsa.
`);