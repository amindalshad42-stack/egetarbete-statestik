// använd databasen
dbQuery.use('student-depression');

addMdToPage(`# 📊 VG Analysis – Statistical Tests`);


// =======================
// 📈 1. KORRELATION
// =======================
addMdToPage(`## 📈 Samband: Studietimmar vs Depression`);

let data = await dbQuery(`
  SELECT workStudyHours, depression
  FROM student_depression
`);

let numericData = data
  .map(x => ({
    hours: Number(x.workStudyHours),
    dep: x.depression === 'Yes' ? 1 : 0
  }))
  .filter(x => !isNaN(x.hours));

let hours = numericData.map(x => x.hours);
let depression = numericData.map(x => x.dep);

// korrelation
let corr = s.sampleCorrelation(hours, depression);

addMdToPage(`
**Korrelationsvärde:** ${corr.toFixed(3)}

👉 Ett värde nära 1 = starkt samband  
👉 Ett värde nära 0 = svagt samband
`);


// =======================
// 📊 2. NORMALFÖRDELNING
// =======================
addMdToPage(`## 📊 Normalfördelning (CGPA)`);

let cgpas = (await dbQuery(`SELECT cgpa FROM student_depression`))
  .map(x => Number(x.cgpa))
  .filter(x => !isNaN(x));

// histogram data
let hist = [['CGPA', 'Count']];

let grouped = {};

for (let val of cgpas) {
  let rounded = Math.round(val);
  grouped[rounded] = (grouped[rounded] || 0) + 1;
}

for (let key in grouped) {
  hist.push([key, grouped[key]]);
}

drawGoogleChart({
  type: 'ColumnChart',
  data: hist,
});

addMdToPage(`
Om datan är normalfördelad ska den likna en "klockkurva".
`);


// =======================
// 🧪 3. NOLLHYPOTES
// =======================
addMdToPage(`## 🧪 Hypotesprövning`);

addMdToPage(`
**Nollhypotes (H0):**  
Det finns inget samband mellan studietid och depression.

**Alternativ hypotes (H1):**  
Det finns ett samband.
`);

// enkel tolkning
if (Math.abs(corr) > 0.1) {
  addMdToPage(`
❗ Vi förkastar nollhypotesen.  
Det finns ett samband mellan studietid och depression.
`);
} else {
  addMdToPage(`
✅ Vi kan inte förkasta nollhypotesen.  
Sambandet är svagt.
`);
}