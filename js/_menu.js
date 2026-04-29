createMenu('Depression amongst Indian Students', [
  
   { name: 'Intro', script: 'intro.js' },

  { name: 'Grunddata & livsstil', sub: [
    { name: 'age och gender', script: 'age.js' },
    { name: 'lifestyle', script: 'lifestyles.js' },
  ]},
  
  { name: 'Stress & riskfaktorer', sub: [
   { name: 'academic och financial', script: 'stress.js' },
   { name: 'family och suicidal)', script: 'risk.js' },
  ]},

  { name: 'cgpa', script: 'performance.js' },
  { name: 'sammanfattning', script: 'conclusion.js' },
  { name: 'More SQL logic', script: 'initial-check-using-more-sql-logic.js' },
  { name: 'More JS logic', script: 'initial-check-using-more-js-logic.js' },
]);