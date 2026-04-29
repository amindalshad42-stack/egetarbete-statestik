import { students, initialComments } from './exports/initial-data.js';


// =======================
// CGPA
// =======================

addMdToPage(`## Betyg (CGPA)`);

let cgpaResult = await dbQuery(`
  SELECT cgpa, COUNT(*) as count
  FROM student_depression
  GROUP BY cgpa
  ORDER BY cgpa
`);

let cChart = [['CGPA', 'Count']];

let cgpaRows = Array.isArray(cgpaResult)
  ? cgpaResult
  : cgpaResult.values;

for (let row of cgpaRows) {
  let c = row.cgpa ?? row[0];
  let count = row.count ?? row[1];

  cChart.push([Number(c), Number(count)]);
}

drawGoogleChart({
  type: 'ColumnChart',
  data: cChart
});

// FÖRKLARING
addMdToPage(`
Betyg (CGPA) varierar mellan studenter och ligger oftast mellan 5 och 10.

Vi ser att många studenter ligger runt mitten (cirka 6–8),
vilket tyder på en ganska normal fördelning.

Trots detta visar analysen att höga eller låga betyg
inte verkar ha en stark koppling till depression.

Det tyder på att:
det är inte prestation i sig som påverkar mest,
utan snarare faktorer som stress, sömn och livsstil.

Detta är viktigt eftersom det visar att även studenter
med bra betyg kan må dåligt.
`);