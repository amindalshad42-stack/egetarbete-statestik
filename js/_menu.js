createMenu('Depression amongst Indian Students', [
  
   { name: 'Intro', script: 'intro.js' },

  { name: '1', sub: [
    { name: 'age och gender', script: 'age.js' },
    { name: 'lifestyle', script: 'lifestyles.js' },
  ]},
  
  { name: '2', sub: [
   { name: 'academic och financial', script: 'stress.js' },
   { name: 'family och suicidal)', script: 'risk.js' },
  ]},

  { name: 'More SQL logic', script: 'initial-check-using-more-sql-logic.js' },
  { name: 'More JS logic', script: 'initial-check-using-more-js-logic.js' },
  { name: 'Depression Analysis', script: 'analysis.js' },
  { name: 'VG Analysis', script: 'vg-analysis.js' }
]);