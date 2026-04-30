import { students, initialComments } from './exports/initial-data.js';

addMdToPage(`## Betyg (CGPA)`);

let cgpaCount = {};

for (let s of students) {
  let key = s.cgpa || "Unknown";
  cgpaCount[key] = (cgpaCount[key] || 0) + 1;
}

let cChart = [['CGPA', 'Count']];

for (let key in cgpaCount) {
  cChart.push([Number(key), Number(cgpaCount[key])]);
}

drawGoogleChart({
  type: 'ColumnChart',
  data: cChart
});

let cgpas = students
  .map(s => Number(s.cgpa))
  .filter(x => !isNaN(x));

let avg = cgpas.reduce((a, b) => a + b, 0) / cgpas.length;
let min = Math.min(...cgpas);
let max = Math.max(...cgpas);


// FÖRKLARING
addMdToPage(`
Betyg (CGPA) varierar mellan studenter och ligger oftast mellan 5 och 10.

Vi ser att många studenter ligger runt mitten (cirka 6–8),
vilket tyder på en ganska normal fördelning.

### Statistik
- Medelvärde: ${avg.toFixed(2)}
- Lägsta värde: ${min}
- Högsta värde: ${max}

Trots detta visar analysen att höga eller låga betyg
inte verkar ha en stark koppling till depression.

Det betyder:
En student kan prestera bra i skolan men ändå må dåligt.

Slutsats:
Det är inte prestation som påverkar mest,
utan snarare stress, sömn och livsstil.
`);