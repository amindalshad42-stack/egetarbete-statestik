createMenu('Depression amongst Indian Students', [
  
   { name: 'Intro', script: 'intro.js' },

  { name: '1', sub: [
    { name: 'age and gender', script: 'age.js' },
    { name: 'lifestyle', script: 'lifestyles.js' },
  ]},
  
  
  { name: 'More SQL logic', script: 'initial-check-using-more-sql-logic.js' },
  { name: 'More JS logic', script: 'initial-check-using-more-js-logic.js' },
  { name: 'Depression Analysis', script: 'analysis.js' },
  { name: 'VG Analysis', script: 'vg-analysis.js' }
]);