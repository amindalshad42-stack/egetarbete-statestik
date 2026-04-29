dbQuery.use('student-depression');

// välj din databas
dbQuery.use('student-depression');

addMdToPage(`
# Student Depression Analysis

Vi analyserar data från ca 27 900 studenter i Indien
för att förstå vilka faktorer som påverkar depression.
`);


// =======================
// Sleep vs Depression
// =======================
addMdToPage(`## Sömn och depression`);

let sleepData = await dbQuery(`
  SELECT sleepDuration, depression, COUNT(*) as count
  FROM student_depression
  GROUP BY sleepDuration, depression
`);

let sleepChart = [['Sleep Duration', 'Count']];

for (let row of sleepData) {
  sleepChart.push([row.sleepDuration + " (" + row.depression + ")", row.count]);
}

drawGoogleChart({
  type: 'ColumnChart',
  data: sleepChart,
});

addMdToPage(`
Studenter som sover mindre verkar oftare rapportera depression.
`);


// =======================
// Academic Pressure
// =======================
addMdToPage(`## Academic Pressure`);

let pressureData = await dbQuery(`
  SELECT academicPressure, depression, COUNT(*) as count
  FROM student_depression
  GROUP BY academicPressure, depression
`);

let pressureChart = [['Pressure', 'Count']];

for (let row of pressureData) {
  pressureChart.push([row.academicPressure + " (" + row.depression + ")", row.count]);
}

drawGoogleChart({
  type: 'ColumnChart',
  data: pressureChart,
});

addMdToPage(`
Högre studietryck visar tydlig koppling till depression.
`);


// =======================
// CGPA
// =======================
addMdToPage(`## CGPA`);

let cgpaData = await dbQuery(`
  SELECT cgpa, depression, COUNT(*) as count
  FROM student_depression
  GROUP BY cgpa, depression
`);

let cgpaChart = [['CGPA', 'Count']];

for (let row of cgpaData) {
  cgpaChart.push([String(row.cgpa) + " (" + row.depression + ")", row.count]);
}

drawGoogleChart({
  type: 'ColumnChart',
  data: cgpaChart,
});

addMdToPage(`
Betyg verkar ha svagare påverkan än stress och sömn.
`);


// =======================
// Work Study Hours
// =======================
addMdToPage(`## Studietid per dag`);

let hoursData = await dbQuery(`
  SELECT workStudyHours, depression, COUNT(*) as count
  FROM student_depression
  GROUP BY workStudyHours, depression
`);

let hoursChart = [['Hours', 'Count']];

for (let row of hoursData) {
  hoursChart.push([String(row.workStudyHours) + " (" + row.depression + ")", row.count]);
}

drawGoogleChart({
  type: 'ColumnChart',
  data: hoursChart,
});

addMdToPage(`
Fler studietimmar per dag kan kopplas till ökad stress och depression.
`);


// =======================
// Financial Stress
// =======================
addMdToPage(`## Finansiell stress`);

let financialData = await dbQuery(`
  SELECT financialStress, depression, COUNT(*) as count
  FROM student_depression
  GROUP BY financialStress, depression
`);

let financialChart = [['Financial Stress', 'Count']];

for (let row of financialData) {
  financialChart.push([row.financialStress + " (" + row.depression + ")", row.count]);
}

drawGoogleChart({
  type: 'ColumnChart',
  data: financialChart,
});

addMdToPage(`
Ekonomisk stress är en av de starkaste faktorerna.
`);


// =======================
// Statistik
// =======================
addMdToPage(`## Statistik`);

let cgpas = (await dbQuery(`
  SELECT cgpa FROM student_depression
`))
  .map(x => Number(x.cgpa))
  .filter(x => !isNaN(x));

addMdToPage(`
- Medelvärde (CGPA): ${s.mean(cgpas).toFixed(2)}
- Median (CGPA): ${s.median(cgpas).toFixed(2)}
- Standardavvikelse: ${s.standardDeviation(cgpas).toFixed(2)}
`);


// =======================
// Slutsats
// =======================
addMdToPage(`
# Slutsats

De viktigaste faktorerna som påverkar depression:

- Sömn
- Studietryck
- Arbetsbelastning
- Ekonomisk stress

Betyg (CGPA) hade mindre påverkan.

Slutsats:
Stress och livsstil påverkar mer än prestation.
`);