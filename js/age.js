addMdToPage(`## 👥 Kön`);

let gender = await dbQuery(`
  SELECT gender, COUNT(*) as count
  FROM student_depression
  GROUP BY gender
`);

let gChart = [['Gender', 'Count']];
for (let row of gender) {
  gChart.push([row.gender, row.count]);
}

drawGoogleChart({
  type: 'PieChart',
  data: gChart
});


addMdToPage(`## 🎂 Ålder`);

let age = await dbQuery(`
  SELECT age, COUNT(*) as count
  FROM student_depression
  GROUP BY age
  ORDER BY age
`);

let aChart = [['Age', 'Count']];
for (let row of age) {
  aChart.push([String(row.age), row.count]);
}

drawGoogleChart({
  type: 'ColumnChart',
  data: aChart
});